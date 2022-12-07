import React from "react";
import { useState, useEffect } from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import MuteApi from "../api/MuteApi";
import Rating from "../util/Rating";


const ReviewSeat = () => {

    useEffect(()=>{
        window.localStorage.setItem("seatInfoMode","NONE");
    })

    const [count, setCount] = useState(0)
    

    const onClickNext = () => {
        console.log("현재 카운트 : "+count);
        setCount(count + 1);
       
    }

    const [seatRating, setSeatRating] = useState(''); // 좌석 별점
    const [viewRating, setViewRating] = useState(''); // 시야 별점
    const [soundRating, setSoundRating] = useState(''); // 음향 별점
    const [lightRating, setLightRating] = useState(''); // 조명 별점
    const [seatReview, setSeatReview] = useState(''); // 뮤지컬 후기 텍스트


    const OnClickBefore = () => {   
        window.location.replace('/ReviewTotal');
    }

    const CancelButton = () => {   
        window.location.replace('/Review');
    }


    // Api 호출
    // 후기 작성 버튼이 눌려지면 동작하는 함수
    const WriteSeatButton = async() => {
        try {
            const res =  await MuteApi.WriteSeat(seatRating, viewRating, soundRating, lightRating, seatReview);
            setSeatRating(res.data);
            setViewRating(res.data);
            setSoundRating(res.data);
            setLightRating(res.data);
            setSeatReview(res.data);

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
                    <div> 좌석 <Rating onClick={setSeatRating}/></div>
                    <div> 시야 <Rating onClick={setViewRating}/></div>
                    <div> 음향 <Rating onClick={setSoundRating}/></div>
                    <div> 조명 <Rating onClick={setLightRating}/></div>
                </fieldset>
                <fieldset>
                {/* <input / > <button>좌석 선택</button> */}
                    <div>후기 작성</div>
                    <textarea placeholder="관람하신 좌석의 후기를 작성해주세요." onChange={setSeatReview}></textarea>
                </fieldset>
                <button onClick={WriteSeatButton}>확인</button>
                <button onClick={CancelButton}>취소</button>
            </div>
        </>
    );
}

export default ReviewSeat;