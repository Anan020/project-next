import React from 'react'
import { AlignLeft } from 'lucide-react';

import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuItem,
    DropdownMenuLabel,
    DropdownMenuSeparator,
    DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import { Button } from '../ui/button';
import UserIcon from './UserIcon';
import Link from 'next/link';
import { links } from '@/utils/Link';
import SignOutlink from './SignOutlink';
import { SignedIn, SignedOut, SignInButton, SignUpButton } from '@clerk/nextjs'




const DropDownListMenu = () => {
    return (
        <div>
            <DropdownMenu>
                <DropdownMenuTrigger asChild>
                    <Button variant={'outline'}>
                        <AlignLeft />
                        <UserIcon />
                    </Button>
                </DropdownMenuTrigger>
                <DropdownMenuContent>
                    <DropdownMenuLabel>My Account</DropdownMenuLabel>
                    <DropdownMenuSeparator />
                    <SignedOut>
                        {/* Logout */}

                        <DropdownMenuItem>
                            <SignUpButton mode='modal'>
                                <button>
                                    Sign Up
                                </button>
                            </SignUpButton>
                        </DropdownMenuItem>

                        <DropdownMenuItem>
                            <SignInButton mode='modal'>
                                <button>
                                    Login
                                </button>
                            </SignInButton>
                        </DropdownMenuItem>

                    </SignedOut>

                    <SignedIn>
                        {/* SignedIn */}
                        {
                            links.map((item, index) => {
                                return (
                                    <DropdownMenuItem key={index}>
                                        <Link href={item.href}>{item.label}</Link>
                                    </DropdownMenuItem>)
                            })
                        }
                    </SignedIn>

                    <SignOutlink />
                </DropdownMenuContent>
            </DropdownMenu>
        </div>
    )
}

export default DropDownListMenu
