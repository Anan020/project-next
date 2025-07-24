import LoadingCard from '@/components/card/LoadingCard'
import LandmarkContainer from '@/components/home/LandmarkContainer'
import React from 'react'
import { Suspense } from 'react'
const Homepage = () => {
  //search
  return (
    <>
      <Suspense fallback={<LoadingCard/>}>
        <LandmarkContainer />
      </Suspense>
    </>
  )
}

export default Homepage
