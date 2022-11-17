import ceo from '../assets/images/ceo.jpg';

const Owner = () => {
    return (
      <div className="owner">   
        <div className="image-container">
          <img src={ceo} alt="" />
          <div className="owner-details quote">
            <h2>Meet Our CEO</h2>
            <p>When you have children, you always have family. And they will always be your priority, 
              your responsibility. And a man, a man provides. And he does it even when he's not appreciated 
              or respected or even loved. He simply bears up and does it. Because he's a man. 
              </p>
            {/* <p><small>- Gustavo "Gus" Fring</small></p> */}
            {/* <img src={quote} alt="" /> */}
            <span>- Gustavo "Gus" Fring</span>
          </div>
          
        </div>
      </div>
    );
}
 
export default Owner;