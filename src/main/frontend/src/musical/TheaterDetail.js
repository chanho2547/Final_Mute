import { useEffect, useState } from "react";
import MuteApi from "../api/MuteApi";
import styled from "styled-components";
import { Link } from "react-router-dom";
import KakaoMap from "./KakaoMap";

/////////// 스타일드 컴포넌트 ///////////
const Container = styled.div`
    text-align: left;

    .title {
        font-size: 1.2em;
        font-weight: bold;
        color: #810000;
        margin-bottom: 10px;
    }
`;


const TheaterDetail = (props) => {

    const [theaterInfo, setTheaterInfo] = useState();

    useEffect(() => {
        const TheaterData = async () => {
            try {
                const response = await MuteApi.theaterDetail(props.theaterId); // 극장 정보 불러오기
                setTheaterInfo(response.data);
                console.log("극장ID값: " + props.theaterId);
                
            } catch (e) {  
                console.log(e + "실패");
            }
           
        };
        TheaterData();
  
    }, []);

    return(
        <>
        {theaterInfo && theaterInfo.map (e => (
            <Container>
                <p className="title">{e.theaterName}</p>
                <p>연락처: {e.theaterCall}</p>
                <p>홈페이지: {e.theaterWeb}</p>
                <p>주소: {e.theaterAddr}</p>
                <KakaoMap 
                    theaterLat={e.theaterLat}
                    theaterLon={e.theaterLon}
                    theaterName={e.theaterName}/>
            </Container>

        ))}
        </>
    )
}

export default TheaterDetail;