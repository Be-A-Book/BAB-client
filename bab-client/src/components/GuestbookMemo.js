import axios from 'axios';
import React, { useEffect, useState } from 'react';
import '../css/GuestbookMemo.css'

const GuestBookMemo = (data) => {
    const [bookmark, setBookmark] = useState();
    useEffect(()=> {
        axios({
            method: "post",
            url: `/api/users/getBookmark`,
            data: {
                email: `${data.data.writer && data.data.writer.email}`,
            }
        }).then((response) => {
            setBookmark(response.bookmark);
        });
    });

    return(
        <div className="guestbookmemo">
            <div className='guestbookmemoWriter'>
            {data.data && data.data.writer?.name}
            </div>
            <div>
            {data.data && data.data.message}
            </div>
            <div>
                {bookmark && (
                <div
                    className="guestbookBookmark"
                    style={{
                    backgroundColor: bookmark.color,
                    }}
                >bookmark</div>
                )}
            </div>
        </div>
    )
}

export default GuestBookMemo;