import axios from 'axios';
import React, { useEffect,useState } from 'react';
import "../css/BookmarkTestResult.css"
import bookmarkData from "../data/bookmarkData.json";

const BookmarkTestResult = (props) => {
    const data = bookmarkData[props.number];
    const [email, setEmail] = useState();

    useEffect(() => {
        axios({
            method: "get",
            url: `/api/users/auth`,
        }).then((response) => {
            setEmail(response.data.email)
            console.log(email)
        })
    });
    
    useEffect(() => {
        axios({
            method: "post",
            url: `/api/users/selectBookmark`,
            data: {
                "email" : email && email,
                "bookmark" : data.id,
            }
        })
    });
    
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