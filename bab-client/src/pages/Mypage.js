import React from "react";
import FavoriteBookstore from "../components/FavoriteBookstore";
import MyReview from "../components/MyReview";
import "../css/Mypage.css";

const Mypage = () => {
  return (
    <>
      <div className="Mypage">
        <div className="mypage-title">My Page</div>
        <div className="mypage-grid">
          {/* 좌측 북마크 */}
          <div className="mypage-content-left">
            <div className="mypage-small-title">Your Bookmark</div>
            <div className="mypage-bookmark-container">
              <div className="mypage-big-rectangle"></div>
              <div className="mypage-bookmark"></div>
              <div className="mypage-small-rectangle"></div>
            </div>
          </div>

          {/* 우측 */}
          <div className="mypage-content-right">
            <div className="mypage-container">
              <div className="mypage-small-title">내가 좋아한 서점</div>
              <FavoriteBookstore />
            </div>
            <div className="mypage-container">
              <div className="mypage-small-title">내가 쓴 후기</div>
              <MyReview />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Mypage;
