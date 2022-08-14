import React, { useState, useEffect } from "react";
import "../css/Detail.css";
import axios from "axios";
import { useLocation } from "react-router-dom";
import heart from "../img/heart.png";
import DetailReview from "../components/DetailReview";

const Detail = () => {
  const location = useLocation();
  const data = location.state.data;
  const [link, setLink] = useState();
  const [bookStore, setBookStore] = useState("");
  const links = `https://${link}`;
  const [like, setLike] = useState();
  const [id, setId] = useState();
  const [likeButton, setLikeButton] = useState(false);

  //작성자 정보, 북마크
  useEffect(() => {
    axios({
      method: "get",
      url: `https://beabook-server.herokuapp.com/api/users/auth`, //${data.writer}
    }).then((response) => {
      setId(response.data._id);
    });
  }, []);

  useEffect(() => {
    axios({
      method: "post",
      url: `https://beabook-server.herokuapp.com/api/bookstore/getBookstoreDetail`,
      data: {
        _id: data, //"62dffd0708c904737340ae36"
      },
    }).then((response) => {
      if (response.data.success) {
        setBookStore(response.data);
        setLink(bookStore && bookStore.bookstore?.website);
      } else {
        console.log("불러오기 실패");
      }
    });
  }, [bookStore, data]);

  useEffect(() => {
    axios({
      method: "get",
      url: `https://beabook-server.herokuapp.com/api/favorite/getFavorites/${data}`,
    }).then((response) => {
      if (response.data.success) {
        setLike(response.data.favorites.length);
      } else {
        console.log("불러오기 실패");
      }
    });
  }, [data]);

  const likeClick = async (values) => {
    if (likeButton === false) {
      await axios({
        method: "post",
        url: `https://beabook-server.herokuapp.com/api/favorite/postFavorite`,
        data: {
          store: data,
          user: id,
        },
      });
      setLikeButton(true);
    } else {
      await axios({
        method: "post",
        url: `https://beabook-server.herokuapp.com/api/favorite/cancelFavorite`,
        data: {
          store: data,
          user: id,
        },
      });
      setLikeButton(false);
    }

    axios({
      method: "get",
      url: `https://beabook-server.herokuapp.com/api/favorite/getFavorites/${data}`,
    }).then((response) => {
      if (response.data.success) {
        setLike(response.data.favorites.length);
      } else {
        console.log("불러오기 실패");
      }
    });
  };

  return (
    <>
      <div className="detail">
        {/* 세부 내용 좌측 */}
        <div className="detail-content-left">
          <div className="detail-big-title">
            {bookStore && bookStore.bookstore?.name}
          </div>
          <div className="detail-container-2">
            <div className="detail-small-title-column">소개</div>
            <div className="detail-text">
              {bookStore && bookStore.bookstore?.introduction}
            </div>
          </div>
          <div className="detail-container">
            <div className="detail-small-title-row">주소</div>
            <div className="detail-text">
              {bookStore && bookStore.bookstore?.address}
            </div>
          </div>
          <div className="detail-container">
            <div className="detail-small-title-row">운영시간</div>
            <div className="detail-text">
              {bookStore && bookStore.bookstore?.operation}
            </div>
          </div>
          <div className="detail-container">
            <div className="detail-small-title-row">휴무일</div>
            <div className="detail-text">
              {bookStore && bookStore.bookstore?.holiday}
            </div>
          </div>
          <div className="detail-container">
            <div className="detail-small-title-row">웹사이트</div>
            <div className="detail-text">
              <a href={links}>{bookStore && bookStore.bookstore?.website}</a>
            </div>
          </div>
        </div>
        {/* 세부 내용 우측 */}

        <div className="detail-content-right">
          <div className="heart">
            <button onClick={likeClick} className="heartbutton">
              <img alt="하트 버튼" src={heart} width="30px" height="30px" />{" "}
              {like}
            </button>
          </div>
          <div className="image">
            <div className="image-image">
              <img
                alt={bookStore && bookStore.bookstore?.defaultImage}
                src={bookStore && bookStore.bookstore?.defaultImage}
                width="360px"
                height="360px"
              />{" "}
            </div>
            <div className="image-text">
              {bookStore &&
                bookStore.bookstore?.tags.map((tags) => (
                  <div className="image-text-hash" key={tags}>
                    {" "}
                    #{tags}{" "}
                  </div>
                ))}
            </div>
          </div>
        </div>
        {/* 방문 후기 */}
        <div className="review">
          <div className="detail-review">방문후기</div>
          <DetailReview data={bookStore && bookStore.bookstore?._id} />
        </div>
      </div>
    </>
  );
};

export default Detail;
