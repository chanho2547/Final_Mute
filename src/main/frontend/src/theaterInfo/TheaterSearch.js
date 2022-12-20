import { useState } from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import Search from '../images/search.png';

const SearchContainer = styled.div`
  margin: auto;
  border: 4px solid #810000;
  display: flex;
  width: 580px;
  height: 60px;
    .search_input{
        width: 550px;
        border: none;
        font-size: 18px;
        margin-left: 15px;
    }
    .search_button{
        border: none;
        background-color: rgba(0,0,0,0);
    }
    img{
        width: 25px;
        height: 25px;
        margin-right: 15px;
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

const onKeyPress = (e) => {
    if(e.key === 'Enter'){
        onClickInput();
    }
}

// const highFunction = (e) => {
//     alert("들어온 값 : "+e);
// }
// return문에 들어갈 내용 => <FirstFloorChar propsFunction={highFunction}/> 

    return(
        <>
        <SearchContainer>
        <input className="search_input" onChange={onChangeInput} onKeyDown={onKeyPress} placeholder="극장을 검색하세요"/>
        <button className="search_button" type="button" onClick={onClickInput}><img src={Search}/></button>
        </SearchContainer>
        </>
    )
}
export default TheaterSearch;