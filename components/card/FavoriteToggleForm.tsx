'use client'

import { ToggleFavoriteAction } from "@/actions/action"
import FormContainer from "../form/FormContainer"
import { usePathname } from "next/navigation"
import { CardSubmitButton } from "../form/Buttons"

const FavoriteToggleForm = ({
    favoriteId,
    landmarkId
}:{
    favoriteId:string | null ,
    landmarkId:string
}) => {

    const pathName = usePathname()
    // console.log("id",favoriteId)
    // console.log(pathName)

    const toggleAction = ToggleFavoriteAction.bind(null,{favoriteId,landmarkId,pathName})


    return (
        <FormContainer action={toggleAction} >
            <CardSubmitButton isFavorite={favoriteId ? true : false}/>
        </FormContainer>
    )
}
export default FavoriteToggleForm