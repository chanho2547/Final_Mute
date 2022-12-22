import { useState, useEffect } from "react";
import styled from "styled-components";
import MuteApi from "../api/MuteApi";

const SeatReviewAvgContainer = styled.div`
.seat_position{
    color: #810000;
    font-size: 32px;
    font-weight: 800;

}
`;

const SeatReviewContainer = styled.div`
`;

const SeatClick = () => {
    const [seatAvg, setseatAvg] = useState();
    const [selectSeat, setSelectSeat] = useState();
    let clickSeatNum = window.localStorage.getItem("whatSeatNum");
    let clickSeatInfo = window.localStorage.getItem("whatSeatInfo");


    useEffect(() => {
        const SeatDetailReview = async () => {
            try {
                console.log("클릭한 좌석번호 : " + clickSeatNum);
                console.log("클릭한 좌석위치 : " + clickSeatInfo);
                let response1 = await MuteApi.seatReviewStar(clickSeatNum);
                let response2 = await MuteApi.seatReview(clickSeatNum);
                setseatAvg(response1.data);
                setSelectSeat(response2.data);
            } catch(e) {
                console.log(e + "좌석 상세정보 후기 불러오기 실패");
            }
        };
        SeatDetailReview();
    }, []);

    const Onclick = (e) => {
    }

    const OnclickSeat = (e) => {

    } 


    return(
        <>
        <SeatReviewAvgContainer>
        <p className="seat_position">{clickSeatInfo}</p>
        {seatAvg && seatAvg.map(e=>e.seatAvgContent.map(el =>
            <>
            <div onClick={()=>OnclickSeat()}>
            <p>평균 별점{el.avgSeat}</p>
            <p>후기 수{el.cnt}</p>
            <p>좌석{el.seat}</p>
            <p>시야{el.view}</p>
            <p>음향{el.sound}</p>
            <p>조명{el.light}</p>
            </div>
            </>
            ))}
        </SeatReviewAvgContainer>





        <br />
        <SeatReviewContainer>
        {selectSeat && selectSeat.map(e => (
            <div Onclick={() => Onclick(e.userId)}>
                {/* <div>좌석번호 : {e.seatNum}</div> */}
                <p className="seatReview_writer">작성자: {e.userId.replace(e.userId.slice(-2), '***')}</p>
                <p className="seatReview_Date">작성일 : {e.writeDate.toString().substring(0, 10)}</p>
                <p>평균 별점 : {e.scoreAvgSeat}</p>
                <p>좌석 : {e.scoreSeat}</p>
                <p>시야 : {e.scoreView}</p>
                <p>조명 : {e.scoreLight}</p>
                <p>음향 : {e.scoreSound}</p>
                <p className="seatReview_txt" >{e.reviewSeTxt}</p>
                <br />
                <br />
            </div>
        ))}
        </SeatReviewContainer>
             

        </>
    )
}

export default SeatClick;