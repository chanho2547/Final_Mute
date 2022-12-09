import React from "react";
import { useState, useEffect } from "react";
import styled from "styled-components";
import ReviewList from "./ReviewList";
import ReviewTotal from "./ReviewTotal";
import ReviewSeat from "./ReviewSeat";
import Theater from "../theaterInfo/Theater";

// 후기 탭 전체 틀 - 도연 작업 중

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

    const onClickBefore = () => {
        console.log("현재 카운트 : " + count);
        setCount(count - 1);

    }
    
    const onClickNext = () => {
        console.log("현재 카운트 : " + count);
        setCount(count + 1);
    }

    const highFunction = () => {
        setCount(count + 1);
    }


    return (
        <div className="container">
{/* 
            {/*<button onClick={onClickBefore}>{ (count === 0) ? "후기 작성하기" : "다음으로" }</button>
            <TmpBox>
            {count === 4 ? <ReviewSeat /> : null} 
            {count === 3 ? <ReviewTotal /> : null }
            {count === 2 ? <Theater /> : null }
            {count === 1 ? <ReviewList/> : null}
            {count === 0 ? setCountB(0) : null}
            </TmpBox> */}
            {(count === 0 ? null :  <button onClick={onClickBefore}>이전으로</button>)}
            {(count === 3 ? null :  <button onClick={onClickNext}>다음으로</button>)}

          
            {/* <button onClick={onClickBefore}>{ <ReviewList /> ? null : "이전으류" }</button> */}
            {/* <button onClick={onClickNext}>{ <ReviewSeat/> ? null : "다음으로" }</button> */}
            <TmpBox>
            {/* {count === -4 ? setCount(0) : null}
            {count === -3 ? <ReviewList /> : null }
            {count === -2 ? <Theater /> : null }
            {count === -1 ? <ReviewTotal /> : null } */}
            {count === 0 ? <ReviewList propFunction={highFunction}/> : null} 
            {count === 1 ? <Theater propFunction={highFunction}/> : null}
            {count === 2 ? <ReviewTotal propFunction={highFunction}/> : null}
            {count === 3 ? <ReviewSeat propFunction={highFunction}/> : null}
            {/* {count === 4 ? setCount(0) : null} */}
            </TmpBox>
 
        </div>
    );

}

export default Review;