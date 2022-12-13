import {useState} from "react";
import MuteApi from "../api/MuteApi";
import {Link, useNavigate} from "react-router-dom";
import Modal from "../util/Modal";

const RePwd = () => {
    const navigate = useNavigate();
    // 로그인된 아이디 불러오기
    let localId = window.localStorage.getItem("localId");
    console.log(localId);

    const [inputId, setInputId] = useState("");

    //새로 설정한 비밀번호가 정규식이 맞는지, 비밀번호 중복 체크
    const [isRePwd, setIsRePwd] = useState(false);
    const [isRePwdCheck, setIsRePwdCheck] = useState(false);

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
            setIsRePwd(false)
        } else {
            setPwdMsg("안전한 비밀번호입니다 :D")
            setIsRePwd(true);
        }
        if(passwordCurrent !== newPwdChe) {
            setConPwdMsg("비밀번호가 일치하지 않습니다.")
            setIsRePwdCheck(false)
        }
    }

    // 비밀번호 중복 체크
    const onChangePwdCheck = (e) => {
        const passwordCurrent = e.target.value;
        setNewPwdChe(passwordCurrent)
        if (passwordCurrent !== newPwd) {
            setConPwdMsg("비밀번호가 일치하지 않습니다.")
            setIsRePwdCheck(false)
        } else {
            setConPwdMsg("비밀번호가 일치합니다.")
            setIsRePwdCheck(true);
        }
    }

    // 비밀번호 재설정 api
    const onClickRePwd = async(localId) => {
        try {
            const res = await MuteApi.rePwd(localId, newPwdChe);
            console.log(res.data);

            if (res.data) {
                //setIsNewPwd(false)                                                                                               );
                setModalOpen(true);
                setComment("비밀번호 재설정이 완료되었습니다. 로그인해주세요")
                navigate('/Login');
            } else {
                console.log("오류")
                setModalOpen(true);
                setComment("비밀번호 재설정에 실패하였습니다.")
            }
        } catch (e) {
        }
    }

    const onKeyDownRePwd = (e) => {
        if(e.key === 'Enter'){
            onClickRePwd();
        }
    }

    return(
        <>
            <h5>비밀번호 재설정</h5>
            {/* 아이디 불러오기 */}
            <div>{localId}님</div>

            {/* 비밀번호 재설정 */}
            <p> {newPwd.length > 0 && <span>{pwdMsg}</span>}</p>
            <input type="password" placeholder="비밀번호" onChange={onChangePwd} value={newPwd}></input>
            <br/>
            {/* 재설정한 비밀번호 확인*/}
            <p> {newPwdChe.length > 0 && <span>{conPwdMsg}</span>}</p>
            <input type="password" placeholder="비밀번호 확인" onChange={onChangePwdCheck} value={newPwdChe} onKeyDown={onKeyDownRePwd}></input>
            <br/>
            <button disabled={!(isRePwd && isRePwdCheck)} onClick={()=>onClickRePwd(localId)}>재설정</button>

            <div>
                {/* 다른 페이지 연결 */}
                <Link to="/SignUp" className="link_item">회원가입</Link>
                <Link to="/Login" className="link_item">로그인</Link>
                <Link to="/FindId" className="link_item">아이디 찾기</Link>
            </div>
            {modalOpen && <Modal open={modalOpen} close={closeModal} header="확인">{comment}</Modal>}
        </>
    )
}
export default RePwd;