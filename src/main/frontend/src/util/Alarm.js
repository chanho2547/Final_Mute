import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import MuteApi from "../api/MuteApi";

const Alarm = (props) => {
    let navigate = useNavigate();

    // 로그인한 userNum을 보내서 데이터 가져오기
    const [alarm, setAlarm] = useState("");
    const [alarmUpdate, setAlarmUpdate] = useState("");
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

    const OnClickAlarm = (musicalId) => {
        window.localStorage.setItem("musicalId", musicalId)
        console.log("1. 알람페이지 뮤지컬id   : " + musicalId)
        // navigate("/MusicalDetail")
    }

    // const OnClickPoster = (musicalId) => {
    //     window.localStorage.setItem("musicalId", musicalId)
    //     console.log("뮤지컬id : " + musicalId)
    //     navigate("/MusicalDetail")
    // }

    const OnClickAlarmOff = (userNum, musicalId) => {
        const AlarmUpdate = async () => {
            try{
                console.log("2. 알람 수정할 userNum :   " + userNum);
                console.log("3. 알람 수정할 musicalId :  " + musicalId);
                let response = await MuteApi.alarmOff(userNum, musicalId);
                setAlarmUpdate(response.data);
            } catch (e) {
                console.log(e + "알림off 실패")
            }
        }
        AlarmUpdate();
    }

    return (
        <>
        {alarm && alarm.map(e => (
        <div onClick={() => OnClickAlarm(e.musicalId) }>
        {/* <img src= {e.musicalPoster} /> */}
        <p>공연 이름 : {e.musicalName}</p> 
        <p>공연 예매 시작일 : {e.musicalTicketStart}</p> 
        <p>알림 설정 상태 : {e.alarm}</p> 
        <button onClick={() => OnClickAlarmOff(e.userNum, e.musicalId)}>OFF</button>
        </div>
        ))}
        </>
        
    )
}
export default Alarm;   