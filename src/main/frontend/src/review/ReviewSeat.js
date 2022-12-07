import React from "react";
import { useState, useEffect } from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import MuteApi from "../api/MuteApi";
import Rating from "../util/Rating";
import ReviewModal from "../review/ReviewModal";
import ReviewList from "./ReviewList";
import ReviewTotal from "./ReviewTotal";
import Theater from "../theaterInfo/Theater";

const ReviewSeat = () => {

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
    const [seatRating, setSeatRating] = useState(''); // 좌석 별점
    const [viewRating, setViewRating] = useState(''); // 시야 별점
    const [soundRating, setSoundRating] = useState(''); // 음향 별점
    const [lightRating, setLightRating] = useState(''); // 조명 별점
    const [seatReview, setSeatReview] = useState(''); // 뮤지컬 후기 텍스트
    const [submit, setSubmit] = useState(false); // 서버로 전송할 수 있는 조건 체크
    const [resData, setResData] = useState(''); // 서버에서 받는 결과 데이터

    const [hovered, setHovered] = useState(null);
    const [clicked, setClicked] = useState(null);
  

    

    const OnClickBefore = () => {   
        window.location.replace('/ReviewTotal');
    }

    const CancelButton = () => {   
        window.location.replace('/ReviewTotal');
    }

    

    // 후기 작성 버튼
    const WriteSeatButton = (props) => {
        return (
            <>
                <button onClick={OnClickSeatWrite} >{props.text}</button>
            </>
        );
    }

    // Api 호출
    // 후기 작성 버튼이 눌려지면 동작하는 함수
    const OnClickSeatWrite = async() => {
        try {
            const res =  await MuteApi.WriteReview(reviewMuId, musical, member, writeDate, seatRating, viewRating, soundRating, lightRating, seatReview);
            setResData(res.data);

        } catch (e) {
            alert("오류 : " + e);
        }
    };


    return(
        <>
            <div>좌석 후기</div>
            <button onClick={OnClickBefore}>이전으로</button>
            <div>
                <fieldset>
                    <div> 좌석 <Rating/></div>
                    <div> 시야 <Rating/></div>
                    <div> 음향 <Rating/></div>
                    <div> 조명 <Rating/></div>
                </fieldset>
                <fieldset>
                {/* <input / > <button>좌석 선택</button> */}
                    <div>후기 작성</div>
                    <textarea placeholder="관람하신 좌석의 후기를 작성해주세요."></textarea>
                </fieldset>
                <button onClick={WriteSeatButton}>확인</button>
                <button onClick={CancelButton}>취소</button>
            </div>
        </>
    );
}

export default ReviewSeat;