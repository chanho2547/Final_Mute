import React from "react";
import MyPageTab from "./MyPageTab";
import ProImg from "./ProImg";
import {Link} from "react-router-dom";


const MyPage = () => {
    const userId = window.localStorage.getItem("whoLogin");
    console.log(userId);

    return(

        <>
            <h3>{userId} 님의 프로필</h3>
            <ProImg/>
            <Link to="/Edit" className="link_item">회원정보수정</Link>
            <MyPageTab/>

        </>
    )
}

export default MyPage;