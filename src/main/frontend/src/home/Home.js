import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import MuteApi from "../api/MuteApi";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import { BsSearch } from 'react-icons/bs';
import Search from '../images/search.png';

const MusicalContainer =styled.div`
margin: 0;
`;

const OpenedMusical = styled.div`
margin: 20px;
display: flex;
/* justify-content: right */
`;
const OpenBeforeMusical = styled.div`
background-color: #F4F4F4;
margin: 20px;
display: flex;
/* justify-content: right */
`;
const StarRanking = styled.div`
margin: 20px;
display: flex;
/* justify-content: right */
`;

const SearchContainer = styled.div`
  border-radius: 2px solid black;
  display: flex;
  .search_button{
    background-color: none;
  }
`;

///////////////////////////////////////////////////////////////////////////////////////////////////////////
const Home = () => {
    let navigate = useNavigate();
    const [inputMusical, SetInputMusical] = useState("");

    const onChangeInput = (e) => {
      SetInputMusical(e.target.value)
    };

    const onClickInput = async() => {
      window.localStorage.setItem("inputMusical", inputMusical);
      navigate("/MusicalSearchList")
    }

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

    const OnClick = (musicalId) => {
        window.localStorage.setItem("musicalId", musicalId);
        navigate('/MusicalDetail');
    }

    return(
        <>
        <Link to = "/TheaterChar">샤롯데 좌석 정보</Link> <br></br>
        <Link to = "/TheaterChung">충무 좌석 정보</Link> <br></br>
        <Link to = "/Reservation"> 예매 임시 페이지 </Link> <br></br>
        <Link to = "/Review"> ★후기 작성 임시 페이지 </Link> <br></br>
        <Link to = "/TheaterSearch">좌석별 후기 페이지</Link> <br></br>
        <Link to = "/MusicalListTmp">뮤지컬 목록 임시 페이지</Link> <br></br>
        <Link to = "/PayTest">카카오페이 결제 임시 페이지</Link>
        <br/><br/>
        
        <SearchContainer>
        <input className="search_input" onChange={onChangeInput} placeholder="찾고싶은 뮤지컬을 검색하세요!" width={500}></input>
        <button className="search_button" onClick={onClickInput}><img src={Search} width={20} height={20}/></button>
        </SearchContainer>

        <MusicalContainer>
            <OpenedMusical>
            <p className="musical_title">예매 시작 뮤지컬 TOP3</p>
            {openedMusical && openedMusical.map(e => (
                <div onClick={() => OnClick(e.musicalId) }>
                <img alt="poster" src={e.musicalPoster} size width={160} height={230}/>
                <p className="musical_name">{e.musicalName}</p>
                <p className="theater_name">{e.theaterName}</p>
                <p className="musical_date">{e.musicalStart} ~ {e.musicalEnd}</p>
                </div>
            ))}
            </OpenedMusical>

            <br/><br/> 
           
            <OpenBeforeMusical> 
            <p className="musical_title">예매 예정 뮤지컬 TOP3</p>
            {openBeforeMusical && openBeforeMusical.map(e => (
                <div onClick={() => OnClick(e.musicalId) }>           
                <img alt="poster" src={e.musicalPoster} size width={160} height={230}/>
                <p className="musical_name">{e.musicalName}</p>
                <p className="theater_name">{e.theaterName}</p>
                <p className="musical_date">{e.musicalStart} ~ {e.musicalEnd}</p>
                </div>
            ))}
            </OpenBeforeMusical>

            <br/><br/>
           
            <StarRanking>
            <p className="musical_title">별점이 가장 높은 뮤지컬 TOP3(쿼리수정예정)</p>
            {starRanking && starRanking.map(e => (
                <div  onClick={() => OnClick(e.musicalId) }>
                <img alt="poster" src={e.musicalPoster} size width={160} height={230}/>
                <p>{e.musicalName}</p>
                <p>{e.theaterName}</p>
                <p>{e.musicalStart} ~ {e.musicalEnd}</p>
                </div>
            ))}
            </StarRanking>
        </MusicalContainer>



        </>
    );
}  

export default Home;