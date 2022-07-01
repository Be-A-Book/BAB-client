import React, { useState, useEffect } from "react";


import HeartImg from "../img/heart.png";
import EmptyHeartImg from "../img/heart-empty.png";

const Heart = "Heart";

const HeartButton = ({ like, onClick }) => {
    return (
        <Heart src={like?HeartImg:EmptyHeartImg} onClick={onClick} />
    );
};

export default HeartButton;

// 동작 안 해서 수정 필요함