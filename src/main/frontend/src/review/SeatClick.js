import { useState, useEffect } from "react";
import styled from "styled-components";
import MuteApi from "../api/MuteApi";
import { FaStar } from 'react-icons/fa';
import Modal from "../util/Modal";
import { useNavigate } from "react-router-dom";

const SeatReviewTotalContainer = styled.div`
    width: 90%;
    height: fit-content;
    margin: auto;
`;

const SeatReviewAvgContainer = styled.div`
  
    .position{
        color: #810000;
        font-size: 25px;
        font-weight: 800;
        margin: 30px 30px 30px 10px;
    }
    .avgContainer{
        background-color: #EEEBDD;
        padding: 30px;
        .allAvg{
        color: #810000;
        font-size: 25px;
        font-weight: 800;
            .allAvg_score{
                color: #1b1717;
            }
        }
        .starAvg{
        display: flex;
            .starAvgList{
                margin-right: 20px;
                .starAvgList_text{
                    font-weight: 800;   
                }
            }
        }
    }
`;

const SeatReviewContainer = styled.div`
    .eachContainer{
        .eachText{
            display: flex;
            .writer{
                margin-right: 15px;
            }
            .eachAvg{
                margin-right: 15px;
            }
            .date{
                margin-right: 15px;
                color: #909090;
            }
        }
        .star{
            display: flex;
            margin: 5px 5px 5px 0;
            .starList{
                margin: 0px 15px 0px 0px;
            }
        }
        .txt{
            margin-top: 10px;
            margin-bottom: 50px;
        }
        .deleteBtn {
            border-radius: 5px;
            border: solid 0.5px lightgray;
            background-color: white;
        }
    }

`;

const SeatClick = () => {
    const [count, setCount] = useState(0);
    const [seatAvg, setSeatAvg] = useState();
    const [selectSeat, setSelectSeat] = useState();
    const [modalLogin, setModelLogin] = useState(false); // 로그인 안했을 때
    const navigate = useNavigate();
    const closeModal = () => { 
        setModelLogin(false);
        setModalOpen(false);
        setCount(count + 1);
    }
    
    const [modalOpen, setModalOpen] = useState(""); // 삭제 버튼 눌렀을 때
    const [modalText, setModalText] = useState(""); // 삭제 모달 텍스트

    let clickSeatNum = window.localStorage.getItem("whatSeatNum");
    let clickSeatInfo = window.localStorage.getItem("whatSeatInfo");
    let userNum = window.localStorage.getItem("whoLoginUserNum"); 



    useEffect(() => {
        const SeatDetailReview = async () => {
            try {
                console.log("글 삭제할 userNum : " + userNum);
                console.log("클릭한 좌석번호 : " + clickSeatNum);
                console.log("클릭한 좌석위치 : " + clickSeatInfo);
                let response1 = await MuteApi.seatReviewStar(clickSeatNum);
                let response2 = await MuteApi.seatReview(clickSeatNum);
                setSeatAvg(response1.data);
                setSelectSeat(response2.data);
            } catch(e) {
                console.log(e + "좌석 상세정보 후기 불러오기 실패");
            }
        };
        SeatDetailReview();
    }, []);

    const OnClick = (e) => {
    }

    const OnClickSeat = (e) => {

    }

    const OnClickDelete = async(userNum, clickSeatNum) => {
        try{
            let response = await MuteApi.deleteReviewSeat(userNum, clickSeatNum);
            if(response.data === true) {
                setModalOpen(true);
                setModalText("삭제가 완료되었습니다.");
                setCount(count + 1);
                let theaterFullName = window.localStorage.getItem("theaterFullName");
                if(theaterFullName === "샤롯데씨어터"){
                    navigate("/TheaterChar");
                } else if (theaterFullName === "충무아트센터"){
                    navigate("/TheaterChung");
                }
            }
        } catch (e) {
            setModalOpen(true);
            setModalText("작성자가 아닙니다.");   
        }
    }


    return(
        <SeatReviewTotalContainer>
        <SeatReviewAvgContainer>
        <p className="position">{clickSeatInfo}</p>
        {seatAvg && seatAvg.map(e=>e.seatAvgContent.map(el =>
            <>
            <div onClick={()=>OnClickSeat()}>

            <div className="avgContainer">
                <p className="allAvg">평균 별점<FaStar size="30" color="#FCC419"/><span className="allAvg_score">{el.avgSeat.toFixed(2)}({el.cnt})</span></p>
                <div className="starAvg">
                    <p className="starAvgList"><span className="starAvgList_text">좌석</span><FaStar size="25" color="gray"/>{el.seat.toFixed(1)}</p>
                    <p className="starAvgList"><span className="starAvgList_text">시야</span><FaStar size="25" color="gray"/>{el.view.toFixed(1)}</p>
                    <p className="starAvgList"><span className="starAvgList_text">음향</span><FaStar size="25" color="gray"/>{el.sound.toFixed(1)}</p>
                    <p className="starAvgList"><span className="starAvgList_text">조명</span><FaStar size="25" color="gray"/>{el.light.toFixed(1)}</p>
                </div>
            </div>

            </div>
            </>
            ))}
        </SeatReviewAvgContainer>


        <br />
        <SeatReviewContainer>
        {selectSeat && selectSeat.map(e => (
            <div Onclick={() => OnClick(e.userId)}>

                <div className="eachContainer">

                    <div className="eachText">
                        <p className="writer">{e.userId.replace(e.userId.slice(-2), '***')}</p>
                        <p className="eachAvg"><FaStar size="15" color="#FCC419"/> {e.scoreAvgSeat}</p>
                        <p className="date">작성일 {e.writeDate.toString().substring(0, 10)}</p>
                    </div>
                    
                    <div className="star">
                        <p className="starList">좌석<FaStar size="15" color="gray"/>{e.scoreSeat.toFixed(1)}</p>
                        <p className="starList">시야<FaStar size="15" color="gray"/> {e.scoreView.toFixed(1)}</p>
                        <p className="starList">음향<FaStar size="15" color="gray"/>{e.scoreSound.toFixed(1)}</p>
                        <p className="starList">조명<FaStar size="15" color="gray"/> {e.scoreLight.toFixed(1)}</p>
                    </div>
                    <button className="deleteBtn" onClick={() => OnClickDelete(userNum, clickSeatNum)}>삭제</button>
                    <p className="txt">{e.reviewSeTxt}</p>

                </div>
            </div>
        ))}
        </SeatReviewContainer>
        {modalLogin&& <Modal open={modalLogin} close={closeModal} type={true}>로그인이 필요한 서비스입니다.</Modal>}
        {modalOpen && <Modal open={modalOpen} close={closeModal} header="확인">{modalText}</Modal>}
        </SeatReviewTotalContainer>
    )
}

export default SeatClick;