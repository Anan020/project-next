import React from 'react'

import FormInput from '@/components/form/FormInput'
import { SubmitButton } from '@/components/form/Buttons'
import FormContainer from '@/components/form/FormContainer'




const CreateProfile = () => {
    // ຈຳລອງ ເສີມເວີ
    const createProfileAcction = async ( previousState:any, formData: FormData) => {
        'use server'
        const firstname = formData.get('firstname') as String
        console.log('kljdoahsidoa', firstname)
        return { message:"Create profile Success"}
    }



    return (
        <section>
            <h1 className='text-2xl font-semibold mb-8 capitalize'>New User</h1>
            <div>
                <FormContainer action={createProfileAcction} className='border p-8 rounded-sm max-w-lg'>
                    <div className='grid md:grid-cols-2 gap-4 mt-4'>
                        <FormInput
                            name="firstname"
                            type="text"
                            label="First Name"
                            placeholder='First name'
                        />
                        <FormInput
                            name='lastName'
                            label='Lastname'
                            type='text'
                            placeholder='Last Name'
                        />
                        <FormInput
                            name='username'
                            label='User Name'
                            type='text'
                            placeholder='User Name'
                        />
                        <SubmitButton
                            text="Create Profile"
                            className=''
                            size='lg'
                        />
                    </div>
                </FormContainer>
            </div>
        </section>
    )
}

export default CreateProfile
