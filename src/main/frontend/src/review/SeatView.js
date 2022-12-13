import FirstFloorChar from "../theaterInfo/charLotte/FirstFloorChar";
import FirstFloorChung from "../theaterInfo/chungmuArt/FirstFloorChung";
import { useEffect, useState } from "react";
import { BsSearch } from 'react-icons/bs';
import MuteApi from "../api/MuteApi";
import { Link } from "react-router-dom";

const SeatView = () => {
    // useEffect(()=>{
    //     window.localStorage.setItem("seatInfoMode","후기");
    // },[])

// 공연장 검색창
const [input, setInput] = useState("");

// 공연장 검색창 입력
const onChangeInput = (e) => {
    setInput(e.target.value)
};

// 검색창 Api
const onClickInput = async() => {
    window.localStorage.setItem("input", input)
    // Link to = "/Search"
    // window.localStorage.replace("/Search");
}

// const highFunction = (e) => {
//     alert("들어온 값 : "+e);

// }

    return(
        <>
        <input onChange={onChangeInput} placeholder="극장을 검색하세요"/>
        <button type="button" onClick={onClickInput}><Link to = "/Search">웅..</Link><BsSearch/></button>
        {/* <FirstFloorChar propsFunction={highFunction}/> */}
        </>
    )
}
export default SeatView;