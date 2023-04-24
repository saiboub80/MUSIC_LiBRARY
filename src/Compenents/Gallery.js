import GalleryItems from './GalleryItems'


function Gallery (props){
    const display = props.data.map((item, i) => {
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