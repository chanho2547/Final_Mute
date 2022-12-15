import { useState } from "react";
import { BsSearch } from 'react-icons/bs';
import { Link, useNavigate } from "react-router-dom";
import styled from "styled-components";

const SearchBar = styled.div `
    width: 200px;
    height: 30px;
`;





// 공연장 검색바
const TheaterSearch = () => {
const navigate = useNavigate();

// 공연장 검색창
const [inputTheater, setInputTheater] = useState("");

// 공연장 검색창 입력
const onChangeInput = (e) => {
    setInputTheater(e.target.value)
};

// 검색창 Api
const onClickInput = async() => {
    window.localStorage.setItem("inputTheater", inputTheater);
    navigate("/TheaterSearchList")
}

// const highFunction = (e) => {
//     alert("들어온 값 : "+e);

// }

    return(
        <>
        <SearchBar>
        <input onChange={onChangeInput} placeholder="극장을 검색하세요"/>
        <button type="button" onClick={onClickInput}><BsSearch/></button>
        {/* <FirstFloorChar propsFunction={highFunction}/> */}
        </SearchBar>
        </>
    )
}
export default TheaterSearch;