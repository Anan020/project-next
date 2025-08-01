import { landmarkCardProps } from "@/utils/types"



const OtherInfos = ({landmark}:{landmark:landmarkCardProps}) => {
  return (
    <div className="text-white">
        <p>{landmark.province}</p>
        <p className="text-4xl font-semibold md:my-3 md:6xl md:leading-[80px]">{landmark.name}</p>
        <p className="text-lg">{landmark.description.substring(0,40)+"..."}</p>
    </div>
  )
}
export default OtherInfos