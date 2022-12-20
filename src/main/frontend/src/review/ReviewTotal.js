import React from "react";
import { useState } from "react";
import styled from "styled-components";
import { Link, useNavigate } from "react-router-dom";
import MuteApi from "../api/MuteApi";
import Rating from "../util/Rating";
import TotalModal from "./TotalModal";
import Modal from "../util/Modal";

// 뮤지컬 총평 후기 등록 - 도연


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


const ReviewTotal = (props) => {
    const navigate = useNavigate();

    const userNum = window.localStorage.getItem("whoLoginUserNum");
    let musicalId = window.localStorage.getItem("musicalId");
    
    console.log("회원번호 : " + userNum); // 회원번호
    console.log("뮤지컬 아이디 : " + musicalId); // 뮤지컬번호

    // 취소 버튼 누르면 첫 화면으로..
    const CancelButton = () => {   
        navigate('/Review');
    }

    // 입력받는 부분
    const [scoreStory, setScoreStory] = useState(''); // 스토리 별점
    const [scoreDirect, setScoreDirect] = useState(''); // 연출 별점
    const [scoreCast, setScoreCast] = useState(''); // 캐스팅 별점
    const [scoreNumber, setScoreNumber] = useState(''); // 넘버 별점
    const [scoreAvgTotal, setScoreAvgTotal] = useState(''); // 별점 총점
    const [totalReview, setTotalReview] = useState(''); // 뮤지컬 후기 텍스트

    // 오류 메세지
    const [totalReviewMsg, setTotalReviewMsg] = useState('');
    
    // 유효성 검사
    const [isTotalReview, setIsTotalReview] = useState(false);

    // 모달
    const [writeModal, setWriteModal] = useState(false); // 확인 버튼 눌렀을 때

    
    const confirmModal = () => { // 좌석 후기 작성하러 가기 
        props.propFunction(); // 상위 컴포넌트의 함수를 불러 count ++
    }
    
    const closeModal = () => { // 아니오 눌렀을 때 => 리뷰 리스트로 이동
        navigate("/Review"); 
    }

    // 후기 작성하기 Api 호출
    // 후기 작성 버튼이 눌려지면 동작하는 함수
    const WriteTotalButton = async() => {
        try {
            const res = await MuteApi.WriteTotal(userNum, musicalId, scoreStory, scoreDirect, scoreCast, scoreNumber, scoreAvgTotal, totalReview);
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
        console.log("스토리 별점 가져온 값 : " + text);
        setScoreStory(text);
    }
    const highFunction2 = (text) => {
        console.log("연출 별점 가져온 값 : " + text);
        setScoreDirect(text);
    }
    const highFunction3 = (text) => {
        console.log("캐스팅 별점 가져온 값 : " + text);
        setScoreCast(text);
    }
    const highFunction4 = (text) => {
        console.log("넘버 별점 가져온 값 : " + text);
        setScoreNumber(text);

        const arr = [scoreStory, scoreDirect, scoreCast, scoreNumber];
        const avg = arr.reduce((a, c) => a + c) / arr.length
        console.log("평균 값 : " + avg);
        setScoreAvgTotal(avg);
    }

    const onChangeTotalReview = (e) => {
        setTotalReview(e.target.value)
        if(e.target.value.length > 9 ) {
            setIsTotalReview(true);
        } else {
            setIsTotalReview(false);
        }
    }
    
    return(
        <>
            <div>
                <InfoBox>
                • 게시판 운영 규칙에 어긋난다고 판단되는 게시글은 사전 통보없이 블라인드 처리될 수 있습니다.<br/>
                • 특히 티켓 매매 및 양도의 글은 발견 즉시 임의 삭제되며 전화번호, 이메일 등의 개인정보는 악용될 우려가 있으므로 게시를 삼가해주시기 바랍니다.<br/>
                • 사전 경고에도 불구하고 불량 게시물을 계속적으로 게재한 게시자의 경우 뮤트 후기 게시판 작성 권한이 제한됩니다.
                </InfoBox>
                <StarBox>
                    <div className="MyAvg"><b className="AvgText">나의 총점</b>⭐{scoreAvgTotal}</div>
                    <div className="MyStar">
                    <div>스토리 <Rating value={scoreStory} propFunction={highFunction1}/>　
                    연출 <Rating value={scoreDirect} propFunction={highFunction2}/></div>
                    <div>캐스팅 <Rating value={scoreCast} propFunction={highFunction3}/>　
                    넘버 <Rating value={scoreNumber}  propFunction={highFunction4}/></div>
                    </div>
                </StarBox>

                <Text placeholder="관람하신 뮤지컬의 후기를 작성해주세요. (10자 이상)" value={totalReview} onChange={onChangeTotalReview}></Text>

                <OKbtn onClick={WriteTotalButton}>작성하기</OKbtn>
                <NOKbtn onClick={CancelButton}>취소하기</NOKbtn>

                {writeModal&& <TotalModal open={writeModal} confirm={confirmModal} close={closeModal} type={true} header="확인">뮤지컬 후기 작성 완료♥</TotalModal>}
            </div>

        </>
    );
}

export default ReviewTotal;