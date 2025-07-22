import React from 'react'
import { Label } from "@/components/ui/label"
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"

import { categories } from '@/utils/categories'


const CategoryFormInput = ({ defaultValue }: { defaultValue?: string }) => {
  const name = "category"
  return (
    <div className=''>
      <Label htmlFor={'name'} className='capitalize py-2'>
        {name}
      </Label>
      <Select
        defaultValue={defaultValue || categories[0].label}
        name={name}
        required
      >
        <SelectTrigger className='w-full'>
          <SelectValue placeholder="select category"/>
        </SelectTrigger>
        <SelectContent>
          {
            categories.map((item) => {
              return (
                <SelectItem key={item.label} value={item.label}>
                  <item.icon />
                  <span className='capitalize flex items-center gap-4'>{item.label}</span>
                </SelectItem>
              )
            })
          }
        </SelectContent>
      </Select>

    </div>
  )
}

export default CategoryFormInput
