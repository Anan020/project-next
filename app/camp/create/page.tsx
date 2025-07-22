import React from 'react'
import FormInput from '@/components/form/FormInput'
import { SubmitButton } from '@/components/form/Buttons'
import FormContainer from '@/components/form/FormContainer'
import { createLandmarkAction } from '@/actions/action'
import CategoryFormInput from '@/components/form/CategoryFormInput'
import TextAreaInput from '@/components/form/TextAreaInput'
import ProvinceInput from '@/components/form/ProvinceInput'
import MapLandmark from '@/components/map/Maplandmarks'
import ImageInput from '@/components/form/ImageInput'









const CreateProfile = async () => {

    return (
        <section>
            <h1 className='text-2xl font-semibold mb-8 capitalize'>Create Landark</h1>
            <div className='border p-8 rounded-sm '>
                <FormContainer action={createLandmarkAction} >
                    <div className="grid md:grid-cols-2 gap-4 mt-4">
                        <FormInput
                            name="name"
                            type="text"
                            label="Landmark Name"
                            placeholder="Landmark name"
                        />

                        {/* Category Input */}
                        <CategoryFormInput />
                    </div>
                    <TextAreaInput
                        name="description"
                    />
                    <div className='grid sm:grid-cols-2 gap-4 mt-4'>
                        <FormInput
                            name="price"
                            type="number"
                            label="price"
                            placeholder="price"
                        />
                        <ProvinceInput />
                    </div>
                  <MapLandmark/>
                  <ImageInput/>
                    <SubmitButton
                        text="Create Landmark"
                        className="mt-2"
                        size="lg"
                    />
                </FormContainer>
            </div>
        </section>
    )
}

export default CreateProfile
