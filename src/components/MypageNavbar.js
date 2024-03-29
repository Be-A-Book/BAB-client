import React, { useState, useEffect } from "react";
import axios from "axios";
import "../css/MypageNavbar.css";
import { Link } from "react-router-dom";

const MypageNavbar = () => {
  const [user, setUser] = useState("");
  const [id, setId] = useState();

  useEffect(() => {
    setId(localStorage.getItem("userId"));
  }, []);

  useEffect(() => {
    axios({
      method: "get",
      url: `https://beabook-server.herokuapp.com/api/users/getUserInfo/${
        id && id
      }`,
    }).then((response) => {
      setUser(response.data.userInfo && response.data.userInfo.user);
    });
  });

  return (
    <Link to="/mypage" className="nav-link">
      {user && (
        <div
          className="mypage-bookmark"
          style={{
            backgroundColor: user.bookmark?.color,
          }}
        ></div>
      )}
    </Link>
  );
};
export default MypageNavbar;
