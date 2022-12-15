import { useEffect, useState } from "react";
import MuteApi from "../api/MuteApi";

const Alarm = (props) => {
    // 로그인한 userNum을 보내서 데이터 가져오기
    const [alarm, setAlarm] = useState("");
    const userNum =  window.localStorage.getItem("whoLoginUserNum");
    
    useEffect(() => {
        const AlarmDate = async () => {
            try {
                console.log(userNum);
                let response = await MuteApi.alarmOn(userNum);
                setAlarm(response.data);

            } catch (e) {
                console.log(e + "알림정보 가져오기 실패");

            }
        }
        AlarmDate();
    }, []);

    const OnClickAlarm = (e) => {
    }

    // const OnClickMusical = () => {
    //     try {
    //     const MusicalData = async
    //     } catch (e) {

    //     }
    // }

    const OnClickAlarmOff = () => {
        
    }

    return (
        <>
        {alarm && alarm.map(e => (
        <div onClick={() => OnClickAlarm(e.userNum) }>
        <p>공연 이름 : {e.musicalName}</p> 
        <p>공연 예매 시작일 : {e.musicalTicketStart}</p> 
        <p>알림 설정 상태 : {e.alarm}</p> 
        </div>
        ))}
        <button onClick={() => OnClickAlarmOff}>알림 설정 OFF버튼</button>
        </>
        
    )
}
export default Alarm;   