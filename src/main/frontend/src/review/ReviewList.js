import React from "react";
import { useState, useEffect } from "react";
import { BsSearch } from 'react-icons/bs';


const ReviewList = () => {
   
// 검색창
const [muInput, setMuInput] = useState("");

const onChangeInput = (e) => {
    setMuInput(e.target.value)
  };

// 검색창 Api
const onClickInput = async() => {
    window.localStorage.setItem("input", muInput)
}

    return(
        <>
        <input onChange={onChangeInput} placeholder="뮤지컬 제목으로 검색"/>
        <button type="button" onClick={onClickInput}><BsSearch/></button>
        <fieldset>
            <h2>뮤지컬 관람 후기</h2>
        </fieldset>
        </>
    )
}
export default ReviewList;