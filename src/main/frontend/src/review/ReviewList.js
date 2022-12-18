import React from "react";
import { useState, useEffect } from "react";
import { FaStar } from 'react-icons/fa';
import { Link, useNavigate } from "react-router-dom";
import Modal from "../util/Modal";
import ReviewTotal from "./ReviewTotal";
import axios from "axios";
import MuteApi from "../api/MuteApi";
import Rating from "../util/Rating";
import styled from "styled-components";
import star1 from "../images/star1.png";
import star2 from "../images/star2.png";


// 뮤지컬 총평 후기 view - 도연 작업중..

const StarBox = styled.div`
    background-color: #EEEBDD;

    .writeBtn {
        color: white; 
        background-color: #810000;
        border-radius: 5px;
        border: none;
    }
    .AvgText {
        color: #810000;
        font-size: 20px;
    }
    
    
`;

const ReviewList = (props) => {
    const navigate = useNavigate();

    const userNum = window.localStorage.getItem("whoLoginUserNum");
    let musicalId = window.localStorage.getItem('musicalId');
    
    console.log("회원번호 : " + userNum); // 회원번호
    console.log("뮤지컬 아이디 : " + musicalId); // 뮤지컬번호

    // 모달
    const [modalLogin, setModelLogin] = useState(false); // 로그인 안했을 때
    const closeModal = () => { 
        setModelLogin(false);
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
                // console.log("response.data : " + response.data);

                setReviewInfo(response.data);
                console.log("후기 불러오기 성공!!");

            } catch (e) {
                console.log(e + "후기 불러오기 실패");
            }
        };
        ReviewData();
    }, []);

    // 후기 삭제
    const OnClickDelete = async(reviewMuId) => {
        
        try {
            const stringReviewNum = String(reviewMuId);
            const response = await MuteApi.reviewDelete(stringReviewNum, userNum);
            console.log(response.data);

            if(response.data.includes("NOK")) {
                setModalText("작성자가 아닙니다. 목록으로 되돌아갑니다.")
                setModalOpen(true);
            }
            else {
                setModalText("삭제가 완료되었습니다.");
                setModalOpen(true);
            }
            
        } catch (e) {
            console.log("오류" + e);
            alert("오류" + e);
        }
    }

    const Onclick = (e) => {
        <Rating/>
    }



    return(
        <>     
        <StarBox>
            <button className="writeBtn" onClick={WriteButton}>후기 작성하기</button>
            <p><b className="AvgText">평균 별점</b><img src={star1} alt="star" width="20px"/>{}</p>
            <p><b>스토리</b><img src={star2} alt="star" width="15px"/>{}</p>
            <p><b>연출</b><img src={star2} alt="star" width="15px"/>{}</p>
            <p><b>캐스팅</b><img src={star2} alt="star" width="15px"/>{}</p>
            <p><b>넘버</b><img src={star2} alt="star" width="15px"/>{}</p>
        </StarBox>
        {ReviewInfo && ReviewInfo.map(e => ( 
            <div Onclick={() => Onclick(e)}>
            <div>
                <p autoFocus>{e.member}</p> <p> {e.scoreAvgTotal}</p><p>작성일 {e.writeDate}</p>
                {/* <button>수정</button><button onClick={() => OnClickDelete()}>삭제</button> */}
                <p>스토리 {e.scoreStory}연출 {e.scoreDirect} 캐스팅 {e.scoreCast} 넘버 {e.scoreNumber}</p>
                <p>후기 [{e.reviewMuTxt}]</p>
            </div>
            </div>
        ))}  
        {modalLogin&& <Modal open={modalLogin} close={closeModal} type={true}>로그인이 필요한 서비스입니다.</Modal>}
        {modalOpen && <Modal open={modalOpen} close={closeModal} header="확인">{modalText}</Modal>}
        </>

    );
}
export default ReviewList;