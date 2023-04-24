import { useContext } from 'react'
import { DataContext} from "../Contexts/DataContexts"
import GalleryItems from './GalleryItems'


function Gallery (){
    const data = useContext(DataContext)
    const display = data.map((item, i) => {
        return (
            <GalleryItems item ={item} key= {i}/>
        )
    }
)
return(
    <div>
        {display}
    </div>
)
}
export default Gallery