import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import MuteApi from "../api/MuteApi";

const Alarm = (props) => {
    const [alarm, setAlarm] = useState("");
    const [alarmUpdate, setAlarmUpdate] = useState(0);
    let userNum =  window.localStorage.getItem("whoLoginUserNum");

    useEffect(() => {
        const AlarmInfo = async () => {
            try {
                console.log("알람페이지 렌더링 userNum: " + userNum);
                let response = await MuteApi.alarmOn(userNum);
                setAlarm(response.data);
            } catch (e) {
                console.log(e + "알림정보 가져오기 실패");
            }
        }
        AlarmInfo();
    }, [alarmUpdate]);


    // 하고싶은 것 => OnClickAlarmOff할 때마다 알림 모달에서 지우고 싶음
    // 현재 문제점 => OnClickAlarm이 실행될 때마다 OnClickAlarmOff도 같이 실행됨
    // => 내가 OnClickAlarmOff를 클릭할 때마다 실행되어야 함

    // alarmUpdate => 화면에서 하나만 사라짐
    // setAlarmUpdate => 알림 아이콘 클릭시 무한랜더링
    // OnClickAlarmOff => 화면에서 사라지지 않음

    const OnClickAlarm = (musicalId) => {
        window.localStorage.setItem("musicalId", musicalId);
        console.log("1. 알람아이콘 클릭 뮤지컬id   : " + musicalId);
    }

    const OnClickAlarmOff = (userNum, musicalId) => {
        const AlarmUpdate = async () => {
            try{
                console.log("2. 알람 업데이트 전 userNum :   " + userNum);
                console.log("3. 알람 업데이트 전 musicalId :  " + musicalId);
                let response = await MuteApi.alarmOff(userNum, musicalId);
                console.log("4. 알람 업데이트 이후 : ", response.data); // 여기까지 잘 들어왔는데 재렌더링이 안됨 why?
                setAlarmUpdate(alarmUpdate+1); // 여기서 똑같이 true라고 들어와서 값이 바뀌었다고 인식하지 못함
            } catch (e) {
                console.log(e + "알림off 실패")
            }
        }
        AlarmUpdate();
    }

    return (
        <div className="alarm_container">
            {alarm && alarm.map(e =>e.wishListContent.map(el=>
                <>
                <div onClick={() => OnClickAlarm(el.musicalId) }>
                <p>공연 이름 : {el.musicalName}</p> 
                <p>공연 예매 시작일 : {el.musicalTicketStart}</p> 
                <p>알림 설정 상태 : {el.alarm}</p> 
                </div>
                <button onClick={() => OnClickAlarmOff(el.userNum, el.musicalId)}>OFF</button>
                </>
            ))}

        </div>
        
    )
}
export default Alarm;   