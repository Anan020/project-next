
import { fetchLandmark } from "@/actions/action"
import LandmarkList from "./LandmarkList"
import { landmarkCardProps } from "@/utils/types"
import Hero from "../hero/Hero"
import CategoryList from "./CategoryList"



const LandmarkContainer = async({search , category}:{search?:string, category?:string}) => {
    const landmarks:landmarkCardProps[] = await fetchLandmark({search, category})
    // console.log(landmarks)
  return (
   <div>
    <Hero landmarks={landmarks}/>
    <CategoryList search={search} category={category}/>
    <LandmarkList landmarks={landmarks}/>
   </div>
  )
}
export default LandmarkContainer