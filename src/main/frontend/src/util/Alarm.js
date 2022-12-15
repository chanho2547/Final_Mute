import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import MuteApi from "../api/MuteApi";

const Alarm = (props) => {
    let navigate = useNavigate();

    // 로그인한 userNum을 보내서 데이터 가져오기
    const [alarm, setAlarm] = useState("");
    let userNum =  window.localStorage.getItem("whoLoginUserNum");
    
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

    const OnClickAlarm = (musicalId) => {
        window.localStorage.setItem("musicalId", musicalId)
        console.log("뮤지컬id : " + musicalId)
        navigate("/MusicalDetail")
    }

    // const OnClickPoster = (musicalId) => {
    //     window.localStorage.setItem("musicalId", musicalId)
    //     console.log("뮤지컬id : " + musicalId)
    //     navigate("/MusicalDetail")
    // }


    // 아직 수정해야함
    const OnClickAlarmOff = () => {
        const AlarmUpdate = async () => {
            try{
                let response = await MuteApi.alarmOff()
            } catch (e) {
                console.log(e + "알림off 실패")
            }
        }
    }

    return (
        <>
        {alarm && alarm.map(e => (
        <div onClick={() => OnClickAlarm(e.userNum) }>
        {/* <div onClick={() => OnClickPoster(e.musicalId)}> */}
        {/* <img src= {e.musicalPoster} /> */}
        <p>공연 이름 : {e.musicalName}</p> 
        <p>공연 예매 시작일 : {e.musicalTicketStart}</p> 
        <p>알림 설정 상태 : {e.alarm}</p> 
        {/* </div> */}
        <button onClick={OnClickAlarmOff}>OFF</button>
        </div>
        ))}
        </>
        
    )
}
export default Alarm;   