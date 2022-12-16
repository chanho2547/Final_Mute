import React from "react";
import { useState } from "react";
import styled from "styled-components";
import MuteApi from "../api/MuteApi";
import Rating from "../util/Rating";
import TheaterModal from "./TheaterModal";
import { Link, useNavigate } from "react-router-dom";
import Modal from "../util/Modal";

// 좌석 후기 등록 - 도연

const ReviewSeat = () => {
    const navigate = useNavigate();

    const userNum = window.localStorage.getItem("whoLoginUserNum");
    let musicalId = window.localStorage.getItem('musicalId');
    
    console.log("회원번호 : " + userNum); // 회원번호
    console.log("뮤지컬 아이디 : " + musicalId); // 뮤지컬번호

     // 취소 버튼 누르면 첫 화면으로..
    const CancelButton = () => {   
        navigate('/ReviewList');
    }

    // 입력받는 부분
    const [theaterId, setTheaterId] = useState(''); // 공연장
    const [seatNum, setSeatNum] = useState(''); // 좌석
    const [seatRating, setSeatRating] = useState(''); // 좌석 별점
    const [viewRating, setViewRating] = useState(''); // 시야 별점
    const [soundRating, setSoundRating] = useState(''); // 음향 별점
    const [lightRating, setLightRating] = useState(''); // 조명 별점
    const [scoreAvgSeat, setScoreAvgSeat] = useState(''); // 별점 총점
    const [seatReview, setSeatReview] = useState(''); // 뮤지컬 후기 텍스트
    

     // 오류 메세지
     const [seatReviewMsg, setSeatReviewMsg] = useState('');
    
     // 유효성 검사
     const [isSeatReview, setIsSeatReview] = useState(false);

    // 모달
    const [modalTheater, setModelTheater] = useState(false); // 좌석 선택 버튼 눌렀을 때
    const [writeModal, setWriteModal] = useState(false); // 확인 버튼 눌렀을 때

    const charlotte = () => { // 샤롯데 좌석 선택하러 가기
        navigate("/TheaterChar"); 
    }
    
    const chungmu = () => { // 충무 좌석 선택하러 가기
        navigate("/TheaterChung"); 
    }

    const closeModal = () => { 
        navigate("/ReviewList"); 
    }

    // 후기 작성 버튼 누르면 극장 선택 모달띄우기
    const SeatClick = () => {
        setModelTheater(true);
    }

    // 후기 작성하기 Api 호출
    // 후기 작성 버튼이 눌려지면 동작하는 함수
    const WriteSeatButton = async() => {
        try {
            const res =  await MuteApi.WriteSeat(userNum, musicalId, theaterId, seatNum, seatRating, viewRating, soundRating, lightRating, scoreAvgSeat, seatReview);
            if(res.data === true) {
                console.log("텍스트 입력 성공");
                setWriteModal(true);   
            } else {
                console.log("텍스트 입력 실패");
            }
        } catch (e) {
            alert("오류 : " + e);
        }
    };

    const highFunction1 = (text) => {
        console.log("좌석 별점 가져온 값 : " + text);
        setSeatRating(text);
    }
    const highFunction2 = (text) => {
        console.log("시야 별점 가져온 값 : " + text);
        setViewRating(text);
    }
    const highFunction3 = (text) => {
        console.log("음향 별점 가져온 값 : " + text);
        setSoundRating(text);
    }
    const highFunction4 = (text) => {
        console.log("조명 별점 가져온 값 : " + text);
        setLightRating(text);

        const arr = [seatRating, viewRating, soundRating, lightRating];
        const avg = arr.reduce((a, c) => a + c) / arr.length
        console.log("평균 값 : " + avg);
        setScoreAvgSeat(avg);
    }

    const onChangeSeatReview = (e) => {
        setSeatReview(e.target.value)
        if(e.target.value.length > 9 ) {
            setIsSeatReview(true);
        } else {
            setIsSeatReview(false);
        }
    }
    

    return(
        <>
            <div>좌석 후기</div>
            <button onClick={SeatClick}>좌석 선택</button>
            <div>
                <fieldset>
                    <div> 좌석 <Rating value={seatRating} propFunction={highFunction1}/></div>
                    <div> 시야 <Rating value={viewRating} propFunction={highFunction2}/></div>
                    <div> 음향 <Rating value={soundRating} propFunction={highFunction3}/></div>
                    <div> 조명 <Rating value={lightRating} propFunction={highFunction4}/></div>
                </fieldset>
                <fieldset>
                    <div>후기 작성</div>
                    <textarea placeholder="관람하신 좌석의 후기를 작성해주세요. (10자 이상)" value={seatReview} onChange={onChangeSeatReview}></textarea>
                </fieldset>
                <button onClick={WriteSeatButton}>확인</button>
                <button onClick={CancelButton}>취소</button>
            </div>
            {modalTheater && <TheaterModal open={modalTheater} confirm={charlotte} close={chungmu} type={true} header="확인">극장을 선택해주세요.</TheaterModal>}
            {writeModal&& <Modal open={writeModal} close={closeModal} type={true}>좌석 후기 작성 완료♥</Modal>}
        </>
    );
}

export default ReviewSeat;