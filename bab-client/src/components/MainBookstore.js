import React from "react";
import "../css/MainBookstore.css";

const MainBookstore = () => {
    return (
    <>
        <div className="MainBookstore">
        <div className="detail-container">
            <div className="detail-small-title-row">
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
        </div>
    </>
    );
};

export default MainBookstore;