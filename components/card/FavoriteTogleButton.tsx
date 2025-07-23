import { Heart } from 'lucide-react';
import { Button } from '../ui/button';
import { auth } from '@clerk/nextjs/server';
import { SignInCardButton } from '../form/Buttons';
import { fetchFavoriteId } from '@/actions/action';
import FavoriteToggleForm from './FavoriteToggleForm';

const FavoriteTogleButton = async({landmarkId}:{landmarkId:string}) => {

    const { userId } = await auth()
    console.log(userId)
    if(!userId) return <SignInCardButton/>

    const favoriteId = await fetchFavoriteId({landmarkId})
    console.log(favoriteId)
  return (
    <FavoriteToggleForm 
    favoriteId={favoriteId} 
    landmarkId={landmarkId}
    />
  )
}
export default FavoriteTogleButton