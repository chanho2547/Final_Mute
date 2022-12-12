import {Link} from "react-router-dom";
import {useState} from "react";
import MuteApi from "../api/MuteApi";
import Modal from "../util/Modal";


const FindPwd = () => {
    const [inputId, setInputId] = useState("");
    const [inputEmail, setInputEmail] = useState("");

    //새로 설정한 비밀번호가 정규식이 맞는 지/비밀번호와 비밀번호 확인이 동일한지 검사
    const [isnewPwdCheck, setIsNewPwdCheck] = useState(false);
    const [isnewPwdConCheck, setIsNewPwdConCheck] = useState(false);

    //새로운 비밀번호/비밀번호 확인 값
    const [newPwd, setNewPwd] = useState("");
    const [newPwdCon, setNewPwdCon] = useState("");

    //확인 문구
    const [pwMessage, setPwMessage] = useState("");
    const [conPwMessage, setConPwMessage] = useState("");


    const onChangeId = (e) => {
        setInputId(e.target.value);
    }
    const onChangeEmail = (e) => {
        setInputEmail(e.target.value);
    }


    return(
        <>

        </>
    )
}
export default FindPwd;