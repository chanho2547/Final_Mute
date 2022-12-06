import { useState, useEffect } from "react";
import styled from "styled-components";
import Login from "../login/Login";
import Pay from "./Pay";
import SelectDate from "./SelectDate";
import SelectMusical from "./SelectMusical";
import SelectSeat from "./SelectSeat";

const TmpBox = styled.div`
   
    width: 90%;
    height: fit-content;
    border: 2px solid black;
`;



const Reservation = () => {

    useEffect(() => {
        window.localStorage.setItem("seatInfoMode","예매");
        console.log("현재 seatInfoMode : " + window.localStorage.getItem("seatInfoMode"));
    })

    const [count, setCount] = useState(0)
    

    const onClickNext = () => {
        console.log("현재 카운트 : "+count);
        setCount(count + 1);
       
    }



    return(
        <>
        <h1>예매 페이지 입니다</h1>
        <button onClick={onClickNext}>다음으로</button>
        <TmpBox>
        {count === 0 ? <SelectMusical /> : null}
        {count === 1 ? <SelectDate /> : null }
        {count === 2 ? <SelectSeat /> : null }
        {count === 3 ? <Pay /> : null}
        {count === 4 ? <h1>끝</h1> : null}
        {count === 5 ? setCount(0) : null}
        </TmpBox>
     
        
        </>
    );
}

export default Reservation;