import React, { Component, useEffect, useState } from "react";
import "../css/FavoriteBookstore.css";
import axios from "axios";

const FavoriteBookstore = ({ data }) => {
  const [datas, setData] = useState("");
  useEffect(()=> {
    if (data.length === 0) {
      setData("좋아한 서점 없음")
    } else {
      setData(data[0].store?.name)
    }
  })

  return (
    <>
      <div className="FavoriteBookstore">
        <div className="favorite-bookstore-name">{datas}</div>
        {/* map 처리 필요*/}
      </div>
    </>
  );
};

export default FavoriteBookstore;
