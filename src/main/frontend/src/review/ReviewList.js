import React from "react";
import { useState, useEffect } from "react";
import { BsSearch } from 'react-icons/bs';
import { Link, useNavigate } from "react-router-dom";
import Modal from "../util/Modal";
import ReviewTotal from "./ReviewTotal";
import axios from "axios";


// 뮤지컬 총평 후기 view - 도연 작업중..

const ReviewList = (props) => {
    const navigate = useNavigate();
    let whoLogin = window.localStorage.getItem('whoLoginNow');

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

    return(
        <>
            
        {/* {reviewInfo && reviewInfo.map(Review => ( */}
        <>
        <h3>뮤지컬 관람 후기</h3>
        <button onClick={WriteButton}>후기 작성</button>
        <fieldset>
            <p>회원 총 평점 [{}]</p>
        </fieldset>
        <fieldset>
            <span>{whoLogin}</span><p>총점{}</p>
            <span>스토리 {}</span> 
            <span>연출 {}</span> 
            <span>캐스팅 {}</span> 
            <span>넘버 {}</span>
            <p>텍스트 {}</p>
        </fieldset>

        {modalLogin&& <Modal open={modalLogin} close={closeLogin} type={true}>로그인이 필요한 서비스입니다.</Modal>}
        </>
        {/* ))} */}
        </>

    );
}
export default ReviewList;