import React from "react";
import "../css/Bookcase.css";

const Bookcase = (book) => {
  var l = -8.3;

  console.log(book.book.books);

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
            <div
              className="bookcase-bookstore-books"
              key={booklist.bookid}
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
