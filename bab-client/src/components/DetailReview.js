import axios from "axios";
import React, { useState, useEffect } from "react";
import "../css/DetailReview.css";
import logo from "../img/logo_wax2.png";

const DetailReview = ({ data }) => {
  const [reviews, setReviews] = useState("");

  useEffect(() => {
    axios({
      method: "get",
      url: `/api/review/getReviews/${data}`,
    }).then((response) => {
      if (response.data.success) {
        //console.log("불러오기");
        setReviews(response.data.reviews);
        //console.log(response.data.reviews);
      } else {
        console.log("불러오기 실패");
      }
    });
  }, []);

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
