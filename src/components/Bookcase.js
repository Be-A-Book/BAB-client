import React from "react";
import { Link } from "react-router-dom";
import "../css/Bookcase.css";

const Bookcase = (book) => {
  console.log(book.book);

  var l = -8.3;

  function generateRandomCode() {
    var myRandomColor = "#" + Math.floor(Math.random() * 16777215).toString(16);
    l += 8.3;

    return myRandomColor;
  }

  return (
    <>
      {book.book &&
        book.book.map((bookStage) => (
          <>
            <div className="bookcase">
              <div className="bookcase-title">
                {bookStage && bookStage.district}
              </div>
              {bookStage &&
                bookStage.books.map((booklist) => (
                  <div className="bookcase-content">
                    <Link
                      to={"/detail"}
                      state={{ data: booklist && booklist._id }}
                    >
                      <div
                        className="bookcase-bookstore-books"
                        id="bookcase-bookstore-books"
                        key={booklist._id}
                        style={{
                          backgroundColor: generateRandomCode(),
                          left: l + "%",
                        }}
                      >
                        {booklist.content}
                      </div>
                    </Link>
                  </div>
                ))}
            </div>
          </>
        ))}
    </>
  );
};

export default Bookcase;
