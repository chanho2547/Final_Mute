import { useEffect } from "react";
import MuteApi from "../api/MuteApi";
import kakaoPay_icon from '../images/payment_icon_yellow_small.png'

const Pay = (props) => {
    // let seatAndGrade = props.seat;
    // let typeofSeat = typeof props.seat;


    const popupCenter = ({url, title, w, h}) => {
        // Fixes dual-screen position                             Most browsers      Firefox
        const dualScreenLeft = window.screenLeft !==  undefined ? window.screenLeft : window.screenX;
        const dualScreenTop = window.screenTop !==  undefined   ? window.screenTop  : window.screenY;
    
        const width = window.innerWidth ? window.innerWidth : document.documentElement.clientWidth ? document.documentElement.clientWidth : window.screen.width;
        const height = window.innerHeight ? window.innerHeight : document.documentElement.clientHeight ? document.documentElement.clientHeight : window.screen.height;
    
        const systemZoom = width / window.screen.availWidth;
        const left = (width - w) / 2 / systemZoom + dualScreenLeft;
        const top = (height - h) / 2 / systemZoom + dualScreenTop-100;
        const newWindow = window.open(url, title, 
          `
          scrollbars=yes,
          width=${w / systemZoom}, 
          height=${h / systemZoom}, 
          top=${top}, 
          left=${left}
          `
        )
    
        if (window.focus) newWindow.focus();
    }

    

    const onClickPay = () => {
        try {
            console.log(onClickPay);
            // window.open('http://localhost:8282/pay/', 'pop01', 'top=50%, left=50%, width=500, height=600, status=no, menubar=no, toolbar=no, resizable=no'); // 일단 해결은 되지만 맞는건지...axios호출하면 CORS에러 뜸!!
            popupCenter({url: 'http://localhost:8282/pay/', title: 'payTest', w: 380, h: 400});  
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
            <h1>결제 정보 입니다</h1>
            <p>뮤지컬 제목 : {props.resInfo.musicalName}</p>
            <p>좌석전체 : {props.resInfo.seatPos} </p>
            <p>날짜 : {props.resInfo.seeDate}</p>
            <h2 className="head-line">카카오페이 결제 TEST</h2>
            <img src={kakaoPay_icon} onClick={() => onClickPay()} className="kakao" alt="카카오페이" />
            {/* <button onClick={props.insertTicket} > 예매내역 저장 (결제완료)</button> */}
            {/* onClick={() => window.open('http://localhost:8282/pay/ready', '결제')} */}
        </>
    )
    

    // return(
    //     <>
    //         <h1>결제 정보 입니다</h1>
    //         <p>뮤지컬 제목 : {props.resInfo.musicalName}</p>
    //         <p>좌석전체 : {props.resInfo.seatPos} </p>
    //         <p>날짜 : {props.resInfo.seeDate}</p>
    //         <button onClick={props.insertTicket} > 예매내역 저장 (결제완료)</button>
    

    //     </>
    // );
}

export default Pay;