
import { fetchLandmark } from "@/actions/action"
import LandmarkList from "./LandmarkList"
import { landmarkCardProps } from "@/utils/types"


const LandmarkContainer = async() => {
    const landmarks:landmarkCardProps[] = await fetchLandmark()
    console.log(landmarks)
  return (
   <>
    <LandmarkList landmarks={landmarks}/>
   </>
  )
}
export default LandmarkContainer