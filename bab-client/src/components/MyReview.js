import React, { useEffect, useState } from "react";
import axios from "axios";
import "../css/MyReview.css";

const MyReview = ({ data }) => {
  const [bookStore, setBookstore] = useState("");
  const [bookStoreId, setBookstoreId] = useState("");
  const [datas, setData] = useState("");
  const [state, setState] = useState(false);
  const [id, setId] = useState();

  useEffect(()=> {
    if (data.length === 0) {
      setData("작성한 리뷰 없음")
      setState(false)
    } else {
      setData(data)
      setState(true)
    }
  })  



  function ReviewNo() {
    return(
      <div className="my-review-bookstore">
      {datas && datas}
      </div>
    )
  }

  function ReviewYes() {

    return(
      <>
      {datas && datas.map((Review) => (
      <>
      <div className="my-review-bookstore">
        {Review && Review.store?.name}
      </div>
      <div className="my-review-content">{Review && Review.content}
      </div> 
      </>
      ))}

    </>
    )
  }

  let MyReview = null;

  if(state === true) {
    MyReview = ReviewYes()
  } else {
    MyReview = ReviewNo()
  }

  return (
    <>
      <div className="MyReview">
      {MyReview}
      </div>
    </>
  );
};

export default MyReview;
