import React from "react";
import "../css/MyReview.css";

const MyReview = () => {
  return (
    <>
      <div className="MyReview">
        {/* 데이터 불러올 때 수정 필요 */}
        <div className="my-review-bookstore">ㅇㅇ서점</div>
        <div className="my-review-content">~~~</div>
        <div className="my-review-bookstore">ㅁㅁ서점</div>
        <div className="my-review-content">~~~</div>
      </div>
    </>
  );
};

export default MyReview;
