import React from "react";
import { useState, useEffect } from "react";
import styled from "styled-components";
import { Link, useNavigate } from "react-router-dom";
import MuteApi from "../api/MuteApi";
import Rating from "../util/Rating";
import TotalModal from "./TotalModal";
import { FaStar } from 'react-icons/fa';


// 뮤지컬 총평 후기 등록 - 도연

const Container = styled.div`
    padding: 10px;
    width: fit-content;
`;


const InfoBox = styled.div`
    padding: 15px;
    font-size: small;
    color: gray;
`;

const StarBox = styled.div`
    display: flex;
    padding-left: 240px;

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

const ReviewTotal = (props) => {
    const navigate = useNavigate();

    const userNum = window.localStorage.getItem("whoLoginUserNum"); // 회원번호
    let musicalId = window.localStorage.getItem("musicalId"); // 뮤지컬번호

    // 취소 버튼 누르면 첫 화면으로..
    const CancelButton = () => {   
        navigate("/Review"); 
    }

    // 입력받는 부분
    const [scoreStory, setScoreStory] = useState(''); // 스토리 별점
    const [scoreDirect, setScoreDirect] = useState(''); // 연출 별점
    const [scoreCast, setScoreCast] = useState(''); // 캐스팅 별점
    const [scoreNumber, setScoreNumber] = useState(''); // 넘버 별점
    const [scoreAvgTotal, setScoreAvgTotal] = useState(''); // 별점 총점
    const [totalReview, setTotalReview] = useState(''); // 뮤지컬 후기 텍스트

    // 모달
    const [writeModal, setWriteModal] = useState(false); // 확인 버튼 눌렀을 때


    const confirmModal = () => { // 좌석 후기 작성하러 가기 
        props.propFunction(); // 상위 컴포넌트의 함수를 불러 count ++
        navigate("/ReviewSeat"); 
    }
    
    const closeModal = () => { // 아니오 눌렀을 때 => 리뷰 리스트로 이동
        setWriteModal(false);
        navigate("/MusicalDetail"); 
    }

    const [count, setCount] = useState(0);

    
    // 후기 작성하기 Api 호출
    // 후기 작성 버튼이 눌려지면 동작하는 함수
    const WriteTotalButton = async() => {
        try {
            const res = await MuteApi.WriteTotal(userNum, musicalId, scoreStory, scoreDirect, scoreCast, scoreNumber, scoreAvgTotal, totalReview);
            if(res.data === true) {
                setWriteModal(true);   
            } else {
            }
        } catch (e) {
            alert("오류 : " + e);
        }
    };

    const highFunction1 = (text) => {
        setScoreStory(text);
    }
    const highFunction2 = (text) => {
        setScoreDirect(text);
    }
    const highFunction3 = (text) => {
        setScoreCast(text);
    }
    const highFunction4 = (text) => {
        setScoreNumber(text);

        const arr = [scoreStory, scoreDirect, scoreCast, scoreNumber];
        const avg = arr.reduce((a, c) => a + c) / arr.length
        setScoreAvgTotal(avg);
    }

    // 후기 작성 힌트
    const onChangeTotalReview = (e) => {
        setTotalReview(e.target.value)
    }

    // useEffect(()=>{
    //     window.localStorage.setItem("seatInfoMode","NONE");

    //     if(window.localStorage.getItem("countReview") === 2) {
    //         setCount(window.localStorage.getItem("countReview"));
    //         // props.countFunction();
    //         // props.propFunction(); // 상위 컴포넌트의 함수를 불러 count ++
          
    //     }
    // })

    
    return(
        <Container>
            <InfoBox>
            • 게시판 운영 규칙에 어긋난다고 판단되는 게시글은 사전 통보없이 블라인드 처리될 수 있습니다.<br/>
            • 특히 티켓 매매 및 양도의 글은 발견 즉시 임의 삭제되며 전화번호, 이메일 등의 개인정보는 악용될 우려가 있으므로 게시를 삼가해주시기 바랍니다.<br/>
            • 사전 경고에도 불구하고 불량 게시물을 계속적으로 게재한 게시자의 경우 뮤트 후기 게시판 작성 권한이 제한됩니다.
            </InfoBox>
            <StarBox>
                <div className="MyAvg"><b className="AvgText">나의 총점</b><br/>　<FaStar size="30" color="#FCC419"/>{scoreAvgTotal}</div>
                <MyStar>
                <div className="MyStar1">
                <p>스토리 <Rating value={scoreStory} propFunction={highFunction1}/></p>
                <p>캐스팅 <Rating value={scoreCast} propFunction={highFunction3}/></p>
                </div>
                <div className="MyStar2">
                <p>연출 <Rating value={scoreDirect} propFunction={highFunction2}/></p>
                <p>넘버 <Rating value={scoreNumber}  propFunction={highFunction4}/></p>
                </div>
                </MyStar>
            </StarBox>
            <TextBox>
            <textarea className="text" placeholder="관람하신 뮤지컬의 후기를 작성해주세요." value={totalReview} onChange={onChangeTotalReview}></textarea><br/>
            <button className="OKbtn" onClick={WriteTotalButton}>작성하기</button>　
            <button className="NOKbtn" onClick={CancelButton}>취소하기</button>
            </TextBox>

            {writeModal&& <TotalModal open={writeModal} confirm={confirmModal} close={closeModal} type={true} header="확인">뮤지컬 후기 작성 완료♥</TotalModal>}
        </Container>
    );
}

export default ReviewTotal;