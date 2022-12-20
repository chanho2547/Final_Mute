import React from "react";
import { useState } from "react";
import styled from "styled-components";
import MuteApi from "../api/MuteApi";
import Rating from "../util/Rating";
import TheaterModal from "./TheaterModal";
import { Link, useNavigate } from "react-router-dom";
import Modal from "../util/Modal";
import { FaStar } from 'react-icons/fa';

// 좌석 후기 등록 - 도연

const InfoBox = styled.div`
    padding: 15px;
    font-size: small;
    color: gray;
`;

const StarBox = styled.div`
    display: flex;

    .AvgText {
        color: #810000;
        font-size: 20px;
    }
    .MyAvg {
        float: left;
        padding-left: 100px;
        border-right: 60px;
        /* border: solid 0.5px lightgray; */
    }
    .MyStar {
        float: right;
        padding-left: 60px;
        /* border: solid 0.5px lightgray; */
    }
`;

const Text = styled.input`
    width: 550px;
    height: 250px;
    padding-left: 100px;
`;

const OKbtn = styled.button`
    color: white; 
    background-color: #810000;
    border-radius: 5px;
    border: none;
    width: 70px;
    height: 30px;

`;
const NOKbtn = styled.button`
    color: white; 
    background-color: #909090;
    border-radius: 5px;
    border: none;
    width: 70px;
    height: 30px;
`;

const ReviewSeat = () => {
    const navigate = useNavigate();

    const userNum = window.localStorage.getItem("whoLoginUserNum"); // 지금 로그인한 회원번호
    let musicalId = window.localStorage.getItem("musicalId"); // 지금 선택한 뮤지컬
    // let theaterFullName = window.localStorage.getItem("theaterFullName"); // 극장 이름
    let mySeat = window.localStorage.getItem("whatSeatInfo"); // 극장이름 + 좌석번호(층, 열, 번)
    
    console.log("회원번호 : " + userNum); // 회원번호
    console.log("뮤지컬 아이디 : " + musicalId); // 뮤지컬번호

     // 취소 버튼 누르면 첫 화면으로..
    const CancelButton = () => {   
        navigate('/Review');
    }

    // 입력받는 부분
    // const [theaterId, setTheaterId] = useState(''); // 공연장
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
        navigate("/Review"); 
    }

    // 후기 작성 버튼 누르면 극장 선택 모달띄우기
    const SeatClick = () => {
        setModelTheater(true);
    }

    // 후기 작성하기 Api 호출
    // 후기 작성 버튼이 눌려지면 동작하는 함수
    const WriteSeatButton = async() => {
        try {
            const res =  await MuteApi.WriteSeat(userNum, musicalId, seatNum, seatRating, viewRating, soundRating, lightRating, scoreAvgSeat, seatReview);
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

    const selectSeat = (e) => {
        setSeatNum(e);
        console.log("선택된 좌석!?!?!? : " + e)
    }
    

    return(
        <div>
            <InfoBox>
            • 게시판 운영 규칙에 어긋난다고 판단되는 게시글은 사전 통보없이 블라인드 처리될 수 있습니다.<br/>
            • 특히 티켓 매매 및 양도의 글은 발견 즉시 임의 삭제되며 전화번호, 이메일 등의 개인정보는 악용될 우려가 있으므로 게시를 삼가해주시기 바랍니다.<br/>
            • 사전 경고에도 불구하고 불량 게시물을 계속적으로 게재한 게시자의 경우 뮤트 후기 게시판 작성 권한이 제한됩니다.
            </InfoBox>
            <p onChange={selectSeat}>선택된 좌석 [{mySeat}]</p><button onClick={SeatClick}>좌석 선택</button>
            <StarBox>
                <div className="MyAvg"><b className="AvgText">나의 총점</b><br/><FaStar size="30" color="#FCC419"/>{scoreAvgSeat}</div>
                <div className="MyStar">
                <div>좌석 <Rating value={seatRating} propFunction={highFunction1}/>　
                시야 <Rating value={viewRating} propFunction={highFunction2}/></div>
                <div>음향 <Rating value={soundRating} propFunction={highFunction3}/>　
                조명 <Rating value={lightRating}  propFunction={highFunction4}/></div>
                </div>
            </StarBox>

            <Text placeholder="관람하신 좌석의 후기를 작성해주세요. (10자 이상)" value={seatReview} onChange={onChangeSeatReview}></Text>     
           
            <OKbtn onClick={WriteSeatButton}>작성하기</OKbtn>
            <NOKbtn onClick={CancelButton}>취소하기</NOKbtn>    
             
            
            {modalTheater && <TheaterModal open={modalTheater} confirm={charlotte} close={chungmu} type={true} header="확인">극장을 선택해주세요.</TheaterModal>}
            {writeModal&& <Modal open={writeModal} close={closeModal} type={true}>좌석 후기 작성 완료♥</Modal>}
        </div>
    );
}

export default ReviewSeat;