import { useEffect, useState } from "react";
import MuteApi from "../api/MuteApi";
import styled from "styled-components";

const TheaterDetail = () => {

    // const [theaterDetail,setTheaterDetail] = useState();
    const [theateInfo, setTheaterInfo] = useState();
    const theaterId = window.localStorage.getItem("theaterId"); // 선택한 theaterId

    useEffect(() => {
        const TheaterData = async () => {
            try {
                const response = await MuteApi.theaterDetail(theaterId); // 극장 정보 불러오기
                setTheaterInfo(response.data);
                console.log("극장ID값: " + theaterId);
                
            } catch (e) {  
                console.log(e + "실패");
            }
           
        };
        TheaterData();
  
    }, []);

    // const TheaterInfo = async () => {
    //     try {
    //         const response = await MuteApi.theaterDetail(theaterId);
    //         setTheaterDetail(response.data);
    //     } catch (e) {
    //         console.log(e + "실패");
    //     }
    //   }

    // // 선택된 뮤지컬 상세정보 불러오기
    // musicalDetail: async function(mt20id, mt10id) {
    //     const musicalId = {
    //         musicalId : mt20id,
    //         theaterId : mt10id
    //     }
    //     return await axios.get(`/musical/${mt20id}`, musicalId);
    // },

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