import axios from 'axios';
import React, { useEffect } from 'react';
import "../css/BookmarkTestResult.css"
import bookmarkData from "../data/bookmarkData.json";

const BookmarkTestResult = (props) => {
    console.log(props)
    const data = bookmarkData[props.number]
    console.log(data)

    
    useEffect(() => {
        axios({
            method: "post",
            url: `api/users/selectBookmark`,
            data: {
                "email" : "yuz@gmail.com",
                "bookmark" : data.id,
            }
        })
    })
    return (
        <>
        <div className='bookmarkResult'>
            <div className = "myBookmark"> 
                <div className = {`bookmarkChoice${props.number+1}`}/>
                <div className='bookmarkResultText'>
                    <br /> 
                    {data.content1} <br /> <br />
                    {data.content2} <br />
                    {data.content3} <br /> <br />
                    {data.content4} <br />
                    {data.content5}
                </div>
            </div>
        </div>
        </>
    )
}

export default BookmarkTestResult;