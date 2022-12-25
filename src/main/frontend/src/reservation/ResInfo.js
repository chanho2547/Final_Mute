import { useEffect, useState } from "react";
import MuteApi from "../api/MuteApi";

const ResInfo = (props) => {
    const [soldOutSeat,setSoldOutSeat] = useState();
    const [nowLoginNum,setNowLoginNum] = useState();

    useEffect(()=>{
        const getSoldOutSeat = async () => {
            try{
                // console.log("솔드아웃 부르기 위한 props.seeDate : " + props.seeDate);
                // console.log("솔드아웃 부르기 위한 props.seeDate [type] : " + typeof props.seeDate);
                // let newSeeDate = "2022-12-25T19:00:00";
                // let seeDate = props.seeDate;
                // let newSeeDate = seeDate.replace(' ','T');
                // console.log("newSeeDate : " + newSeeDate);

                let response = await MuteApi.getResAll();
                let resNum = await MuteApi.userIdToNum(props.userId);
                // console.log("response.data : " + response.data);
                // console.log("response.data[0] : " + response.data[0]);
                // console.log("response.data.get(musicalId) : " + response.data.get("musicalId"));
                setSoldOutSeat(response.data); // 현재 예약된 좌석 정보 (특정 날짜, 지금은 뮤지컬이 다양한 상황임)
                setNowLoginNum(resNum);
                // console.log("솔드아웃 좌석 불러오기 : "+ soldOutSeat.map(e=>e.musicalId));


                response.data.map((e) => {
                    console.log(e.musicalId);
                    console.log(e.seatNum);

                    if(resNum.data === e.userNum) {
                        //document.getElementById(e.seatNum).parentNode.setAttribute('class','disabled');
                        // document.getElementById(e.seatNum).parentNode.setAttribute('onClick',);
                        //document.getElementById(e.seatNum).parentNode.onclick=onClickSoldOut();





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
    <h1>ResInfo 입니다</h1>
    {soldOutSeat&&soldOutSeat.map((e) => {
                    console.log(e.musicalId);
                    console.log(e.seatNum);

                    if(nowLoginNum === e.userNum) {
                        //document.getElementById(e.seatNum).parentNode.setAttribute('class','disabled');
                        // document.getElementById(e.seatNum).parentNode.setAttribute('onClick',);
                        //document.getElementById(e.seatNum).parentNode.onclick=onClickSoldOut();
                        <>
                        <h1>e.ticketId</h1>
                        <h1>e.seatNum</h1>
                        <h1>e.seatPosition</h1>
                        <h1>e.seeDate</h1>
                        <h1>e.ticketDate</h1>
                        <h1>e.userNum</h1>
                        <h1>e.musicalId</h1>
                        <h1>e.paymentId</h1>
                        </>



                    }
                })
    }
    </>
 );
}

export default ResInfo;