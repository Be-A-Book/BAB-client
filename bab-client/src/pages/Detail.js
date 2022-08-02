import React, { useState, useEffect } from "react";
import "../css/Detail.css";
import axios from "axios";
// import image from "../img/bab_black.png";
import heart from "../img/heart.png";
import DetailReview from "../components/DetailReview";

const Detail = ({ data }) => {
  const [bookStore, setBookStore] = useState("");
  console.log(data);

  useEffect(() => {
    axios({
      method: "post",
      url: `/api/bookstore/getBookstoreDetail`,
      data: {
        _id: "62dfde11ce45d9283ff4e8d8", //storekey 임의 지정
      },
    }).then((response) => {
      if (response.data.success) {
        setBookStore(response.data);
        // console.log("불러오기");
        // console.log(response.data)
        // console.log(response.data.bookstore.tags)
      } else {
        // console.log("불러오기 실패");
      }
    });
  }, []);
  return (
    <>
      <div className="detail">
        {/* 세부 내용 좌측 */}
        <div className="detail-content-left">
          <div className="detail-big-title">
            {bookStore && bookStore.bookstore.name}
          </div>
          <div className="detail-container-2">
            <div className="detail-small-title-column">소개</div>
            <div className="detail-text">
              {bookStore && bookStore.bookstore.introduction}
            </div>
          </div>
          <div className="detail-container">
            <div className="detail-small-title-row">주소</div>
            <div className="detail-text">
              {bookStore && bookStore.bookstore.address}
            </div>
          </div>
          <div className="detail-container">
            <div className="detail-small-title-row">운영시간</div>
            <div className="detail-text">
              {bookStore && bookStore.bookstore.operation}
            </div>
          </div>
          <div className="detail-container">
            <div className="detail-small-title-row">휴무일</div>
            <div className="detail-text">
              {bookStore && bookStore.bookstore.holiday}
            </div>
          </div>
          <div className="detail-container">
            <div className="detail-small-title-row">웹사이트</div>
            <div className="detail-text">
              {bookStore && bookStore.bookstore.website}
            </div>
          </div>
        </div>
        {/* 세부 내용 우측 */}

        <div className="detail-content-right">
          <div className="heart">
            <img alt="하트 버튼" src={heart} width="30px" height="30px" />{" "}
            {/*인프런 한번 더 확인*/}7
          </div>
          <div className="image">
            <div className="image-image">
              <img
                alt={bookStore && bookStore.bookstore.defaultImage}
                src={bookStore && bookStore.bookstore.defaultImage}
                width="360px"
                height="360px"
              />{" "}
              {/* image 불러오기 불가능, 임의 수정 bookStore && bookStore.bookstore.defaultImage */}
            </div>
            <div className="image-text">
              {bookStore &&
                bookStore.bookstore.tags.map((tags) => (
                  <div className="image-text-hash" key={tags._id}>
                    {" "}
                    #{tags && tags.name}{" "}
                  </div>
                ))}
            </div>
          </div>
        </div>
        {/* 방문 후기 */}
        <div className="review">
          <div className="detail-review">방문후기</div>
          <DetailReview />
        </div>
      </div>
    </>
  );
};

export default Detail;
