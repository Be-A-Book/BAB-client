import React, { useState, useEffect } from "react";
import "../css/ReviewWrite.css";


const ReviewWrite = () => {
return (
    <>
    <div className="write">
        <div className="write-book">
        <div className="write-text">
        Make A Review
        서점 이름
        서점 주소
        방문 후기
        서점 사진
        서점 키워드
        </div>
        </div>
        <div className="write-image-paper"></div>
        <div className="write-image-pen"></div>
    </div>
    </>
);
};

export default ReviewWrite;