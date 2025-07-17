'use server'

import { profileSchema, validateWithZod } from "@/utils/schemas"




// ຈຳລອງ ເສີມເວີ
export const createProfileAcction = async (previousState: any, formData: FormData) => {
    try {
        // const firstname = formData.get('firstname') as string ອິນພຸດເຂ້າທີ່ລະອັນ
        const rawData = Object.fromEntries(formData)
        const validateField = validateWithZod(profileSchema, rawData)
        console.log(validateField)
        return { message: "Create profile Success" }
    }
    catch (error) {
        console.log(error)
        return { message:error.message || "An error Server"}
    }

}