import { Label } from "../ui/label"
import { Input } from "../ui/input"


const ImageInput = () => {
    const name = "image"
  return (
    <div>
        <Label>
            {name}
        </Label>
        <Input 
        name={name}
        id={name}
        type="file"
        required
        accept="image/*"
        />
        
    </div>
  )
}
export default ImageInput