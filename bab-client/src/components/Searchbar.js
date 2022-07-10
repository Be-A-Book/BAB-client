import React from 'react';
import '../css/Searchbar.css';

const Searchbar = ({value, onChange, onCreate, onKeyPress}) => {
return (
    <div className="form">
    <input placeholder="검색어를 입력하세요" value={value} onChange={onChange} onKeyPress={onKeyPress}/>
    <div className="create-button" onClick={onCreate}>
        검색
    </div>
    </div>
    );
};

export default Searchbar;