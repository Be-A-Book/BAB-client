import React, { useState, useEffect } from "react";
import FavoriteBookstore from "../components/FavoriteBookstore";
import MyReview from "../components/MyReview";
import "../css/Mypage.css";
import axios from "axios";

const Mypage = () => {
  const [bookmark, setBookmark] = useState("");

  useEffect(() => {
    axios({
      method: "get",
      url: `/api/users/getUserInfo/62b5efe8bf450852ff3d2389`,
    }).then((response) => {
      if (response.data.success) {
        console.log("불러오기");
        setBookmark(response.data.userInfo);
        console.log(response.data.userInfo.user);
        // console.log(response.data.userInfo.reviews[0]);
      } else {
        console.log("불러오기 실패");
      }
    });
  }, []);

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
              {/* bookmark.userInfo.user.bookmark */}
              <div>
                {bookmark && (
                  <div
                    className="mypage-bookmark"
                    style={{
                      backgroundColor: bookmark.user.bookmark.color,
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
                <FavoriteBookstore data={bookmark.favorites[0]} />
              </div>
            )}
            {bookmark && (
              <div className="mypage-container">
                <div className="mypage-small-title">내가 쓴 후기</div>
                <MyReview data={bookmark.reviews[0]} />
              </div>
            )}
          </div>
        </div>
      </div>
    </>
  );
};

export default Mypage;
