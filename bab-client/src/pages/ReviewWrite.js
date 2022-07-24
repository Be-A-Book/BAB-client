import React, { useState, useEffect } from "react";
import "../css/ReviewWrite.css";


const ReviewWrite = () => {
return (
    <>
    <div className="write">
        <div className="write-book">
            <div className="write-text">
                <div className="write-text-head">
                Make A Review
                </div>
                <div className="write-text-container">
                    <div className="write-text-title">
                        서점 이름
                    </div>
                    <form className="write-text-input">
                        <input
                            type="name"
                            name="name"
                            id="write-text-input"
                        />
                    </form>
                </div>
                <div className="write-text-container">
                    <div className="write-text-title">
                        서점 주소
                    </div>
                    <form className="write-text-input">
                        <input
                            type="address"
                            name="address"
                            id="write-text-input"
                        />
                    </form>
                </div>

                <div className="write-text-container">
                    <div className="write-text-title">
                        방문 후기
                    </div>
                    <form className="write-text-input-content">
                        <textarea
                            type="address"
                            name="address"
                            id="write-text-input-content"
                        />
                    </form>
                </div>
                <div className="write-text-container">
                    <div className="write-text-title">
                        서점 사진
                    </div>
                    <form className="write-text-input">
                            <input
                                type="address"
                                name="address"
                                id="write-text-input"
                            />
                    </form>
                </div>
                <div className="write-text-container">
                    <div className="write-text-title">
                        서점 키워드
                    </div>
                    <form className="write-text-input">
                            <input
                                type="address"
                                name="address"
                                id="write-text-input"
                            />
                    </form>
                </div>
                <button className="write-submit-button">
                    <div className="write-submit-button-text">
                    제출하기
                    </div>                    
                </button>
            </div>
        </div>
        <div className="write-image-paper"></div>
        <div className="write-image-pen"></div>
    </div>
    </>
);
};

export default ReviewWrite;