import React from "react";
import { useState } from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import MuteApi from "../api/MuteApi";
import Rating from "../util/Rating";
import TotalModal from "./TotalModal";

const ReviewTotal = (props) => {

    // 취소 버튼 누르면 첫 화면으로..
    const CancelButton = () => {   
        window.location.replace('/Review');
    }

    // 입력받는 부분
    const [scoreStory, setScoreStory] = useState(''); // 스토리 별점
    const [scoreDirect, setScoreDirect] = useState(''); // 연출 별점
    const [scoreCast, setScoreCast] = useState(''); // 캐스팅 별점
    const [scoreNumber, setScoreNumber] = useState(''); // 넘버 별점
    const [scoreAvgTotal, setScoreAvgTotal] = useState(''); // 별점 총점
    const [totalReview, setTotalReview] = useState(''); // 뮤지컬 후기 텍스트

    // 오류 메세지
    const [totalReviewMsg, setotalReviewMsg] = useState('');
    
    // 유효성 검사
    const [isTotalReview, setIsTotalReview] = useState(false);

    // 모달
    const [modalText, setModelText] = useState(false); // 확인 버튼 눌렀을 때
    
    const confirmModal = () => { // 좌석 후기 작성하러 가기
        props.propFunction(); // 상위 컴포넌트의 함수를 불러 count ++
    }
    
    const closeModal = () => { // 아니오 눌렀을 때 => 리뷰 리스트로 이동
        window.location.replace('/Review'); 
    }

    
    // Api 호출
    // 후기 작성 버튼이 눌려지면 동작하는 함수
    const WriteTotalButton = async() => {
        console.log("스토리 별점" + scoreStory);
        console.log("연출 별점" + scoreDirect);
        console.log("캐스팅 별점" + scoreCast);
        console.log("넘버 별점" + scoreNumber);
        console.log("평균 별점" + scoreAvgTotal);
  
    
        try {
            const res = await MuteApi.WriteTotal(scoreStory, scoreDirect, scoreCast, scoreNumber, scoreAvgTotal, totalReview);

            if(res.data === true) {
                console.log("텍스트 입력 성공");
                setModelText(true);
                
  
            } else {
                console.log("텍스트 입력 실패");
            }

        } catch (e) {
            alert("오류 : " + e);
        }
    };


    const highFunction1 = (text) => {
        console.log("스토리 별점 가져온 값 : " + text);
        setScoreStory(text);
        console.log("setScoreStory 타입 확인 :" + text);
    }
    const highFunction2 = (text) => {
        console.log("연출 별점 가져온 값 : " + text);
        setScoreDirect(text);
    }
    const highFunction3 = (text) => {
        console.log("캐스팅 별점 가져온 값 : " + text);
        setScoreCast(text);
    }
    const highFunction4 = (text) => {
        console.log("넘버 별점 가져온 값 : " + text);
        setScoreNumber(text);

        // 별점 평균
    const arr = [scoreStory, scoreDirect, scoreCast, scoreNumber];
    const avg = arr.reduce((a, c) => a + c) / arr.length
    console.log("평균 값 : " + avg);
    setScoreAvgTotal(avg);
    }

    

    const onChangeTotalReview = (e) => {
        setTotalReview(e.target.value)
        if(e.target.value.length > 9 ) {
            setIsTotalReview(false);
        } else {
            setIsTotalReview(true);
        }
    }

    
    return(
        <>
            <div>총평 후기</div>
            <div>
                <fieldset>
                    <div> 스토리 <Rating value={scoreStory} propFunction={highFunction1}/></div>
                    <div> 연출 <Rating value={scoreDirect} propFunction={highFunction2}/></div>
                    <div> 캐스팅 <Rating value={scoreCast} propFunction={highFunction3}/></div>
                    <div> 넘버 <Rating value={scoreNumber}  propFunction={highFunction4}/></div>
                </fieldset>
                <fieldset>
                    <div>후기 작성</div>
                    <textarea placeholder="관람하신 뮤지컬의 후기를 작성해주세요. (10자 이상)" value={totalReview} onChange={onChangeTotalReview}></textarea>
                </fieldset>
                <button onClick={WriteTotalButton}>확인</button>
                <button onClick={CancelButton}>취소</button>
                {modalText && <TotalModal open={modalText} confirm={confirmModal} close={closeModal} type={true} header="확인">뮤지컬 후기 작성 완료♥</TotalModal>}
            </div>

        </>
    );
}

export default ReviewTotal;