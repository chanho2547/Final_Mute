
import { Link } from "react-router-dom";
import { useState, useEffect} from "react";
import MuteApi from "../api/MuteApi";
import { useNavigate } from "react-router-dom";

// 공연장 검색 목록
// theaterSearch.js에 검색창있음

const TheaterSearchList = () => {
    const navigate = useNavigate();

    const [searchInfo, setSearchInfo] = useState("");
    let inputTheater = window.localStorage.getItem("inputTheater"); // TheaterSearch.js에서 setItem으로 입력한 단어 저장
    console.log("중간테스트" + inputTheater); // 내가 입력한 theater 일부 단어 ex) 샤롯
    
    const OnClick = (e) => {
        window.localStorage.setItem("seatInfoMode","후기");
        window.localStorage.setItem("theaterName", e); // 공연장 이름
        navigate("/TheaterChar");
    }

    useEffect(() => {
        const SearchData = async () => {
            try {
                window.localStorage.getItem(inputTheater);
                let response = await MuteApi.searchTheater(inputTheater);
                setSearchInfo(response.data);
                console.log(response.data);
            } catch (e) {
                console.log(e + "공연장 검색 실패입니다");
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
                    <img className="theaterPoster" src = {inputTheater.theaterPoster} size width={300} height={240}/>
                    <div className="theaterName">공연장 이름 : {inputTheater.theaterName}</div>
                    <div className="theaterAddr">공연장 주소 : {inputTheater.theaterAddr}</div>
                    <div className="theaterSeats">공연장 좌석 개수 : {inputTheater.theaterSeats}석</div>
                    </div> 
                    {/* theater 풀네임 저장 */}
                    {window.localStorage.setItem("inputTheater", inputTheater.theaterName)} 
                </div>
            </>
            ))}
        </div>
        </>
    )
}

export default TheaterSearchList;