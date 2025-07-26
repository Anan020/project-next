
import { fetchLandmark, fetchLandmarksHero } from "@/actions/action"
import LandmarkList from "./LandmarkList"
import { landmarkCardProps } from "@/utils/types"
import Hero from "../hero/Hero"
import CategoryList from "./CategoryList"
import EmtyList from "./EmtyList"



const LandmarkContainer = async({search , category}:{search?:string, category?:string}) => {
    const landmarks:landmarkCardProps[] = await fetchLandmark({search, category})
    const landmarksHero:landmarkCardProps[] = await fetchLandmarksHero()
    // console.log(landmarks)
    // if(landmarks.length === 0){
    //   return <p><EmtyList/></p>
    // }
  return (
   <div>
    <Hero landmarks={landmarksHero}/>
    <CategoryList search={search} category={category}/>
    {
      landmarks.length === 0
      ? <EmtyList heading="No resulats" btnText="Clear Filters"/>
      : <LandmarkList landmarks={landmarks}/>
    }
   
   </div>
  )
}
export default LandmarkContainer