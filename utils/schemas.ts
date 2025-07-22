import { z, ZodType } from 'zod'
import { categories } from './categories'



// const profileSchema = z.string().min(2,{message:"ອັກຄະລະຫລາຍກວ່າສອງ"})

export const profileSchema  = z.object({
    firstName: z.string().min(2, { message: "ຊື່ ອັກຂະຣະຕ້ອງຫລາຍກວ່າສອງ" }),
    lastName: z.string().min(2, { message: "ນາມສະກຸນ ອັກຂະຣະຕ້ອງຫລາຍກວ່າສອງ" }),
    userName: z.string().min(2, { message: "username ອັກຂະຣະຕ້ອງຫລາຍກວ່າສອງ" }),
})

const validateImage =()=>{
    const maxFilesize =  1024 * 1024
    return z.instanceof(File)
    .refine((file)=>{
       return file.size <= maxFilesize
    },'File size must be less then 1MB ')
}

export const imageSchema = z.object({
    image:validateImage()
})


export const LandmarkSchema = z.object({
    name:z.string()
    .min(2,{message:"ຊື່ຕ້ອງຫລາຍກວ່າ 2 ອັກຂະລະ"})
    .max(30,{message:"ຊື່ຕ້ອງຫລາຍກວ່າ 30 ອັກຂະລະ"}),
    category:z.string(),
    description:z.string()
    .min(2,{message:"ລາຍລະອຽດຕ້ອງຫລາຍກວ່າ 2 ອັກຂະລະ"})
    .max(200,{message:"ລາຍລະອຽດຕ້ອງນ້ອຍກວ່າ 200 ອັກຂະລະ"}),
    price: z.coerce.number().int().min(0,{message:"ລາຄາຕ້ອງຫລາຍກວ່າ 0"}),
    province:z.string(),
    lat:z.coerce.number(),
    lng:z.coerce.number(),

})

export const validateWithZod = <T>(
    schema:ZodType <T>, 
    data:unknown) : T => {
    const result = schema.safeParse(data)
    if (!result.success) {
        //code
        const errors = result.error?.issues.map((error) => error.message);
        throw new Error(errors.join(','))
    }
    return result.data
}