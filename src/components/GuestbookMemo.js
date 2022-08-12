import '../css/GuestbookMemo.css'

const GuestBookMemo = (data) => {
    return(
        <div className="guestbookmemo">
            <div className='guestbookmemoWriter'>
            {data.data && data.data.writer?.name}
            </div>
            <div>
            {data.data && data.data.message}
            </div>
        </div>
    )
}

export default GuestBookMemo;