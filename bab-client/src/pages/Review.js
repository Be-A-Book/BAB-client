import React from "react";
import "../css/Review.css";
import axios from 'axios';
import reviewBook from "../img/review_book.png";
import { AiFillCaretLeft } from "react-icons/ai";
import { AiFillCaretRight } from "react-icons/ai";
import { FaPencilAlt } from "react-icons/fa";
import WrittenReview from "../components/WrittenReview";

const Review = () => {
  const [currentClick, setCurrentClick] = React.useState(null);
  const [prevClick, setPrevClick] = React.useState(null);

  const GetClick = (e) => {
    setCurrentClick(e.target.id);
  };

  React.useEffect(
    (e) => {
      if (currentClick !== null) {
        const current = document.getElementById(currentClick);
        current.style.color = "white";
        current.style.backgroundColor = "#005412";
      }

      if (prevClick !== null) {
        const prev = document.getElementById(prevClick);
        prev.style.color = "#000";
        prev.style.backgroundColor = "#91B1A1";
      }
      setPrevClick(currentClick);
    },
    [currentClick],
    
    axios({
      method:"get",
      url:`/api/review/getReviews`,
      params: {
          "store": "62c926a80ea12db83c87b5e9", //storekey 임의 지정
      }
  })
  .then((response) => {  
      if(response.data.success) {
          console.log("불러오기");
          console.log(response.data)
      } else {
          console.log("불러오기 실패");
      }
  })
  );
  return (
    <>
      <div className="review">
        <div className="review-book">
          <img alt="리뷰" src={reviewBook} width="92%" height="75%" />
          <div className="all-review">
            <WrittenReview />
            <WrittenReview />
            <WrittenReview />
            <WrittenReview />
          </div>
          <div className="review-button">
            <button
              className="popular-order-button"
              id="case1"
              onClick={GetClick}
            >
              인기순
            </button>
            <button
              className="latest-order-button"
              id="case2"
              onClick={GetClick}
            >
              최신순
            </button>
          </div>
        </div>

        <div className="bottom-arrow-keys">
          {/* 왼쪽 방향키 */}
          <button className="review-left-button">
            <AiFillCaretLeft className="review-left-button-icon" />
            <div className="review-left-button-text">이전</div>
          </button>
          {/* 오른쪽 방향키 */}
          <button className="review-right-button">
            <div className="review-right-button-text">다음</div>
            <AiFillCaretRight className="review-right-button-icon" />
          </button>
          {/* 후기 남기기 버튼 */}
          <button className="review-write-button">
            <div className="review-write-button-text">후기 남기기</div>
            <FaPencilAlt className="review-write-button-icon" />
          </button>
        </div>
        <div className="bottom-image-paper"></div>
        <div className="bottom-image-pen"></div>
      </div>
    </>
  );
};

export default Review;
