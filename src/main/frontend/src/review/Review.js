import React from "react";
import { useState, useEffect } from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import MuteApi from "../api/MuteApi";
import ReviewList from "./ReviewList";
import ReviewTotal from "./ReviewTotal";
import ReviewSeat from "./ReviewSeat";
import Theater from "../theaterInfo/Theater";

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