
// 여기서 나중에 payment 페이지에 추가, ticket 테이블에도 추가하는 코드 , 그리도 다 되면 화면 닫기

import { useEffect } from "react";
import Reservation from "../Reservation";


let myTimer = setTimeout(function() {
    window.close();
  }, 3000);


  // 타이머 아직 안썻는데 왜 꺼지는지 모르겠음 
const PayEnd = (props) => {
    console.log("PayEnd 입니다");
    useEffect(()=>{
        window.localStorage.setItem("payStatus","yes");
        //Reservation.propFunction();
       
        alert("결제가 완료 되었습니다, pg_tokeen : " + props.pg_token);
    })
    
    return (
        <>
        <h1>곧 팝업창이 종료 됩니다</h1>
        </>
    );
}

export default PayEnd;