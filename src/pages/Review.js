import React, { useState, useEffect } from "react";
import "../css/Review.css";
import axios from "axios";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import reviewBook from "../img/review_book.png";
import { AiFillCaretLeft } from "react-icons/ai";
import { AiFillCaretRight } from "react-icons/ai";
import { FaPencilAlt } from "react-icons/fa";
import WrittenReview from "../components/WrittenReview";
import { NavLink } from "react-router-dom";

const Review = () => {
  const [review, setReview] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [currentSort, setCurrentSort] = useState(1);

  const showToast = () => {
    toast.info(<div className="toast">첫 페이지입니다.</div>, {
      position: "bottom-center",
      autoClose: 2000,
      closeOnClick: true,
      hideProgressBar: true,
    });
  };

  const handleOrder1 = () => {
    setCurrentPage(1);
    const current = document.getElementById("case1");
    current.style.color = "white";
    current.style.backgroundColor = "#005412";

    const prev = document.getElementById("case2");
    prev.style.color = "#000";
    prev.style.backgroundColor = "#91B1A1";
  };

  const handleOrder2 = () => {
    setCurrentPage(1);
    const current = document.getElementById("case2");
    current.style.color = "white";
    current.style.backgroundColor = "#005412";

    const prev = document.getElementById("case1");
    prev.style.color = "#000";
    prev.style.backgroundColor = "#91B1A1";
  };

  useEffect(() => {
    axios({
      method: "get",
      url: `https://beabook-server.herokuapp.com/api/review/getReviews?page=${currentPage}&sort=${currentSort}`,
    }).then((response) => {
      if (response.data.success) {
        setReview(response.data.reviews);
      } else {
        console.log("불러오기 실패");
      }
    });
  }, [currentPage, currentSort]);

  return (
    <>
      <div className="review-page">
        <div className="review-book">
          <img alt="리뷰" src={reviewBook} width="92%" height="75%" />

          <div className="all-review">
            {review.map((r) => (
              <WrittenReview data={r} key={r._id} />
            ))}
          </div>
          <div className="review-button">
            <button
              className="popular-order-button"
              id="case1"
              onClick={() => handleOrder1(setCurrentSort(2))}
            >
              인기순
            </button>
            <button
              className="latest-order-button"
              id="case2"
              onClick={() => handleOrder2(setCurrentSort(1))}
            >
              최신순
            </button>
          </div>
        </div>

        <div className="bottom-arrow-keys">
          {/* 왼쪽 방향키 */}
          <button
            className="review-left-button"
            onClick={() =>
              currentPage > 1 ? setCurrentPage(currentPage - 1) : showToast()
            }
          >
            <AiFillCaretLeft className="review-left-button-icon" />
            <div className="review-left-button-text">이전</div>
          </button>
          {/* 오른쪽 방향키 */}
          <button
            className="review-right-button"
            onClick={() => setCurrentPage(currentPage + 1)}
          >
            <div className="review-right-button-text">다음</div>
            <AiFillCaretRight className="review-right-button-icon" />
          </button>
          {/* 후기 남기기 버튼 */}
          <NavLink to="/reviewwrite">
            <button className="review-write-button">
              <div className="review-write-button-text">후기 남기기</div>
              <FaPencilAlt className="review-write-button-icon" />
            </button>
          </NavLink>
          <ToastContainer />
        </div>
        <div className="bottom-image-paper"></div>
        <div className="bottom-image-pen"></div>
      </div>
    </>
  );
};

export default Review;
