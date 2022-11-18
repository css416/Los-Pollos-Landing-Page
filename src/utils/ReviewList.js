import { IoMdStar as FilledStar, IoMdStarOutline as EmptyStar } from "react-icons/io";

const ReviewList = ({ reviews }) => {
    return (
        
        <div className="row">
        {reviews.map((review, i) => (
        <div className="col" key={i}>
            {/* {console.log(`${reviews.length}`)} */}
        <div className="testimonial">
            <div className="testimonial-img-container">
                <img src={review.profile} alt="" />
            </div>
            <div className="name">{`${review.firstName} ${review.lastName}`}</div>
            <div className="stars">
                {(() => {

                    const stars = [];

                    //populate stars with empty stars
                    for(let i = 0; i < 5; i++) {
                        stars.push(<EmptyStar key={`star${i}`}/>);
                    }

                    // replace array depending on no. of stars
                    if (review.stars !== 0 && review.stars <= 5) {
                        for (let i = 0; i < review.stars; i++) {
                            // return <div>{i}</div>
                            // stars.push(<FontAwesomeIcon icon={filledStar} key={`star${i}`}/>);
                            stars[i] = <FilledStar key={`star${i}`}/>;
                        }
                    }
                    
                    return stars;
                })()}
            </div>
            <p className="review-body">
                {review.body}
            </p>
        </div>
    </div>
    ))}
    </div>
    );
}
 
export default ReviewList;