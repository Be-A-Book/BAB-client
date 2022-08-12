import React, {useState, useEffect} from "react";
import { Link } from "react-router-dom";
import "../css/Bookcase.css";

const Bookcase = (book) => {
  const [id, setId] = useState();
  const [bookstage, setBookstage] = useState();
  useEffect(()=> {
    setId(Math.floor(Math.random() * 10));
    setBookstage(book.book.bookcase[id])
  }, [book.book.bookcase, id, bookstage])

  var l = -8.3;

  function generateRandomCode() {
    var myRandomColor = "#" + Math.floor(Math.random() * 16777215).toString(16);
    l += 8.3;

    return myRandomColor;
  }

  return (
    <>
      {bookstage && bookstage.array.map((bookStage)=> <>
      <div className="bookcase">
        <div className="bookcase-title">{bookStage && bookStage.district}</div>
        <div className="bookcase-content">
          {bookStage && bookStage.books.map((booklist) => (
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
</>)}
        
    </>
  );
};

export default Bookcase;
