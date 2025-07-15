'use client'
import React from 'react'
import { SignOutButton ,SignedIn,SignedOut,SignInButton } from '@clerk/nextjs'

import { toast } from "sonner"

const SignOutlink = () => {


    const handleLogout = () => {
        toast("Logout Successful");
    }
    return (
        <SignOutButton>
            <button 
            className='full '
            onClick={handleLogout}>
                Sign Out
            </button>
        </SignOutButton>
    )
}

export default SignOutlink
