
import { Link } from "react-router-dom";
import { useState, useEffect} from "react";
import MuteApi from "../api/MuteApi";

const OnClick = (e) => {
    window.localStorage.setItem("Detail", e);
    window.location.replace("/ItemDetail");
}


const Search = () => {
    const [searchInfo, setSearchInfo] = useState("");
    let inputTheater = window.localStorage.getItem("input");

useEffect(() => {
    const SearchData = async () => {
        try {
            window.localStorage.getItem(inputTheater);
            let response = await MuteApi.searchTheater(inputTheater);
            setSearchInfo(response.data);
            console.log(response.data);
        } catch (e) {
            console.log(e + "검색 실패 입니다");
        }
    };
    SearchData();
}, []);

return (
    <>
    <div>
        {searchInfo && searchInfo.map(inputTheater => (
        <>
            <div onClick={()=>OnClick(inputTheater.theaterName)}>
                <div className="theater">
                <img className="theaterPoster" src = {inputTheater.theaterPoster} size width={400}/>
                <div className="theaterName">공연장 이름 : {inputTheater.theaterName}</div>
                <div className="theaterAddr">공연장 주소 : {inputTheater.theaterAddr}</div>
                <div className="theaterSeats">공연장 좌석 개수 : {inputTheater.theaterSeats}석</div>
                </div> 
            </div>
        </>
        ))}
    </div>
    </>
)

}

export default Search;