import React, { useState, useEffect } from "react";
import FavoriteBookstore from "../components/FavoriteBookstore";
import MyReview from "../components/MyReview";
import "../css/Mypage.css";
import axios from "axios";

const Mypage = () => {
  const [bookmark, setBookmark] = useState("");

  const [user, setUser] = useState("");
  const [id, setId] = useState();
  const [review, setReviews] = useState();
  const [like, setLikes] = useState();

  //작성자 정보, 북마크
  useEffect(() => {
    axios({
      method: "get",
      url: `/api/users/auth`, //${data.writer}
    }).then((response) => {
      setId(response.data._id);
    });
  }, []);

  useEffect(() => {
    axios({
      method: "get",
      url: `/api/users/getUserInfo/${id && id}`, //${data.writer}
    }).then((response) => {
      setUser(response.data.userInfo && response.data.userInfo.user);
      setBookmark(response.data.userInfo && response.data.userInfo);
      setReviews(response.data.userInfo && response.data.userInfo.reviews)
      setLikes(response.data.userInfo && response.data.userInfo.favorites)
    });
  });

  return (
    <>
      <div className="Mypage">
        <div className="mypage-title">My Page</div>
        <div className="mypage-grid">
          {/* 좌측 북마크 */}

          <div className="mypage-content-left">
            <div className="mypage-small-title">Your Bookmark</div>
            <div className="mypage-bookmark-container">
              <div className="mypage-big-rectangle"></div>
              <div>
                {bookmark && (
                  <div
                    className="mypage-bookmark-book"
                    style={{
                      backgroundColor: user.bookmark?.color,
                    }}
                  ></div>
                )}
              </div>
              <div className="mypage-small-rectangle"></div>
            </div>
          </div>

          {/* 우측 */}
          <div className="mypage-content-right">
            {bookmark && (
              <div className="mypage-container">
                <div className="mypage-small-title">내가 좋아한 서점</div>
                <FavoriteBookstore data={like} />
              </div>
            )}
            {bookmark && (
              <div className="mypage-container">
                <div className="mypage-small-title">내가 쓴 후기</div>
                <MyReview data={review} />
              </div>
            )}
          </div>
        </div>
      </div>
    </>
  );
            };

export default Mypage;
