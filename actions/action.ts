'use server'

import { imageSchema, LandmarkSchema, profileSchema, validateWithZod } from "@/utils/schemas"
import { clerkClient, currentUser } from '@clerk/nextjs/server'
import db from '@/utils/db'
import { redirect } from "next/navigation"
import { uploadFile } from "@/utils/cloudinary"
import { revalidatePath } from "next/cache"
import { number } from "zod"






// ເອົາຂໍ້ມູນມາຈາກ clerk
const getAuthUser = async () => {
    //code 
    const user = await currentUser()
    // console.log(user)
    if (!user) {
        throw Error("You must logged")
    }
    if (!user.privateMetadata.hashProfile) {
        return redirect("/profile/create")
    }
    return user;
}


const renderError = (error: unknown): { message: string } => {
    // code body
    return {
        message: error instanceof Error ? error.message : "An Error"
    }
}


export const createProfileAcction = async (previousState: any, formData: FormData) => {
    try {
        // const firstname = formData.get('firstname') as string ອິນພຸດເຂ້າທີ່ລະອັນ
        const user = await currentUser()
        if (!user) throw new Error("Please login")
        const rawData = Object.fromEntries(formData.entries())
        const validateField = validateWithZod(profileSchema, rawData)
        console.log("ສະບາຍດີ", validateField)
        await db.profile.create({
            data: {
                clerkId: user.id,
                email: user.emailAddresses[0].emailAddress,
                profileImage: user.imageUrl ?? '',
                ...validateField
            }
        })
        const client = await clerkClient()
        await client.users.updateUserMetadata(user.id, {
            privateMetadata: {
                hashProfile: true
            }
        })
    }
    catch (error) {
        // console.log(error)
        return renderError(error)
    }
    redirect('/')
}


export const createLandmarkAction = async (previousState: any, formData: FormData): Promise<{ message: string }> => {
    try {
        // const firstname = formData.get('firstname') as string ອິນພຸດເຂ້າທີ່ລະອັນ
        const user = await getAuthUser()
        const rawData = Object.fromEntries(formData.entries())
        const file = formData.get('image') as File

        //Step 1 validate data
        const validatedFile = validateWithZod(imageSchema, { image: file })
        const validatedField = validateWithZod(LandmarkSchema, rawData)

        //Step2 Upload Image to Mysql
        const fulPath = await uploadFile(validatedFile.image)
        const data = await fulPath.json()
        const ImagePath = data.url
        console.log("สะบายดี", ImagePath)


        //Step3 Insert to db
        await db.landmark.create({
            data: {
                ...validatedField,
                image: ImagePath,
                profileId: user.id
            }
        })

        // return { message: "create Landmark Success" }
    }
    catch (error) {
        // console.log(error)
        return renderError(error)
    }
    redirect('/')
}

export const fetchLandmark = async (
    //search
    {search = ''}:{search?:string}
) => {
    //code body
    const landmarks = await db.landmark.findMany({
        where:{
            OR:[
                {name: {contains:search , }},
                {description: {contains:search , }},                    
            ]
        },
        orderBy: {
            createdAt: 'desc'
        }
    })

    return landmarks
};


export const fetchFavoriteId = async ({ landmarkId }: { landmarkId: string }) => {
    const user = await getAuthUser()
    const Favorite = await db.favorite.findFirst({
        where: {
            landmarkId: landmarkId,
            profileId: user.id
        },
        select: {
            id: true
        }
    })

    return Favorite?.id || null
};


export const ToggleFavoriteAction = async (previousState: {
    favoriteId: string | null,
    landmarkId: string,
    pathName: string,
}) => {
    const { favoriteId, landmarkId, pathName } = previousState
    try {
        //Delate
        const user = await getAuthUser()
        if (favoriteId) {
            await db.favorite.delete({
                where: {
                    id: favoriteId
                }
            })
        } else {
            //Create
            await db.favorite.create({
                data: {
                    landmarkId: landmarkId,
                    profileId: user.id,
                }
            })
        }
        revalidatePath(pathName)
        return {
            message: favoriteId
                ? "Removed favorite Success"
                : "Add favorite Success"
        }

    }
    catch (error) {
        return renderError(error)
    }
}


export const fetchFavorits = async()=>{

    const user = await getAuthUser()
    const favorites = await db.favorite.findMany({
        where:{
            profileId:user.id
        },
        select:{
            landmark:{
                select:{
                    id:true,
                    name:true,
                    description:true,
                    category:true,
                    lat:true,
                    lng:true,
                    province:true,
                    price:true,
                    image:true,

                }
            }
        }
    })

    return favorites.map((favorite)=>favorite.landmark)
}