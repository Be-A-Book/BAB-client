import React, {useState, useEffect} from 'react';
import {Link} from 'react-router-dom';
import "../css/Detail.css"
import axios from 'axios';
import logo from "../img/logo_wax2.png";
import image from "../img/bab_black.png";
import heart from "../img/heart.png";

const Detail = () => {    
    const [bookStore, setBookStore] = useState('');

    useEffect (() => { 
        axios({
            method:"post",
            url:`/api/bookstore/getBookstoreDetail`,
            params: {
                "store": "62c926a80ea12db83c87b5e9", //storekey 임의 지정
            }
        })
        .then((response) => {  
            if(response.data.success) {
                setBookStore(response.data);
                console.log("불러오기");
                console.log(response.data)
            } else {
                console.log("불러오기 실패");
            }
        });
    }, []);

    return(
        <>
        <div className="detail">
            {/* 세부 내용 좌측 */}
            <div className="detail-content-left">
                <div className="detail-big-title">
                    제목
                </div>
                <div className="detail-container-2">
                    <div className="detail-small-title-column">
                        소개
                    </div>
                    <div className="detail-text">
                        어쩌구 저쩌구 ~~~~
                    </div>
                </div>
                <div className="detail-container">
                    <view className="detail-small-title-row">
                        주소
                    </view>
                    <view className="detail-text">
                        서울특별시 00구 00동~~
                    </view>
                </div>
                <div className="detail-container">
                    <view className="detail-small-title-row">
                        운영시간
                    </view>
                    <view className="detail-text">
                        월-토 00:00~00:00
                    </view>
                </div>
                <div className="detail-container">
                    <view className="detail-small-title-row">
                        휴무일
                    </view>
                    <view className="detail-text">
                        일요일
                    </view>
                </div>
            </div>
            {/* 세부 내용 우측 */}
            
            <div className="detail-content-right">
                <div className="heart">
                    <img alt="하트 버튼" src={heart} width="30px" height="30px"/> {/*인프런 한번 더 확인*/}
                    7
                </div>
                <div className="image">
                    <view className="image-image">
                    <img alt="서점 이미지" src={image} width="360px" height="360px"/>
                    </view>
                    <div className="image-text">
                        #아늑한 #조용한 #헌책방
                    </div>
                </div>
            </div>
            {/* 방문 후기 */}
            <div className="review">
                <view className="detail-review">
                    방문후기
                </view>
                <div className="review-card">
                    <div className="review-card-image">
                        <img alt="프로필 아이콘" src={logo} width="60px" height="60px"/>
                    </div>
                    <div className="review-card-content">
                        <view className="review-card-top">
                            작성자
                        </view>
                        <view className="review-card-bottom">
                            작성자 후기~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
                        </view>
                    </div>
                </div>
            </div>
        </div>
        </>
    )
}

export default Detail;