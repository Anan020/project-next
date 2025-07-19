import { z, ZodType } from 'zod'



// const profileSchema = z.string().min(2,{message:"ອັກຄະລະຫລາຍກວ່າສອງ"})

export const profileSchema  = z.object({
    firstname: z.string().min(2, { message: "ຊື່ ອັກຂະຣະຕ້ອງຫລາຍກວ່າສອງ" }),
    lastname: z.string().min(2, { message: "ນາມສະກຸນ ອັກຂະຣະຕ້ອງຫລາຍກວ່າສອງ" }),
    username: z.string().min(2, { message: "username ອັກຂະຣະຕ້ອງຫລາຍກວ່າສອງ" }),
})


export const validateWithZod = <T>(
    schema:ZodType <T>, 
    data:unknown)=> {
    const result = schema.safeParse(data)
    if (!result.success) {
        //code
        const errors = result.error?.issues.map((error) => error.message);
        throw new Error(errors.join(','))
    }
    return data
}