import { Item,Img } from "./ImageGalleryItem.styled";
import PropTypes from 'prop-types';


export  const  ImageGalleryItem = ({data, onClick,getLargeImageURL}) => {




    
 return  data &&  data.map(el => {
     return (
                 
                 <Item onClick={onClick }  key={el.id} >
  
                     <Img onClick={()=>getLargeImageURL(el.largeImageURL)} src={el.webformatURL} alt={el.tags} />
  
                 </Item>
    )
        })

         

   
  
}

ImageGalleryItem.prototype = {
    src: PropTypes.string.isRequired,
    alt: PropTypes.string.isRequired,
    key: PropTypes.string.isRequired,
    onClick: PropTypes.func,
    }