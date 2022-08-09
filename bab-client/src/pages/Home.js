import React, { useState } from 'react';
import axios from "axios";
import "../css/Home.css"
import MainBookstore from '../components/MainBookstore';
import { Link } from 'react-router-dom';
import '../css/Searchbar.css';
import search from '../img/search.png';
import SearchBookstore from '../components/SearchBookstore';

const Home = () => {
    const [searchValue, setSearch] = useState("");
    const [props, setProps] = useState();
    const [visible, setVisible] = useState(false);
    const [btnVisible, setBtnVisible] = useState(true);

    const onChangeSearch = (e) => {
        e.preventDefault();
        setSearch(e.target.value);
    }

    const onSearch = (e) => {
        axios({
            method: "get",
            url: `/api/bookstore/search?keyword=${searchValue}`
        }).then((response) => {
            console.log(response)
            setProps(response.data.bookstore);
            setVisible(!visible);
            setBtnVisible(!btnVisible);
        })
    }

    return(
        <>
            <div className="home">
                <div className="top">
                    <div className="top-image">
                        <div className="top-text">
                        모퉁이에서 모퉁이로, 그리고 또 <br />
                        또다른 모퉁이를 만들어내는, 무한한
                        </div>
                        <div className="top-button">
                            <a href="https://cornerlog.herokuapp.com/" className="top-button">
                            Corner ; [|kɔːrnə(r)]
                            </a>
                        </div>
                    </div>
                </div>
                <div className="search">
                <div className="form">
                    <div className="searchbar">
                        <img src={search} alt="검색 돋보기" width="40px" height="40px" style={{paddingLeft: "20px", paddingRight: "20px"}} />
                        <input placeholder="검색어를 입력하세요" value={searchValue} onChange={onChangeSearch}/>
                    </div>
                    <div className="create-button" onClick={onSearch}>
                        검색
                    </div>
                </div>
                </div>
                <div className="bookstore">
                    { btnVisible && <MainBookstore />}
                    {visible && <SearchBookstore props={props}/>}
                </div>
            </div>
        </>
    )
}

export default Home;