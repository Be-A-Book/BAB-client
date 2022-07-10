import React from "react";
import "../css/MainBookstore.css";
import image from "../img/bab_black.png";
import heart from "../img/heart.png";
import stamp from "../img/stamp.png";

const MainBookstore = () => {
    return (
    <>
        <div className="MainBookstore">
            <div className="main-book-hashtag">
                #아늑한 #조용한 #헌책방
            </div>
            <div className="main-bookarea">
                <div className="main-book-image">
                    <img alt="서점 이미지" src={image} width="360px" height="360px"/>
                </div>
                <div className="main-book-textarea">
                    <div className="main-book-container">
                        <div className="main-book-small-title-row">
                            소개
                        </div>
                        <div className="main-book-text">
                            어쩌구 저쩌구 ~~~~
                        </div>
                    </div>
                    <div className="main-book-container">
                        <div className="main-book-small-title-row">
                            주소
                        </div>
                        <div className="main-book-text">
                            서울특별시 00구 00동~~
                        </div>
                    </div>
                </div>
                <div className="main-book-contentarea">
                    <div className="main-book-stamp">
                        <img alt="스탬프 버튼" src={stamp} width="300px"/>
                        <div className="main-book-stamp-text">
                            00서점
                        </div>
                        
                    </div>
                    <div className="main-book-heart">
                        <img alt="하트 버튼" src={heart} width="30px" height="30px"/> {/*인프런 한번 더 확인*/}
                        7
                    </div>
                </div>
            </div>
        </div>
    </>
    );
};

export default MainBookstore;