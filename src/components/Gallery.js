import { useEffect } from 'react';
import { storage } from '../firebase';
import { ref } from "firebase/storage";
import GalleryList from '../utils/GalleryList';
import { useGalleryContext } from '../hooks/useGalleryContext';
import fetchImages from '../hooks/useFetchImages';

import LoadingOverlay from './LoadingOverlay';

const Gallery = () => {
    
    // console.log(gallery);

    const {gallery, dispatch, isLoading, setIsLoading} = useGalleryContext();
    const imageListRef = ref(storage, "gallery/")

    useEffect(() => {
        fetchImages({dispatch, imageListRef, setIsLoading})
    // eslint-disable-next-line react-hooks/exhaustive-deps
    },[])


    // console.log(gallery)
    
    // console.log(imageList);
    // const imagesArr = new Array(gallery.length);
    // console.log(gallery.length)

    // for (let i = 0; i < imagesArr.length; i++) {
    //     imagesArr[i] = {original: gallery[i], thumbnail: gallery[i]};
    // }

    return (
        <div className="gallery" id="gallery">
            <span>Gallery</span>
            {!isLoading ? 
                <GalleryList gallery={gallery}  /> 
            : isLoading ?   
                <LoadingOverlay />
            :    
                <p className="empty">There are currently no images.</p> 
            }
        </div>

    );
}
 
export default Gallery;