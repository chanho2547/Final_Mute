import styled from "styled-components";
import { useState } from "react";
import { Link } from "react-router-dom";
import { FaBell } from 'react-icons/fa';

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

const Nav = styled.div``;

///////////////////////////////////////////////////////////////////////////////////////////////////////
const Header = () => {

    // 로그인했을 경우 현재 ID 표시
    let whoLoginNow = window.localStorage.getItem("whoLogin");

    // 현재 ID에서 로그아웃하기
    const onClickLogout = () => {
        window.localStorage.removeItem("whoLogin");
        window.location.replace("/");
      }

    return(
        <>
        <Menu>
            {!whoLoginNow ?
            // 로그인하지 않았을 때 => 로그인, 회원가입, 찜하기
            (<>
            <Link to={"/Login"} className="menu_item">로그인</Link>
            <Link to={"/SignUp"} className="menu_item">회원가입</Link>
            <Link to={"/Login"} className="menu_item">찜하기</Link>
            </>) 
            : 
            // 로그인했을 때 => 알림, ~~~님, 로그아웃, 마이페이지, 멤버십
            (<>
             <FaBell color="white"/>
             <div className="menu_item">{whoLoginNow}님</div>
             <button onClick={onClickLogout} className="menu_item">로그아웃</button>
             <Link to={"/Mypage"} className="menu_item">마이페이지</Link>
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

        <Nav>

        </Nav>



        </>
    )

}
export default Header;