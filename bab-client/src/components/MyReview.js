import React, { useEffect, useState } from "react";
import axios from "axios";
import "../css/MyReview.css";

const MyReview = ({ data }) => {
  const [bookStore, setBookstore] = useState("");
  const [datas, setData] = useState("");
  const [state, setState] = useState(false)

  useEffect(()=> {
    if (data.length === 0) {
      setData("작성한 리뷰 없음")
      setState(false)
    } else {
      setState(true)
      new useEffect(() => {
        axios({
          method: "post",
          url: `/api/bookstore/getBookstoreDetail`,
          data: {
            _id: data[0].store,
          },
        }).then((response) => {
          if (response.data.success) {
            setBookstore(response.data);
          } else {
          }
        });
      }, []);
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
      <div className="my-review-bookstore">
      {datas && datas}  
      </div>
      <div className="my-review-content">{data[0].content}
      </div> 
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
