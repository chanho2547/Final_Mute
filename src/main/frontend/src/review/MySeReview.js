import { useState } from "react";
import MuteApi from "../api/MuteApi";
import styled from "styled-components";
import React, { useEffect } from "react";
import { FaStar } from 'react-icons/fa';

const ReviewSeContainer = styled.div`
    padding: 10px;
    border: solid 0.5px lightgray;
`;

const MySeReview = () => {
    const userNum = window.localStorage.getItem("whoLoginUserNum"); // 회원번호
    const [reviewSe, setReviewSe] = useState("");

    useEffect(() => {
        const reviewSeData = async () => {
          
            try {
                const response = await MuteApi.myReviewSeat(userNum);
                console.log("response.data : ", response.data);
                setReviewSe(response.data);
            } catch (e) {  
                console.log(e + "실패!!!!!");
            }
        };
        reviewSeData(); 
    }, []);


    return(
        <>
        {reviewSe && reviewSe.map(e => (
            <ReviewSeContainer>
                <p><b><span className="title">좌석 후기 ｜</span><span className="SeName">{e.theaterName}</span></b><span className="date">　작성일 {e.writeDate}</span>　
                <button className="deleteBtn">삭제</button></p>
                <p className="myRating">좌석 <FaStar size="15" color="#FCC419"/>{e.scoreSeat} 　음향 <FaStar size="15" color="#FCC419"/>{e.scoreSound} 　시야 <FaStar size="15" color="#FCC419"/>{e.scoreView} 　조명 <FaStar size="15" color="#FCC419"/>{e.scoreLight}<br/></p>
                <p className="text">
                    <span className={e.reviewSeTxt}>{e.reviewSeTxt.substring(30)}</span>
                </p>
            </ReviewSeContainer>
        ))}
        
        </>
    )
}
export default MySeReview;