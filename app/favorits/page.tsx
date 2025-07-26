
import { fetchFavorits } from '@/actions/action'
import EmtyList from '@/components/home/EmtyList'
import LandmarkList from '@/components/home/LandmarkList'
import React from 'react'

const FavoritsPage = async() => {

    const favorites = await fetchFavorits()
   if(favorites.length === 0){
    return <EmtyList 
    heading='No item Favorites'
    
    />
   }
    return <LandmarkList landmarks={favorites}/>
}

export default FavoritsPage
