import { React } from "react";
import { ImageGalleryItem } from "../ImageGalleryItem/ImageGalleryItem";
import { List } from "./ImageGallery.styled";
import PropTypes from 'prop-types';

export const ImageGallery =({data,onClick,getLargeImageURL})=>  {


  

    

    return (
            <>     
    <List >
<ImageGalleryItem data={data} onClick={onClick} getLargeImageURL={getLargeImageURL}></ImageGalleryItem>
                </List>
            </>
    
 
        )
    
}

ImageGallery.prototype = {
    data: PropTypes.object,
    onClick: PropTypes.func,
    getLargeImageURL: PropTypes.func,
}