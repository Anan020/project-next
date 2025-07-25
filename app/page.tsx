import LoadingCard from '@/components/card/LoadingCard'
import LandmarkContainer from '@/components/home/LandmarkContainer'
import React from 'react'
import { Suspense } from 'react'
const Homepage = async({searchParams}:{searchParams:{search?:string, category?:string}}) => {
  //search

  const { search , category } = await searchParams
  // console.log(search)
  return (
    <section>
      <Suspense fallback={<LoadingCard/>}>
        <LandmarkContainer search={search} category={category}/>
      </Suspense>
    </section>
  )
}

export default Homepage
