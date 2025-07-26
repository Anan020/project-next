import Image from "next/image"
import { landmarkCardProps } from "@/utils/types"
import LandmarkRating from "./LandmarkRating"
import FavoriteTogleButton from "./FavoriteTogleButton"
import Link from "next/link"

const LandmarkCard = ({ landmark }: { landmark: landmarkCardProps }) => {
  const { name, image, id, province, lat, lng, price, category, description } = landmark
  return (
    <article className="group relative">
      <Link href={`/landmark/${id}`}>

      <div className="relative h-[300px] riunded-md mb-2">
        <Image
          src={image}
          sizes="(max-width:768px) 100vw, 50vh"
          alt={name}
          fill
          className="object-cover rounded-md group-hover:scale-105 transition-transform duration-300"
        />
      </div>

      <div className="flex items-center justify-between">
        <h3 className="text-sm font-semibold mt-1">{name.substring(0, 30)}</h3>
        <LandmarkRating />
      </div>

      <p className="text-sm mt-1 text-muted-foreground">
        {description.substring(0, 40)}
      </p>

      <div className="mt-1 flex items-center justify-between font-semibold text-sm">
        <span>LK {price}</span>
        <p>{province}</p>
      </div>

      <div className="absolute top-5 right-5">
        <FavoriteTogleButton landmarkId={id}/>
      </div>
      </Link>

    </article>
  )
}
export default LandmarkCard