import React, { useState, useEffect } from "react";
import GuestBookMemo from '../components/GuestbookMemo';
import "../css/Guestbook.css";
import reviewBook from "../img/review_book.png";
import axios from 'axios';
import { AiFillCaretLeft } from "react-icons/ai";
import { AiFillCaretRight } from "react-icons/ai";
import { FaPencilAlt } from "react-icons/fa";
import {toast, ToastContainer} from "react-toastify";
import { useNavigate } from 'react-router-dom';
import {Formik, ErrorMessage} from "formik";

import "react-toastify/dist/ReactToastify.css";

const GuestBook = () => {
    const navigate = useNavigate();
    const [currentClick, setCurrentClick] = React.useState(null);
    const [prevClick, setPrevClick] = React.useState(null);

    const GetClick = (e) => {
        setCurrentClick(e.target.id);
    };
    const submit = async (values) => {
        const { content } = values || {}
        axios({
            method:"post",
            url:`api/guestbook/postMessage`,
            data: {
                message : content,
                writer : "62b5efe8bf450852ff3d2389"
            }
        }).then((response) => {
            if(response.data.success === true){
                console.log(response.data)
                toast.success(<div className='toast'>방명록이 정상적으로 등록되었습니다!</div>, {
                    position: "top-center",
                    autoClose: 2000
                });
            } else {
                console.log(response.data)
                toast.error(<div className='toast'>방명록 등록에 실패하였어요 😭</div>, {
                    position: "top-center",
                });
            } 
    }) 
    }

    // function check_length(area){
    //     var text = area.value;
    //     var text_length = text.length;

    //     var max_length = 180;

    //     if (text_length > max_length){
    //         alert(max_length+"자 이상 입력할 수 없습니다.")
    //         text = text.substr(0, max_length);
    //         area.value = text;
    //         area.focus();
    //     }
    // }

    return (
        <Formik
        initialValues={{
            content: "",
            writer: "",
        }}
        onSubmit={submit}
        > 
        {({values, handleSubmit, handleChange}) => ( <div className="guestbook">
                <div className="guestbook-title">
                    누군가의 흔적
                </div>
                <div className="guestbook-write">
                <ToastContainer/>
                <form onSubmit={handleSubmit}>
                    <textarea
                        type="content"
                        name="content"
                        id="guestbook-write-input"
                        placeholder='공백 포함 180자까지 작성 가능'
                        value={values.content}
                        onChange={handleChange}
                        // onKeyUp={check_length}
                    />
                    <button type="submit" className="guestbook-write-button" >
                    <FaPencilAlt className="guestbook-write-button-icon" />
                        <div className="guestbook-write-button-text">등록</div>
                    </button>
                </form>
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
            )}
        </Formik>
    );
};

export default GuestBook;