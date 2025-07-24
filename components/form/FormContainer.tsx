'use client'

import { actionFunction } from '@/utils/types';
import React, { useEffect } from 'react'
import { useActionState } from "react";
import { toast } from "sonner"


const initaiState = {
    message: ''
}





const FormContainer = ({ action, children,}: {action:actionFunction, children: React.ReactNode }) => {
    const [state, FromAction] = useActionState(action, initaiState)
    // console.log('State ja', state)


    useEffect(() => {
        if(state.message) {
           toast(state.message)
        
        }
    }, [state])


    return (
        <form action={FromAction}>
            {children}
        </form>
    )
}

export default FormContainer
