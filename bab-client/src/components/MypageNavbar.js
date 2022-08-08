import React, { useState, useEffect } from "react";
import axios from "axios";
import styled from "../css/MypageNavbar.css";
import { Link } from "react-router-dom";

const MypageNavbar = ({}) => {
  const [users, setUser] = useState("");

  //작성자 정보, 북마크
  useEffect(() => {
    axios({
      method: "get",
      url: `/api/users/getUserInfo/62dd295807f7364fbf4cd395`, //${data.writer}
    }).then((response) => {
      if (response.data.success) {
        setUser(response.data.userInfo);
      } else {
        console.log("불러오기 실패");
      }
    });
  }, []);

  return (
    <Link to="/mypage" className="nav-link">
      {/* <div className={styled.CardBlock}>우린 여기에 색을 넣을 거야</div> */}
      {users && (
              <div
                className="mypage-bookmark"
                style={{
                  backgroundColor: users.user?.bookmark?.color,
                }}
              ></div>
      )}
    </Link>
  );
};
export default MypageNavbar;
