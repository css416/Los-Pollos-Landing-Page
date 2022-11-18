import { useState, useEffect } from 'react';

// import components 
import About from '../components/About';
import Review from '../components/Reviews';
import Gallery from '../components/Gallery';
import Menu from '../components/Menu';
import Owner from '../components/Owner';
import Featured from '../components/Featured';

// import icons
import { FaChevronUp } from "react-icons/fa";


    // function importAll(r) {
    //     // let images = {};
    //     // r.keys().map(item => { images[item.replace('./', '')] = r(item); });
    //     // return images;
    //     return r.keys().map(r);
        
    // }

    // const importAll = r => {
    //   return r.keys().map(r);
    // }

    // // const images = importAll(require.context('../assets/images/slideshow/', false, /\.(png|jpe?g|svg)$/));
    // const images = importAll(require.context('../assets/images/slideshow/', false, /\.(png|jpe?g|svg)$/));
    // // console.log(images);
    // // console.log(images.length);
    
    // const imagesArr = new Array(images.length);

    // for (let i = 0; i < images.length; i++) {
    //   imagesArr[i] = {original: images[i], thumbnail: images[i]};
    // }

    // console.log(imagesArr);
    

    // const tryy = [
    //   {
    //     original: images[0],
    //     thumbnail: images[0]
    //   },
    //   {
    //     original: images[1],
    //     thumbnail: images[1]
    //   }
    // ]

    // console.log(tryy);
    

//     The finest ingredients are brought together with love and care, then slow cooked to perfection. Yes, the old ways are still best at Los Pollos Hermanos. 
//     But don't take my word for it. One taste, and you'll know.

// At los pollos hermanos we know only the best will do for you and your family. what does family taste like? in your heart you know its the best ingredients.
// the spiciest spices all prepared with love and care. and always delivered with a friendly smile. thats the los pollos hermanos promise.

// In Michoacán, two brothers (Gustavo Fring and Max Arciniega) were known far and wide for their delicious cooking. Thes season their zesty chicken using only the
// freshest herbs and spices. People call them Los Pollos Hermanos (The Chicken Brothers). The finest ingredients are brought together with love and care, 
// then slow cooked to perfection. Yes, the old ways are still best at Los Pollos Hermanos. But don't take my word for it. One taste, and you'll know.

// The virtual restaurant is exclusively launching on Uber Eats and will serve a variety of foods that mega-fans will be familiar with. 
// Highly anticipated is the ABQ Hot Chicken Sandwich, “served on a buttered bun with dill pickle chips and a whole grain mustard spread” – and we a
// ll know how much Angelenos love their firey chicken! Expect your themed meals to come with a side of “Slaw Goodman” coleslaw – oh, and did we mention that delivery is FREE!?

// const images = [
  //   {
  //     original: feliz,
  //     thumbnail: feliz,
  //   },
  //   {
  //     original: feliz,
  //     thumbnail: feliz,  
  //   },
//   {
//     original: feliz,
//     thumbnail: feliz,
//   },
// ];

const AnyReactComponent = ({ text }) => <div>{text}</div>;
    
const Home = () => {

  const defaultProps = {
    center: {
      lat: 10.99835602,
      lng: 77.01502627
    },
    zoom: 11
  };

  const [showScroll, setShowScroll] = useState(false);
  

  useEffect(() => {
    showScrollTop()
    // adding the event when scroll change background
    window.addEventListener("scroll", showScrollTop)
  },[])
  
  const showScrollTop = () => {
    if (window.scrollY >=1500) {
      console.log('scroll to top active!')
      setShowScroll(true)
    } else {
      setShowScroll(false)
    }
  }

  const scrollUp = () => { 
    window.scrollTo({
      top: 0,
      behavior: "smooth"
    })
  }

  return (
    <main className="main">
      <About />
      <Featured />
      <Menu />
      <Gallery />
      <Review />
      <Owner />

      {/* scroll to top button  */}
      <div className={showScroll ? "scroll-to-top active" : "scroll-to-top"}>
          <button onClick={scrollUp}><FaChevronUp /></button>
      </div>

      <div className="contact-us" id="contact">
      
      </div>
    </main>
  );
};

export default Home;
