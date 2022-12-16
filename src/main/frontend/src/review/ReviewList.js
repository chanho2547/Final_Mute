import React from "react";
import { useState, useEffect } from "react";
import { BsSearch } from 'react-icons/bs';
import { Link, useNavigate } from "react-router-dom";
import Modal from "../util/Modal";
import ReviewTotal from "./ReviewTotal";
import axios from "axios";
import MuteApi from "../api/MuteApi";
import Rating from "../util/Rating";

// 뮤지컬 총평 후기 view - 도연 작업중..

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
    const OnClickDelete = async(reviewMuId, userNum) => {
        
        try {
            const stringReviewNum = String(reviewMuId);
            const response = await MuteApi.reviewDelete(stringReviewNum, userNum);
            // console.log(response.data);

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

    return(
        <>
        <h3>뮤지컬 관람 후기</h3>
        <button onClick={WriteButton}>후기 작성</button>
        
         
         {ReviewInfo && ReviewInfo.map(e => ( 

            <>
            <div>
                <p>회원 총 평점 {}</p>
            </div>
            <div>
                <p>{e.scoreAvgTotal}</p>
                <span>{e.member}</span><span>{}{e.scoreAvgTotal}</span><span>날짜{e.writeDate}</span><button>수정</button><button onClick={() => OnClickDelete()}>삭제</button>
                <span>스토리 {e.scoreStory}</span> 
                <span>연출 {e.scoreDirect}</span> 
                <span>캐스팅 {e.scoreCast}</span> 
                <span>넘버 {e.scoreNumber}</span>
                <p>후기 [{e.reviewMuTxt}]</p>
            </div>
            </>
         ))}  
        {modalLogin&& <Modal open={modalLogin} close={closeModal} type={true}>로그인이 필요한 서비스입니다.</Modal>}
        {modalOpen && <Modal open={modalOpen} close={closeModal} header="확인">{modalText}</Modal>}
        </>

    );
}
export default ReviewList;