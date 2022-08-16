import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import "../css/MainBookstore.css";
import heart from "../img/heart.png";
import stamp from "../img/stamp.png";

const SearchBookstore = (props) => {
  const [bookStore, setBookStore] = useState("");

  const prop = props;
  
  new useEffect (() => {
    setBookStore(prop.props[0])
  })

  return (
    <>
      <Link
        to={"/detail"}
        state={{ data: bookStore && bookStore._id }}
        style={{textDecoration: 'none'}}
      >
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
          </div>
        </div>
      </div>
      </Link>
    </>
  );
};

export default SearchBookstore;
