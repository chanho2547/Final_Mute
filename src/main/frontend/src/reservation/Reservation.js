import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

import styled from "styled-components";
import MuteApi from "../api/MuteApi";
import Login from "../login/Login";
import Pay from "./Pay";
import ReservaionResult from "./ReservationResult";
import SelectDate from "./SelectDate";
import SelectMusical from "./SelectMusical";
import SelectSeat from "./SelectSeat";


// ---- 스타일드 컴포넌트 ----
const Container = styled.div`

    
    margin: 0 auto;
    justify-items: center;
    justify-content: center;
    display: flex;
    flex-direction: column;
    //justify-content: center;
  

`;

const TmpBox = styled.div`
    width: 100%;
    min-height: 50vh;
    margin: 0 auto;
    //border: 2px solid black;
`;

const Category = styled.div`
  width: 1000px;
  margin: 0 auto;
  font-size: 1.3em;
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  padding: 30px;
  margin-bottom: 20px;
  //border-bottom: 1px solid #eee;
  .status {
    cursor: pointer;
    text-decoration: none;
    color: #1b1717;
  }
  .status:hover {
    color: #810000;
    font-weight: 500;
  }
`;


// ---- Reservaion 컴포넌트 시작 ----
const Reservation = () => {

    //  아래로는 현재 선택된 정보들 
    const navigate = useNavigate();

    // 뮤지컬 선택시
    const [musicalId,setMusicalId] = useState(); // 뮤지컬 이름
    const [musicalName,setMusicalName] = useState(); // 뮤지컬 이름
    
    // 좌석 선택시
    const [seatNum,setSeatNum] = useState(); // pk
    const [seatPos,setSeatPos] = useState(); // 1층 1열 1번

    // 날짜 선택시
    const [seeDate,setSeeDate] = useState(); // 상영날짜

    // 현재
    const [ticketDate,setTicketDate] = useState(); // 구매날짜
    const [userNum,setUserNum] = useState(); // 산 사람 고유번호
    const [paymentId,setPaymentId] = useState(); // 결제정보 고유번호
    

    // 다음 화면 돌리기 위한 count
    const [count, setCount] = useState(0);

    // 최종 결제금액을 저장할 곳
    const [totalPrice,setTotalPrice] = useState();

    useEffect(() => {

        if(window.localStorage.getItem("whoLogin") === null) {
            alert("로그인이 필요한 서비스 입니다");
            navigate('/Login');
        }

        // 상세페이지에서 넘어가면 뮤지컬 이름이 안받아와지는 문제

        try {
            const thisMusicalId = window.localStorage.getItem("thisMusicalId");
            if(thisMusicalId != null && thisMusicalId != 'undefined') {
                setMusicalId(thisMusicalId);
                setMusicalName(musicalName);
                setCount(1); // 날짜선택 화면으로 이동
                console.log("if받은 뮤지컬 id -> " + musicalId + ", 뮤지컬이름 ->" + musicalName + ", count ->" + count);
                window.localStorage.removeItem("thisMusicalId");
                console.log("if-remove받은 뮤지컬 id -> " + musicalId + ", 뮤지컬이름 ->" + musicalName + ", count ->" + count);
            }
            // else {
            //     window.localStorage.removeItem("thisMusicalId");
            //     setMusicalId(musicalId);
            //     setMusicalId(musicalName);
            //     setCount(count);
            //     console.log("else받은 뮤지컬 id -> " + musicalId + ", 뮤지컬이름 ->" + musicalName + ", count ->" + count);
            // }
        } catch (e) {
            console.log("[오류] 상세에서 뮤지컬받아오기" + e);
        }



        // 결제 정보 임시 지정
        setPaymentId(1); 
        console.log("setPaymentId : " + paymentId);
        
        // 현재 날짜 지정 
        // const date = new Date();
        // setTicketDate(date.toLocaleString('ko-kr'));// 현재 시점을 티켓 구매날짜,시간으로 설정한다
        // console.log("setTicketDate : " + date.toLocaleString('ko-kr'));

        const userNumInfo = window.localStorage.getItem("whoLoginUserNum");
        setUserNum(userNumInfo);
        // console.log("setUserNum : "+ userNumInfo.data) ;

        window.localStorage.setItem("seatInfoMode","예매");
        console.log("현재 seatInfoMode : " + window.localStorage.getItem("seatInfoMode"));
        console.log(`현재 뮤지컬 : ${musicalId} \n 현재 좌석 : ${seatPos} \n 현재 선택 날짜 : ${seeDate} \n`);
    })

    
    // 하위 컴포넌트에 전달 할 함수들
    const highFunction = () => {
        setCount(count + 1);
    }
    const backFunction = () => {
        setCount(count - 1);
    }

    // 최종 결제확인시 실행되는 버튼 (결제 완료)
    const insertTicketFunction = () => {
        console.log("insertTicketFunction 실행");
        
        async function func() {


        try { // 만약 seatNum이 2개 이상이면 나누어서 넣기
            
            console.log("insertTicket Info :  " + seatNum + " " +seatPos + " " +seeDate + " " +ticketDate + " " +userNum + " " +musicalId + " " +paymentId + " " + musicalName);
            
            console.log("seatNum type : " + typeof seatNum);
            console.log("seatNum keys.length : " + Object.keys(seatNum).length);
            let seatNumLength = Object.keys(seatNum).length;

            for(let i=0 ; i<seatNumLength ; i++) {
                const res = await MuteApi.insertTicket(`${seatNum[i]}` , seatPos[i] , seeDate , ticketDate , `${userNum}` , musicalName , `${paymentId}`);
                console.log(i+" " + "res.data : " + res.data);
            }

            
            





            //const res = await MuteApi.insertTicket("8414", "1층 1열 15번 VIP", seeDate, seeDate, "2", "빨래", "1");
        }catch(e){
            console.log("오류 : " + e);
        }
        }
        func();
        
    }

    
    const addMusicalId = (e) => {
        console.log("뮤지컬 입력 완료 : " + e);
        setMusicalId(e);
    } 
    const addSeatNum = (e) => {
        console.log("좌석 PK 입력 완료 : " + e);
        setSeatNum(e);
    } 
    const addSeatPos = (e) => {
        console.log("좌석 String 입력 완료 : " + e)
        setSeatPos(e);
    }

    const addSeeDate = (e) => {
        console.log("상영날짜 입력 완료 : " + e);
        setSeeDate(e);
    } 

    const addTicketDate = (e) => {
        console.log("예매(오늘) 날짜 : " + e);
        setTicketDate(e);
    }

    const addMusicalName = (e) => {
        console.log("musicalName 입력 완료 : " + e);
        setMusicalName(e);
    }


    const onClickNext = () => {
        console.log("현재 카운트 : "+count);
        setCount(count + 1); 
    }
    

     // insertTicket - seatNum, seatPos, seeDate, ticketDate, userNum, musicalId, paymentId 순서
    let resInfo = {
       seatNum : seatNum,
       seatPos : seatPos, 
       seeDate : seeDate, 
       ticketDate : ticketDate, 
       userNum : userNum, 
       musicalId : musicalId,
       paymentId : paymentId ,
       musicalName : musicalName 
    }


    return(
        <Container>

        <Category>
            <div className="status">뮤지컬 선택</div>
            <div>&gt;</div>
            <div className="status">날짜 선택</div>
            <div>&gt;</div>
            <div className="status">좌석 선택</div>
            <div>&gt;</div>
            <div className="status">예매 정보 확인</div>
            <div>&gt;</div>
            <div className="status">결제 완료</div>
        </Category>

        {/* <h1>
            뮤지컬 선택 &gt; 날짜 선택 &gt; 좌석 선택 &gt; 예매 정보 확인 &gt; 결제 완료
        </h1> */}
        {/* <button onClick={onClickNext}>다음으로</button> */}
        {/* <button onClick={insertTicketFunction}>결제 임시 버튼</button> */}
        
        <TmpBox>
        {/* 각 컴포넌트에서, 기본적으로 highFunction을 넣어줌 (count++) */}
        {/* 각 컴포넌트에서, 추가적으로 예매에 필요한 정보들을 가져오기 위한 함수들을 만듦 */}
        {count === 0 ? <SelectMusical propFunction={highFunction} addMusicalId={addMusicalId} addMusicalName={addMusicalName}/> : null}
        {count === 1 ? <SelectDate propFunction={highFunction} addSeeDate={addSeeDate} addTicketDate={addTicketDate} musicalId={musicalId}/> : null }
        
        {/* 좌석은, 이미 선택된 좌석은 비활성화 해야한다 */}
        {count === 2 ? <SelectSeat propFunction={highFunction} addSeatNum={addSeatNum} addSeatPos={addSeatPos} seatNum={seatNum} seatPos={seatPos} seeDate={seeDate} musicalId={musicalId}/> : null }
        {count === 3 ? <Pay propFunction={highFunction} insertTicket={insertTicketFunction} resInfo={resInfo} count={count} backFunction={backFunction} setTotalPrice={setTotalPrice}/> : null}
        {count === 4 ? <ReservaionResult resInfo={resInfo} insertTicket={insertTicketFunction} totalPrice={totalPrice} /> : null}
        {count === 5 ? setCount(0) : null}
        </TmpBox>
        </Container>
    );
}

export default Reservation;