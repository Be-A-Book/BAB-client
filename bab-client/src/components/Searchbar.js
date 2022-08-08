import React, {useState} from 'react';
import '../css/Searchbar.css';
import search from '../img/search.png';
import axios from "axios";

const Searchbar = () => {
    const [searchValue, setSearch] = useState("");

    const onChangeSearch = (e) => {
        e.preventDefault();
        setSearch(e.target.value);
    }

    const onSearch = (e) => {
            const response = axios.get(`/api/bookstore/search?keyword=${searchValue}`);
            console.log(response)
    }


return (
    <div className="form">
        <div className="searchbar">
            <img src={search} alt="검색 돋보기" width="40px" height="40px" style={{paddingLeft: "20px", paddingRight: "20px"}} />
            <input placeholder="검색어를 입력하세요" value={searchValue} onChange={onChangeSearch}/>
        </div>
        <div className="create-button" onClick={onSearch}>
            검색
        </div>
    </div>
    );
};

export default Searchbar;