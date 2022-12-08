import React from "react";
import { useState } from "react";
import styled from "styled-components";
import MuteApi from "../api/MuteApi";
import Rating from "../util/Rating";

// 부모 컴포넌트
const ReviewTotal = () => {

    // 취소 버튼 누르면 첫 화면으로..
    const CancelButton = () => {   
        window.location.replace('/Review');
    }


    const [scoreStory, setScoreStory] = useState(); // 스토리 별점
    const [scoreDirect, setScoreDirect] = useState(); // 연출 별점
    const [scoreCast, setScoreCast] = useState(); // 캐스팅 별점
    const [scoreNumber, setScoreNumber] = useState(); // 넘버 별점
    
    const [totalReview, setTotalReview] = useState(); // 뮤지컬 후기 텍스트


    // Api 호출
    // 후기 작성 버튼이 눌려지면 동작하는 함수
    const WriteTotalButton = async() => {
        
        try {
           const res = await MuteApi.WriteTotal(scoreStory, scoreDirect, scoreCast, scoreNumber, totalReview);
            // setScoreStory();
            // setScoreDirect();
            // setScoreCast();
            // setScoreNumber();
            // setTotalReview();


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
        console.log("ReviewTotal 1 입니다 , 가져와진 값 : " + text);
    }
    const highFunction2 = (text) => {
        console.log("ReviewTotal 2 입니다 , 가져와진 값 : " + text);
    }
    const highFunction3 = (text) => {
        console.log("ReviewTotal 3 입니다 , 가져와진 값 : " + text);
    }
    const highFunction4 = (text) => {
        console.log("ReviewTotal 4 입니다 , 가져와진 값 : " + text);
    }

    return(
        <>
            <div>총평 후기</div>
            <div>
                <fieldset>
                    <div> 연출 <Rating value={scoreStory} propFunction={highFunction1}/></div>
                    <div> 스토리 <Rating value={scoreDirect} propFunction={highFunction2}/></div>
                    <div> 캐스팅 <Rating value={scoreCast} propFunction={highFunction3}/></div>
                    <div> 넘버 <Rating value={scoreNumber} propFunction={highFunction4}/></div>
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