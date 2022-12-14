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
                font-weight: 500;
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
        border:none;
        border-bottom: 1px solid lightgray;
        .eachText{
            display: flex;
            margin-top:20px;
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
            margin-bottom: 20px;
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
    const [modalLogin, setModelLogin] = useState(false); // ????????? ????????? ???
    const navigate = useNavigate();
    const closeModal = () => { 
        setModelLogin(false);
        setModalOpen(false);
        setCount(count + 1);
    }
    
    const [modalOpen, setModalOpen] = useState(""); // ?????? ?????? ????????? ???
    const [modalText, setModalText] = useState(""); // ?????? ?????? ?????????

    let clickSeatNum = window.localStorage.getItem("whatSeatNum");
    let clickSeatInfo = window.localStorage.getItem("whatSeatInfo");
    let userNum = window.localStorage.getItem("whoLoginUserNum"); 
    let member = window.localStorage.getItem("whoLoginUserNum"); 



    useEffect(() => {
        const SeatDetailReview = async () => {
            try {
                console.log("??? ????????? userNum : " + userNum);
                console.log("????????? ???????????? : " + clickSeatNum);
                console.log("????????? ???????????? : " + clickSeatInfo);
                let response1 = await MuteApi.seatReviewStar(clickSeatNum);
                let response2 = await MuteApi.seatReview(clickSeatNum);
                setSeatAvg(response1.data);
                setSelectSeat(response2.data);
            } catch(e) {
                console.log(e + "?????? ???????????? ?????? ???????????? ??????");
            }
        };
        SeatDetailReview();
    }, [count]);

    const OnClick = (e) => {
    }

    const OnClickSeat = (e) => {

    }

    const OnClickDelete = async(member, reviewSeId) => {
        try{
            let response = await MuteApi.DeleteSeat(member, reviewSeId);
            console.log(member);
            console.log(reviewSeId);
            if(response.data === true) {
                setModalOpen(true);
                setModalText("????????? ?????????????????????.");
                setCount(count + 1);
                // let theaterFullName = window.localStorage.getItem("theaterFullName");
                // if(theaterFullName === "??????????????????"){
                //     navigate("/TheaterChar");
                // } else if (theaterFullName === "??????????????????"){
                //     navigate("/TheaterChung");
                // }
            }
        } catch (e) {
            setModalOpen(true);
            setModalText("???????????? ????????????.");   
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
                <p className="allAvg">?????? ??????&nbsp;<FaStar size="27" color="#FCC419"/>&nbsp;<span className="allAvg_score">{el.avgSeat.toFixed(2)}({el.cnt})</span></p>
                <div className="starAvg">
                    <p className="starAvgList"><span className="starAvgList_text">??????&nbsp;</span><FaStar size="23" color="gray"/>&nbsp;{el.seat.toFixed(1)}</p>
                    <p className="starAvgList"><span className="starAvgList_text">??????&nbsp;</span><FaStar size="23" color="gray"/>&nbsp;{el.view.toFixed(1)}</p>
                    <p className="starAvgList"><span className="starAvgList_text">??????&nbsp;</span><FaStar size="23" color="gray"/>&nbsp;{el.sound.toFixed(1)}</p>
                    <p className="starAvgList"><span className="starAvgList_text">??????&nbsp;</span><FaStar size="23" color="gray"/>&nbsp;{el.light.toFixed(1)}</p>
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
                        <p className="eachAvg"><FaStar size="14" color="#FCC419"/> {e.scoreAvgSeat}</p>
                        <p className="date">????????? {e.writeDate.toString().substring(0, 10)}</p>
                        <button className="deleteBtn" onClick={() => OnClickDelete(member, e.reviewSeId)}>??????</button>
                    </div>
                    
                    <div className="star">
                        <p className="starList">??????<FaStar size="14" color="gray"/>{e.scoreSeat.toFixed(1)}</p>
                        <p className="starList">??????<FaStar size="14" color="gray"/> {e.scoreView.toFixed(1)}</p>
                        <p className="starList">??????<FaStar size="14" color="gray"/>{e.scoreSound.toFixed(1)}</p>
                        <p className="starList">??????<FaStar size="14" color="gray"/> {e.scoreLight.toFixed(1)}</p>
                    </div>
                   
                    <p className="txt">{e.reviewSeTxt}</p>

                </div>
            </div>
        ))}
        </SeatReviewContainer>
        {modalLogin&& <Modal open={modalLogin} close={closeModal} type={true}>???????????? ????????? ??????????????????.</Modal>}
        {modalOpen && <Modal open={modalOpen} close={closeModal} header="??????">{modalText}</Modal>}
        </SeatReviewTotalContainer>
    )
}

export default SeatClick;