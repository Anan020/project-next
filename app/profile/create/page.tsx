import React from 'react'

import FormInput from '@/components/form/FormInput'
import { SubmitButton } from '@/components/form/Buttons'
import FormContainer from '@/components/form/FormContainer'
import { createProfileAcction } from '@/actions/action'




const CreateProfile = () => {




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
                            name='lastname'
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
