import featured from '../assets/images/image.jpg'

const Featured = () => {
    return (
        <div className="featured-food">
        <div className="featured-details">
        <img src={featured} className="featured-img" alt="" />
          <span className="featured-details-title">ABQ Hot Chicken Sandwich</span><br /><br />
          <p>The spiciest spices all prepared with love and care. Always delivered with a friendly smile. 
            That's the Los Pollos Hermanos promise. Try our all-new ABQ Hot Chicken Sandwich, "served on 
            a buttered bun with dill pickle chips and and our home made Remoulade dressing its finished with our spicy hot powder for a kick".
          </p>
          {/* <span>$12.99</span> */}
        </div>
      </div>
    );
}
 
export default Featured;