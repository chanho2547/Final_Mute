import React, { useEffect } from "react";
import styled from "styled-components";
import { useState } from "react";
import { FaStar } from 'react-icons/fa';
import MuteApi from "../api/MuteApi";

// 내가 쓴 후기 - 도연

const ReviewBox = styled.div`
    padding: 10px;
    border: solid 0.5px lightgray;

    .title {
        color: #810000;
        font-size: large;
    }
    .MuName {
        font-size: large;
    }
    .myRaing {
        padding-left: 33px;
    }
    .text {
        padding: 10px;
    }
    .date {
        color: lightgray;
    }
`;

const MyMuReview = () => {

    const member = window.localStorage.getItem("whoLoginUserNum"); // 회원번호
    let musicalId = window.localStorage.getItem("musicalId"); // 뮤지컬번호

    const [reviewInfo, setReviewInfo] = useState("");

    // API 호출
    useEffect(() => {
        const reviewData = async () => {
          
            try {
                const response = await MuteApi.myReview(member);
                console.log("response.data : ", response.data);
                setReviewInfo(response.data);
            } catch (e) {  
                console.log(e + "실패!!!!!");
            }
        };
        reviewData(); 
    }, []);
    
    return(
        <>
        {reviewInfo && reviewInfo.map(e => ( 
            <ReviewBox>
                <p><b><span className="title">뮤지컬 후기 ｜</span><span className="MuName">{e.musicalName}</span></b><span className="date">　작성일 {e.writeDate}</span>　
                </p>
                <p className="myRaing">스토리 <FaStar size="15" color="#FCC419"/>{e.scoreStory} 　연출 <FaStar size="15" color="#FCC419"/>{e.scoreDirect} 　캐스팅 <FaStar size="15" color="#FCC419"/>{e.scoreCast} 　넘버 <FaStar size="15" color="#FCC419"/>{e.scoreNumber}<br/>
                <p className="text">{e.reviewMuTxt}</p>
                </p>
            </ReviewBox>
        ))} 
            


        </>
    );
}
export default MyMuReview;