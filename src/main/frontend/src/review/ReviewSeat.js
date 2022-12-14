import React, { useEffect } from "react";
import { useState } from "react";
import styled from "styled-components";
import MuteApi from "../api/MuteApi";
import Rating from "../util/Rating";
import TheaterModal from "./TheaterModal";
import { Link, useNavigate } from "react-router-dom";
import Modal from "../util/Modal";
import { FaStar } from 'react-icons/fa';

// 좌석 후기 등록 - 도연

const Container = styled.div`
    padding: 20px;
    width: fit-content;
`;

const InfoBox = styled.div`
    padding: 15px;
    font-size: small;
    color: gray;
`;

const SelectSeat = styled.div`
    text-align: center;
    margin-bottom: 20px;
    border: solid 0.5px gray;
    padding: 10px;
    width: 550px;
    margin-left: 470px;

    .SeatBtn {
        border-radius: 5px;
        border: solid 0.5px lightgray;
        background-color: #EEEBDD;
        width: 100px;
        height: 30px;
    }
`;

const StarBox = styled.div`
    text-align: center;
    display: flex;
    padding-left: 200px;
    margin-left: 320px;

    .AvgText {
        color: #810000;
        font-size: 20px;
    }
    .MyAvg {
        float: left;
    }
    .MyStar {
        float: right;
    }
`;

const MyStar = styled.div`
    display: flex;

    .MyStar1 {
        float: left;
        padding-left: 70px;
    }
    .MyStar2 {
        float: right;
        padding-left: 30px;
    } 
`;

const TextBox = styled.div`
    text-align: center;
    padding-left: 470px;


    .text {
    width: 550px;
    height: 250px;
    padding-left: 100px;
    margin: 10px;
    resize: none;
    }
    .hint {
        color: royalblue;
        font-style: italic;
        font-size: small;
    }
    .OKbtn {
    color: white; 
    background-color: #810000;
    border-radius: 5px;
    border: none;
    width: 150px;
    height: 30px;
    margin: 10px;
    }
    .NOKbtn {
    color: white; 
    background-color: #909090;
    border-radius: 5px;
    border: none;
    width: 150px;
    height: 30px;
    margin: 10px;
    }
`;

const ReviewSeat = (props) => {
    const navigate = useNavigate();

    const userNum = window.localStorage.getItem("whoLoginUserNum"); // 지금 로그인한 회원번호
    let musicalId = window.localStorage.getItem("musicalId"); // 지금 선택한 뮤지컬
    let mySeat = window.localStorage.getItem("whatSeatInfo"); // 극장이름 + 좌석번호(층, 열, 번)
    let pkNum = window.localStorage.getItem("whatSeatNum"); // 좌석번호
    let theaterId = window.localStorage.getItem("theaterId"); // 극장아이디

    // 취소 버튼 누르면 첫 화면으로..
    const CancelButton = () => {   
        navigate('/Review');
        setCount(count + 1);
    }

    // 입력받는 부분
    const [seatRating, setSeatRating] = useState(''); // 좌석 별점
    const [viewRating, setViewRating] = useState(''); // 시야 별점
    const [soundRating, setSoundRating] = useState(''); // 음향 별점
    const [lightRating, setLightRating] = useState(''); // 조명 별점
    const [scoreAvgSeat, setScoreAvgSeat] = useState(''); // 별점 총점
    const [seatReview, setSeatReview] = useState(''); // 뮤지컬 후기 텍스트

    // 모달
    const [modalTheater, setModelTheater] = useState(false); // 좌석 선택 버튼 눌렀을 때
    const [writeModal, setWriteModal] = useState(false); // 확인 버튼 눌렀을 때


    const [count, setCount] = useState(0);

    const charlotte = () => { // 샤롯데 좌석 선택하러 가기
        setModelTheater(false);
        navigate('/TheaterChar');
    }
    
    const chungmu = () => { // 충무 좌석 선택하러 가기
        navigate('/TheaterChung');
        setModelTheater(false);
    }

    const closeModal = () => { 
        setWriteModal(false);
        setModelTheater(false);
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
            const res =  await MuteApi.WriteSeat(userNum, musicalId, theaterId, pkNum, seatRating, viewRating, soundRating, lightRating, scoreAvgSeat, seatReview);
            if(res.data === true) {
                setWriteModal(true);  
            } else {
            }
        } catch (e) {
            alert("오류 : " + e);
        }
    };

    const highFunction1 = (text) => {
        setSeatRating(text);
    }
    const highFunction2 = (text) => {
        setViewRating(text);
    }
    const highFunction3 = (text) => {
        setSoundRating(text);
    }
    const highFunction4 = (text) => {
        setLightRating(text);

        const arr = [seatRating, viewRating, soundRating, lightRating];
        const avg = arr.reduce((a, c) => a + c) / arr.length
        setScoreAvgSeat(avg);
    }

    useEffect(()=> {
        if(window.localStorage.getItem("countReview") === 2){
            window.localStorage.removeItem("countReview");
        }
    })

    const onChangeSeatReview = (e) => {
        setSeatReview(e.target.value)
    }

    return(
        <Container>
            <InfoBox>
            • 게시판 운영 규칙에 어긋난다고 판단되는 게시글은 사전 통보없이 블라인드 처리될 수 있습니다.<br/>
            • 특히 티켓 매매 및 양도의 글은 발견 즉시 임의 삭제되며 전화번호, 이메일 등의 개인정보는 악용될 우려가 있으므로 게시를 삼가해주시기 바랍니다.<br/>
            • 사전 경고에도 불구하고 불량 게시물을 계속적으로 게재한 게시자의 경우 뮤트 후기 게시판 작성 권한이 제한됩니다.
            </InfoBox>
            <SelectSeat>
            <button className="SeatBtn" onClick={SeatClick}>좌석 선택하기</button>　<span>선택된 좌석 [{mySeat}]</span>           
            </SelectSeat>
            <StarBox>
                <div className="MyAvg"><b className="AvgText">나의 총점</b><br/>　<FaStar size="30" color="#FCC419"/>{scoreAvgSeat}</div>
                <MyStar>
                <div className="MyStar1">
                <p>좌석 <Rating value={seatRating} propFunction={highFunction1}/></p>
                <p>음향 <Rating value={soundRating} propFunction={highFunction3}/></p>
                </div>
                <div className="MyStar2">
                <p>시야 <Rating value={viewRating} propFunction={highFunction2}/></p>
                <p>조명 <Rating value={lightRating}  propFunction={highFunction4}/></p>
                </div>
                </MyStar>
            </StarBox>
            <TextBox> 
            <textarea className="text" placeholder="관람하신 좌석의 후기를 작성해주세요." value={seatReview} onChange={onChangeSeatReview}></textarea><br/> 
            <button className="OKbtn" onClick={WriteSeatButton}>작성하기</button>　
            <button className="NOKbtn" onClick={CancelButton}>취소하기</button>  
            </TextBox>  
            
            {modalTheater && <TheaterModal open={modalTheater} char={charlotte} chungmu={chungmu} close={closeModal} type={true} header="확인">관람하신 극장을 선택해주세요.</TheaterModal>}
            {writeModal&& <Modal open={writeModal} close={closeModal} type={true}>좌석 후기 작성 완료♥</Modal>}
        </Container>
    );
}

export default ReviewSeat;