import React, { useState, useEffect } from "react";
import "../css/MainBookstore.css";
import image from "../img/bab_black.png";
import heart from "../img/heart.png";
import stamp from "../img/stamp.png";
import axios from "axios";

const SearchBookstore = (props) => {
  const [bookStore, setBookStore] = useState("");
  const prop = props;
  console.log(prop);
  
  new useEffect (() => {
    setBookStore(prop.props[2])
    console.log(bookStore)
  })

  return (
    <>
      <div className="MainBookstore">
        <div className="main-book-hashtag">
          {bookStore &&
            bookStore.tags.map((tags, index) => (
              <div className="image-text-hash" key={index}>
                {" "}
                #{tags && tags}{" "} 
              </div>
            ))}
        </div>
        <div className="main-bookarea">
          <div className="main-book-image">
            <img
              alt="서점 이미지"
              src={bookStore && bookStore.defaultImage}
              width="360px"
              height="360px"
            />
          </div>
          <div className="main-book-textarea">
            <div className="main-book-container">
              <div className="main-book-small-title-row">소개</div>
              <div className="main-book-text">
                {bookStore && bookStore.introduction}
              </div>
            </div>
            <div className="main-book-container">
              <div className="main-book-small-title-row">주소</div>
              <div className="main-book-text">
                {bookStore && bookStore.address}
              </div>
            </div>
          </div>
          <div className="main-book-contentarea">
            <div className="main-book-stamp">
              <img alt="스탬프 버튼" src={stamp} width="300px" />
              <div className="main-book-stamp-text">
                {bookStore && bookStore.name}
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

export default SearchBookstore;
