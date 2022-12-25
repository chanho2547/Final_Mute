import React from "react";
import { useState, useEffect } from "react";
import styled from "styled-components";
import ReviewList from "./ReviewList";
import ReviewTotal from "./ReviewTotal";
import ReviewSeat from "./ReviewSeat";
import ReviewTheater from "./TheaterModal";
import { Link, useNavigate } from "react-router-dom";

// 후기 탭 전체 틀 - 도연 작업 중

const TmpBox = styled.div`
    width: fit-content;
    height: fit-content;
    /* border: 2px solid black; */
    margin: auto;
`;

const Review = (props) => {
    const navigate = useNavigate();

    useEffect(()=>{
        window.localStorage.setItem("seatInfoMode","NONE");

        if(window.localStorage.getItem("countReview") === 2) {
            // setCount(window.localStorage.getItem("countReview") === 2);
            // setCountReview(true);
            props.countFunction();
            
        
          
        }
    })

    const [count, setCount] = useState(0);
    const [countReview, setCountReview] = useState(0);

    const highFunction = () => {
        setCount(count + 1);
    }
    const homeFunction = () => {
        setCount();
    }
    const countFunction = () => {
        setCountReview(countReview + 2);
    }


    return (
        <div className="container">
            <TmpBox>
            {count === 0 ? <ReviewList propFunction={highFunction} countFunction={countFunction}/> : null} 
            {count === 1 ? <ReviewTotal homeFunction={homeFunction} propFunction={highFunction} /> : null}
            {count === 2 ? <ReviewSeat homeFunction={homeFunction} propFunction={highFunction} theaterId={props.theaterId} /> : null}
            </TmpBox>
        </div>
    );

}

export default Review;