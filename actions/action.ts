'use server'

import { profileSchema, validateWithZod } from "@/utils/schemas"
import { currentUser } from '@clerk/nextjs/server'
import  db from '@/utils/db'
import { email } from "zod"
import { profile } from "console"


const getAuthUser = async()=>{
    //code 
    const user = await currentUser()
    console.log(user)
    if(!user){
        throw Error("You must logged")
    }
    return user
}


const renderError = (error:unknown):{message:string} =>{
// code body
return {
    message:error instanceof Error ?  error.message : "An Error"
}
}

// ຈຳລອງ ເສີມເວີ
export const createProfileAcction = async (previousState: any, formData: FormData) => {
    try {
        // const firstname = formData.get('firstname') as string ອິນພຸດເຂ້າທີ່ລະອັນ
       const user = await getAuthUser()
        const rawData = Object.fromEntries(formData)
        const validateField = validateWithZod(profileSchema, rawData)
        console.log("ສະບາຍດີ",validateField)
        await db.profile.create({
            data:{
                clerkId:user.id,
                email:user.emailAddresses[0].emailAddress,
                profileImage:user.imageUrl ?? '',
                ...validateField
            }
        })
        return { message: "Create profile Success" }
    }
    catch (error) {
        console.log(error)
        return renderError(error)
    }

}