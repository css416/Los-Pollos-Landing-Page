import { useState, useEffect } from 'react';
import { storage } from '../firebase';
import { listAll, ref, getDownloadURL } from "firebase/storage";
import LoadingOverlay from './LoadingOverlay';
import ttf from '../assets/images/ttf.png'
import ImageGallery from 'react-image-gallery';

const About = () => {

    const [imageList,setImageList] = useState([])
    const [isLoading, setIsLoading] = useState(true);

    const imageListRef = ref(storage, "slideshow/")

    useEffect(() => {
      listAll(imageListRef).then((response) => {
        response.items.forEach((item) => {
          getDownloadURL(item).then((url) => {
              setImageList((prev) => [...prev, url]);
              setIsLoading(false)
          });
        });
      });
      // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    // console.log(imageList[0])

    const imagesArr2 = new Array(imageList.length);

    for (let i = 0; i < imagesArr2.length; i++) {
      imagesArr2[i] = {original: imageList[i], thumbnail: imageList[i]};
    }

    // console.log(imagesArr2)
  

    // const importAll = r => {
    //     return r.keys().map(r);
    //   }
  
    //   // const images = importAll(require.context('../assets/images/slideshow/', false, /\.(png|jpe?g|svg)$/));
    //   const images = importAll(require.context('../assets/images/slideshow/', false, /\.(png|jpe?g|svg)$/));
    //   // console.log(images);
    //   // console.log(images.length);
      
    //   const imagesArr = new Array(images.length);
  
    //   for (let i = 0; i < imagesArr.length; i++) {
    //     imagesArr[i] = {original: images[i], thumbnail: images[i]};
    //   }

    return (
        <div className="about-us" id="about">
          <div className="history-container">
              <span>Our History</span>
              <br />
              <div>
              <p>
                  In Michoacán, two brothers (Gustavo Fring and Max Arciniega) were
                  known far and wide for their delicious cooking. They season their
                  zesty chicken using only the freshest herbs and spices. People call
                  them <strong>Los Pollos Hermanos</strong> (The Chicken Brothers). The finest
                  ingredients are brought together with love and care, then slow
                  cooked to perfection. Yes, the old ways are still best at Los Pollos
                  Hermanos. But don't take my word for it. One taste, and you'll know.
              </p>
              </div>
          </div>
          {isLoading ? 
            <LoadingOverlay /> 
          : 
          <div className="about-us-img">
            {/* <img src={image_arr[0]} className="slideshow" alt="" /> */}
            <ImageGallery 
              items={imagesArr2} 
              // infinite={true}
              thumbnailPosition='top' 
              showThumbnails={false} 
              autoPlay={true} 
              showPlayButton={false} 
              showFullscreenButton={false} 
              showNav={false}
              slideInterval={4000}
              slideDuration={800}
              
            />
            
            <img src={ttf} className="ttf" alt="" />
          </div>
        }


      </div>
    );
}
 
export default About;