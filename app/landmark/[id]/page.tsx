import { fetchLandmarkDetail } from "@/actions/action"

const landmarkDetail = async({params}:{ params:{ id: string }}) => {
  const { id } = await params
  const landmark = await fetchLandmarkDetail({id})
  console.log(landmark)
  return (
    <div>landmarkDetail</div>
  )
}
export default landmarkDetail