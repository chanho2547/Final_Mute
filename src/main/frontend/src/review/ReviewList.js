import React from "react";
import { useState, useEffect, useMemo } from "react";
import { Link, useNavigate } from "react-router-dom";
import Modal from "../util/Modal";
import ReviewTotal from "./ReviewTotal";
import axios from "axios";
import MuteApi from "../api/MuteApi";
import Rating from "../util/Rating";
import styled from "styled-components";
import { FaStar } from 'react-icons/fa';

// 뮤지컬 총평 후기 view - 도연 작업중..

const Container = styled.div`
    text-align: left;
    padding: 10px;
    
`;

const StarBox = styled.div`
    background-color: #EEEBDD;
    display: flex;
    padding: 15px;
    padding-left: 50px;

    .AvgText {
        text-align: left;
        color: #810000;
        font-size: 30px;
    }
    .AvgBox {
        float: left;
    }
    .writeBtn {
        color: white; 
        background-color: #810000;
        border-radius: 5px;
        border: none;
        float: right;
        width: 200px;
        height: 50px;
        margin-left: 200px;
        
    }
`;

const ReviewBox = styled.div`
    padding: 10px;
    border: solid 0.5px lightgray;

    .myRaing {
        padding-left: 30px;
    }

    .text {
        padding: 5px;
    }
    .date {
        color: lightgray;
    }
    .deleteBtn {
        border-radius: 5px;
        border: solid 0.5px lightgray;
        background-color: white;
        

    }
`;

const ReviewList = (props) => {
    const navigate = useNavigate();

    const member = window.localStorage.getItem("whoLoginUserNum");
    let musicalId = window.localStorage.getItem("musicalId");
    const reviewMuId = window.localStorage.getItem("reviewMuId");
    
    console.log("회원번호 : " + member); // 회원번호
    console.log("뮤지컬 아이디 : " + musicalId); // 뮤지컬번호

    // 모달
    const [modalLogin, setModelLogin] = useState(false); // 로그인 안했을 때
    
    const closeModal = () => { 
        setModelLogin(false);
        setModalOpen(false);
        setCount(count + 1);
        console.log("테스트 - count : " + count);
    }

    const [modalOpen, setModalOpen] = useState(""); // 삭제 버튼 눌렀을 때
    const [modalText, setModalText] = useState(""); // 삭제 모달 텍스트

    const [count,setCount] = useState();


    // 후기 작성 버튼 눌렀을 때 로그인 이면 OK, 로그인 안했으면 모달 띄우기
    const WriteButton = () => {
        let checkLogin = window.localStorage.getItem("whoLogin");

        if(checkLogin)  { 
            props.propFunction(); 
            setModelLogin(false);
        }
        else {
            setModelLogin(true);
        } 
    };

    const [ReviewInfo, setReviewInfo] = useState(); 
      

    // Api 호출
    useEffect(() => {
        const ReviewData = async () => {
            try{
                let response = await MuteApi.ReviewInfo(musicalId);
            
                setReviewInfo(response.data);
                console.log("후기 불러오기 성공!!");

            } catch (e) {
                console.log(e + "후기 불러오기 실패");
            }
        };
        ReviewData();
    }, [count]);


    // 후기 삭제
    const OnClickDelete = async(member, reviewMuId) => {
        try {
            console.log("후기 삭제 userNum : " + member);
            console.log("후기 삭제 reviewMuId : " + reviewMuId);

            let response = await MuteApi.DeleteTotal(member, reviewMuId);

            console.log("response : " + response);

            if(response.data === true) {
                setModalOpen(true);
                setModalText("삭제가 완료되었습니다.");
                setCount(count + 1);
                navigate('/Review');
            }
            
        } catch (e) {
            setModalOpen(true);
            setModalText("작성자가 아닙니다. 삭제할 수 없습니다.");            
        }
    }

    // const Onclick = (e) => {
    //     <Rating/>
    // }



    return(
        <Container>     
        <StarBox>
            <div className="AvgBox">
            <p><b className="AvgText">평균 별점 </b><FaStar size="30" color="#FCC419"/>{}</p>
            <span><b>스토리 </b><FaStar size="25" color="gray"/>{}</span>　
            <span><b>연출 </b><FaStar size="25" color="gray"/>{}</span>　
            <span><b>캐스팅 </b><FaStar size="25" color="gray"/>{}</span>　
            <span><b>넘버 </b><FaStar size="25" color="gray"/>{}</span>
            </div>
            <button className="writeBtn" onClick={WriteButton}>후기 작성하기</button>
        </StarBox>
        {ReviewInfo && ReviewInfo.map(e => ( 
            // <div Onclick={() => Onclick(e)}>
            <ReviewBox>
                <p>{e.reviewMuId}　{e.member}　<FaStar size="20" color="#FCC419"/>{e.scoreAvgTotal} <span className="date">　작성일 {e.writeDate}</span>　
                <button className="deleteBtn" onClick={()=>OnClickDelete(member,e.reviewMuId)}>삭제</button></p>
                <p className="myRaing">스토리 <FaStar size="15" color="gray"/>{e.scoreStory} 　연출 <FaStar size="15" color="gray"/>{e.scoreDirect} 　캐스팅 <FaStar size="15" color="gray"/>{e.scoreCast} 　넘버 <FaStar size="15" color="gray"/>{e.scoreNumber}<br/>
                <p className="text">{e.reviewMuTxt}</p></p>

            </ReviewBox>
            // </div>
        ))}  
        {modalLogin&& <Modal open={modalLogin} close={closeModal} type={true}>로그인이 필요한 서비스입니다.</Modal>}
        {modalOpen && <Modal open={modalOpen} close={()=>closeModal()} header="확인">{modalText}</Modal>}
        </Container>

    );
}
export default ReviewList;