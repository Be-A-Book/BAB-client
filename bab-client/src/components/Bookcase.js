import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import "../css/Bookcase.css";

const Bookcase = (book) => {
  // console.log(book);
  const [bookStore, setBookStore] = useState("");
  const navigate = useNavigate();

  var l = -8.3;

  // console.log(book.book.books);

  function generateRandomCode() {
    var myRandomColor = "#" + Math.floor(Math.random() * 16777215).toString(16);
    l += 8.3;

    return myRandomColor;
  }

  //   book.book.books.map((el) => {
  //     axios({
  //       method: "post",
  //       url: `/api/bookstore/getBookstoreDetail`,
  //       data: {
  //         _id: el._id, //"62dffd0708c904737340ae36"
  //       },
  //     }).then((response) => {
  //       if (response.data.success) {
  //         setBookStore(response.data);
  //         console.log("불러오기");
  //         console.log(response.data);
  //         // console.log(response.data.bookstore.tags)
  //       } else {
  //         console.log("불러오기 실패");
  //       }
  //     });
  //   });
  // }, []);
  // useEffect(() => {

  function onClick(el) {
    new useEffect(() => {
      navigate("/detail", {
        state: { data: el },
      });
    }, []);
  }

  return (
    <>
      <div className="bookcase">
        <div className="bookcase-title">{book.book.district}</div>
        <div className="bookcase-content">
          {book.book.books.map((booklist) => (
            <div
              onClick={onClick(booklist._id)}
              className="bookcase-bookstore-books"
              key={booklist._id}
              style={{
                backgroundColor: generateRandomCode(),
                left: l + "%",
              }}
            >
              {booklist.content}
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default Bookcase;
