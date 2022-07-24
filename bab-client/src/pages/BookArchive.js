import React from "react";
import { AiFillCaretLeft } from "react-icons/ai";
import { AiFillCaretRight } from "react-icons/ai";
import "../css/BookArchive.css";
import Bookcase from "../components/Bookcase";
import bookcasedata from "../data/bookcaseData.json";

const BookArchive = () => {
  return (
    <>
      <div className="bookArchive">
        <div className="arrow-keys">
          {/* 왼쪽 방향키 */}
          <button className="bookArchive-left-button">
            <AiFillCaretLeft className="bookArchive-left-button-icon" />
          </button>
          {/* 오른쪽 방향키 */}
          <button className="bookArchive-right-button">
            <AiFillCaretRight className="bookArchive-right-button-icon" />
          </button>
        </div>
        <div className="bookArchive-content">
          {bookcasedata.map((book) => (
            <Bookcase book={book} />
          ))}
        </div>
      </div>
    </>
  );
};

export default BookArchive;
