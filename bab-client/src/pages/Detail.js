import React, {useState, useEffect} from 'react';
import "../css/Detail.css"
import axios from 'axios';
import logo from "../img/logo_wax2.png";
import image from "../img/bab_black.png";
import heart from "../img/heart.png";

const Detail = () => {    

    const [bookStore, setBookStore] = useState('');
    const [review, setReview] = useState('');

    useEffect (() => { 
        axios({
            method:"post",
            url:`/api/bookstore/getBookstoreDetail`,
            data: {
                "_id": "62d6935ed5649a098281cf65", //storekey 임의 지정
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

    useEffect (() => { 
        axios({
            method:"get",
            url:`/api/review/getReviews/62c926a80ea12db83c87b5e9`,
            
        })
        .then((response) => {  
            if(response.data.success) {
                setReview(response.data);
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
                    { bookStore && bookStore.bookstore.name}
                </div>
                <div className="detail-container-2">
                    <div className="detail-small-title-column">
                        소개
                    </div>
                    <div className="detail-text">
                        { bookStore && bookStore.bookstore.introduction} 
                    </div>
                </div>
                <div className="detail-container">
                    <div className="detail-small-title-row">
                        주소
                    </div>
                    <div className="detail-text">
                        { bookStore && bookStore.bookstore.address}
                    </div>
                </div>
                <div className="detail-container">
                    <div className="detail-small-title-row">
                        운영시간
                    </div>
                    <div className="detail-text">
                        { bookStore && bookStore.bookstore.operation}
                    </div>
                </div>
                <div className="detail-container">
                    <div className="detail-small-title-row">
                        휴무일
                    </div>
                    <div className="detail-text">
                        { bookStore && bookStore.bookstore.holiday}
                    </div>
                </div>
                <div className="detail-container">
                    <div className="detail-small-title-row">
                        웹사이트
                    </div>
                    <div className="detail-text">
                        { bookStore && bookStore.bookstore.website}
                    </div>
                </div>
            </div>
            {/* 세부 내용 우측 */}
            
            <div className="detail-content-right">
                <div className="heart">
                    <img alt="하트 버튼" src={heart} width="30px" height="30px"/> {/*인프런 한번 더 확인*/}
                    7
                </div>
                <div className="image">
                    <div className="image-image">
                    <img alt="서점 이미지" src={image} width="360px" height="360px"/> {/* image 불러오기 불가능, 임의 수정 bookStore && bookStore.bookstore.defaultImage */}
                    </div>
                    <div className="image-text">
                    { bookStore && bookStore.bookstore.tags[0].name} {/* array 개수 받아와서 tags에 임의 수정 필요 */}
                    </div>
                </div>
            </div>
            {/* 방문 후기 */}
            <div className="review">
                <div className="detail-review">
                    방문후기
                </div>
                <div className="review-card">
                    <div className="review-card-image">
                        <img alt="프로필 아이콘" src={logo} width="60px" height="60px"/>
                    </div>
                    <div className="review-card-content">
                        <div className="review-card-top">
                        { review && review.reviews[0].writer.name}
                        </div>
                        <div className="review-card-bottom">
                        { review && review.reviews[0].content}
                        </div>
                    </div>
                </div>
                <div className="review-card">
                    <div className="review-card-image">
                        <img alt="프로필 아이콘" src={logo} width="60px" height="60px"/>
                    </div>
                    <div className="review-card-content">
                        <div className="review-card-top">
                        { review && review.reviews[1].writer.name}
                        </div>
                        <div className="review-card-bottom">
                        { review && review.reviews[1].content}
                        </div>
                    </div>
                </div>
            </div>
        </div>
        </>
    )
}

export default Detail;