import React from 'react'
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"


const TextAreaInput = ({ name,labelText,defaultValue}:{name:string,labelText?:string,defaultValue?:string}) => {
    
    return (
        <div className="grid w-full gap-3 mt-2">
            <Label htmlFor={name}>{labelText || name}</Label>
            <Textarea 
            placeholder="Type your message here." 
            id={name}
            name={name}
            defaultValue={defaultValue}
            rows={5}
            required
             />
        </div>
    )
}

export default TextAreaInput
