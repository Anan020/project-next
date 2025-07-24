
import { fetchFavorits } from '@/actions/action'
import LandmarkList from '@/components/home/LandmarkList'
import React from 'react'

const FavoritsPage = async() => {

    const favorites = await fetchFavorits()
    console.log(favorites)
    return <LandmarkList landmarks={favorites}/>
}

export default FavoritsPage
