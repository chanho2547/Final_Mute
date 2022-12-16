import { Link } from "react-router-dom";
import { useEffect, useRef, useState } from "react";
import FirstFloorChar from "../theaterInfo/charLotte/FirstFloorChar";
import FirstFloorChung from "../theaterInfo/chungmuArt/FirstFloorChung";

const SelectSeat = (props) => {

    // textRef, 렌더링 이유때문에 사용
    const seatPosRef = useRef();
    const seatNumRef = useRef();

    // 불리는 순간 selected를 id값으로 같는 요소의 innerText를 상위 컴포넌트에 저장
    const seatPosInfoFunc = (text) => {
        document.getElementById("selected").innerText = text;
        seatPosRef.current = text;
    }

    const seatNumInfoFunc = (text) => {
        // document.getElementById("selected").innerText = text;
        seatNumRef.current = text;
    }

    const onClickNext = () => {
        console.log("넘겨주는 PK값 : "+seatNumRef.current);
        console.log("넘겨주는 String값 : "+seatPosRef.current);
        props.addSeatNum(seatNumRef.current);

        // seatPos 앞에 상영관 붙여주기 
        for(let i=0 ; i<Object.keys(seatPosRef.current).length ; i++) {
            seatPosRef.current[i] = window.localStorage.getItem("theaterName") + " " +seatPosRef.current[i]
        }

        props.addSeatPos(seatPosRef.current);
        props.propFunction();
    }
    

    return(
        <>
            
            <h2 id="selected">(선택한 좌석이 여기에 표시됩니다)</h2>
            <button onClick={()=>onClickNext()}>선택완료</button>
            
            {/* 모든 층수, 극장 다 만들어놓아야함 */}
            <FirstFloorChar propFunction={seatPosInfoFunc} addSeatNum={seatNumInfoFunc} />

        </>
    );
}

export default SelectSeat;



