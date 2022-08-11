import React, { Component } from "react";
import "../css/FavoriteBookstore.css";
import axios from "axios";

const FavoriteBookstore = ({ data }) => {
  console.log(data)
  return (
    <>
      <div className="FavoriteBookstore">
        {/* <div className="favorite-bookstore-name">{data[0].store?.name}</div> */}
        {/* map 처리 필요*/}
      </div>
    </>
  );
};

export default FavoriteBookstore;
