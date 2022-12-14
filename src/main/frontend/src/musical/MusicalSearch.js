import { Link } from "react-router-dom";
import { useState, useEffect} from "react";
import MuteApi from "../api/MuteApi";
import { useNavigate } from "react-router-dom";
// 페이지 삭제 예정 => MusicalSearchList로 변경
const MusicalSearch = () => {
    const navigate = useNavigate();
    const [searchInfo, setSearchInfo] = useState("");
    let inputMusical = window.localStorage.getItem("inputMusical");

    const OnClick = (musicalDetailInfo) => {
    window.localStorage.setItem("MusicalDetailInfo", musicalDetailInfo);
    navigate("/MusicalDetail");    
}

useEffect(() => {
    window.localStorage.setItem("musicalInfoMode","검색목록");
    const SearchData = async () => {
        try {
            window.localStorage.getItem(inputMusical);
            let response = await MuteApi.searchMusical(inputMusical);
            setSearchInfo(response.data);
            console.log(response.data);
        } catch (e) {
            console.log(e + "뮤지컬 검색 실패입니다.")
        } 
    };
    SearchData();
}, []);

    return (
        <>
        <div>
            {searchInfo && searchInfo.map(inputMusical => (
                <div OnClick={() => OnClick(inputMusical.musicalName)}>
                <img src= {inputMusical.musicalPoster} />
                <div>{inputMusical.musicalName}</div>
                <div>{inputMusical.musicalStart}</div>
                <div>{inputMusical.musicalEnd}</div>
                <div>{inputMusical.theaterName}</div>
                </div>
            ))}

        </div>

        </>
    )
}
export default MusicalSearch;