import React from 'react';
import "../css/Home.css"
import SearchBar from '../components/Searchbar';
import MainBookstore from '../components/MainBookstore';
import { Link } from 'react-router-dom';
const Home = () => {
    return(
        <>
            <div className="home">
                <div className="top">
                    <div className="top-image">
                        <div className="top-text">
                        모퉁이에서 모퉁이로, 그리고 또 <br />
                        또다른 모퉁이를 만들어내는, 무한한
                        </div>
                        <div className="top-button">
                            <a href="https://cornerlog.herokuapp.com/" className="top-button">
                            Corner ; [|kɔːrnə(r)]
                            </a>
                        </div>
                    </div>
                </div>
                <div className="search">
                    <SearchBar />
                </div>
                <div className="bookstore">
                    {/* <MainBookstore /> */}
                </div>
            </div>
        </>
    )
}

export default Home;