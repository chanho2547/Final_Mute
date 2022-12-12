import {Link} from "react-router-dom";
import {useState} from "react";
import MuteApi from "../api/MuteApi";
import Modal from "../util/Modal";


const FindPwd = () => {
    const [inputId, setInputId] = useState("");
    const [inputMail, setInputMail] = useState("");

    // 아이디와 이메일이 맞으면 새로운 비밀번호를 지정할 수 있는 html을 불러옴
    const [isNewPwd, setIsNewPwd] = useState(false);

    //새로 설정한 비밀번호가 정규식이 맞는 지/비밀번호와 비밀번호 확인이 동일한지 검사
    const [isRePwdCheck, setIsRePwdCheck] = useState(false);
    const [isRePwdConCheck, setIsRePwdConCheck] = useState(false);

    //새로운 비밀번호/비밀번호 확인 값
    const [newPwd, setNewPwd] = useState("");
    const [newPwdChe, setNewPwdChe] = useState("");

    //확인 문구
    const [pwdMsg, setPwdMsg] = useState("");
    const [conPwdMsg, setConPwdMsg] = useState("");

    const [comment, setComment] = useState("");
    const [modalOpen, setModalOpen] = useState(false);
    const closeModal = () => {
        setModalOpen(false);
    };

    // 비밀번호 입력
    const onChangePwd = (e) => {
        const passwordRegex = /^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*#?&])[A-Za-z\d@$!%*#?&]{8,20}$/
        const passwordCurrent = e.target.value;
        setNewPwd(passwordCurrent);
        if(!passwordRegex.test(passwordCurrent)) {
            setPwdMsg("숫자+영문자+특수문자를 포함하여 8자 이상 입력해주세요.")
            setIsRePwdCheck(false)
        } else {
            setPwdMsg("안전한 비밀번호입니다 :D")
            setIsRePwdCheck(true);
        }
        if(passwordCurrent !== newPwdChe) {
            setPwdMsg("비밀번호가 일치하지 않습니다.")
            setIsRePwdConCheck(false)
        }
    }

    // 비밀번호 중복 체크
    const onChangePwdCheck = (e) => {
        const passwordCurrent = e.target.value;
        setNewPwdChe(passwordCurrent)
        if (passwordCurrent !== newPwd) {
            setConPwdMsg("비밀번호가 일치하지 않습니다.")
            setIsRePwdConCheck(false)
        } else {
            setConPwdMsg("비밀번호가 일치합니다.")
            setIsRePwdConCheck(true);
        }
    }

    const onChangeId = (e) => {
        setInputId(e.target.value);
    }
    const onChangeEmail = (e) => {
        setInputMail(e.target.value);
    }

    // api 호출
    const onClickFindPwd = async() => {
        const res = await MuteApi.researchId(inputId, inputMail, "Type_ID");
        console.log(res.data);
        if(res.data) {
            setModalOpen(true);
            setComment("비밀번호를 재설정합니다.")
            setIsNewPwd(true);
        } else {
            setModalOpen(true);
            setComment("가입된 정보가 없습니다.")
        }
    }
    const onKeyDownFindPwd = (e) => {
        if(e.key === 'Enter'){
            onClickFindPwd();
        }
    }

    // 비밀번호 재설정 api
    const onClickRePwd = async() => {
        const res = await MuteApi.rePwd(inputId, newPwdChe);

    }


    return(
        <>

        </>
    )
}
export default FindPwd;