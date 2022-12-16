import { useEffect, useState } from "react";
import MuteApi from "../api/MuteApi";
import React from "react";
import styled from "styled-components";
import kakaoPay_icon from '../images/payment_icon_yellow_small.png'
import Modal from "../util/Modal";

// ------ 스타일드 컴포넌트 ------
const Style = styled.div`
    * {
        margin: 0 auto;
        box-sizing: border-box;
    }
    .head-line {
        font-weight: bold;
    }
`;


const PayTest = () => {

  // const 로그인한 아이디(userNum) 가져와서 넘기기
  // 선택한 뮤지컬id ? 이름??? 가져와서 넘기기
  // 

    const [payment, setPayment] = useState();

    // useEffect(() => {
    //     const paymentData = async() => {
    //         try {
    //             const response = await MuteApi.payment(); // musicalName으로 넘겨주기????
    //             setPayment(response.data);
    //         }
    //         catch (e) {
    //         console.log(e);
    //         }
    //     };
    //     paymentData();
    // }, []);


    const onClickPay = () => {
        try {
            console.log(onClickPay);
            window.open('http://localhost:8282/pay/'); // 일단 해결은 되지만 맞는건지...axios호출하면 CORS에러뜸!!
            // 인가요청(/oauth/authorize)은 XMLHttpRequest를 이용한 비동기 통신 방식으로 호출 하시면 안됩니다. 
            // (REST-API방식이라면 UI에서 href로 페이지 이동 처리 해주세요)
            // 카카오측 로그인 및 동의 이후 html 을 전달하는 것이 아니라 소유하신 사이트로 리다이렉트 하고
            // 리다이렉트 할때 code(인가코드)를 파라메터로 받으셔서 액세스 토큰 조회 및 사용자 정보조회 진행하시면됩니다
        }
        catch (e) {
            console.log(e);
        }
    }



    return(
      <>
        <Style>
            <h2 className="head-line">카카오페이 결제 TEST</h2>
            <img src={kakaoPay_icon} onClick={() => onClickPay()} className="kakao" alt="카카오페이" />
            {/* onClick={() => window.open('http://localhost:8282/pay/ready', '결제')} */}
        </Style>
      </>
    )
}

export default PayTest;