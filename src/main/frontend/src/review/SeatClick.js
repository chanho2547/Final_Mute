import { useState, useEffect } from "react";
import styled from "styled-components";
import MuteApi from "../api/MuteApi";
import { FaStar } from 'react-icons/fa';

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
            .date{
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
            margin-bottom: 50px;
        }
    }

`;

const SeatClick = () => {
    const [seatAvg, setseatAvg] = useState();
    const [selectSeat, setSelectSeat] = useState();
    let clickSeatNum = window.localStorage.getItem("whatSeatNum");
    let clickSeatInfo = window.localStorage.getItem("whatSeatInfo");


    useEffect(() => {
        const SeatDetailReview = async () => {
            try {
                console.log("클릭한 좌석번호 : " + clickSeatNum);
                console.log("클릭한 좌석위치 : " + clickSeatInfo);
                let response1 = await MuteApi.seatReviewStar(clickSeatNum);
                let response2 = await MuteApi.seatReview(clickSeatNum);
                setseatAvg(response1.data);
                setSelectSeat(response2.data);
            } catch(e) {
                console.log(e + "좌석 상세정보 후기 불러오기 실패");
            }
        };
        SeatDetailReview();
    }, []);

    const Onclick = (e) => {
    }

    const OnclickSeat = (e) => {

    } 


    return(
        <SeatReviewTotalContainer>
        <SeatReviewAvgContainer>
        <p className="position">{clickSeatInfo}</p>
        {seatAvg && seatAvg.map(e=>e.seatAvgContent.map(el =>
            <>
            <div onClick={()=>OnclickSeat()}>

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
            <div Onclick={() => Onclick(e.userId)}>

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

                    <p className="txt">{e.reviewSeTxt}</p>

                </div>
            </div>
        ))}
        </SeatReviewContainer>
        </SeatReviewTotalContainer>
    )
}

export default SeatClick;