import React, { useState, useEffect } from "react";
import "../css/MainBookstore.css";
import image from "../img/bab_black.png";
import heart from "../img/heart.png";
import stamp from "../img/stamp.png";
import axios from "axios";

const MainBookstore = () => {
  const [bookStore, setBookStore] = useState("");

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
        console.log(response.data);
        console.log(response.data.bookstore.tags);
      } else {
        // console.log("불러오기 실패");
      }
    });
  }, []);
  return (
    <>
      <div className="MainBookstore">
        <div className="main-book-hashtag">
          {bookStore &&
            bookStore.bookstore.tags.map((tags) => (
              <div className="image-text-hash" key={tags._id}>
                {" "}
                #{tags && tags.name}{" "}
              </div>
            ))}
        </div>
        <div className="main-bookarea">
          <div className="main-book-image">
            <img alt="서점 이미지" src={image} width="360px" height="360px" />
          </div>
          <div className="main-book-textarea">
            <div className="main-book-container">
              <div className="main-book-small-title-row">소개</div>
              <div className="main-book-text">
                {bookStore && bookStore.bookstore.introduction}
              </div>
            </div>
            <div className="main-book-container">
              <div className="main-book-small-title-row">주소</div>
              <div className="main-book-text">
                {bookStore && bookStore.bookstore.address}
              </div>
            </div>
          </div>
          <div className="main-book-contentarea">
            <div className="main-book-stamp">
              <img alt="스탬프 버튼" src={stamp} width="300px" />
              <div className="main-book-stamp-text">
                {bookStore && bookStore.bookstore.name}
              </div>
            </div>
            <div className="main-book-heart">
              <img alt="하트 버튼" src={heart} width="30px" height="30px" />{" "}
              {/*인프런 한번 더 확인*/}7
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default MainBookstore;
