import FirstFloor from "../theaterInfo/charLotte/FirstFloorChar";
import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import MuteApi from "../api/MuteApi";

const Home = () => {
    const [openedMusical, setOpenedMusical] = useState();
    const [openBeforeMusical, setBeforeMusical] = useState();
    const [starRanking, setStarRanking] = useState();

    useEffect(() => {
        const RankData = async () => {
            try{
                let response1 = await MuteApi.openedMusical();
                let response2 = await MuteApi.openBeforeMusical();
                let response3 = await MuteApi.musicalRanking();
                setOpenedMusical(response1.data);
                setBeforeMusical(response2.data);
                setStarRanking(response3.data);

            } catch (e) {
                console.log(e + "뮤지컬 데이터 불러오기 실패");
            }
        };
        RankData();
    }, []);

    const OnClick = (e) => {
    }


    return(
        <>
        {/* <Link to = "/FirstFloorChar"> 샤롯데 좌석 정보</Link> <br></br>
        <Link to = "/FirstFloorChung"> 충무아트 좌석 정보</Link> <br></br> */}
        <Link to = "/TheaterChar">샤롯데 좌석 정보</Link> <br></br>
        <Link to = "/TheaterChung">충무 좌석 정보</Link> <br></br>
        <Link to = "/Reservation"> 예매 임시 페이지 </Link> <br></br>
        <Link to = "/Review"> ★후기 작성 임시 페이지 </Link> <br></br>
        <Link to = "SeatView">좌석별 후기 페이지</Link> <br></br>
        <Link to = "/MusicalListTmp">뮤지컬 목록 임시 페이지</Link> <br></br>
        <Link to = "/PayReady">카카오페이 결제 임시 페이지</Link>

        <p><b>뮤지컬 예매 최근 오픈순3</b></p>
        {openedMusical && openedMusical.map(e => (
            <div onClick={() => OnClick(e) }>
              
              <img alt="poster" src={e.musicalPoster}/>
              <p>{e.musicalName}</p>
              <p>{e.theaterName}</p>
              <p>{e.musicalStart} ~ {e.musicalEnd}</p>
              </div>
        ))}

        <p><b>뮤지컬 예매 오픈 예정 최근순3</b></p>
        {openBeforeMusical && openBeforeMusical.map(e => (
            <div  onClick={() => OnClick(e) }>
              
              <img alt="poster" src={e.musicalPoster}/>
              <p>{e.musicalName}</p>
              <p>{e.theaterName}</p>
              <p>{e.musicalStart} ~ {e.musicalEnd}</p>
            </div>
        ))}

        <p><b>뮤지컬 별점 높은순3(쿼리수정예정)</b></p>
        {starRanking && starRanking.map(e => (
            <div  onClick={() => OnClick(e) }>
             <img alt="poster" src={e.musicalPoster}/>
             <p>{e.musicalName}</p>
             <p>{e.theaterName}</p>
             <p>{e.musicalStart} ~ {e.musicalEnd}</p>
            </div>
        ))}


        </>
    );
}  

export default Home;