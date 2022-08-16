import React, { useState } from "react";
import "../css/Searchbar.css";
import search from "../img/search.png";
import axios from "axios";
import { Formik } from "formik";

const Searchbar = () => {
  const [searchValue, setSearch] = useState("");

  const onChangeSearch = (e) => {
    e.preventDefault();
    setSearch(e.target.value);
  };

  const onSearchPress = (e) => {
    e.preventDefault();
    console.log(e);
    if (e.key === "Enter") {
      onSearch();
    }
  };

  const onSearch = (e) => {
    axios.get(
      `https://beabook-server.herokuapp.com/api/bookstore/search?keyword=${searchValue}`
    );
  };

  return (
    <Formik
      initialValues={{
        searchValue: "",
      }}
      onSubmit={onSearch}
    >
      {({ values, onSearch, onChangeSearch }) => (
        <div className="form">
          <form onSubmit={onSearch} onKeyDown={onSearchPress}>
            <div className="searchbar">
              <img
                src={search}
                alt="검색 돋보기"
                width="40px"
                height="40px"
                style={{ paddingLeft: "20px", paddingRight: "20px" }}
              />
              <input
                placeholder="검색어를 입력하세요"
                type="text"
                value={values.searchValue}
                onChange={onChangeSearch}
              />
            </div>
            <div>
              <button type="submit" className="create-button">
                검색
              </button>
            </div>
          </form>
        </div>
      )}
    </Formik>
  );
};

export default Searchbar;
