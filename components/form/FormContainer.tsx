'use client'

import React, { useEffect } from 'react'
import { useActionState } from "react";
import { toast } from "sonner"


const initaiState = {
    message: ''
}

interface FormContainerProps {
    children: React.ReactNode;
    className: string;
    action: any
}

const FormContainer = ({ action, children, className }: FormContainerProps) => {
    const [state, FromAction] = useActionState(action, initaiState)
    console.log('State ja', state)


    useEffect(() => {
        if(state.message) {
           toast(state.message)
        
        }
    }, [state])


    return (
        <form action={FromAction} className={className}>
            {children}
        </form>
    )
}

export default FormContainer
