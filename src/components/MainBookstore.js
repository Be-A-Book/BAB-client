import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import "../css/MainBookstore.css";
import heart from "../img/heart.png";
import stamp from "../img/stamp.png";
import axios from "axios";

const MainBookstore = () => {
  const [bookStore, setBookStore] = useState("");
  const [like, setLike] = useState();

  useEffect(() => {
    axios({
      method: "post",
      url: `https://beabook-server.herokuapp.com/api/bookstore/getBookstoreDetail`,
      data: {
        _id: "62e9a3a46da7cf12cf5f9dfb",
      },
    }).then((response) => {
      if (response.data.success) {
        setBookStore(response.data);
      } else {
      }

      axios({
        method: "get",
        url: `https://beabook-server.herokuapp.com/api/favorite/getFavorites/62e9a3a46da7cf12cf5f9dfb`,
      }).then((response) => {
        if (response.data.success) {
          setLike(response.data.favorites.length);
        } else {
          console.log("불러오기 실패");
        }
      });
    });
  }, []);
  return (
    <>
      <Link
        to={"/detail"}
        state={{ data: bookStore.bookstore && bookStore.bookstore._id }}
        style={{ textDecoration: "none" }}
      >
        <div className="MainBookstore">
          <div className="main-book-hashtag">
            {bookStore &&
              bookStore.bookstore.tags.map((tags, index) => (
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
                src={bookStore && bookStore.bookstore.defaultImage}
                width="360px"
                height="360px"
              />
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
                {like}
              </div>
            </div>
          </div>
        </div>
      </Link>
    </>
  );
};

export default MainBookstore;
