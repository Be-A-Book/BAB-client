import React, { useState } from 'react';
import axios from 'axios';

const Map = () => {
    const [bookStore, setBookStore] = useState('');

    const getDetails = (data) => { //BookStore는 검색어... 같은 느낌이야, 전체를 다 불러올 때는 필요가 없어
        axios.get(`API_ENDPOINT + '/bookstore/${data}`).then((response) => {  //ENDPOINT 포트이름 변수 + 내가 요청할 주소
            if(response.data.success) {
                setBookStore(response.data);
                console.log("불러오기");
            } else {
                console.log("불러오기 실패");
            }
        });
    }

    return(
        <>
            <div>
            {bookStore.name}
            지도 페이지
            </div>
        </>
    )
}

export default Map;