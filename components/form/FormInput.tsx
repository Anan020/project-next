import React from 'react'
import { Label } from "@/components/ui/label"
import { Input } from "@/components/ui/input"


type FormInputProps = {
    name: string;
    type: string;
    label: string;
    defaultValue?: string;
    placeholder?: string;
}

const FormInput = (props: FormInputProps) => {
    const { name, type, label, defaultValue, placeholder } = props
    return (
        <div>
            <Label htmlFor={'name'} className='py-2'>{label}</Label>
            <Input
                name={name}
                type={type}
                placeholder={placeholder}
                defaultValue={defaultValue}
            />
        </div>
    )
}

export default FormInput
