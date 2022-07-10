import React from 'react';
import "../css/Home.css"
import SearchBar from '../components/Searchbar';
import MainBookstore from '../components/MainBookstore';
const Home = () => {
    return(
        <>
            <div className="home">
                <div className="top">
                    <div className="top-image">
                        <div className="top-text">
                        각자의 장소에서 서로에게 문득 
                        <br/>“지금 뭐 해요?”라고 말을 건넸습니다.
                        </div>
                        <div className="top-button">
                            도서 확인하러 가기
                        </div>
                    </div>
                </div>
                <div className="search">
                    <SearchBar />
                </div>
                <div className="bookstore">
                    <MainBookstore />
                </div>
            </div>
        </>
    )
}

export default Home;