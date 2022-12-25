import React from "react";
import MyPageTab from "./MyPageTab";
import ProImg from "./ProImg";
import {Link} from "react-router-dom";
import styled from "styled-components";

const MyBox = styled.div `
    width: 1024px;
    display: flex;
    justify-content: center;
    text-align: center;
    flex-direction: column;


    h3{
        margin-top: 30px;
    }
`;

const Container = styled.div`
display: flex;
justify-content: center;
align-items: center;
`;

const MyPage = () => {
    const userId = window.localStorage.getItem("whoLogin");
    console.log(userId);

    return(
        <Container>
        <MyBox>
            <h3>{userId} 님의 프로필</h3>
            <ProImg/>
            <Link to="/Edit" className="link_item">회원정보수정</Link>
            <MyPageTab userId={userId}/>

        </MyBox>
        </Container>
    )
}

export default MyPage;