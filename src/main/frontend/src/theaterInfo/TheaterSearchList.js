import { Link } from "react-router-dom";
import { useState, useEffect} from "react";
import MuteApi from "../api/MuteApi";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";

// 공연장 검색 목록
// theaterSearch.js에 검색창있음
const TheaterInfo = styled.div`
    border: 3px solid #810000;
    width: 80%;
    margin: auto;
        .theater_name{
            color: #810000;
            font-size: 30px;
            font-weight: 700;
        }
`;



const TheaterSearchList = () => {
    const navigate = useNavigate();

    const [searchInfo, setSearchInfo] = useState("");
    let inputTheater = window.localStorage.getItem("inputTheater"); // TheaterSearch.js에서 setItem으로 입력한 단어 저장
    console.log("중간테스트" + inputTheater); // 내가 입력한 theater 일부 단어 ex) 샤롯
    
    const OnClick = (e) => {
        window.localStorage.setItem("seatInfoMode","후기");
        window.localStorage.setItem("theaterFullName", e); // 공연장 풀네임 
        console.log("입장하는 공연장 이름 : " + e);
        if(e === "샤롯데씨어터"){
            navigate("/TheaterChar");
        } else if (e === "충무아트센터"){
            navigate("/TheaterChung");
        } else {
            alert("서비스 준비 중입니다. 현재 이용 가능한 공연장은 '샤롯데시어터'와 '충무아트센터'입니다.");
        }
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
                    <TheaterInfo>
                    <div className="theater_name">{inputTheater.theaterName}</div>
                    <div className="theater_addr">주소 {inputTheater.theaterAddr}</div>
                    <div className="theater_call">연락처 {inputTheater.theaterCall}</div>
                    <div className="theater_web">홈페이지 <a href={inputTheater.theaterWeb}>{inputTheater.theaterWeb}</a></div>
                    <div className="theater_seats">좌석수 {inputTheater.theaterSeats}석</div>
                    </TheaterInfo>
                </div>
            </>
            ))}
        </div>
        </>
    )
}

export default TheaterSearchList;