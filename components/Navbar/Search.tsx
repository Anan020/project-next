'use client'


import React, { useEffect, useState } from 'react'
import { Input } from '../ui/input'
import { useRouter, useSearchParams } from 'next/navigation'
import { useDebouncedCallback } from 'use-debounce'
import { Value } from '@radix-ui/react-select'



const Search = () => {
  const { replace } = useRouter()

  const searchParams = useSearchParams()

  const [search, SetSearch] = useState(searchParams.get('search')?.toString() || ' ')


  const handleSearch = useDebouncedCallback((value:string)=>{
    const params = new URLSearchParams(searchParams)
    if(value){
      params.set('search',value)
    }else{
      params.delete('search')
    }
    replace(`/?${params.toString()}`)
  },500);


  useEffect(()=>{
    //code body
    if(!searchParams.get('search')){
      SetSearch('')
    }
  },[searchParams.get('search')])




  return (
   <Input
   type='text'
   placeholder='Search camping...'
   className='max-w-sm'
   onChange={(e)=>{
    SetSearch(e.target.value)
    handleSearch(e.target.value)
   }}
   value={search}
   />
  )
}

export default Search
