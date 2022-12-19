import { useState, useEffect } from "react";
import MuteApi from "../api/MuteApi";

const SeatClick = () => {
    const [selectSeat, setSelectSeat] = useState();
    let clickPkNum = localStorage.getItem("selected");
    let ClickSeatInfo = localStorage.getItem("selectedSeats");


    useEffect(() => {
        const SeatDetailReview = async () => {
            try {
                console.log("야!!!!!!!!!제발 좀 나와!!!!!!!!!!!!!!!!")
                console.log("클릭한 좌석번호 : " + clickPkNum);
                console.log("클릭한 좌석위치 : " + ClickSeatInfo);
                let response = await MuteApi.seatReview(clickPkNum);
                setSelectSeat(response.data);
            } catch(e) {
                console.log(e + "좌석 상세정보 후기 불러오기 실패");
            }
        };
        SeatDetailReview();
    }, []);

    const Onclick = (e) => {
    }

    return(
        <>
        {selectSeat && selectSeat.map(e => (
            <div Onclick={() => Onclick(e)}>
                <div>propsFunction : </div>
                <div>좌석번호 : {e.seatId}</div>
                <div>작성자 : {e.userId}</div>
                <div>작성일 : {e.writeDate}</div>
                <div>평균 별점 : {e.scoreAvgSeat}</div>
                <div>좌석 : {e.scoreSeat}</div>
                <div>시야 : {e.scoreView}</div>
                <div>조명 : {e.scoreLight}</div>
                <div>후기 : {e.reviewSeTxt}</div>
   



            </div>
        ))}

        </>
    )
}

export default SeatClick;