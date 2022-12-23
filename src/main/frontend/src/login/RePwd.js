import {useState} from "react";
import MuteApi from "../api/MuteApi";
import {useNavigate} from "react-router-dom";
import Modal from "../util/Modal";
import styled from "styled-components";

const RePwdBlock = styled.div`
    width: 100%;
    margin-top:50px;
    text-align: center;
    h5 {
        margin-bottom : 15px;
    }
    .input {
        width : 270px;
        height : 35px;
        background-color : white;
        border-radius : 5px;
        border: solid 1.5px #eeeeee;
        margin : 5px;
        font-size: 12px;
        &:hover {
            border : solid rgb(129,0,0) 1px;
            color: rgb(129,0,0);
            font-weight: 600;
        } 
        &:focus {
            outline : solid rgb(129,0,0) 1px;
            font-weight: 600;
        }
    }

    .hint {
        font-size : 12px;
        color:green;
        text-align: center;
    }

    .rePwdButton {
        width : 280px;
        height : 40px;
        margin : 10px;
        opacity: 0.5;
        color : white;
        background-color : rgb(129,0,0);
        border-radius : 5px;
        font-weight: 700;
        border: solid 1.5px #eeeeee;
        
        margin-bottom: 40px;
        &:hover {
            border : none;
            opacity: 1;    
        }
    }
`;

const RePwd = () => {
    const navigate = useNavigate();
    // 로그인된 아이디 불러오기
    let userId = window.localStorage.getItem("whoLogin");
    console.log(userId);

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
    const onClickRePwd = async(userId) => {
        try {
            const res = await MuteApi.rePwd(userId, newPwdChe);
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
            onClickRePwd(userId);
        }
    }

    return(
        <div className="container">
            <RePwdBlock>
            <h5>비밀번호 재설정</h5>
            {/* 아이디 불러오기 */}
            <div>{userId}님</div>

            {/* 비밀번호 재설정 */}
            <input className="input" type="password" placeholder="비밀번호" onChange={onChangePwd} value={newPwd}></input>
            <br />
            <div className="hint">
                {newPwd.length > 0 && <span>{pwdMsg}</span>}
            </div>

            {/* 재설정한 비밀번호 확인*/}
            <input className="input" type="password" placeholder="비밀번호 확인" onChange={onChangePwdCheck} value={newPwdChe} onKeyDown={onKeyDownRePwd}></input>
            <br />
            <div className="hint">
            {newPwdChe.length > 0 && <span>{conPwdMsg}</span>}
            </div>

            {/* 재설정 버튼 활성화 */}
            <button className="rePwdButton" disabled={!(isRePwd && isRePwdCheck)} onClick={()=>onClickRePwd(userId)}>재설정</button>
            </RePwdBlock>
            {modalOpen && <Modal open={modalOpen} close={closeModal} header="확인">{comment}</Modal>}
        </div>
    )
}
export default RePwd;