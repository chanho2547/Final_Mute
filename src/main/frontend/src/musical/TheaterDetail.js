import { useEffect, useState } from "react";
import MuteApi from "../api/MuteApi";
import styled from "styled-components";
import { Link } from "react-router-dom";

/////////// 스타일드 컴포넌트 ///////////
const Container = styled.div`
    text-align: left;

    .title {
        font-size: 1.2em;
        font-weight: bold;
        color: #810000;
    }
`;


const TheaterDetail = (props) => {

    const [theateInfo, setTheaterInfo] = useState();

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
        {theateInfo && theateInfo.map (e => (
            <Container>
                <p className="title">{e.theaterName}</p>
                <p>연락처: {e.theaterCall}</p>
                <p>홈페이지: {e.theaterWeb}</p>
                <p>주소: {e.theaterAddr}</p>

                <p>------카카오맵api 추가할 것------</p>
                <p>위도: {e.theaterLat}</p>
                <p>경도: {e.theaterLon}</p>
            </Container>

        ))}
        </>
    )
}

export default TheaterDetail;