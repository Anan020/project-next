import React from 'react'
import { Label } from "@/components/ui/label"
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"

import { provinces } from '@/utils/provinces'


const ProvinceInput = ({ defaultValue }: { defaultValue?: string }) => {
  const name = "province"
  return (
    <div  className=''>
      <Label htmlFor={'name'} className='capitalize py-2'>
        {name}
      </Label>
      <Select
        defaultValue={defaultValue || provinces[0].PROVINCE_NAME}
        name={name}
        required
      >
        <SelectTrigger className="w-full">
          <SelectValue placeholder="select category" />
        </SelectTrigger>
        <SelectContent>
          {
            provinces.map((item) => {
              return (
                <SelectItem key={item.PROVINCE_ID} value={item.PROVINCE_NAME}>
                  <span className='capitalize flex items-center gap-4'>{item.PROVINCE_NAME}</span>
                </SelectItem>
              )
            })
          }
        </SelectContent>
      </Select>

    </div>
  )
}

export default ProvinceInput
