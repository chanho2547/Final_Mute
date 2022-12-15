import React from "react";
import { useState, useEffect } from "react";
import { BsSearch } from 'react-icons/bs';
import { Link, useNavigate } from "react-router-dom";
import Modal from "../util/Modal";
import ReviewTotal from "./ReviewTotal";
import axios from "axios";
import MuteApi from "../api/MuteApi";


// 뮤지컬 총평 후기 view - 도연 작업중..

const ReviewList = (props) => {
    const navigate = useNavigate();
    let whoLogin = window.localStorage.getItem('whoLoginNow');
    let whatMusical = window.localStorage.getItem('musicalId');
    
    console.log("회원 아이디 : " + whoLogin); // 아이디
    console.log("뮤지컬 아이디 : " + whatMusical); // 뮤지컬

    const [reviewInfo, setReviewInfo] = useState(''); 

    // 모달
    const [modalLogin, setModelLogin] = useState(false); // 로그인 안했을 때
    const closeLogin = () => { 
        setModelLogin(false);
    }

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


    // Api 호출
    useEffect(() => {
        const ReviewData = async () => {
            try{
                let response = await MuteApi.ReviewInfo;
                setReviewInfo(response.data);

            } catch (e) {
                console.log(e + "후기 불러오기 실패");
            }
        };
        ReviewData();
    }, []);




    return(
        <>
        <h3>뮤지컬 관람 후기</h3>
        {reviewInfo && reviewInfo.map(e => (
            <div>
            <button onClick={WriteButton}>후기 작성</button>
            <div>
                <p>회원 총 평점 {}</p>
            </div>
            <div>
                <p>{whatMusical}</p>
                <span>{whoLogin}</span><p>총점{e.scoreAvgTotal}</p>
                <span>스토리 {e.scoreStory}</span> 
                <span>연출 {e.scoreDirect}</span> 
                <span>캐스팅 {e.scoreCast}</span> 
                <span>넘버 {e.scoreNumber}</span>
                <p>텍스트 {e.totalReview}</p>
            </div>
            </div>
        ))} 
        {modalLogin&& <Modal open={modalLogin} close={closeLogin} type={true}>로그인이 필요한 서비스입니다.</Modal>}
        </>

    );
}
export default ReviewList;