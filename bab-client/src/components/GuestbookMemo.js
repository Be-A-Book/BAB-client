import React from 'react';
import '../css/GuestbookMemo.css'

const GuestBookMemo = (data) => {
    console.log('게스트북 메모')
    console.log(data.data)
    return(
        <div className="guestbookmemo">
            {data.data && data.data.writer?.name}
            {data.data && data.data.message}
        </div>
    )
}

export default GuestBookMemo;