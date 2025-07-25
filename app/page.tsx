import LoadingCard from '@/components/card/LoadingCard'
import LandmarkContainer from '@/components/home/LandmarkContainer'
import React from 'react'
import { Suspense } from 'react'
const Homepage = async({searchParams}:{searchParams:{search:string}}) => {
  //search

  const { search } = await searchParams
  // console.log(search)
  return (
    <section>
      <Suspense fallback={<LoadingCard/>}>
        <LandmarkContainer search={search}/>
      </Suspense>
    </section>
  )
}

export default Homepage
