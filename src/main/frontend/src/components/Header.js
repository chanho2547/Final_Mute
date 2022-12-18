import styled from "styled-components";
import { useState } from "react";
import {Link, useNavigate} from "react-router-dom";
import { FaBell } from 'react-icons/fa';
import { BsSearch } from 'react-icons/bs';
import React from "react";
import Modal from "../util/Modal";
import Alarm from "../util/Alarm";

const HeaderContainer = styled.div``;

const Menu = styled.div`
  background-color: #CF0A0A;
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
const Logo = styled.div`
text-decoration: none;
color: #CF0A0A;
 p {
    font-size : 18px;
 }

 h1 { 
    font-size : 50px;
 }
`;

const Keyword = styled.div`
  width: 200px;
  height: 40px;
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

    // 뮤지컬 검색창
    const [inputMusical, SetInputMusical] = useState("");

    const onChangeInput = (e) => {
      SetInputMusical(e.target.value)
    };

    const onClickInput = async() => {
      window.localStorage.setItem("inputMusical", inputMusical);
      navigate("/MusicalSearchList")
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
        
        {/* Logo영역은 추후 로고가 만들어지면 변경 예정 */}
        <Logo>
        <Link to={"/"} className="logo_link">
            <p className="logo_item">당신의 <b>뮤지컬 메이트</b></p>
            <h1 className="logo_item">MUTE</h1>
        </Link>
        </Logo>

        <Keyword>
        <input onChange={onChangeInput} placeholder="뮤지컬을 검색하세요"></input>
        <button onClick={onClickInput}><BsSearch/></button>
        </Keyword>
        </HeaderContainer>
        {alarmModal && <Modal open={alarmModal} close={closeModal} header="확인"><Alarm/></Modal>}  
        </>
    )

}
export default Header;