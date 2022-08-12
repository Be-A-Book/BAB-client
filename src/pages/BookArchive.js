import React from "react";
import "../css/BookArchive.css";
import Bookcase from "../components/Bookcase";
import bookcasedata from "../data/bookcaseData.json";

const BookArchive = () => {
  return (
    <>
      <div className="bookArchive">
        <div className="bookArchive-content">
          {bookcasedata &&
            bookcasedata.map((book) => (
              <Bookcase
                book={
                  book && book.bookcase[Math.floor(Math.random() * 10)].array
                }
              />
            ))}
        </div>
      </div>
    </>
  );
};

export default BookArchive;
