import FirstFloorChar from "../theaterInfo/charLotte/FirstFloorChar";
import FirstFloorChung from "../theaterInfo/chungmuArt/FirstFloorChung";
import { useEffect, useState } from "react";
import { BsSearch } from 'react-icons/bs';
import MuteApi from "../api/MuteApi";
import { Link, useNavigate } from "react-router-dom";

const SeatView = () => {
const navigate = useNavigate();

    // useEffect(()=>{
    //     window.localStorage.setItem("seatInfoMode","후기");
    // },[])

// 공연장 검색창
const [inputTheater, setInputTheater] = useState("");

// 공연장 검색창 입력
const onChangeInput = (e) => {
    setInputTheater(e.target.value)
};

// 검색창 Api
const onClickInput = async() => {
    window.localStorage.setItem("inputTheater", inputTheater);
    navigate("/TheaterSearch")
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
export default SeatView;