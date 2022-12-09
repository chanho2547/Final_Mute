import React, { useState } from 'react';
import { Link, useNavigate } from "react-router-dom";
import MuteApi from '../api/MuteApi';
import Post from './Post';
import Modal from "../util/Modal";

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

    // 오류 메세지
    const [idMsg, setIdMsg] = useState('');
    const [pwdMsg, setPwdMsg] = useState('');
    const [pwdCheckMsg, setPwdCheckMsg] = useState('');
    const [nameMsg, setNameMsg] = useState('');
    const [mailMsg, setMailMsg] = useState('');
    const [phoneMsg, setPhoneMsg] = useState('');

    // 유효성 검사
    const [isId, setIsId] = useState(false);
    const [isPwd, setIsPwd] = useState(false);
    const [isPwdCheck, setIsPwdCheck] = useState(false);
    const [isName, setIsName] = useState(false);
    const [isMail, setIsMail] = useState(false);
    const [isPhone, setIsPhone] = useState(true);

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
                setIdMsg("사용가능합니다.");
                setModalOpenIdOK(true);
            } else if(memberCheck.data && !isId) {
                setIdMsg("4자리 이상으로 입력해주세요.");
            }
            else {
                setIdMsg("이미 사용중인 ID입니다.");
                setIsId(false);
                setModalOpenIdCheck(true);
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

    // Enter키로 회원가입 전송
    const onKeyDownJoin = (e) => {
        if(e.key === "Enter") {
            onClickJoin();
        }
    }

    // 모달
    const [modalOpenIdCheck, setModalOpenIdCheck] = useState(false); // 아이디 중복일 때
    const closeModalIdCheck = () => {
        setModalOpenIdCheck(false);
    }

    const [modalOpenIdOK, setModalOpenIdOK] = useState(false); // 아이디 중복 아닐 때
    const closeModalIdOK = () => {
        setModalOpenIdOK(false);
    }

    const [modalOpenSignUp, setModalOpenSignUp] = useState(false); // 회원가입 버튼 눌렀을 때(실패시)
    const closeModalSignUp = () => { // 모달 창 닫기
        setModalOpenSignUp(false);
    }
    const [modalOpenSignUp2, setModalOpenSignUp2] = useState(false); // 회원가입 버튼 눌렀을 때(실패시)
    const closeModalSignUp2 = () => { // 모달 창 닫기
        setModalOpenSignUp2(false);
    }

    // 회원가입
    const onClickJoin = async() => {
        const memberReg = await MuteApi.signUp(inputId, inputPwd, inputName, inputMail, inputPhone, enroll_company.address)
        console.log(memberReg.data.result);
        if(memberReg.data.result === "OK") {
            console.log("Mute 회원가입이 완료되었습니다.")
            setModalOpenSignUp2(true);
            navigate('/Login');

            // window.localStorage.setItem("userId",  inputId);
            // window.localStorage.setItem("isLogin", "true");
            // navigate("/SignUp");

        // } else {
        //     console.log("회원가입에 실패했습니다. 다시 확인해주세요")
        //     setModalOpenSignUp(true);
        }
    }

    return (
        <>
            <div>
                <p>
                    아이디
                    {inputId.length > 0 && <span>{idMsg}</span>}
                </p>
                <input placeholder='아이디' value={inputId} onChange={onChangeId} />
                <button onClick={IdCheck}>중복 확인</button>
            </div>
            <div>
                <p>
                    비밀번호
                    {inputPwd.length > 0 && <span>{pwdMsg}</span>}
                </p>
                <input type='password' placeholder="비밀번호" value={inputPwd} onChange={onChangePwd} />
            </div>
            <div>
                <p>
                    비밀번호 확인
                    {inputPwdCheck.length > 0 && <span>{pwdCheckMsg}</span>}
                </p>
                <input type='password' placeholder='비밀번호 확인' value={inputPwdCheck} onChange={onChangePwdCheck} />
            </div>
            <div>
                <p>이름</p>
                <input type='text' placeholder='이름' value={inputName} onChange={onChangeName} />
            </div>
            <div>
                <p>이메일
                    {inputMail.length > 0 && <span>{mailMsg}</span>}
                </p>
                <input type='mail' placeholder='메일' value={inputMail} onChange={onChangeMail} onBlur={mailCheck}/>
            </div>
            <div>
                <p>전화번호
                    {inputPhone.length > 0 && <span>{phoneMsg}</span>}
                </p>
                <input type='phone' placeholder="'-'제외" value={inputPhone} onChange={onChangePhone} onBlur={phoneCheck}/>
            </div>
            {/* 주소 입력*/}
            <div>
                <label className="address_search">주소</label>
                <input className="addr" type="text" required={true} name="address" onChange={handleInput} value={enroll_company.address}/>
                <button onClick={handleComplete}>주소 검색</button>
                {popup && <Post company={enroll_company} setcompany={setEnroll_company}></Post>}
            </div>
            <div>
                <button onClick={onClickJoin} disabled={!(isId && isPwd && isPwdCheck && isName && isMail && isPhone)}>회원가입</button>
                <div className='footer'>이미 아이디가 있으신가요? <button><div><Link to="/Login" className="link_item">＞ 로그인</Link></div></button></div>

                {/* 모달 */}
                {modalOpenIdCheck && <Modal open={modalOpenIdCheck} close={closeModalIdCheck} header="확인">이미 가입된 아이디입니다.</Modal>}
                {modalOpenIdOK && <Modal open={modalOpenIdOK} close={closeModalIdOK} header="확인">사용 가능한 아이디입니다.</Modal>}
                {modalOpenSignUp2 && <Modal open={modalOpenSignUp2} close={closeModalSignUp2} header="확인">
                    <Link to="/Login">Mute 회원가입이 완료되었습니다.</Link></Modal>}
                {modalOpenSignUp && <Modal open={modalOpenSignUp} close={closeModalSignUp} header="확인">회원가입에 실패했습니다. 다시 확인해주세요.</Modal>}
            </div>
        </>
    )
}
export default SignUp;