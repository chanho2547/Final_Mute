import { useEffect, useState } from "react";
import MuteApi from "../api/MuteApi";
import styled from "styled-components";
import Modal from "../util/Modal";
import heartIcon from "../images/heart.png";
import heartIcon2 from "../images/heart2.png";
import Review from "../review/Review";
import { useNavigate } from "react-router-dom";
import TheaterDetail from "./TheaterDetail";
import MusicalTab from "./MusicalTab";

//////////////// 스타일드 컴포넌트 ////////////////

const DetailInfoContainer = styled.div`
   
    margin: 40px auto;
    width: 1024px;

    .musicalTitle {
        font-weight: 700;
        font-size: 1.5em;
        display: block;
        margin-bottom: 20px;
    }
    .button {
        cursor: pointer;
        display: flex;
        float: left;
        margin-left: 50px;

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
        height: 340px;
        width: 600px;
        td {
            vertical-align: top;
            padding: 5px;
        }
    }
    .title {
        width: 150px;
        padding-right: 25px;
        color: #810000;
        font-weight: 500;
    }
`

// 찜하기 버튼 스타일
const WishBtn = styled.button`
    font-size: 1.1em;
    width: 280px;
    height: 50px;
    border-radius: 5px;
    border: none;
    display: flex;
    justify-content: center;
    align-items: center;
    margin: 10px;
    color: #810000; 
    background-color: #EEEBDD;
    img {
        margin-right: 5px;
        margin-top: 1px;
    }
    
`;

// 찜하기 취소 버튼 스타일
const UnWishBtn = styled.button`
    width: 280px;
    height: 50px;
    border-radius: 5px;
    border: none;
    display: flex;
    justify-content: center;
    align-items: center;
    margin: 10px;
    color: #810000; 
    background-color: #EEEBDD;
    img {
        margin-right: 5px;
        margin-top: 1px;
    }
`;

// 예매하기 버튼 스타일
const ReserveOnbtn = styled.button`
    font-size: 1.1em;
    width: 280px;
    height: 50px;
    border-radius: 5px;
    border: none;
    margin: 10px;
    color: white; 
    background-color: #810000;
`;

// 예매예정 버튼 스타일 - 티켓스타트 날짜 이전일 경우
const ReserveOffbtn = styled.button`
    font-size: 1.1em;
    width: 280px;
    height: 50px;
    border-radius: 5px;
    border: none;
    margin: 10px;
    color: white; 
    background-color: #909090;
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

    // 뮤지컬 api 호출
    useEffect(() => {
        const MusicalData = async () => {
            try {
                const response = await MuteApi.musicalDetail(musicalId); // 받은 musicalId 서버로 넘겨주기
                setMusicalDetail(response.data);                
            } catch (e) {  
                console.log(e + "실패");
            }
            if(setMusicalDetail === null) return '정보없음';
            console.log("!setMusicalDetail" + !setMusicalDetail === null);
            // console.log("data없는값:? " + !setMusicalDetail);

            // if ()
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

    const OnClickReserve = (e) => {
        console.log("클릭한 뮤지컬 ID값 : " + e);
        window.localStorage.setItem("seatInfoMode", e); // 흠..?
        navigate('/Reservation');
    }
    



    return(
        <>
        {/* wish 등록
        <div onClick={() => OnClickWish()}>
            <div className={(wish ? "likeBtn" : "notLikeBtn")}>
            <p className="wish"><img src={wish ? heartIcon : heartIcon2} alt={heartIcon} width="30px"></img></p>
            </div>
        </div> */}
        
        {musicalDetail && musicalDetail.map(e => (        
            <DetailInfoContainer>
                <p className="musicalTitle">{e.musicalName}</p>
                <DescInfo>
                    <div>
                        <img alt="poster" className="poster" src={e.musicalPoster}/>
                    </div>
                    <div>
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
                        <div className="button">
                            <WishBtn onClick = {() => OnClickWish()} className={(wish ? WishBtn : UnWishBtn)}><img src={wish ? heartIcon : heartIcon2} alt={heartIcon} width="17px"/> 찜하기</WishBtn>
                            <ReserveOnbtn onClick={() => OnClickReserve(e.musicalId)}>예매하기</ReserveOnbtn>
                        </div>
                    </div>
                    
                </DescInfo>
                <MusicalTab theaterId={e.theaterId} />
            </DetailInfoContainer>
        ))}

        {modalWishReg && <Modal open={modalWishReg} close={closeModalWishReg} header="&nbsp;">뮤지컬 찜 완료</Modal>}
        {modalWishCancel && <Modal open={modalWishCancel} confirm = {closeModalWishCancelY} close={closeModalWishCancelN} header='취소'>찜하기를 취소하시겠습니까?</Modal>}
        {modalNotLogin && <Modal open={modalNotLogin} close={closeModalNotLogin} header="&nbsp;">로그인 후 이용하시기 바랍니다.</Modal>}
      
      </>
  );
}

export default MusicalDetail;