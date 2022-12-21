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
  padding: 10px 30px 15px 0px;
  display: flex;
  justify-content: right;
    .menu_item {
        margin-left: 20px;
        margin-right: 10px;
        text-decoration: none;
        font-size: 0.8em;  
        color: #ffffff;
      cursor: pointer;
    }
`;

const LogoContainer = styled.div`
  text-decoration: none;
  text-align: center;
  color: #CF0A0A;
  margin-top: 20px;
`;

const Category = styled.div`
  
  font-size: 1.3em;
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  padding: 30px;
  border-bottom: 1px solid #eee;
  .category_item {
    cursor: pointer;
    text-decoration: none;
    color: #1b1717;
  }
  .category_item:hover {
    color: #810000;
    font-weight: 500;
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
        window.localStorage.removeItem("whoPwd");
        window.localStorage.removeItem("isLogin");
        navigate('/');
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
            <img className="logo_img" src={Logo} width={400} height={210}/>
            </Link>
        </LogoContainer>

        <Category>
          <Link to={"/"} className="category_item">뮤지컬</Link>
          <Link to={"/TheaterSearch"} className="category_item">좌석별 후기</Link>
          <Link to={"/Reservation"} className="category_item">예매하기</Link>
        </Category>

        </HeaderContainer>
        {alarmModal && <Modal open={alarmModal} close={closeModal} header="확인"><Alarm/></Modal>}

        </>
    )

}
export default Header;