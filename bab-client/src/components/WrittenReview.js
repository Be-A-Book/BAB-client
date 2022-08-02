import React, { useState, useEffect } from "react";
import "../css/WrittenReview.css";
import axios from "axios";
import bookstore from "../img/bookstore.png";
import logo from "../img/logo_wax2.png";
import thumbUp from "../img/thumb_up.png";

const WrittenReview = ({ data }) => {
  console.log(data.writer);
  return (
    <>
      <div className="writtenReview">
        <div className="review-background">
          <div className="content-left">
            <dic className="review-bookstore-name">OO서점</dic>
            <div>
              <img
                className="review-bookstore-image"
                src={bookstore}
                alt="서점 사진"
              />
            </div>
            <div className="bookstore-keyword1">#헌책방 #카페</div>
            <div className="bookstore-keyword2">#푸근 #따뜻한</div>
          </div>
          <div className="content-right">
            <div className="review-writer-bookmark"></div>
            <div className="review-address">
              --시 --구 --동
              <br />
              상세주소
            </div>
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
                <div className="review-writer-name">{data.writer}</div>
                <div className="review-date">{data.createdAt}</div>
              </div>
            </div>
            <div className="review-content">{data.content}</div>
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
