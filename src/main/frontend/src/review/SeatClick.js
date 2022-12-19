import { useState, useEffect } from "react";
import MuteApi from "../api/MuteApi";

const SeatClick = () => {
    const [selectSeat, setSelectSeat] = useState();
    let clickSeatNum = window.localStorage.getItem("whatSeatNum");
    let clickSeatInfo = window.localStorage.getItem("selectedSeats");


    useEffect(() => {
        const SeatDetailReview = async () => {
            try {
                console.log("클릭한 좌석번호 : " + clickSeatNum);
                console.log("클릭한 좌석위치 : " + clickSeatInfo);
                let response = await MuteApi.seatReview(clickSeatNum);
                setSelectSeat(response.data);
            } catch(e) {
                console.log(e + "좌석 상세정보 후기 불러오기 실패");
            }
        };
        SeatDetailReview();
    }, []);

    const Onclick = () => {
    }

    return(
        <>
        <p>클릭한 좌석 위치 : {clickSeatInfo}</p>
        {selectSeat && selectSeat.map(e => (
            <div Onclick={() => Onclick(e)}>
                <div>좌석번호 : {e.seatNum}</div>
                <div>작성자 : {e.userId}</div>
                <div>작성일 : {e.writeDate}</div>
                <div>평균 별점 : {e.scoreAvgSeat}</div>
                <div>좌석 : {e.scoreSeat}</div>
                <div>시야 : {e.scoreView}</div>
                <div>조명 : {e.scoreLight}</div>
                <div>음향 : {e.scoreSound}</div>
                <div>후기 : {e.reviewSeTxt}</div>
                <br />
                <br />
            </div>
        ))}
       

        </>
    )
}

export default SeatClick;