import React from "react";
import { useState, useEffect, useMemo } from "react";
import { Link, useNavigate } from "react-router-dom";
import Modal from "../util/Modal";
import ReviewTotal from "./ReviewTotal";
import axios from "axios";
import MuteApi from "../api/MuteApi";
import Rating from "../util/Rating";
import styled from "styled-components";
import { FaStar } from 'react-icons/fa';
import { BiLike } from 'react-icons/bi';
import { BiDislike } from 'react-icons/bi';

// 뮤지컬 총평 후기 view - 도연 작업중..

const Container = styled.div`
    text-align: left;
    padding: 10px;
`;

const StarBox = styled.div`
    background-color: #EEEBDD;
    display: flex;
    padding: 20px;
    padding-left: 50px;

    .AvgText {
        text-align: left;
        color: #810000;
        font-size: 25px;
    }
    .AvgBox {
        float: left;
    }
    .writeBtn {
        color: white; 
        background-color: #810000;
        border-radius: 5px;
        border: none;
        float: right;
        width: 200px;
        height: 50px;
        margin-left: 200px;
        margin-top: 12px;
    }
`;

const ReviewBox = styled.div`
    padding: 10px;
    border: solid 0.5px lightgray;

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

const ReviewList = (props) => {
    const navigate = useNavigate();
    const [count, setCount] = useState(0);

    // let totalScore = 0;
    // let totalStory = 0;
    // let totalDirect = 0;
    // let totalCast = 0;
    // let totalNumber = 0;

    // let totalResult = 0;
    // let storyResult = 0;
    // let directResult = 0;
    // let castResult = 0;
    // let numberResult = 0;

    const member = window.localStorage.getItem("whoLoginUserNum"); // 회원번호
    let musicalId = window.localStorage.getItem("musicalId"); // 뮤지컬번호

    // 모달
    const [modalLogin, setModelLogin] = useState(false); // 로그인 안했을 때
    
    const closeModal = () => { 
        setModelLogin(false);
        setModalOpen(false);
        setCount(count + 1);
    }

    const [modalOpen, setModalOpen] = useState(""); // 삭제 버튼 눌렀을 때
    const [modalText, setModalText] = useState(""); // 삭제 모달 텍스트


    // 후기 작성 버튼 눌렀을 때 로그인 이면 OK, 로그인 안했으면 모달 띄우기
    const WriteButton = () => {
        let checkLogin = window.localStorage.getItem("whoLogin");

        if(checkLogin)  { 
            props.propFunction(); 
            setModelLogin(false);
        }
        else {
            setModelLogin(true);
        } 
    };

    const [ReviewInfo, setReviewInfo] = useState(); 

    // Api 호출
    useEffect(() => {
        const ReviewData = async () => {
            try{
                let response = await MuteApi.ReviewInfo(musicalId);
                setReviewInfo(response.data);
            } catch (e) {
            }
        };
        ReviewData();
    }, [count]);


    // if(ReviewInfo) {
    //     totalResult = ReviewInfo.map(e => parseFloat(e.scoreAvgTotal));
    //     storyResult = ReviewInfo.map(e => parseFloat(e.scoreStory));
    //     directResult = ReviewInfo.map(e => parseFloat(e.scoreDirect));
    //     castResult = ReviewInfo.map(e => parseFloat(e.scoreCast));
    //     numberResult = ReviewInfo.map(e => parseFloat(e.scoreNumber));

    //     totalScore = totalResult.reduce((a, c) => a + c, 0) / totalResult.length;
    //     totalStory = storyResult.reduce((a, c) => a + c, 0) / storyResult.length;
    //     totalDirect = directResult.reduce((a, c) => a + c, 0) / directResult.length;
    //     totalCast = castResult.reduce((a, c) => a + c, 0) / castResult.length;
    //     totalNumber = numberResult.reduce((a, c) => a + c, 0) / numberResult.length;

    //     if (isNaN(totalScore)) {
    //         totalScore = 0;
    //     }
    //     if (isNaN(totalStory)) {
    //         totalStory = 0;
    //     }
    //     if (isNaN(totalDirect)) {
    //         totalDirect = 0;
    //     }
    //     if (isNaN(totalCast)) {
    //         totalCast = 0;
    //     }
    //     if (isNaN(totalNumber)) {
    //         totalNumber = 0;
    //     }
    // }


    // 후기 삭제
    const OnClickDelete = async(member, reviewMuId) => {
        try {
            let response = await MuteApi.DeleteTotal(member, reviewMuId);

            if(response.data === true) {
                setModalOpen(true);
                setModalText("삭제가 완료되었습니다.");
                setCount(count + 1);
                navigate('/Review');
            }
            
        } catch (e) {
            setModalOpen(true);
            setModalText("작성자가 아닙니다. 삭제할 수 없습니다.");            
        }
    }

    let likeCount = 0;
    let dislikeCount = 0;

    const likebtn = () => {
        likeCount = likeCount + 1;
    }
    const dislikebtn = () => {
        dislikeCount = dislikeCount - 1;
    }

    

    return(
        <Container>     
        <StarBox>
            <div className="AvgBox"> 
            {/* <p><b className="AvgText">평균 별점 </b><FaStar size="30" color="#FCC419"/>{totalScore.toFixed(1)}</p>
            <span><b>스토리 </b><FaStar size="25" color="gray"/>{totalStory.toFixed(1)}</span>　
            <span><b>연출 </b><FaStar size="25" color="gray"/>{totalDirect.toFixed(1)}</span>　
            <span><b>캐스팅 </b><FaStar size="25" color="gray"/>{totalCast.toFixed(1)}</span>　
            <span><b>넘버 </b><FaStar size="25" color="gray"/>{totalNumber.toFixed(1)}</span> */}
            </div>
            <button className="writeBtn" onClick={WriteButton}>후기 작성하기</button>
        </StarBox>
        {ReviewInfo && ReviewInfo.map(e => ( 
            <ReviewBox>
                <p>{e.reviewMuId}　{e.member}　<FaStar size="20" color="#FCC419"/>{e.scoreAvgTotal} <span className="date">　작성일 {e.writeDate}</span>　
                <button className="deleteBtn" onClick={()=>OnClickDelete(member, e.reviewMuId)}>삭제</button></p>
                <p className="myRaing">스토리 <FaStar size="15" color="gray"/>{e.scoreStory} 　연출 <FaStar size="15" color="gray"/>{e.scoreDirect} 　캐스팅 <FaStar size="15" color="gray"/>{e.scoreCast} 　넘버 <FaStar size="15" color="gray"/>{e.scoreNumber}<br/>
                <p className="text">
                    <span className={e.reviewMuTxt}>{e.reviewMuTxt.substring(30)}</span>
                    {e.reviewMuTxt.length > 30 && (
                        <span className={e.reviewMuTxt.moreButtonWrap}>
                        {"···"}
                        <Morebtn className={e.reviewMuTxt.moreButton}>더보기</Morebtn>
                        </span>
                    )}
                </p>
                <Likebtn className="like" onClick={()=>likebtn()}><BiLike size="20" color="gray"/>{likeCount}</Likebtn ><Dislikebtn className="dislike" onClick={()=>dislikebtn()}><BiDislike size="20" color="gray"/>{dislikeCount}</Dislikebtn></p>
            </ReviewBox>
        ))}  
        
        {modalLogin&& <Modal open={modalLogin} close={closeModal} type={true}>로그인이 필요한 서비스입니다.</Modal>}
        {modalOpen && <Modal open={modalOpen} close={closeModal} header="확인">{modalText}</Modal>}

        </Container>
    );

    
}
export default ReviewList;

