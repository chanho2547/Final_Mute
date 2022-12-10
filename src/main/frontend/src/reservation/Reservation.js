import { useState, useEffect } from "react";
import styled from "styled-components";
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

    const [musical,setMusical] = useState();
    const [seat,setSeat] = useState();
    const [date,setDate] = useState();
    const [count, setCount] = useState(0);

    useEffect(() => {
        window.localStorage.setItem("seatInfoMode","예매");
        console.log("현재 seatInfoMode : " + window.localStorage.getItem("seatInfoMode"));
        console.log(`현재 뮤지컬 : ${musical} \n 현재 좌석 : ${seat} \n 현재 선택 날짜 : ${date} \n`);
    })

    

    const highFunction = () => {
        setCount(count + 1);
    }

    const addMusical = (e) => {
        console.log("뮤지컬 입력 완료 : " + e);
        setMusical(e);
    } 
    const addSeat = (e) => {
        console.log("좌석 입력 완료 : " + e);
        setSeat(e);
    } 
    const addDate = (e) => {
        console.log("날짜 입력 완료 : " + e);
        setDate(e);
    } 

    const onClickNext = () => {
        console.log("현재 카운트 : "+count);
        setCount(count + 1); 
    }

    return(
        <>
        <h1>예매 페이지 입니다</h1>
        <button onClick={onClickNext}>다음으로</button>
        <TmpBox>
        {count === 0 ? <SelectMusical propFunction={highFunction} addMusical={addMusical}/> : null}
        {count === 1 ? <SelectDate propFunction={highFunction} addDate={addDate}/> : null }
        {count === 2 ? <SelectSeat propFunction={highFunction} addSeat={addSeat}/> : null }
        {count === 3 ? <Pay propFunction={highFunction} musical={musical} seat={seat} date={date}/> : null}
        {count === 4 ? <h1>끝</h1> : null}
        {count === 5 ? setCount(0) : null}
        </TmpBox>
        </>
    );
}

export default Reservation;