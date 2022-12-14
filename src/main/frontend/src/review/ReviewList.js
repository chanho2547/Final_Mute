// import React from "react";
// import { useState, useEffect } from "react";
// import { BsSearch } from 'react-icons/bs';
// import Modal from "../util/Modal";


// // 뮤지컬 총평 후기 view - 도연 작업중..

// const ReviewList = () => {

//     // 생각해보니 검색이 필요없음..
//     // why? => 이미 뮤지컬과 극장이 선택된 상태에서 후기 탭을 연거니까...
   
//     // // 검색창
//     // const [muInput, setMuInput] = useState("");

//     // const onChangeInput = (e) => {
//     //     setMuInput(e.target.value)
//     // };

//     // // 검색창 Api
//     // const onClickInput = async() => {
//     //     window.localStorage.setItem("input", muInput)
//     // }


//     // 모달
//     const [modalLogin, setModelLogin] = useState(false); // 로그인 안했을 때
    
//     const isLogin = window.localStorage.getItem("isLogin");
//     if(isLogin === "FALSE") window.location.replace("/");

//      // // 로그인 안하면 글 못쓰게 하고 모달 띄우기
//     // const WriteTotalButton = () => {
//     //     let checkLogin = window.localStorage.getItem("whoLogin");

//     //     if(checkLogin) window.location.replace('/WriteBoard');
//     //     else {
//     //         setModalOpen(true);
//     //     } 
//     // }


//     // Api 호출
//     useEffect(() => {
//         const BoardData = async () => {
//             setLoading(true);
//             try {
//                 let response = null;
//                 if(category === "전체게시판") {response = await MuteApi.boardInfo('ALL');} // 전부다 조회할때는 인자값으로 ALL
//                 else {response = await MuteApi.boardInfo('후기게시판');}
                
//                 setBoardInfo(response.data);
//                 console.log(response.data);
//             } catch (e) {  
//                 console.log(e + "실패 입니다");
//             }
//             setLoading(false);
//         };
//         BoardData(); // 첫 페이지 로딩시 글 목록을 다 끌어옴

//     }, [category]);
    

//     // // 삭제하기 onClick 컴포넌트
//     // const OnClickDelete = async(boardNum, id) => {
//     //     try {
//     //         const stringBoardNum = String(boardNum);
//     //         const response = await MuteApi.boardDelete(stringBoardNum,id);
//     //         console.log(response.data);

//     //         if(response.data.includes("NOK")) {
                
//     //             setModalText("작성자가 아닙니다. 목록으로 되돌아 갑니다")
//     //             setModalOpen(true);
//     //         }
//     //         else {
//     //             setModalText("삭제가 완료되었습니다. 목록으로 되돌아 갑니다");
//     //             setModalOpen(true);
//     //         }
            
//     //     } catch (e) {
//     //         console.log("오류" + e);
//     //         alert("오류" + e);
//     //     }
//     // }




//     return(
//         <>
//         {/* <input onChange={onChangeInput} placeholder="뮤지컬 제목으로 검색"/>
//         <button type="button" onClick={onClickInput}><BsSearch/></button> */}
//         <h3>뮤지컬 관람 후기</h3>
//         <button onClick={WriteButton}>후기 작성</button>
//         <fieldset>
//             <p>회원 총 평점 [{}]</p>
//         </fieldset>
//         <fieldset>
//             <span>아이디 []</span><p>총점 [{}]</p>
//             <span>스토리 []</span> 
//             <span>연출 []</span> 
//             <span>캐스팅 []</span> 
//             <span>넘버 []</span>
//             <p>텍스트 []</p>
//         </fieldset>
//         {modalLogin&& <Modal open={modalLogin} close={closeModal} type={true}>로그인이 필요한 서비스입니다.</Modal>}
    
//         </>
//     )
// }
// export default ReviewList;