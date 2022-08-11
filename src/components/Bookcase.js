import React from "react";
import { Link } from "react-router-dom";
import "../css/Bookcase.css";

const Bookcase = (book) => {
  var l = -8.3;

  function generateRandomCode() {
    var myRandomColor = "#" + Math.floor(Math.random() * 16777215).toString(16);
    l += 8.3;

    return myRandomColor;
  }

  return (
    <>
      <div className="bookcase">
        <div className="bookcase-title">{book.book.district}</div>
        <div className="bookcase-content">
          {book.book.books.map((booklist) => (
            <Link to={"/detail"} state={{ data: booklist && booklist._id }}>
              <div
                className="bookcase-bookstore-books"
                key={booklist._id}
                style={{
                  backgroundColor: generateRandomCode(),
                  left: l + "%",
                }}
              >
                {booklist.content}
              </div>
            </Link>
          ))}
        </div>
      </div>
    </>
  );
};

export default Bookcase;
