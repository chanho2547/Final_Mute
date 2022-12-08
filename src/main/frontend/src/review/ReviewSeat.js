import React from "react";
import { useState } from "react";
import styled from "styled-components";
import MuteApi from "../api/MuteApi";
import Rating from "../util/Rating";

// 부모 컴포넌트
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
        try {
            const res =  await MuteApi.WriteSeat(seatRating, viewRating, soundRating, lightRating, seatReview);
           
            console.log(res.data.result);
            
            if(res.data.result === "OK") {
                window.location.replace("/review");
            } else {
                console.log("에러....... 다시 해봐.. 토닥토닥..");
                setSeatRating(res.data.result);
                setViewRating(res.data.result);
                setSoundRating(res.data.result);
                setLightRating(res.data.result);
                setSeatReview(res.data.result);
            }

        } catch (e) {
            alert("오류 : " + e);
        }
    };

    const highFunction = (text) => {
        console.log("ReviewTotal 입니다 , 가져와진 값 : " + text);
      }


    return(
        <>
            <div>좌석 후기</div>
            <div>
                <fieldset>
                    <div> 좌석 <Rating onClick={setSeatRating} propFunction={highFunction}/></div>
                    <div> 시야 <Rating onClick={setViewRating} propFunction={highFunction}/></div>
                    <div> 음향 <Rating onClick={setSoundRating} propFunction={highFunction}/></div>
                    <div> 조명 <Rating onClick={setLightRating} propFunction={highFunction}/></div>
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