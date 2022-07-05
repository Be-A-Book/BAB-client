import React from "react";
import styled from "../css/MypageNavbar.css";
import { Link } from "react-router-dom";

const MypageNavbar = ({}) => {
  return (
    <Link to="/mypage" className="nav-link">
      <div className={styled.CardBlock}>우린 여기에 색을 넣을 거야</div>
    </Link>
  );
};
export default MypageNavbar;
