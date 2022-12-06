import { Link } from "react-router-dom";
import { useState } from "react";
import MuteApi from "../api/MuteApi";
import Modal from "../util/Modal";
import styled from "styled-components";

const Login = () => {
       // 아이디, 비밀번호 입력
       const [inputId, setInputId] = useState("");
       const [inputPwd, setInputPwd] = useState("");
   
       // 아이디, 비밀번호 힌트 메세지
       const [idMessage, setIdMessage] = useState("");
       const [pwdMessage, setPwdMessage] = useState("");
   
       // 로그인 유효성 검사
       const [isId, setIsId] = useState("");
       const [isPwd, setIsPwd] = useState("");
   
       // 로그인 오류 팝업
       const [modalOpen, setModalOpen] = useState(false); 
       
       // 모달
       const [modalText, setModelText] = useState("");

       const closeModal = () => {
           setModalOpen(false);
       };

       let whoLogin = window.localStorage.getItem("whoLogin");
   
       // 아이디 힌트
       const onChangeId = (e) => {
           setInputId(e.target.value);
           if(e.target.value.length < 4 || e.target.value.length > 20){
               setIdMessage("4자리 이상 20자리 이하로 입력하세요.");
               setIsId(false);
           } else {
               setIdMessage("올바른 형식입니다.");
               setIsId(true);
           }
       }
   
       // 비밀번호 힌트
       const onChangePwd = (e) => {
           const pwdRegex = /^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*#?&])[A-Za-z\d@$!%*#?&]{8,20}$/
           const pwdCurrent = e.target.value;
           setInputPwd(pwdCurrent)
           if(!pwdRegex.test(pwdCurrent)) {
               setPwdMessage("숫자, 영문자, 특수문자 포함 8자리 이상 입력하세요.");
               setIsPwd(false);
           } else {
               setPwdMessage("올바른 형식입니다.");
               setIsPwd(true);
           }
       }

        // API호출
       const onClickLogin = async() => {
        try {
            const res = await MuteApi.Login(inputId, inputPwd);
            console.log(res.data);

            if(res.data === 200) {
                window.localStorage.setItem("whoLogin",inputId);
                window.localStorage.setItem("whoPwd",inputPwd); 
                console.log("로그인 성공");
                window.location.replace("/");

            } else if(res.data === 300) {
                setModelText("패스워드를 다시 확인해주세요.");
                setModalOpen(true);
                console.log("로그인 실패, 패스워드 불일치");
            } else {
                setModelText("존재하지 않는 아이디입니다.");
                setModalOpen(true);
                console.log("로그인 실패, 아이디가 없습니다.");
            }
        } catch (e) {
        } 
        }
   
       return(
        <div className="container">
            <>
            <h3>현재 로그인 된 계정 [{whoLogin}]</h3>
                <h5>로그인</h5>
                {/* 아이디 입력창 */}
                <input className="input" value={inputId} placeholder="아이디" onChange={onChangeId}></input>   

                {/* 아이디 제한 메시지 */}
                <div className="hint">
                {inputId.length > 0 && <span className={`message ${isId ? 'success' : 'error'}`}>{idMessage}</span>}
                </div>

                {/* 패스워드 입력창 */}
                <input className="input" value={inputPwd} type="password" placeholder="비밀번호" onChange={onChangePwd}></input>

                {/* 비밀번호 제한 메시지 */}
                <div className="hint">
                {inputPwd.length > 0 && <span className={`message ${isPwd ? 'success' : 'error'}`}>{pwdMessage}</span>}
                </div>

                {/* 로그인 버튼 */}
                <button className="loginButton" onClick={onClickLogin}>LOGIN</button>
                <br/>
            </>

            {modalOpen && <Modal open={modalOpen} close={closeModal} header="확인">{modalText}</Modal>}
        </div>
        )
}

export default Login;   