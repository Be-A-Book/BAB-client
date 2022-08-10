import React, { useEffect, useState } from "react";
import axios from "axios";
import "../css/MyReview.css";

const MyReview = ({ data }) => {
  const [bookStore, setBookstore] = useState("");

  useEffect(() => {
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

  return (
    <>
      <div className="MyReview">
        <div className="my-review-bookstore">
          {bookStore && bookStore.bookstore?.name}
        </div>
        <div className="my-review-content">{data[0].content}</div> 
        {/* map 처리해 줘야 함! */}
      </div>
    </>
  );
};

export default MyReview;
