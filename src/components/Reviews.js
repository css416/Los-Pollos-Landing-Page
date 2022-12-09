import { ref, onValue } from "firebase/database";
import { database } from "../firebase";
import { useState, useEffect } from 'react';

import ReviewList from '../utils/ReviewList';
import { Shuffle } from "../utils/Shuffle";


const Reviews = () => {

    // const { data: reviews, isPending, error } = useFetch('http://localhost:8000/reviews');

    // const reviews = null
    const [reviews, setReviews] = useState()
    const reviewsRef = ref(database, 'reviews/');

    useEffect(() => {
        onValue(reviewsRef, (snapshot) => {
            // const reviews = snapshot.val();
            setReviews(snapshot.val())
        });
    // eslint-disable-next-line react-hooks/exhaustive-deps
    },[])

    console.log(reviews);

    return (
    //     <div className="reviews">
    //         <div className="review-bg">
    //             <span>Review</span>
    //         </div>
    //         {/* {code here}   */}
    //   </div>
    <div className="testimonials">
        <div className="inner">
            <span>Reviews</span>
            <div className="border"></div>
            {reviews ? 
                <ReviewList reviews={Shuffle(Object.values(reviews))}/> 
            : 
                <p className="empty">There are currently no reviews.</p> 
            }
            {/* <ReviewList reviews={reviews}/> */}

        </div>
    </div>
    );
}
 
export default Reviews;