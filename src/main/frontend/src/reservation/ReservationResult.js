

// seatNum : seatNum,
// seatPos : seatPos, 
// seeDate : seeDate, 
// ticketDate : ticketDate, 
// userNum : userNum, 
// musicalId : musicalId,
// paymentId : paymentId ,
// musicalName : musicalName 

const ReservaionResult = (props) => {
    let whoLogin = window.localStorage.getItem("whoLogin");
    return(
        <>
        <h1>결제 정보</h1>
        <h2>결제한 아이디 : {whoLogin}</h2>
        <h2>공연 제목 : {props.resInfo.musicalName}</h2>
        <h2>예매 좌석 : {props.resInfo.seatPos}</h2>
        <h2>공연 날짜 : {props.resInfo.seeDate}</h2>
        <h2>결제 날짜 : {props.resInfo.ticketDate}</h2>
        </>
    );
}

export default ReservaionResult;