import React from "react";
import "../css/BookArchive.css";
import Bookcase from "../components/Bookcase";
import bookcasedata from "../data/bookcaseData.json";

const BookArchive = () => {
  const randomNum = Math.floor(Math.random() * 10);
  return (
    <>
      <div className="bookArchive">
        <div>
          {bookcasedata &&
            bookcasedata.map((book) => (
              <div className="bookArchive-content">
                <div className="bookcase-top">
                  <Bookcase book={book && book.bookcase[randomNum]?.array[0]} />
                  <Bookcase book={book && book.bookcase[randomNum]?.array[1]} />
                </div>
                <div className="bookcase-bottom">
                  <Bookcase book={book && book.bookcase[randomNum]?.array[2]} />
                  <Bookcase book={book && book.bookcase[randomNum]?.array[3]} />
                </div>
              </div>
            ))}
        </div>
      </div>
    </>
  );
};

export default BookArchive;
