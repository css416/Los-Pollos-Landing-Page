import feliz from '../assets/images/menu-sample.jpg'

const Menu = () => {
    return (
        <div className="menu" id="menu">
        <span>Menu</span>
        <div className="menu-images">
          <img src={feliz} alt="" />
          <img src={feliz} alt="" />
          <img src={feliz} alt="" />
          <img src={feliz} alt="" />
          <img src={feliz} alt="" />
          <img src={feliz} alt="" />
          {/* <ImageGallery items={images} thumbnailPosition='left' className="image-gallery" /> */}
        </div>
      </div>
    );
}
 
export default Menu;