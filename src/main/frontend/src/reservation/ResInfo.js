import { useEffect, useRef, useState } from "react";
import styled from "styled-components";
import MuteApi from "../api/MuteApi";
const Container = styled.div`
display: flex;
margin: 30px auto;
.info{
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    margin: 10px 10px;
    
}
.title {
        font-size: 20px;
        font-weight: 700; 
        color: #810000; 
        margin: 10px auto;   
       
}
.text{
    font-weight: 500;
    margin: 10px auto;   
}
    

`;

const BigContainer = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
`;
const ResInfo = (props) => {
    const [soldOutSeat,setSoldOutSeat] = useState();
    const [nowLoginNum,setNowLoginNum] = useState();
    let resInfoRef = useRef();
    let resInfo = [];
    const [count, setCount] = useState();

    useEffect(()=>{
        // console.log("props.userId : " + props.userId);
        const getSoldOutSeat = async () => {
            try{
                // console.log("솔드아웃 부르기 위한 props.seeDate : " + props.seeDate);
                // console.log("솔드아웃 부르기 위한 props.seeDate [type] : " + typeof props.seeDate);
                // let newSeeDate = "2022-12-25T19:00:00";
                // let seeDate = props.seeDate;
                // let newSeeDate = seeDate.replace(' ','T');
                // console.log("newSeeDate : " + newSeeDate);

                let response = await MuteApi.getResAll(); // 예약 정보를 모두 불러온다 
                let resNum = await MuteApi.userIdToNum(props.userId);
                // console.log("resNum : " + resNum);
                // console.log("resNum.data : " + resNum.data);
                // console.log("response.data : " + response.data);
                // console.log("response.data[0] : " + response.data[0]);
                // console.log("response.data.get(musicalId) : " + response.data.get("musicalId"));
                setSoldOutSeat(response.data); // 현재 예약된 좌석 정보 (특정 날짜, 지금은 뮤지컬이 다양한 상황임)
                setNowLoginNum(resNum);

                // console.log("soldOutSeat : " +soldOutSeat  );
                // console.log("nowLoginNum : " + nowLoginNum);
                // console.log("솔드아웃 좌석 불러오기 : "+ soldOutSeat.map(e=>e.musicalId));


                response.data.map((e) => {
                    // console.log(e.musicalId);
                    // console.log(e.seatNum);

                    if(resNum.data === e.userNum) {
                        //document.getElementById(e.seatNum).parentNode.setAttribute('class','disabled');
                        // document.getElementById(e.seatNum).parentNode.setAttribute('onClick',);
                        //document.getElementById(e.seatNum).parentNode.onclick=onClickSoldOut();
                        console.log("OK got it");
                        resInfo.push({
                            "ticketId": e.ticketId  ,
                            "seatNum": e.seatNum  ,
                            "seatPosition": e.seatPosition   ,
                            "seeDate": e.seeDate  ,
                            "ticketDate": e.ticketDate  ,
                            "userNum": e.userNum  ,
                            "musicalId": e.musicalId  ,
                            "paymentId": e.paymentId  
                         })
                         //console.log(resInfo.map(e=>e.seatPosition));
                         resInfoRef.current = resInfo;





                    }
                })




            } catch(e) {
                console.log("오류 : " + e);
            }
        };
        getSoldOutSeat(); // 일단 useEffect니까 호출함
    },[])

 return(
    <>

    <BigContainer>
    {resInfoRef.current&&resInfoRef.current.map((e) => (
                    <Container>
                        <div className="info" >
                            <p className="title">뮤지컬 ID</p>
                            <p className="text" >티켓 ID</p>
                            <p className="text" >좌석 정보</p>
                            <p className="text" >상영 날짜</p>
                            <p className="text" >구매 날짜</p>
                            <p className="text" >회원 번호</p>
                        </div>
                        <div className="info" >
                            <p className="title">{e.musicalId}</p>
                            <p className="text">{e.ticketId}</p>
                            <p className="text">{e.seatPosition}</p>
                            <p className="text">{e.seeDate}</p>
                            <p className="text">{e.ticketDate}</p>
                            <p className="text">{e.userNum}</p>

                        </div>
                    </Container>

                ))}
    </BigContainer>
    
    </>
 );
}

export default ResInfo;


