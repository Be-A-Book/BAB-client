import React, { useState, useEffect } from "react";
import GuestBookMemo from '../components/GuestbookMemo';
import "../css/Guestbook.css";
import reviewBook from "../img/review_book.png";
import axios from 'axios';
import { AiFillCaretLeft } from "react-icons/ai";
import { AiFillCaretRight } from "react-icons/ai";
import { FaPencilAlt } from "react-icons/fa";

const GuestBook = () => {
    const [currentClick, setCurrentClick] = React.useState(null);
    const [prevClick, setPrevClick] = React.useState(null);

    const GetClick = (e) => {
        setCurrentClick(e.target.id);
    };

    React.useEffect(
        (e) => {
        if (currentClick !== null) {
            const current = document.getElementById(currentClick);
            current.style.color = "white";
            current.style.backgroundColor = "#005412";
        }
    
        if (prevClick !== null) {
            const prev = document.getElementById(prevClick);
            prev.style.color = "#000";
            prev.style.backgroundColor = "#91B1A1";
        }
        setPrevClick(currentClick);
        },
        [currentClick],
        
        axios({
        method:"get",
        url:`/api/review/getReviews`,
        params: {
            "store": "62c926a80ea12db83c87b5e9", //storekey 임의 지정
        }
        }).then((response) => {  
        if(response.data.success) {
            console.log("불러오기");
            console.log(response.data)
        } else {
            console.log("불러오기 실패");
        }
    })
    );

    function check_length(area){
        var text = area.value;
        var text_length = text.length;

        var max_length = 180;

        if (text_length > max_length){
            alert(max_length+"자 이상 입력할 수 없습니다.")
            text = text.substr(0, max_length);
            area.value = text;
            area.focus();
        }
    }

    return (
        <>
            <div className="guestbook">
                <div className="guestbook-title">
                    누군가의 흔적
                </div>

                <div className="guestbook-write">
                    <textarea
                        type="address"
                        name="address"
                        id="guestbook-write-input"
                        placeholder='공백 포함 180자까지 작성 가능'
                        onKeyUp={check_length}
                    />
                </div>
                <div className="guestbook-container">
                    <img alt="리뷰" src={reviewBook} width="1500vh" height="600vh" />
                    <div className="guestbook-container-memo-left">
                    <GuestBookMemo />
                    <GuestBookMemo />
                    <GuestBookMemo />
                    <GuestBookMemo />
                    </div>
                    <div className="guestbook-container-memo-right">
                    <GuestBookMemo />
                    <GuestBookMemo />
                    <GuestBookMemo />
                    <GuestBookMemo />
                    </div>
                    <div className="guestbook-arrow-keys">
                        {/* 왼쪽 방향키 */}
                        <button className="guestbook-left-button">
                            <AiFillCaretLeft className="guestbook-left-button-icon" />
                            <div className="guestbook-left-button-text">이전</div>
                        </button>
                        {/* 오른쪽 방향키 */}
                        <button className="guestbook-right-button">
                            <div className="guestbook-right-button-text">다음</div>
                            <AiFillCaretRight className="guestbook-right-button-icon" />
                        </button>
                    </div>
                </div>
            </div>
        </>
    )
}

export default GuestBook;