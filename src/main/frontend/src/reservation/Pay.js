import { useEffect } from "react";
import MuteApi from "../api/MuteApi";


const Pay = (props) => {
    // let seatAndGrade = props.seat;
    // let typeofSeat = typeof props.seat;


    useEffect(()=>{
       
            
            
        
    })

    
    

    return(
        <>
            <h1>결제 정보 입니다</h1>
            <p>뮤지컬 제목 : {props.resInfo.musicalName}</p>
            <p>좌석전체 : {props.resInfo.seatPos} </p>
            <p>날짜 : {props.resInfo.seeDate}</p>
            <button onClick={props.insertTicket} > 예매내역 저장 (결제완료)</button>
    

        </>
    );
}

export default Pay;