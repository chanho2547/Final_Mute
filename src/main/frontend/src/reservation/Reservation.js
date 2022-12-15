import { useState, useEffect } from "react";
import styled from "styled-components";
import MuteApi from "../api/MuteApi";
import Login from "../login/Login";
import Pay from "./Pay";
import SelectDate from "./SelectDate";
import SelectMusical from "./SelectMusical";
import SelectSeat from "./SelectSeat";

// ---- 스타일드 컴포넌트 ----
const TmpBox = styled.div`
   
    width: 90%;
    height: fit-content;
    border: 2px solid black;
`;


// ---- Reservaion 컴포넌트 시작 ----
const Reservation = () => {

    //  아래로는 현재 선택된 정보들 

    // 뮤지컬 선택시
    const [musicalId,setMusicalId] = useState(); // 뮤지컬 이름
    const [musicalName,setMusicalName] = useState(); // 뮤지컬 이름
    
    // 좌석 선택시
    const [seatNum,setSeatNum] = useState(); // pk
    const [seatPos,setSeatPos] = useState(); // 1층 1열 1번

    // 날짜 선택시
    const [seeDate,setSeeDate] = useState(); // 상영날짜

    // 현재
    const [ticketDate,setTicketDate] = useState(); // 구매날짜
    const [userNum,setUserNum] = useState(); // 산 사람 고유번호
    const [paymentId,setPaymentId] = useState(); // 결제정보 고유번호
    

    // 다음 화면 돌리기 위한 count
    const [count, setCount] = useState(0);

    useEffect(() => {
        window.localStorage.setItem("seatInfoMode","예매");
        console.log("현재 seatInfoMode : " + window.localStorage.getItem("seatInfoMode"));
        console.log(`현재 뮤지컬 : ${musicalId} \n 현재 좌석 : ${seatPos} \n 현재 선택 날짜 : ${seatNum} \n`);
    })

    
    // 하위 컴포넌트에 전달 할 함수들
    const highFunction = () => {
        setCount(count + 1);
    }

    // 최종 결제확인시 실행되는 버튼 (결제 완료)
    const insertTicketFunction = async() => {
        const date = new Date();
        setTicketDate(date.toLocaleString('ko-kr'));// 현재 시점을 티켓 구매날짜,시간으로 설정한다

        // userNum이 들어가야 하는데, userId가 들어간다
        setUserNum(window.localStorage.getItem('whoLogin'));

        // 일단 결제 정보는 임시로 보류
        setPaymentId(null); 
        try {
            // paymentId 설정이 안됌
            setUserNum(window.localStorage.getItem("whoLoginUserNum"));
            const res = await MuteApi.insertTicket(seatNum,seatPos,seeDate,ticketDate,userNum,musicalId,paymentId);
            console.log("res.data : " + res.data);

        }catch(e){
            console.log("오류 : " + e);
        }
    }

    
    const addMusicalId = (e) => {
        console.log("뮤지컬 입력 완료 : " + e);
        setMusicalId(e);
    } 
    const addSeatNum = (e) => {
        console.log("좌석 PK 입력 완료 : " + e);
        setSeatNum(e);
    } 
    const addSeatPos = (e) => {
        console.log("좌석 String 입력 완료 : " + e)
        setSeatPos(e);
    }

    const addSeeDate = (e) => {
        console.log("상영날짜 입력 완료 : " + e);
        setSeeDate(e);
    } 

    const addMusicalName = (e) => {
        console.log("musicalName 입력 완료 : " + e);
        setMusicalName(e);
    } 

    const onClickNext = () => {
        console.log("현재 카운트 : "+count);
        setCount(count + 1); 
    }
    

     // insertTicket - seatNum, seatPos, seeDate, ticketDate, userNum, musicalId, paymentId 순서
    let resInfo = {
       seatNum : seatNum,
       seatPos : seatPos, 
       seeDate : seeDate, 
       ticketDate : ticketDate, 
       userNum : userNum, 
       musicalId : musicalId,
       paymentId : paymentId      
    }


    return(
        <>
        <h1>예매 페이지 입니다</h1>
        <button onClick={onClickNext}>다음으로</button>
        <TmpBox>
        {/* 각 컴포넌트에서, 기본적으로 highFunction을 넣어줌 (count++) */}
        {/* 각 컴포넌트에서, 추가적으로 예매에 필요한 정보들을 가져오기 위한 함수들을 만듦 */}
        {count === 0 ? <SelectMusical propFunction={highFunction} addMusicalId={addMusicalId} addMusicalName={addMusicalName}/> : null}
        {count === 1 ? <SelectDate propFunction={highFunction} addSeeDate={addSeeDate}/> : null }
        {count === 2 ? <SelectSeat propFunction={highFunction} addSeatNum={addSeatNum} addSeatPos={addSeatPos} /> : null }
        {count === 3 ? <Pay propFunction={highFunction} insertTicket={insertTicketFunction} resInfo={resInfo} /> : null}
        {count === 4 ? <h1>끝</h1> : null}
        {count === 5 ? setCount(0) : null}
        </TmpBox>
        </>
    );
}

export default Reservation;