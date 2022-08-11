import React, { Component, useEffect, useState } from "react";
import "../css/FavoriteBookstore.css";
import { Link } from "react-router-dom";

const FavoriteBookstore = ({ data }) => {
  const [datas, setData] = useState("");
  const [state, setState] = useState(false)

  useEffect(()=> {
    if (data.length === 0) {
      setData("좋아한 서점 없음")
      setState(false)
    } else {
      setData(data)
      setState(true)
    }
  })

  function BookNo() {
    return (
      <>
      <div className="favorite-bookstore-name">{datas}</div>
      </>
    )
  }

  function BookYes() {
    return (
      <>
      <div className="FavoriteBookstore">
      {datas && datas.map((Favbook) => (
            <Link to={"/detail"} state={{ data: Favbook.store && Favbook.store._id }}>
            <div className="favorite-bookstore-name">{Favbook.store.name}</div>
            </Link>
      ))} 
    </div>

      </>
    )
  }

  let FavBookStore = null;

  if(state === true) {
    FavBookStore = BookYes()
  } else {
    FavBookStore = BookNo()
  }

  return (
    <>
    {FavBookStore}
    </>
  );
};

export default FavoriteBookstore;