'use client'

import { actionFunction } from '@/utils/types';
import React, { useEffect } from 'react'
import { useActionState } from "react";
import { toast } from "sonner"


const initaiState = {
    message: ''
}





const FormContainer = ({ action, children, className }: {action:actionFunction, children: React.ReactNode,className: string}) => {
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
