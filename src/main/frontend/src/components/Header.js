import styled from "styled-components";
import { useState } from "react";
import {Link, useNavigate} from "react-router-dom";
import { FaBell } from 'react-icons/fa';
import Logo from '../images/logo.png';
import React from "react";
import Modal from "../util/Modal";
import Alarm from "../util/Alarm";

const HeaderContainer = styled.div``;

const Menu = styled.div`
  background-color: #810000;
  width: 100%;
  padding: 10px 0px 15px 0px;
  display: flex;
  justify-content: right;
  .menu_item {
    margin-left: 20px;
    margin-right: 10px;
    text-decoration: none;
    font-size: 11px;  
    color: #ffffff;
    cursor: pointer;
  }
`;
const LogoContainer = styled.div`
text-decoration: none;
color: #CF0A0A;
 p {
    font-size : 18px;
 }

 h1 { 
    font-size : 50px;
 }
`;



///////////////////////////////////////////////////////////////////////////////////////////////////////
const Header = () => {

  

    const [alarmModal, setAlarmModal] = useState(false); // 알림 모달창
    
    const closeModal = () => {
      setAlarmModal(false);
  }

    const navigate = useNavigate();
    // 로그인했을 경우 현재 ID 표시
    let whoLoginNow = window.localStorage.getItem("whoLogin");

    // 현재 ID에서 로그아웃하기
    const onClickLogout = () => {
        window.localStorage.removeItem("whoLogin");
        window.localStorage.removeItem("whoLoginUserNum");
        navigate("/");
      }

    const onClickAlarm = () => {
      setAlarmModal(true);
    }

    if (window.location.pathname === '/PayEnd') return null;


    return(
        <>
        <HeaderContainer>

        <Menu>
            {!whoLoginNow ?
            // 로그인하지 않았을 때 => 로그인, 회원가입, 찜하기
            (<>
            <Link to={"/Login"} className="menu_item">로그인</Link>
            <Link to={"/Agree"} className="menu_item">회원가입</Link>
            <Link to={"/Login"} className="menu_item">찜하기</Link>
            </>) 
            : 
            // 로그인했을 때 => 알림, ~~~님, 로그아웃, 마이페이지, 멤버십
            (<>
             <FaBell color="white" onClick={onClickAlarm}/>
             <div className="menu_item">{whoLoginNow}님</div>
             <button onClick={onClickLogout} className="menu_item">로그아웃</button>
             <Link to={"/MyPage"} className="menu_item">마이페이지</Link>
             <Link to = {"/Membership"} className="menu_item">멤버십</Link>
            </>)
            }
            <Link to = {"/Cs"} className="menu_item">고객센터</Link>
        </Menu>
        
        
        <LogoContainer>
            <Link to={"/"} className="logo_link">
            <img src={Logo} width={300} height={160}/>
            </Link>
        </LogoContainer>

        </HeaderContainer>
        {alarmModal && <Modal open={alarmModal} close={closeModal} header="확인"><Alarm/></Modal>}  
        </>
    )

}
export default Header;