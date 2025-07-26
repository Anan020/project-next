import { fetchLandmarkDetail } from "@/actions/action"
import FavoriteTogleButton from "@/components/card/FavoriteTogleButton"
import Breadcrums from "@/components/landmark/Breadcrums"
import Description from "@/components/landmark/Description"
import ImageContainer from "@/components/landmark/ImageContainer"
import MapLandmark from "@/components/map/Maplandmarks"
import { redirect } from "next/navigation"

const landmarkDetail = async({params}:{ params:{ id: string }}) => {
  const { id } = await params
  const landmark = await fetchLandmarkDetail({id})
  if(!landmark) redirect('/')

  return (
    
    <section>
      <Breadcrums name={landmark.name}/>
      <header className="flex justify-between mt-4 items-center">
        <h1 className="tex-4xl font-bold  ">
          {landmark.name}
        </h1>
        <div className="flex items-center gap-x-4">
          <span>share</span>
          <FavoriteTogleButton landmarkId={landmark.id}/>
        </div>
      </header>
    {/* Image */}
    <ImageContainer 
    mainImage={landmark.image} 
    name={landmark.name}/>
    {/* Detail */}
    <section>
      <div>
        <Description description={landmark.description}/>
        <MapLandmark Location={{lat:landmark.lat,lng:landmark.lng}}/>
      </div>
    </section>
    </section>
  )
}
export default landmarkDetail