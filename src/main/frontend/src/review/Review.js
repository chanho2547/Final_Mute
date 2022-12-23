import React from "react";
import { useState, useEffect } from "react";
import styled from "styled-components";
import ReviewList from "./ReviewList";
import ReviewTotal from "./ReviewTotal";
import ReviewSeat from "./ReviewSeat";
import ReviewTheater from "./TheaterModal";

// 후기 탭 전체 틀 - 도연 작업 중

const TmpBox = styled.div`
    width: 90%;
    height: fit-content;
    border: 2px solid black;
    /* margin: auto; */
`;

const Review = () => {

    useEffect(()=>{
        window.localStorage.setItem("seatInfoMode","NONE");
    })

    const [count, setCount] = useState(0)

    // const onClickBefore = () => {
    //     console.log("현재 카운트 : " + count);
    //     setCount(count - 1);

    // }
    
    // const onClickNext = () => {
    //     console.log("현재 카운트 : " + count);
    //     setCount(count + 1);
    // }

    const highFunction = () => {
        setCount(count + 1);
    }
    const homeFunction = () => {
        setCount(0);
    }


    return (
        <div className="container">
            <TmpBox>
            {count === 0 ? <ReviewList propFunction={highFunction}/> : null} 
            {count === 1 ? <ReviewTotal homeFunction={homeFunction} propFunction={highFunction}/> : null}
            {count === 2 ? <ReviewSeat homeFunction={homeFunction} propFunction={highFunction}/> : null}
            </TmpBox>
        </div>
    );

}

export default Review;