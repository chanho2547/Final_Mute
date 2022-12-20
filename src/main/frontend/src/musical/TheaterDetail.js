import { useEffect, useState } from "react";
import MuteApi from "../api/MuteApi";
import styled from "styled-components";

const TheaterDetail = (props) => {

    // const [theaterDetail,setTheaterDetail] = useState();
    const [theateInfo, setTheaterInfo] = useState();
    //const theaterId = window.localStorage.getItem("theaterId"); // 선택한 theaterId

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
            <>
                <p>{e.theaterName}</p>
                <p>{e.theaterAddr}</p>
                <p>{e.theaterCall}</p>
                <p>{e.theaterWeb}</p>
            </>

        ))}
        </>
    )
}

export default TheaterDetail;