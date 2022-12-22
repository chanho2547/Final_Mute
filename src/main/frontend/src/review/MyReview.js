// import React, { useEffect } from "react";
// import styled from "styled-components";
// import MiniApi from "../api/MiniApi";
// import { useState } from "react";

// // 내 게시글 보기
// const MyReview = () => {


//     const [myReview, setMyReview] = useState("");

//     let whoLoginNow = window.localStorage.getItem("whoLoginNow");

//     // API 호출
//     useEffect(() => {
//         const postData = async () => {
          
//             try {
//                 const response = await MiniApi.mypostInfo(whoLoginNow); // 전부다 조회할때는 인자값으로 ALL
//                 console.log("수신 : ", response.data);
//                 setMypost(response.data);
//             } catch (e) {  
//                 console.log(e + "실패 입니다");
//             }
           
//         };
//         postData(); // 첫 페이지 로딩시 글 목록을 다 끌어옴

//     }, []);
    
//     const Onclickpost= (boardNum) =>{
//         window.localStorage.setItem('boardNum',boardNum);
//         window.location.replace('/Board');
//     }
    



    
//     return(
//         <>
            

//                     {/* {myReview && myReview.map(e => (
               
//                         <div onClick={() => Onclickpost(e.DOC_NUM)}>
//                             <div>{whoLoginNow}</div>
//                             <div>{e.}</div>
                      
                  
//                     ))} */}

//         </>
//     );
// }
// export default MyReview;