import React, { useState } from 'react';
import {Link, useNavigate } from "react-router-dom";
import MuteApi from '../api/MuteApi';
import Post from './Post';
import Modal from "../util/Modal";
import styled from "styled-components";


const SignUpBox = styled.div`
    width: 100%;
    margin-top:50px;
    text-align: center;

    .info_id {
        position: relative;
    }

    .info_id .btn {
        position: absolute;
        width: 90px;
        height: 35px;
        margin-top: 5px;
        border-radius: 5px;
        border: none;
        margin-left: 10px;
    
    }
    .input {
        /* position: relative; */
        width : 270px;
        height : 35px;
        background-color : white;
        border-radius : 5px;
        border: solid 1.5px #eeeeee;
        text-align: center;
        margin : 5px;
        font-size: 12px;
        &:hover {
            border : solid rgb(129,0,0) 1px;
            font-weight: 600;
            color: rgb(129,0,0);
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

    .signupButton {
        width: 280px;
        height: 40px;
        margin: 10px;
        color : white;
        font-weight: 700;
        opacity: 0.5;
        background-color: rgb(129,0,0); 
        border-radius: 5px;
        border: none;
        &:hover {
            border: none;
            opacity: 1;      
        }
    }
`;


const SignUp = () => {
    const navigate = useNavigate();
    // 회원정보 입력받는 부분
    const [inputId, setId] = useState('');
    const [inputPwd, setPwd] = useState('');
    const [inputPwdCheck, setPwdCheck] = useState('');
    const [inputName, setName] = useState('');
    const [inputMail, setMail] = useState('');
    const [inputPhone, setPhone] = useState('');
    const [inputAddr, setAddr] = useState('');
    const [inputAuth, setInputAuth] = useState('');
    const [serverAuth, setServerAuth] = useState('');

    // 오류 메세지
    const [idMsg, setIdMsg] = useState('');
    const [pwdMsg, setPwdMsg] = useState('');
    const [pwdCheckMsg, setPwdCheckMsg] = useState('');
    const [nameMsg, setNameMsg] = useState('');
    const [mailMsg, setMailMsg] = useState('');
    const [phoneMsg, setPhoneMsg] = useState('');
    const [authMsg, setAuthMsg] = useState('');

    // 유효성 검사
    const [isId, setIsId] = useState(false);
    const [isPwd, setIsPwd] = useState(false);
    const [isPwdCheck, setIsPwdCheck] = useState(false);
    const [isName, setIsName] = useState(false);
    const [isMail, setIsMail] = useState(false);
    const [isPhone, setIsPhone] = useState(true);
    const [isAuth, setIsAuth] = useState(false);

    // ID 입력
    const onChangeId = (e) => {
        setId(e.target.value)
        if(e.target.value.length < 4 ) {
            setIdMsg("4자리 이상으로 입력해주세요.");
            setIsId(false);
        } else {
            setIdMsg("올바른 형식입니다.")
            setIsId(true);
        }
    }
    // ID 중복 체크
    const IdCheck = async() => {
        // 가입 여부 확인
        try {
            const memberCheck = await MuteApi.memberJoinCheck(inputId, "TYPE_ID");
            if(memberCheck.data && isId) {
                //setIdMsg("사용가능합니다.");
                setModalOpen(true);
                setComment("사용 가능한 아이디입니다.");
            } else if(memberCheck.data && !isId) {
                setIdMsg("4자리 이상으로 입력해주세요.");
            }
            else {
                // setIdMsg("이미 사용중인 ID입니다.");
                setIsId(false);
                setModalOpen(true);
                setComment("이미 사용중인 아이디입니다.")
            }
        } catch (e) {
        }
    }
    // 비밀번호 입력
    const onChangePwd = (e) => {
        const passwordRegex = /^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*#?&])[A-Za-z\d@$!%*#?&]{8,20}$/
        const passwordCurrent = e.target.value;
        setPwd(passwordCurrent);
        if (!passwordRegex.test(passwordCurrent)) {
            setPwdMsg("숫자+영문자+특수문자를 포함하여 8자 이상 입력해주세요.")
            setIsPwd(false)
        } else {
            setPwdMsg("안전한 비밀번호입니다 :D")
            setIsPwd(true);
        }
        if (passwordCurrent !== inputPwdCheck) {
            setPwdCheckMsg("비밀번호가 일치하지 않습니다.")
            setIsPwdCheck(false)
        }
    }

    // 비밀번호 중복 체크
    const onChangePwdCheck = (e) => {
        const passwordCurrent = e.target.value;
        setPwdCheck(passwordCurrent)
        if (passwordCurrent !== inputPwd) {
            setPwdCheckMsg("비밀번호가 일치하지 않습니다.")
            setIsPwdCheck(false);
        } else {
            setPwdCheckMsg("비밀번호가 일치합니다.")
            setIsPwdCheck(true);
        }
    }
    // 이름 입력
    const onChangeName = (e) => {
        const nameRegex = /^[가-힣a-zA-Z]+$/;
        const nameCurrent = e.target.value;
        setName(nameCurrent);
        if (!nameRegex.test(nameCurrent)) {
            setNameMsg("이름을 확인해주세요.")
            setIsName(false)
        } else {
            setNameMsg("이름이 확인되었습니다.");
            setIsName(true)
        }
    }

    // 전화번호 입력
    const onChangePhone = (e) => {
        setPhone(e.target.value.replace(/[^0-9]/g, '').replace(/^(\d{2,3})(\d{3,4})(\d{4})$/, `$1-$2-$3`));
    }

    const phoneCheck = async() => {
        // 가입 여부 확인
        const memberCheck = await MuteApi.memberJoinCheck(inputPhone, "TYPE_PHONE");
        if (memberCheck.data) {
            setPhoneMsg("사용가능한 전화번호입니다.");
        } else {
            setPhoneMsg("이미 사용중인 전화번호입니다.");
            setIsPhone(false)
        }
    }

    // 주소
    const [enroll_company, setEnroll_company] = useState({
        address:'',
    });

    const [popup, setPopup] = useState(false);

    const handleInput = (e) => {
        console.log(e.target.value);
        setAddr(e.target.value);
        setEnroll_company({
            ...enroll_company,
            [e.target.name]:e.target.value,
        })
        console.log(e.target.name);
    }

    const handleComplete = (data) => {
        setPopup(!popup);
    }

    // 이메일 입력
    const onChangeMail = (e) => {
        const mailRegex = /^[0-9a-zA-Z]([-_\.]?[0-9a-zA-Z])*@[0-9a-zA-Z]([-_\.]?[0-9a-zA-Z])*\.[a-zA-Z]{2,3}$/i;
        const mailCurrent = e.target.value;
        setMail(mailCurrent);
        if(!mailRegex.test(mailCurrent)) {
            setMailMsg("이메일 형식이 올바르지 않습니다.")
            setIsMail(false);
        } else {
            setMailMsg("이메일이 올바르게 입력되었습니다.")
            setIsMail(true);
        }
    }
    const mailCheck = async() => {
        // 가입 여부 확인
        const memberCheck = await MuteApi.memberJoinCheck(inputMail, "TYPE_MAIL");
        if (memberCheck.data && isMail) {
            setMailMsg("사용가능한 Mail입니다.")
        } else {
            setMailMsg("이미 사용중인 Mail입니다.")
            setIsMail(false);
        }
    }
    // 이메일 인증번호 받기
    const getAuth = async() => {
        const mailAuth = await MuteApi.mailAuth(inputMail);
        setServerAuth(mailAuth.data);
        setModalOpen(true);
        setComment("인증번호가 전송되었습니다.");
    }
    // 이메일 인증번호 확인하기
    const authCheck = async() => {
        if(serverAuth === inputAuth) {
            setIsAuth(true);
            setAuthMsg("인증번호가 일치합니다.");
        }
        else {
            setIsAuth(false);
            setAuthMsg("인증번호가 일치하지않습니다.");
        }
    }
    // 인증번호 입력 받기(사용자가 입력하는 인증번호)
    const onChangeAuth = (e) => {
        setInputAuth(e.target.value);
    }

    // Enter키로 회원가입 전송
    const onKeyDownJoin = (e) => {
        if(e.key === "Enter") {
            onClickJoin();
        }
    }

    // 모달
    const [comment, setComment] = useState("");
    const [modalOpen, setModalOpen] = useState(false);
    const closeModal = () => {
        setModalOpen(false);
    };

    // 회원가입
    const onClickJoin = async() => {
        const memberReg = await MuteApi.signUp(inputId, inputPwd, inputName, inputMail, inputPhone, enroll_company.address);
        if(memberReg.data) {
            setModalOpen(true);
            setComment("Mute 회원가입이 완료되었습니다.");
            console.log("Mute 회원가입이 완료되었습니다.")
            navigate('/Login');
            } else {
                console.log("회원가입에 실패했습니다. 다시 확인해주세요")
                setModalOpen(true);
                setComment("회원가입에 실패했습니다. 다시 확인해주세요.");
        }
    }

    return (
        <div className="container">
            <SignUpBox>
                <h5>회원가입</h5>

                {/* 아이디 입력창*/}
                <div className="info_id">
                <input className="input" placeholder='아이디' value={inputId} onChange={onChangeId}></input>
                <button className='btn' type='button' onClick={IdCheck}>중복 확인</button>
                <div className="hint">
                    {inputId.length > 0 && <span>{idMsg}</span>}
                </div>
                </div>

                {/* 비밀번호 입력창*/}
                <div>
                    <input className="input" type='password' placeholder="비밀번호" value={inputPwd} onChange={onChangePwd}></input>
                <div className="hint">  
                    {inputPwd.length > 0 && <span>{pwdMsg}</span>}
                </div> 
                </div>
                    
              
                {/* 비밀번호 확인*/}
                <div>
                    <input className="input" type='password' placeholder='비밀번호 확인' value={inputPwdCheck} onChange={onChangePwdCheck}></input>
                </div>
                    {inputPwdCheck.length > 0 && <span className="hint">{pwdCheckMsg}</span>}
                
                {/* 이름 입력창*/}
                <div>
                    <input className="input" type='text' placeholder='이름' value={inputName} onChange={onChangeName}></input>
                </div>

                {/* 이메일 입력창 */}
                <div className="info_id">
                <input className="input" type='mail' placeholder='메일' value={inputMail} onChange={onChangeMail} onBlur={mailCheck}></input>
                <button className='btn' type='button' disabled={!isAuth} onClick={getAuth}>인증번호 받기</button>
                <div className="hint"> 
                {inputMail.length > 0 && <span>{mailMsg}</span>}
                </div>
                </div>

                {/* 이메일 인증 확인*/}
                <div className="info_id">
                <input className="input" type='text' placeholder='인증번호' value={inputAuth} onChange={onChangeAuth}></input>
                    <button className='btn' type='button' disabled={!isAuth}  onClick={authCheck}>인증번호 확인</button>
                <div className="hint">  
                {inputAuth.length > 0 && <span>{authMsg}</span>}
                </div>           
                </div>

                {/* 전화번호 입력 */}
                <div>
                    <input className="input" type='phone' placeholder="전화번호 '-'제외" value={inputPhone} onChange={onChangePhone} onBlur={phoneCheck}></input>
                <div className="hint">      
                    {inputPhone.length > 0 && <span className="hint">{phoneMsg}</span>}
                </div>
                </div>

                {/* 주소 입력*/}
                <div className="info_id">
                <label className="address_search" ></label>
                <input className="input" placeholder="주소" type="text" required={true} name="address" onChange={handleInput} value={enroll_company.address}/>
                <button className='btn'type='button' onClick={handleComplete}>주소 검색</button>
                {popup && <Post company={enroll_company} setcompany={setEnroll_company}></Post>}
                </div>

                {/* 회원가입버튼 활성화 */}
                <button className="signupButton" onClick={onClickJoin} disabled={!(isId && isPwd && isPwdCheck && isName && isMail && isPhone && isAuth)}>회원가입</button>
                <br/><br/><div className='footer'>이미 아이디가 있으신가요? <button><div><Link to="/Login" className="link_item"> 로그인</Link></div></button></div>

                {/* 모달 */}
                {modalOpen && <Modal open={modalOpen} close={closeModal} header="확인">{comment}</Modal>}

            </SignUpBox>
        </div>
    )
}
export default SignUp;