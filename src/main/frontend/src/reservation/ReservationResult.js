

import { useEffect } from "react";
import styled from "styled-components";

const Container = styled.div`
display: flex;
flex-direction: column;
justify-content: center;
align-items: center;
`;


const ReservaionResult = (props) => {
    let whoLogin = window.localStorage.getItem("whoLogin");

    useEffect(()=>{
        props.insertTicket();
    })

    return(
        <Container>
        <h1>결제 내역</h1>
        <h2>뮤지컬 : {props.resInfo.musicalName}</h2>
        <h2>관람일 : {props.resInfo.seeDate}</h2>
        <h2>예매 좌석 : {props.resInfo.seatPos}</h2>

        <h2>결제한 아이디 : {whoLogin}</h2>
        
        
        
        <h2>결제 날짜 : {props.resInfo.ticketDate}</h2>
        <h2>결제 수단 : 카카오페이</h2>
        <h2>최종 결제금액 : {props.totalPrice}</h2>

        </Container>
    );
}

export default ReservaionResult;