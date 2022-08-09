import React from 'react';
import '../css/GuestbookMemo.css'

const GuestBookMemo = (data) => {
    return(
        <div className="guestbookmemo">
            {data.data && data.data.writer?.name}
            {data.data && data.data.message}
        </div>
    )
}

export default GuestBookMemo;