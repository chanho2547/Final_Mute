import React from "react";
import { useState, useEffect } from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import MuteApi from "../api/MuteApi";
import Rating from "../util/Rating";
import ReviewModal from "../review/ReviewModal";
import ReviewList from "./ReviewList";
import ReviewTotal from "./ReviewTotal";
import ReviewSeat from "./ReviewSeat";
import Theater from "../theaterInfo/Theater";


// 후기 view - 도연 작업중

const TmpBox = styled.div`
   
    width: 90%;
    height: fit-content;
    border: 2px solid black;
`;

const Review = () => {

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

    const [scoreTotal, setscoreTotal] = useState(''); // 별점 총점

    const [scoreStory, setScoreStory] = useState(''); // 스토리 별점
    const [scoreDirect, setScoreDirect] = useState(''); // 연출 별점
    const [scoreCast, setScoreCast] = useState(''); // 캐스팅 별점
    const [scoreNumber, setScoreNumber] = useState(''); // 넘버 별점

    const [reviewMuTxt, setReviewMuTxt] = useState(''); // 뮤지컬 후기 텍스트

    const [submit, setSubmit] = useState(false); // 서버로 전송할 수 있는 조건 체크
    const [resData, setResData] = useState(''); // 서버에서 받는 결과 데이터


    // 텍스트 입력
    const [muText, setMuText] = useState(false); // 총평 후기
    const [seText, setSeText] = useState(false); // 좌석 후기
    

    // 모달
    const [muModalOpen, setMuModalOpen] = useState("");
    const [seModalOpen, setSeModalOpen] = useState("");

    const [muStar, setMuStar] = useState("");  // 별점

    // // 후기 작성 버튼
    // const WriteTotalButton = (props) => {
    //     return (
    //         <>
    //             <button onClick={OnClickTotalWrite} >{props.text}</button>
    //         </>
    //     );
    // }

    // const WriteSeatButton = (props) => {
    //     return (
    //         <>
    //             <button onClick={OnClickSeatWrite} >{props.text}</button>
    //         </>
    //     );
    // }


    // const OnClickToList = () => {   
    //     window.location.replace('/Review');
    // }

    // let array = [1, 2, 3 ,4]
    

    // // Api 호출
    // // 후기 작성 버튼이 눌려지면 동작하는 함수
    // const OnClickTotalWrite = () => {
    //     setMuModalOpen(true);
    // };

    // const OnClickSeatWrite = () => {
    //     setSeModalOpen(true);
    // };

    // const closeModal = () => {
    //     setMuModalOpen(false);
    //     setSeModalOpen(false);
    // };

    // const confirmModal = async() => {
    //     try {
    //         const res =  await MuteApi.WriteReview(reviewMuId, musical, member, writeDate, scoreStory, scoreDirect, scoreCast, scoreNumber, reviewMuTxt);
    //         setResData(res.data);

    //     } catch (e) {
    //         alert("오류 : " + e);
    //     }
    // };

    return (
        <div className="container">
            
            
    
            <button onClick={onClickNext}>{ (count === 0) ? "후기 작성하기" : "다음으로" }</button>
            <TmpBox>
            {count === 0 ? <ReviewList /> : null} 
            {count === 1 ? <Theater /> : null }
            {count === 2 ? <ReviewTotal /> : null }
            {count === 3 ? <ReviewSeat/> : null}
            {count === 4 ? <h1>끝</h1> : null}
            {count === 5 ? setCount(0) : null}
            </TmpBox>

 
        </div>
    );

}

export default Review;