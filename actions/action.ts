'use server'

import { imageSchema, LandmarkSchema, profileSchema, validateWithZod } from "@/utils/schemas"
import { clerkClient, currentUser } from '@clerk/nextjs/server'
import db from '@/utils/db'
import { redirect } from "next/navigation"
import { uploadFile } from "@/utils/cloudinary"






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
        console.log("สะบายดี",ImagePath)

     
        //Step3 Insert to db
        await db.landmark.create({
            data: {
                ...validatedField,
                image:ImagePath,
                profileId:user.id
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

export const fetchLandmark = async(
    //search
)=>{
    //code body
    const landmarks = await db.landmark.findMany({
        orderBy:{
            createdAt:'desc'
        }
    })

    return landmarks
}