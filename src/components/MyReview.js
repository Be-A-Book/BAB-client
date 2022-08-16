import React, { useEffect, useState } from "react";
import "../css/MyReview.css";

const MyReview = ({ data }) => {
  const [datas, setData] = useState("");
  const [state, setState] = useState(false);

  useEffect(()=> {
    if (data.length === 0) {
      setData("작성한 리뷰 없음")
      setState(false)
    } else {
      setData(data)
      setState(true)
    }
  }, [data])  



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
      <div key={Review && Review._id}>
      <div className="my-review-bookstore">
        {Review && Review.store?.name}
      </div>
      <div className="my-review-content">{Review && Review.content}
      </div> 
      </div>
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
