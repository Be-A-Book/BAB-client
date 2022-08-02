import React from "react";
import "../css/MyReview.css";

const MyReview = ({ data }) => {
  console.log(data.content);
  return (
    <>
      <div className="MyReview">
        <div className="my-review-bookstore">{data.store}</div>
        <div className="my-review-content">{data.content}</div>
      </div>
    </>
  );
};

export default MyReview;
