import { useEffect, useState } from "react";
import MuteApi from "../api/MuteApi";
import React from "react";
import styled from "styled-components";
import kakaoPay_icon from '../images/payment_icon_yellow_small.png'

// ------ 스타일드 컴포넌트 ------
const Style = styled.div`
    * {
        margin: 0 auto;
        box-sizing: border-box;
    }
    .container {
        display: flex;
        width: 500px;
        height: 300px;
        margin-top: 2rem;
        align-items: center;
        justify-content: center;
    }
    .head-line {
        font-weight: bold;
    }
`;


const PayTest = () => {

  // const 로그인한 아이디(userNum) 가져와서 넘기기
  // 선택한 뮤지컬id ? 이름??? 가져와서 넘기기
  // 

  // const [payment, setPayment] = useState();


  // const OnClickPay = async() => {
  //   try {
  //       const response = await MuteApi.payment(); // musicalName으로 넘겨주기????
  //       setPayment(response.data);
  //   }
  //   catch (e) {
  //     console.log(e);
  //   }
  // }

  return(
      <>
      <Style>
        <div className="container">
            <h2 className="head-line">카카오페이 결제 TEST</h2>
            <img src={kakaoPay_icon} className="kakao" alt="카카오페이" />
        </div>
      </Style>
      </>
  )
}

export default PayTest;