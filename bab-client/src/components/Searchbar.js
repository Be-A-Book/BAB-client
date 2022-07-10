import React from 'react';
import '../css/Searchbar.css';
import search from '../img/search.png'

const Searchbar = ({value, onChange, onCreate, onKeyPress}) => {
return (
    <div className="form">
        <div className="searchbar">
            <img src={search} alt="검색 돋보기" width="40px" height="40px" style={{paddingLeft: "20px", paddingRight: "20px"}} />
            <input placeholder="검색어를 입력하세요" value={value} onChange={onChange} onKeyPress={onKeyPress}/>
        </div>
        <div className="create-button" onClick={onCreate}>
            검색
        </div>
    </div>
    );
};

export default Searchbar;