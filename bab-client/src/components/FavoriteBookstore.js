import React, { Component } from "react";
import "../css/FavoriteBookstore.css";
import axios from "axios";

const FavoriteBookstore = ({ data }) => {
  console.log(data);
  console.log(data.store?.name);
  return (
    <>
      <div className="FavoriteBookstore">
        <div className="favorite-bookstore-name">{data.store?.name}</div>
        {/* <div className="favorite-bookstore-name">ㅁㅁ서점</div>
        <div className="favorite-bookstore-name">ㅎㅎ서점</div> */}
      </div>
    </>
  );
};

export default FavoriteBookstore;
