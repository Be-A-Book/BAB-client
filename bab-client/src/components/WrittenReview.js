import React, { useState, useEffect } from "react";
import "../css/WrittenReview.css";
import axios from "axios";
import logo from "../img/logo_wax2.png";
import thumbUp from "../img/thumb_up.png";

const WrittenReview = ({ data }) => {
  // console.log(data.writer);
  const [users, setUser] = useState("");
  const [bookStore, setBookStore] = useState("");

  //작성자 정보, 북마크
  useEffect(() => {
    axios({
      method: "get",
      url: `/api/users/getUserInfo/${data.writer?._id}`, //${data.writer}
    }).then((response) => {
      if (response.data.success) {
        console.log("리뷰-작성자 정보 불러오기 성공");
        setUser(response.data.userInfo);
        console.log(response.data);
      } else {
        console.log("리뷰-작성자 정보 불러오기 실패");
      }
    });
  }, []);

  // 서점 정보
  useEffect(() => {
    axios({
      method: "post",
      url: `/api/bookstore/getBookstoreDetail`,
      data: {
        _id: data.store,
      },
    }).then((response) => {
      if (response.data.success) {
        setBookStore(response.data);
        console.log("리뷰-서점 정보 불러오기 성공");
        console.log(response.data);
      } else {
        console.log("리뷰-서점 정보 불러오기 실패");
      }
    });
  }, []);

  return (
    <>
      <div className="writtenReview">
        <div className="review-background">
          <div className="content-left">
            <div className="review-bookstore-name">
              {bookStore && bookStore.bookstore?.name}
            </div>
            <div>
              <img
                className="review-bookstore-image"
                src={bookStore && bookStore.bookstore?.defaultImage}
                alt="서점 사진"
                height="75%"
              />
            </div>
            {/* <div className="bookstore-keyword1">              
            </div> */}
            <div className="bookstore-keyword">
              {bookStore &&
                bookStore.bookstore?.tags.map((tag, index) => (
                  <div className="bookstore-tags" key={index}>
                    {" "}
                    #{tag}{" "}
                  </div>
                ))}
            </div>
          </div>
          <div className="content-right">
            {users && (
              <div
                className="review-writer-bookmark"
                style={{
                  backgroundColor: users.user?.bookmark?.color,
                }}
              ></div>
            )}
            <div className="review-address">
              {bookStore && bookStore.bookstore?.address}
              {/* <br />
              상세주소 */}
            </div>
            <div className="review-writer">
              <div className="review-profile">
                <img
                  alt="작성자 프로필"
                  src={logo}
                  width="35px"
                  height="35px"
                />
              </div>
              <div className="writer-content">
                <div className="review-writer-name">
                  {users && users.user?.name}
                </div>
                <div className="review-date">{data.createdAt}</div>
              </div>
            </div>
            <div className="review-content">{data.content}</div>
            <div className="tumbUp">
              <img src={thumbUp} alt="엄지 버튼" width="20px" height="20px" />
              <div className="tumb-number">5</div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default WrittenReview;
