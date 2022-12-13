import FirstFloorChar from "../theaterInfo/charLotte/FirstFloorChar";
import FirstFloorChung from "../theaterInfo/chungmuArt/FirstFloorChung";
import { useEffect, useState } from "react";
import { BsSearch } from 'react-icons/bs';
import MuteApi from "../api/MuteApi";

const SeatView = () => {
    useEffect(()=>{
        window.localStorage.setItem("seatInfoMode","후기");
    },[])

// 검색창
const [TheaterWord, setTheaterWord] = useState("");

// 검색창 공연장 입력
const onChangeInput = (e) => {
    setTheaterWord(e.target.value)
};

// 검색창 Api
const onClickInput = async() => {
    window.localStorage.setItem("input", TheaterWord)
    // window.localStorage.replace("/Search"); => 극장 찾기 페이지 연결
}
const [seatReviewEach,setSeatReviewEach] =  useState();



const highFunction = (e) => {
    alert("들어온 값 : "+e);

}
    return(
        <>
        <input onChange={onChangeInput} placeholder="극장을 검색하세요"/>
        <button type="button" onClick={onClickInput}><BsSearch/></button>
        <FirstFloorChar propsFunction={highFunction}/>
        </>
    )
}
export default SeatView;