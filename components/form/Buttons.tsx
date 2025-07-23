'use client'
import { useFormStatus } from "react-dom"
import { Button } from "../ui/button"
import { Heart, RotateCw } from 'lucide-react';
import { SignInButton } from "@clerk/nextjs";


type btnSize = 'default' | 'lg' | 'sm'


type SubmitButtonPrpos = {
    className?: String,
    size?: btnSize,
    text?: String
}


export const SubmitButton = ({ className, size, text }: SubmitButtonPrpos) => {

    const { pending } = useFormStatus();

    return <Button className={`${className} capitalize`} size={size}>

        {
            pending
                ? <>
                    <RotateCw className="animate-spin" />
                    <span>Please wait...</span>
                </>
                : text
        }

    </Button>
}



export const SignInCardButton = () => {
    return (
        <SignInButton mode="modal">
            <Button
                size='icon'
                variant='outline'
            >
                <Heart />
            </Button>
        </SignInButton>
    )
}



export const CardSubmitButton = ({ isFavorite }: { isFavorite: boolean }) => {

    // console.log("is",isFavorite)
    const { pending } = useFormStatus()

    return (
        <Button type="submit" size="icon" variant="outline">
            {
                pending 
                ?  <RotateCw className="animate-spin"/>
                : isFavorite
                ? <Heart  fill="red"/>
                : <Heart/>
            }
           
        </Button>
    )

}