import { useState } from 'react';
import GalleryModal from './GalleryModal';


const GalleryList = ({ gallery: imageList }) => {

    

    // const lightgallery = (imagesArr) => {
    //     console.log(imagesArr.length)
    // }

    // const [isOpen, setIsOpen] = useState(false);
    // const [photoIndex, setphotoIndex] = useState(null);
    

    // const importAll = r => {
    //     return r.keys().map(r);
    //   }

    // const images = importAll(require.context('../assets/images/gallery/', false, /\.(png|jpe?g|svg)$/));

    // const imagesArr = new Array(gallery.length);
  
    // for (let i = 0; i < imagesArr.length; i++) {
    //   imagesArr[i] = gallery[i];
    // }

    // console.log(gallery);

    const [clickedImg, setClickedImg] = useState(null);
    const [currentIndex, setCurrentIndex] = useState(null);

    const handleClick = ( item, index ) => {
        setCurrentIndex(index);
        // console.log(item)
        setClickedImg(item);
      };

      const handleRotationRight = () => {
        const totalLength = imageList.length;
        if (currentIndex + 1 >= totalLength) {
          setCurrentIndex(0);
          const newUrl = imageList[0];
          setClickedImg(newUrl);
          return;
        }
        const newIndex = currentIndex + 1;
        const newUrl = imageList.filter((item) => {
          return imageList.indexOf(item) === newIndex;
        });
        const newItem = newUrl[0];
        setClickedImg(newItem);
        setCurrentIndex(newIndex);
      };
    
      const handleRotationLeft = () => {
        const totalLength = imageList.length;
        if (currentIndex === 0) {
          setCurrentIndex(totalLength - 1);
          const newUrl = imageList[totalLength - 1];
          setClickedImg(newUrl);
          return;
        }
        const newIndex = currentIndex - 1;
        const newUrl = imageList.filter((item) => {
          return imageList.indexOf(item) === newIndex;
        });
        const newItem = newUrl[0];
        setClickedImg(newItem);
        setCurrentIndex(newIndex);
      };

    return (
        <>
        <div className="gallery-images">
          {imageList.map((image, index) => (
          <div className="gallery-container" key={index}>
          <img src={image} onClick={() => handleClick(image, index)} alt="" />
          </div>  
            ))}
            {clickedImg && (
                <GalleryModal  
                    clickedImg={clickedImg}
                    handleRotationRight={handleRotationRight}
                    setClickedImg={setClickedImg}
                    handleRotationLeft={handleRotationLeft} 
                />
            )}
            {/* {imageList.map((url) => {
              return <img src={url} />
            })} */}
        </div>
  </>
    );
}
 
export default GalleryList;