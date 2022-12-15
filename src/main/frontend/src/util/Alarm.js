import { useEffect, useState } from "react";
import MuteApi from "../api/MuteApi";

const Alarm = (props) => {
    // 로그인한 userNum을 보내서 데이터 가져오기
    const [alarm, setAlarm] = useState("");
    const userNum =  window.localStorage.getItem("whoLoginUserNum");
    
    useEffect(() => {
        const AlarmInfo = async () => {
            try {
                console.log(userNum);
                let response = await MuteApi.alarmOn(userNum);
                setAlarm(response.data);

            } catch (e) {
                console.log(e + "알림정보 가져오기 실패");

            }
        }
        AlarmInfo();
    }, []);


    const OnClickAlarm = (e) => {
    }

    const OnClickAlarmOff = () => {
        const AlarmUpdate = async () => {
            try{
                let response = await MuteApi.alarmOff()
            } catch (e) {
                console.log(e + "알림off 실패")
            }
        }
    }

    // 우선순위 2번
    // 뮤지컬 정보 클릭하면 musicalId 넘겨서 musicalDetail페이지로 이동
    // const OnClickMusical = () => {
    //     try {
    //     const MusicalData = async
    //     } catch (e) {

    //     }
    // }

    return (
        <>
        {alarm && alarm.map(e => (
        <div onClick={() => OnClickAlarm(e.userNum) }>
        <p>공연 이름 : {e.musicalName}</p> 
        <p>공연 예매 시작일 : {e.musicalTicketStart}</p> 
        <p>알림 설정 상태 : {e.alarm}</p> 
        <button onClick={OnClickAlarmOff}>OFF</button>
        </div>
        ))}
        </>
        
    )
}
export default Alarm;   