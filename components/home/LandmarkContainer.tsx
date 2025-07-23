
import { fetchLandmark } from "@/actions/action"
import LandmarkList from "./LandmarkList"



const LandmarkContainer = async() => {
    const landmarks = await fetchLandmark()
    console.log(landmarks)
  return (
   <>
    <LandmarkList landmarks={landmarks}/>
   </>
  )
}
export default LandmarkContainer