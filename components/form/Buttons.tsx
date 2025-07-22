'use client'
import {  useFormStatus } from "react-dom"
import { Button } from "../ui/button"
import { RotateCw } from 'lucide-react';


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
            <RotateCw className="animate-spin"/> 
            <span>Please wait...</span>
            </>
            : text
        }
        
    </Button>
}