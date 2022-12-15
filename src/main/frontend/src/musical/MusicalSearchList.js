import { Link } from "react-router-dom";
import { useState, useEffect} from "react";
import MuteApi from "../api/MuteApi";
import { useNavigate } from "react-router-dom";

const MusicalSearchList = () => {
    let navigate = useNavigate();
    const [searchList, setSearchList] = useState("");
    let musicalWord = window.localStorage.getItem("inputMusical"); // header에서 입력한 단어

useEffect(() => {
    const SearchData = async () => {
        try {
            let response = await MuteApi.searchMusical(musicalWord);
            setSearchList(response.data);
            console.log(response.data);
        } catch (e) {
            console.log(e + "뮤지컬 검색 실패입니다.")
        } 
    };
    SearchData();
}, []);

// 뮤지컬 클릭
const OnClick = (musicalId) => {
    window.localStorage.setItem("musicalId", musicalId)
    // console.log("로컬스토리지 : " + musicalId)
    navigate("/MusicalDetail")
}

    return (
        <>
        <div>
            {searchList && searchList.map(e => (
                // 만약 OnClick(e.musicalName)이라고 적으면 로컬스토리지에 musicalName저장됨
                <div onClick={() => OnClick(e.musicalId)}>
                <img src= {e.musicalPoster} />
                <div>{e.musicalName}</div>
                <div>{e.musicalStart}</div>
                <div>{e.musicalEnd}</div>
                <div>{e.theaterName}</div>
                </div>
            ))}
        </div>
        </>
    )
}
export default MusicalSearchList;