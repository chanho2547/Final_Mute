import FirstFloorChar from "./charLotte/FirstFloorChar";
import FirstFloorChung from "./chungmuArt/FirstFloorChung";
import { useEffect, useState } from "react";
import { BsSearch } from 'react-icons/bs';
import MuteApi from "../api/MuteApi";
import { Link, useNavigate } from "react-router-dom";
// 이따가 이름 변경하기
// 공연장 검색창 SeatView.js => TheaterSearch.js
// 공연장 검색리스트 TheaterSearch.js => TheaterSearchList.js

// 뮤지컬 검색창 Header.js
// 뮤지컬 검색리스트 MusicalSearchList.js

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
        <input onChange={onChangeInput} placeholder="극장을 검색하세요"/>
        <button type="button" onClick={onClickInput}><BsSearch/></button>
        {/* <FirstFloorChar propsFunction={highFunction}/> */}
        </>
    )
}
export default TheaterSearch;