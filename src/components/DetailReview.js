import axios from "axios";
import React, { useState, useEffect } from "react";
import "../css/DetailReview.css";
import logo from "../img/logo_wax2.png";

const DetailReview = ({ data }) => {
  
  const [reviews, setReviews] = useState("");
  const [review, setReview] = useState();

  useEffect(() => {
    const value = data || {};
    axios({
      method: "get",
      url: `https://beabook-server.herokuapp.com/api/review/getReviews/${value}`,
    }).then((response) => {
      if (response.data.success) {
        setReviews(response.data.reviews);
      } else {
        setReview("작성된 리뷰가 없습니다.")
      }
    });
  }, [data]);

  return (
    <div className="detail-review-content">
      {reviews &&
        reviews.map((review) => (
          <div className="review-card" key={review._id}>
            <div className="review-card-image">
              <img alt="프로필 아이콘" src={logo} width="60px" height="60px" />
            </div>
            <div className="review-card-content">
              <div className="review-card-top">
                {review && review.writer?.name}
              </div>
              <div className="review-card-bottom">
                {review && review.content}
              </div>
            </div>
          </div>
        ))}
    </div>
  );
};

export default DetailReview;
