import React from "react";
import { useState, useEffect } from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import MuteApi from "../api/MuteApi";
import Rating from "../util/Rating";
import ReviewModal from "../review/ReviewModal";
import ReviewList from "./ReviewList";
import ReviewSeat from "./ReviewSeat";
import Theater from "../theaterInfo/Theater";

const ReviewTotal = () => {

    useEffect(()=>{
        window.localStorage.setItem("seatInfoMode","NONE");
    })

    const [count, setCount] = useState(0)
    

    const onClickNext = () => {
        console.log("현재 카운트 : "+count);
        setCount(count + 1);
       
    }

    const [reviewMuId, setReviewMuId] = useState(''); // 뮤지컬 후기 글 번호
    const [musical, setMusical] = useState(''); // 공연 ID
    const [member, setMember] = useState(''); // 회원번호
    const [writeDate, setWriteDate] = useState(''); // 작성일
    const [scoreStory, setScoreStory] = useState(''); // 스토리 별점
    const [scoreDirect, setScoreDirect] = useState(''); // 연출 별점
    const [scoreCast, setScoreCast] = useState(''); // 캐스팅 별점
    const [scoreNumber, setScoreNumber] = useState(''); // 넘버 별점
    const [totalReview, setTotalReview] = useState(''); // 뮤지컬 후기 텍스트
    const [submit, setSubmit] = useState(false); // 서버로 전송할 수 있는 조건 체크
    const [resData, setResData] = useState(''); // 서버에서 받는 결과 데이터


    // // 후기 작성 버튼
    // const WriteTotalButton = (props) => {
    //     return (
    //         <>
    //             <button onClick={OnClickTotalWrite} >{props.text}</button>
    //         </>
    //     );
    // }

    const OnClickBefore = () => {   
        window.location.replace('/ReviewList');
    }

    const CancelButton = () => {   
        window.location.replace('/ReviewList');
    }

    // 후기 작성 버튼
    const WriteTotalButton = (props) => {
        return (
            <>
                <button onClick={OnClickTotalWrite} >{props.text}</button>
            </>
        );
    }

    // Api 호출
    // 후기 작성 버튼이 눌려지면 동작하는 함수
    const OnClickTotalWrite = async() => {
        try {
            const res =  await MuteApi.WriteReview(reviewMuId, musical, member, writeDate, scoreStory, scoreDirect, scoreCast, scoreNumber, totalReview);
            setResData(res.data);

        } catch (e) {
            alert("오류 : " + e);
        }
    };

    return(
        <>
            <div>총평 후기</div>
            <button onClick={OnClickBefore}>이전으로</button>
            <div>
                <fieldset>
                    {/* 총점은 평균내서 기본적으로 색깔 나와있게 수정하기 !!! */}
                    <div> 연출 <Rating onClick={setScoreStory}/></div>
                    <div> 스토리 <Rating onClick={setScoreDirect}/></div>
                    <div> 캐스팅 <Rating onClick={setScoreCast}/></div>
                    <div> 넘버 <Rating onClick={setScoreNumber}/></div>
                </fieldset>
                <fieldset>
                    <div>후기 작성</div>
                    <textarea placeholder="관람하신 뮤지컬의 총평을 작성해주세요." onChange={setTotalReview}></textarea>
                </fieldset>
                <button onClick={WriteTotalButton}>확인</button>
                <button onClick={CancelButton}>취소</button>
            </div>

        </>
    );
}

export default ReviewTotal;