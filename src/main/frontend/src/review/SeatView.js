import FirstFloorChar from "../theaterInfo/charLotte/FirstFloorChar";
import FirstFloorChung from "../theaterInfo/chungmuArt/FirstFloorChung";
import { useEffect, useState } from "react";
import { BsSearch } from 'react-icons/bs';

const SeatView = () => {
    useEffect(()=>{
        window.localStorage.setItem("seatInfoMode","후기");
    })

// 검색창
const [input, setInput] = useState("");
const onChangeInput = (e) => {
    setInput(e.target.value)
  };

// 검색창 Api
const onClickInput = async() => {
    window.localStorage.setItem("input", input)
    // window.localStorage.replace("/Search"); => 극장 찾기 페이지 연결
}
    return(
        <>
        <input onChange={onChangeInput} placeholder="극장을 검색하세요"/>
        <button type="button" onClick={onClickInput}><BsSearch/></button>
        <FirstFloorChar />
        <FirstFloorChung />
        </>
    )
}
export default SeatView;