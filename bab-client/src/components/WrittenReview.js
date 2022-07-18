import React from "react";
import "../css/WrittenReview.css";
import bookstore from "../img/bookstore.png";
import logo from "../img/logo_wax2.png";
import thumbUp from "../img/thumb_up.png";

const WrittenReview = () => {
  return (
    <>
      <div className="writtenReview">
        <div className="review-background">
          <div className="content-left">
            <view className="review-bookstore-name">OO서점</view>
            <view>
              <img
                className="review-bookstore-image"
                src={bookstore}
                alt="서점 사진"
              />
            </view>
            <div className="bookstore-keyword1">#헌책방 #카페</div>
            <div className="bookstore-keyword2">#푸근 #따뜻한</div>
          </div>
          <div className="content-right">
            <view className="review-writer-bookmark"></view>
            <view className="review-address">
              --시 --구 --동
              <br />
              상세주소
            </view>
            <div className="review-writer">
              <div className="review-profile">
                <img
                  alt="작성자 프로필"
                  src={logo}
                  width="35px"
                  height="35px"
                />
              </div>
              <div className="writer-content">
                <view className="review-writer-name">작성자</view>
                <view className="review-date">20xx.xx.xx</view>
              </div>
            </div>
            <view className="review-content">방문 후기~~</view>
            <div className="tumbUp">
              <img src={thumbUp} alt="엄지 버튼" width="20px" height="20px" />
              <div className="tumb-number">5</div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default WrittenReview;
