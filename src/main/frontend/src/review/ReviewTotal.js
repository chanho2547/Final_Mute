import React from "react";
import { useState, useEffect } from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import MuteApi from "../api/MuteApi";
import Rating from "../util/Rating";


const ReviewTotal = () => {

    // useEffect(()=>{
    //     window.localStorage.setItem("seatInfoMode","NONE");
    // })

    // const [count, setCount] = useState(0)
    

    // const onClickNext = () => {
    //     console.log("현재 카운트 : "+count);
    //     setCount(count + 1);
       
    // }

    const [scoreStory, setScoreStory] = useState(''); // 스토리 별점
    const [scoreDirect, setScoreDirect] = useState(''); // 연출 별점
    const [scoreCast, setScoreCast] = useState(''); // 캐스팅 별점
    const [scoreNumber, setScoreNumber] = useState(''); // 넘버 별점
    // const [totalReview, setTotalReview] = useState(''); // 뮤지컬 후기 텍스트

    



    const CancelButton = () => {   
        window.location.replace('/Review');
    }

    // // 후기 작성 버튼
    // const WriteTotalButton = (props) => {
    //     return (
    //         <>
    //             <button onClick={OnClickTotalWrite} >{props.text}</button>
    //         </>
    //     );
    // }

    // Api 호출
    // 후기 작성 버튼이 눌려지면 동작하는 함수
    const WriteTotalButton = async() => {
        try {
           const res = await MuteApi.WriteTotal(scoreStory, scoreDirect, scoreCast, scoreNumber);
            // setScoreStory();
            // setScoreDirect();
            // setScoreCast();
            // setScoreNumber();
            // setTotalReview();

            if(res.data.result === "OK") {
                // window.location.replace("/SignCom");
                console.log("별점입력성공");
            } else {
                console.log("별점입력실패");
            }

        } catch (e) {
            alert("오류 : " + e);
        }
    };

    return(
        <>
            <div>총평 후기</div>
            <div>
                <fieldset>
                    <div> 연출 <Rating value={scoreStory} onChange={setScoreStory}/></div>
                    <div> 스토리 <Rating value={scoreDirect} onChange={setScoreDirect}/></div>
                    <div> 캐스팅 <Rating value={scoreCast} onChange={setScoreCast}/></div>
                    <div> 넘버 <Rating value={scoreNumber} onChange={setScoreNumber}/></div>
                </fieldset>
                {/* <fieldset>
                    <div>후기 작성</div>
                    <textarea placeholder="관람하신 뮤지컬의 총평을 작성해주세요." onChange={setTotalReview}></textarea>
                </fieldset> */}
                <button onClick={WriteTotalButton}>확인</button>
                <button onClick={CancelButton}>취소</button>
            </div>

        </>
    );
}

export default ReviewTotal;