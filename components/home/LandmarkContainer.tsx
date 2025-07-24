
import { fetchLandmark } from "@/actions/action"
import LandmarkList from "./LandmarkList"
import { landmarkCardProps } from "@/utils/types"
import Hero from "../hero/Hero"



const LandmarkContainer = async() => {
    const landmarks:landmarkCardProps[] = await fetchLandmark()
    // console.log(landmarks)
  return (
   <div>
    <Hero landmarks={landmarks}/>
    <LandmarkList landmarks={landmarks}/>
   </div>
  )
}
export default LandmarkContainer