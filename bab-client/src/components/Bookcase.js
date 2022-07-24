import React from "react";
import "../css/Bookcase.css";
import bookcasedata from "../data/bookcaseData.json";

const Bookcase = () => {
  const title = bookcasedata.map((book) => book.district);
  console.log(bookcasedata.book.books);
  // const bookList = bookcasedata.books.map((el) => el.books);
  // console.log(bookcasedata.books[1].content); //bookcasedata[0].books[0].content
  // const bookList = bookcasedata.forEach(
  //   (value) => value.books //value.books[index]
  //   //list.books[list.length].bookid
  //   // <div className={list.books.bookid}>{list.books.content}</div>
  // );

  // console.log({ bookList });
  //const element = bookList.forEach((value, index) => console.log(value));

  return (
    <>
      <div className="bookcase">
        <div className="bookcase-title">
          <div>{title}</div>
        </div>
        <div className="bookcase-content"></div>
      </div>
    </>
  );
};

export default Bookcase;
