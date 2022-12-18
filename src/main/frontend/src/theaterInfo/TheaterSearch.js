import { useState } from "react";
import { BsSearch } from 'react-icons/bs';
import { useNavigate } from "react-router-dom";
import styled from "styled-components";

const SearchBar = styled.div `
    .searchBar_input{
        width: 600px;
        height: 40px;
    },
    .searchBar_button{
        height: 40px; 
    }
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

const onClickInput = async() => {
    window.localStorage.setItem("inputTheater", inputTheater);
    navigate("/TheaterSearchList")
}

// const highFunction = (e) => {
//     alert("들어온 값 : "+e);

// }

// return문에 들어갈 내용 => <FirstFloorChar propsFunction={highFunction}/> 

    return(
        <>
        <SearchBar>
        <input className="searchBar_input" onChange={onChangeInput} placeholder="극장을 검색하세요"/>
        <button className="searchBar_button" type="button" onClick={onClickInput}><BsSearch/></button>
        
        </SearchBar>
        </>
    )
}
export default TheaterSearch;