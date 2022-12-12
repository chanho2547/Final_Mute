import React from "react";
import { useState } from "react";
import styled from "styled-components";
import MuteApi from "../api/MuteApi";
import Rating from "../util/Rating";

// 좌석 후기 등록 - 도연 작업 중 

const ReviewSeat = () => {

     // 취소 버튼 누르면 첫 화면으로..
    const CancelButton = () => {   
        window.location.replace('/Review');
    }

    const [seatRating, setSeatRating] = useState(''); // 좌석 별점
    const [viewRating, setViewRating] = useState(''); // 시야 별점
    const [soundRating, setSoundRating] = useState(''); // 음향 별점
    const [lightRating, setLightRating] = useState(''); // 조명 별점
    const [seatReview, setSeatReview] = useState(''); // 뮤지컬 후기 텍스트

    
    // Api 호출
    // 후기 작성 버튼이 눌려지면 동작하는 함수
    const WriteSeatButton = async() => {
        console.log("좌석 별점" + seatRating);
        console.log("시야 별점" + viewRating);
        console.log("음향 별점" + soundRating);
        console.log("조명 별점" + lightRating);
        try {
            const res =  await MuteApi.WriteSeat(seatRating, viewRating, soundRating, lightRating, seatReview);
            setSeatReview(res.data.result);
             
            if(res.data.result === "OK") {
                console.log("별점 입력 성공");
            } else {
                console.log("별점 입력 실패");
         
            }

        } catch (e) {
            alert("오류 : " + e);
        }
    };

    const highFunction1 = (text) => {
        console.log("별점 가져온 값 : " + text);
        setSeatRating(text);
    }
    const highFunction2 = (text) => {
        console.log("별점 가져온 값 : " + text);
        setViewRating(text);
    }
    const highFunction3 = (text) => {
        console.log("별점 가져온 값 : " + text);
        setSoundRating(text);
    }
    const highFunction4 = (text) => {
        console.log("별점 가져온 값 : " + text);
        setLightRating(text);
    }




    return(
        <>
            <div>좌석 후기</div>
            <div>
                <fieldset>
                    <div> 좌석 <Rating onClick={setSeatRating} propFunction={highFunction1}/></div>
                    <div> 시야 <Rating onClick={setViewRating} propFunction={highFunction2}/></div>
                    <div> 음향 <Rating onClick={setSoundRating} propFunction={highFunction3}/></div>
                    <div> 조명 <Rating onClick={setLightRating} propFunction={highFunction4}/></div>
                </fieldset>
                <fieldset>
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