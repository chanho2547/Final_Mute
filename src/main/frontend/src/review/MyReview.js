import React, { useEffect } from "react";
import styled from "styled-components";
import { useState } from "react";
import { FaStar } from 'react-icons/fa';
import { BiLike } from 'react-icons/bi';
import { BiDislike } from 'react-icons/bi';
import MuteApi from "../api/MuteApi";
import Modal from "../util/Modal";


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
    .deleteBtn {
        border-radius: 5px;
        border: solid 0.5px lightgray;
        background-color: white;
    }
`;

const Morebtn = styled.button`
    border: none;
    background-color: white;
    color: gray;
    font-size: medium;
`;

const Likebtn = styled.button`
    width: 50px;
    height: 30px;
    border-radius: 40px;
    border: solid 0.5px lightgray;
    background-color: white;
    margin-left: 650px;
`;

const Dislikebtn = styled.button`
    width: 50px;
    height: 30px;
    border-radius: 40px;
    border: solid 0.5px lightgray;
    background-color: white;
    margin-left: 10px;
`;

const MyReview = () => {

    const member = window.localStorage.getItem("whoLoginUserNum"); // 회원번호
    let musicalId = window.localStorage.getItem("musicalId"); // 뮤지컬번호

    const [reviewInfo, setReviewInfo] = useState("");
    // const [modalOpen, setModalOpen] = useState(""); // 삭제 버튼 눌렀을 때
    // const [modalText, setModalText] = useState(""); // 삭제 모달 텍스트


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
    
    const Onclickpost= (e) => {
    };

    // // 삭제
    // const OnClickDelete = async(member, reviewMuId) => {
    //     try {
    //         let response = await MuteApi.DeleteTotal(member, reviewMuId);

    //         if(response.data === true) {
    //             setModalOpen(true);
    //             setModalText("삭제가 완료되었습니다.");
    //         }
            
    //     } catch (e) {
                  
    //     }
    // }
    
    return(
        <>
        {reviewInfo && reviewInfo.map(e => ( 
            <ReviewBox>
                <p><b><span className="title">뮤지컬 후기 ｜</span><span className="MuName">{e.musicalName}</span></b><span className="date">　작성일 {e.writeDate}</span>　
                <button className="deleteBtn">삭제</button></p>
                <p className="myRaing">스토리 <FaStar size="15" color="#FCC419"/>{e.scoreStory} 　연출 <FaStar size="15" color="#FCC419"/>{e.scoreDirect} 　캐스팅 <FaStar size="15" color="#FCC419"/>{e.scoreCast} 　넘버 <FaStar size="15" color="#FCC419"/>{e.scoreNumber}<br/>
                <p className="text">
                    <span className={e.reviewMuTxt}>{e.reviewMuTxt.substring(30)}</span>
                    {e.reviewMuTxt.length > 30 && (
                        <span className={e.reviewMuTxt.moreButtonWrap}>
                        {"···"}
                        <button className={e.reviewMuTxt.moreButton}>더보기</button>
                        </span>
                    )}
                </p>
                <Likebtn className="like"><BiLike size="20" color="gray"/>{}</Likebtn ><Dislikebtn className="dislike"><BiDislike size="20" color="gray"/>{}</Dislikebtn></p>
            </ReviewBox>
        ))} 
            


        </>
    );
}
export default MyReview;