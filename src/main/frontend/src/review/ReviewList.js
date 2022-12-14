import React from "react";
import { useState, useEffect } from "react";
import { BsSearch } from 'react-icons/bs';
import { Link, useNavigate } from "react-router-dom";
import Modal from "../util/Modal";


// 뮤지컬 총평 후기 view - 도연 작업중..

const ReviewList = () => {
    const navigate = useNavigate();

    // 모달
    const [modalLogin, setModelLogin] = useState(false); // 로그인 안했을 때
    
    
    const isLogin = window.localStorage.getItem("isLogin");
    if(isLogin === "FALSE") navigate('/');


    // 후기 작성 버튼 눌렀을 때 로그인 이면 OK, 로그인 안했으면 모달 띄우기
    const WriteButton = () => {
        let checkLogin = window.localStorage.getItem("whoLogin");

        if(checkLogin) window.location.replace('/WriteBoard');
        else {
            setModelLogin(true);
        } 
    };

    const closeModal = () => { 
        
    }

    

    // // 삭제하기 onClick 컴포넌트
    // const OnClickDelete = async(boardNum, id) => {
    //     try {
    //         const stringBoardNum = String(boardNum);
    //         const response = await MuteApi.boardDelete(stringBoardNum,id);
    //         console.log(response.data);

    //         if(response.data.includes("NOK")) {
                
    //             setModalText("작성자가 아닙니다. 목록으로 되돌아 갑니다")
    //             setModalOpen(true);
    //         }
    //         else {
    //             setModalText("삭제가 완료되었습니다. 목록으로 되돌아 갑니다");
    //             setModalOpen(true);
    //         }
            
    //     } catch (e) {
    //         console.log("오류" + e);
    //         alert("오류" + e);
    //     }
    // }




    return(
        <>
        <h3>뮤지컬 관람 후기</h3>
        <button onClick={WriteButton}>후기 작성</button>
        <fieldset>
            <p>회원 총 평점 [{}]</p>
        </fieldset>
        <fieldset>
            <span>아이디 []</span><p>총점 [{}]</p>
            <span>스토리 []</span> 
            <span>연출 []</span> 
            <span>캐스팅 []</span> 
            <span>넘버 []</span>
            <p>텍스트 []</p>
        </fieldset>
        {modalLogin&& <Modal open={modalLogin} close={closeModal} type={true}>로그인이 필요한 서비스입니다.</Modal>}
    
        </>
    )
}
export default ReviewList;