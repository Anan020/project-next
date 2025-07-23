export type actionFunction = (
    previousState :any,
    formData:FormData
) => Promise <{message:String}>


export type landmarkCardProps = {
    id:string;
    name:string;
    image:string;
    category:string;
    province:string;
    price:number;
    lat:number;
    lng:number;
    description:string
}