import axios from 'axios';
import React, { Component } from "react";
import "../css/DetailReview.css";
import logo from "../img/logo_wax2.png";

class DetailReview extends Component {
    state = {
        arr:[]
    };

    getMyData=async()=>{
        let retData = await axios.get("/api/review/getReviews/62c926a80ea12db83c87b5e9");
        retData = retData.data.reviews;
        this.setState({arr:retData});
    }

    componentDidMount() {
        this.getMyData();
    }

    render() {
        return (
            <div>
                {
                this.state.arr.map((review =>
                    <div className="review-card" key={review._id}>
                        <div className="review-card-image">
                            <img alt="프로필 아이콘" src={logo} width="60px" height="60px"/>
                        </div>
                        <div className="review-card-content">
                            <div className="review-card-top">
                                {review && review.writer.name}
                            </div>
                            <div className="review-card-bottom">
                                {review && review.content}
                            </div>
                        </div>
                    </div> ))
                }
            </div>
        );
    }
}

export default DetailReview;