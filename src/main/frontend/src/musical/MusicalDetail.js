import { useEffect, useState } from "react";
import MuteApi from "../api/MuteApi";
import styled from "styled-components";
import Modal from "../util/Modal";
import heartIcon from "../images/heart.png";
import heartIcon2 from "../images/heart2.png";
import Review from "../review/Review";
import { useNavigate } from "react-router-dom";

//////////////// 스타일드 컴포넌트 ////////////////

const DetailInfoContainer = styled.div`
    margin: 0 auto;
    width: 1024px;

    .musicalTitle {
        font-weight: 700;
        font-size: 1.5em;
        display: block;
        flex-wrap: wrap;
        margin-bottom: 20px;
    }
`

const DescInfo = styled.div`
    display: flex;
    flex-wrap: wrap;
    /* justify-content: center; */

    .poster {
        width: 300px;
    }
    table {
        margin-left: 50px;
        height: 240px;
        width: 500px;
    }
    .title {
        width: 100px;
        padding-right: 30px;
        color: #810000;
        font-weight: 500;
    }
`

// 예매하기 버튼 스타일
const ReserveOnbtn = styled.button`
    margin: 10px;
    color: white; 
    background-color: #810000;
    border-radius: 5px;
    border: none;
    width: 180px;
    height: 50px;
`;

// 예매예정 버튼 스타일
const ReserveOffbtn = styled.button`
    margin: 10px;
    color: white; 
    background-color: #909090;
    border-radius: 5px;
    border: none;
    width: 180px;
    height: 50px;
`;

// 찜하기 버튼 스타일
const WishBtn = styled.button`
    margin: 10px;
    color: #810000; 
    background-color: #EEEBDD;
    border-radius: 5px;
    border: none;
    width: 180px;
    height: 50px;
`;

// 찜하기 취소 버튼 스타일
const UnWishBtn = styled.button`
    margin: 10px;
    color: white; 
    background-color: #EEEBDD;
    border-radius: 5px;
    border: none;
    width: 180px;
    height: 50px;
`;


const MusicalDetail = (props) => {
    const navigate = useNavigate();
    const [musicalDetail,setMusicalDetail] = useState();
    const musicalId = window.localStorage.getItem("musicalId"); // 선택한 musicalId
    const userNum = window.localStorage.getItem("whoLoginUserNum"); // 로그인할 경우 저장한 userNum

    const [wish, setWish] = useState(false);
    const [modalWishReg, setModalWishReg] = useState(false); // 찜 등록했을 경우
    const [modalWishCancel, setModalWishCancel] = useState(false); // 찜 취소했을 때 
    const [modalNotLogin, setModalNotLogin] = useState(false); // 로그인 안했을 경우

    const [theaterDetail,setTheaterDetail] = useState();

    const closeModalWishReg = () => {
        setModalWishReg(false);
    }

    const closeModalWishCancelN = () => {
        setModalWishCancel(false);
    }

    const closeModalWishCancelY = async () => {
        try {
            console.log("wish취소 userNum : " + userNum);
            console.log("wish취소 musicalId : " + musicalId);
            await MuteApi.wishCancel(userNum, musicalId);
            setModalWishCancel(false);
            setWish(!wish);
        } catch (e) {
            console.log(e + "찜 취소 통신 실패")
        }    
    }

    const closeModalNotLogin= () => {
        setModalNotLogin(false);
        navigate('/Login'); // 로그인페이지로 이동 
    }

  useEffect(() => {
      const MusicalData = async (theaterId) => {
          try {
              let response = await MuteApi.musicalDetail(musicalId); // 받은 musicalId 서버로 넘겨주기
              window.localStorage.setItem("theaterId", theaterId); // 불러오면서 극장ID 저장시킴
              console.log("저장된 극장ID값: " + theaterId);
              setMusicalDetail(response.data);
              
          } catch (e) {  
              console.log(e + "실패");
          }     
      };
      MusicalData();
  }, []);

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
            <div className={(wish ? "likeBtn" : "notLikeBtn")}>
            <p className="wish"><img src={wish ? heartIcon : heartIcon2} alt={heartIcon} width="30px"></img></p>
            </div>
        </div>
        
        {musicalDetail && musicalDetail.map(e => (        
            <DetailInfoContainer>
                <p className="musicalTitle">{e.musicalName}</p>
                <DescInfo>
                    <img alt="poster" className="poster" src={e.musicalPoster}/>
                    <table>
                        <tr>
                            <td className="title">장소</td>
                            <td>{e.theaterName}</td>
                        </tr>
                        <tr>
                            <td className="title">공연기간</td>
                            <td>{e.musicalStart} ~ {e.musicalEnd}</td>
                        </tr>
                        <tr>
                            <td className="title">공연시간</td>
                            <td>{e.musicalRuntime}</td>
                        </tr>
                        <tr>
                            <td className="title">공연상태</td>
                            <td>{e.musicalStatus}</td>
                        </tr>
                        <tr>
                            <td className="title">출연진</td>
                            <td>{e.musicalCast}</td>
                        </tr>
                        <tr>
                            <td className="title">관람연령</td>
                            <td>{e.musicalAge}</td>
                        </tr>
                        <tr>
                            <td className="title">가격</td>
                            <td>{e.musicalPrice}</td>
                        </tr>
                        <tr>
                            <td className="title">공연일정</td>
                            <td>{e.musicalPlan}</td>
                        </tr>
                    </table>
                    <WishBtn>찜하기</WishBtn>
                    <ReserveOnbtn>예매하기</ReserveOnbtn>
                </DescInfo>
                

            </DetailInfoContainer>
        ))}

        <Review/>

        {modalWishReg && <Modal open={modalWishReg} close={closeModalWishReg} header="&nbsp;">뮤지컬 찜 완료</Modal>}
        {modalWishCancel && <Modal open={modalWishCancel} confirm = {closeModalWishCancelY} close={closeModalWishCancelN} header='취소'>찜하기를 취소하시겠습니까?</Modal>}
        {modalNotLogin && <Modal open={modalNotLogin} close={closeModalNotLogin} header="&nbsp;">로그인 후 이용하시기 바랍니다.</Modal>}
      
      </>
  );
}

export default MusicalDetail;