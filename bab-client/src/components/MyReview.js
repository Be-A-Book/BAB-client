import React, { useEffect, useState } from "react";
import axios from "axios";
import "../css/MyReview.css";

const MyReview = ({ data }) => {
  console.log(data.store);

  const [bookStore, setBookstore] = useState("");

  useEffect(() => {
    axios({
      method: "post",
      url: `/api/bookstore/getBookstoreDetail`,
      data: {
        _id: "62dffd0708c904737340ae36", //"62c926a80ea12db83c87b5e9" id를 가진 store 필요 //data.store
      },
    }).then((response) => {
      if (response.data.success) {
        setBookstore(response.data);
        // console.log("불러오기");
        console.log(response.data);
        // console.log(response.data.bookstore.tags)
      } else {
        // console.log("불러오기 실패");
      }
    });
  }, []);

  return (
    <>
      <div className="MyReview">
        <div className="my-review-bookstore">
          {bookStore && bookStore.bookstore.name}
        </div>
        <div className="my-review-content">{data.content}</div>
      </div>
    </>
  );
};

export default MyReview;
