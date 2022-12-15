import { useEffect, useState } from "react";
import MuteApi from "../api/MuteApi";
import styled from "styled-components";
import Modal from "../util/Modal";
import heartIcon from "../images/heart.png";
import heartIcon2 from "../images/heart2.png";

// 선택된 뮤지컬 상세페이지
const MusicalDetail = (props) => {
    const [musicalDetail,setMusicalDetail] = useState();
    const musicalId = window.localStorage.getItem("musicalId"); // 선택한 musicalId
    const userNum = window.localStorage.getItem("whoLoginUserNum"); // 로그인할 경우 저장한 userNum
    console.log(musicalId);
    console.log(userNum);

    // 찜하기 등록
    const [wish, setWish] = useState(false);
    const [modalWishOpen, setModalWishOpen] = useState(false);
    const modalWishReg = () => {
        setModalWishOpen(false); 
    }

    // 로그인 필요
    // const [modalOpenLogin, setModalOpenLogin] = useState(false);
    // const closeModalLoginOK = () => {
    // setModalOpenLogin(false);
    // window.location.replace('/Login')
    // }


  useEffect(() => {
      const MusicalData = async () => {
          try {
              let response = await MuteApi.musicalDetail(musicalId); // 받은 musicalId 서버로 넘겨주기
              setMusicalDetail(response.data);
              
          } catch (e) {  
              console.log(e + "실패");
          }
        //   if(checkLogin){
        //     if (likeOk === false) {
        //         setModalOpenLike(true); 
        //         setLikeOk(!likeOk);
        //       }
        //       else {
        //         setModalOpenNotLike(true);
        //         setLikeOk(!likeOk);
        //       }
        //   } 
        // else {
        //     setModalOpenLogin(true);
        // }
         
      };
      MusicalData();
  }, []);

  
  const OnClickPoster = (e) => {
  }

  const OnClickWish = async() => {
        try {
            const response = await MuteApi.wishReg(musicalId, userNum); // musicalId와 userNum으로 찜 상품 등록
            setWish(response.data);
        }
     catch (e) {
        console.log(e);
    }
  }

  return(
      <>
        {/* wish 등록 */}
        <div onClick={() => OnClickWish()}>
            <div className={(wish ? "likeBtn" : "notLikeBtn")}>
            <b>wish 찜하기</b>
            <p className="wish"><img src={wish ? heartIcon2 : heartIcon} alt={heartIcon2} width="15px"></img></p>
            </div>
        </div>
        
        {musicalDetail && musicalDetail.map(e => (        
            <div onClick={() => OnClickPoster(e.musicalId) }>
            <img alt="poster" src={e.musicalPoster}/>
            <p className="title">{e.musicalName}</p>
            <p className="theaterName">{e.theaterName}</p>
            <p className="startDate">{e.musicalStart}</p>
            <p className="endDate">{e.musicalEnd}</p>
            <p className="status">{e.musicalStatus}</p>
            <p className="casting">{e.musicalCast}</p>
            <p className="ageLimit">{e.musicalAge}</p>
            <p className="price">{e.musicalPrice}</p>
            <p className="plan">{e.musicalPlan}</p>
            </div>
        ))}


{/* <IsLikeBtn onClick={() => onClickLike()}>
<div className={(likeOk ? "likeBtn" : "notLikeBtn")}>
<b>관심상품</b>
<p className="like"><img src={likeOk ? whiteLikeIcon : likeIcon} alt={likeIcon} width="15px"></img> x 3,201</p>
</div>
</IsLikeBtn> */}
        {/* {modalOpenLike && <Modal open={modalOpenLike} close={closeModalLikeOK} type={true} header="&nbsp;">뮤지컬 찜 완료</Modal>}
        {modalOpenLogin && <Modal open={modalOpenLogin} close={closeModalLoginOK} type={true} header="&nbsp;">로그인 후 이용하시기 바랍니다.</Modal>} */}
      
      </>
  );
}

export default MusicalDetail;