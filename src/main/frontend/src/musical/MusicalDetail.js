import { useEffect, useState } from "react";
import MuteApi from "../api/MuteApi";
import styled from "styled-components";
import Modal from "../util/Modal";
import heartIcon from "../images/heart.png";
import heartIcon2 from "../images/heart2.png";
import Review from "../review/Review";
import { useNavigate } from "react-router-dom";

// 선택된 뮤지컬 상세페이지
const MusicalDetail = (props) => {
    const navigate = useNavigate();

    const [musicalDetail,setMusicalDetail] = useState();
    const musicalId = window.localStorage.getItem("musicalId"); // 선택한 musicalId
    const userNum = window.localStorage.getItem("whoLoginUserNum"); // 로그인할 경우 저장한 userNum

    // 찜하기
    const [wish, setWish] = useState(false);
    const [modalWishReg, setModalWishReg] = useState(false); // 찜 등록했을 경우
    const [modalWishCancel, setModalWishCancel] = useState(false); // 찜 취소했을 때 
    const [modalNotLogin, setModalNotLogin] = useState(false); // 로그인 안했을 경우

    // 관심상품 등록 모달
    const closeModalWishReg = () => {
        setModalWishReg(false); // 확인버튼 => 찜 등록 끝
    }

    // 관심상품 취소 모달 NO 선택
    const closeModalWishCancelN = () => {
        setModalWishCancel(false); // yes버튼, no버튼 => yes버튼 클릭시 찜하기 취소
    }

    // 관심상품 취소 모달 YES 선택
    const closeModalWishCancelY = () => {
        setModalWishCancel(false); // yes버튼, no버튼 => yes버튼 클릭시 찜하기 취소
        wish(false);
    }

    // 로그인 필요 서비스 모달
    const closeModalNotLogin= () => {
        setModalNotLogin(false);
        navigate('/Login'); // 확인버튼 => 로그인페이지로 이동 
    }

    // 지금 필요한 것
    // 1. 로그인 안하고 찜 누르면 로그인 화면으로 이동 => 완
    // 2. 찜하면 찜 완료 모달창 => 완
    // 3. 이미 찜하면 찜 취소 모달창 여기서 yes누르면 모달창 꺼지고 하트 사라져야 함
    // 4. 지금 무조건 하트버튼 누르기만하면 데이터 누적됨 백엔드 작업해야 함(musicalId랑 userNum으로 데이터 삭제)

  useEffect(() => {
      const MusicalData = async () => {
          try {
              let response = await MuteApi.musicalDetail(musicalId); // 받은 musicalId 서버로 넘겨주기
              setMusicalDetail(response.data);
              
          } catch (e) {  
              console.log(e + "실패");
          }     
      };
      MusicalData();
  }, []);

  
  const OnClickPoster = (e) => {
  }

  const OnClickWish = async() => {
        try {
            const response = await MuteApi.wishReg(userNum, musicalId); // musicalId와 userNum으로 찜 상품 등록
            setWish(response.data);
        }
     catch (e) {
        console.log(e);
    }
    if(userNum) {
        if(wish === false) {
            setModalWishReg(true);
        } else {
            setModalWishCancel(true);
        }
    } else {
        setModalNotLogin(true);
    }
  }


  return(
      <>
        {/* wish 등록 */}
        <div onClick={() => OnClickWish()}>
        {/* <img src={heartIcon2} alt={heartIcon} width="30px"></img> */}
            {/* <div className={(wish ? "likeBtn" : "notLikeBtn")}> */}
            <p className="wish"><img src={wish ? heartIcon : heartIcon2} alt={heartIcon} width="30px"></img></p>
            </div>

        {/* </div> */}
        
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

        <Review/>


{/* <IsLikeBtn onClick={() => onClickLike()}>
<div className={(likeOk ? "likeBtn" : "notLikeBtn")}>
<b>관심상품</b>
<p className="like"><img src={likeOk ? whiteLikeIcon : likeIcon} alt={likeIcon} width="15px"></img> x 3,201</p>
</div>
</IsLikeBtn> */}
        {modalWishReg && <Modal open={modalWishReg} close={closeModalWishReg} header="&nbsp;">뮤지컬 찜 완료</Modal>}
        {modalWishCancel && <Modal open={modalWishCancel} confirm = {closeModalWishCancelY} close={closeModalWishCancelN} header='취소'>찜하기를 취소하시겠습니까?</Modal>}
        {modalNotLogin && <Modal open={modalNotLogin} close={closeModalNotLogin} header="&nbsp;">로그인 후 이용하시기 바랍니다.</Modal>}
      
      </>
  );
}

export default MusicalDetail;