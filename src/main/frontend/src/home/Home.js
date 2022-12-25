import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import MuteApi from "../api/MuteApi";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import Search from '../images/search.png';
import TopButton from "../util/TopButton";

const SearchContainer = styled.div`
  margin: auto;
  border: 4px solid #810000;
  display: flex;
  width: 580px;
  height: 60px;
  margin-top: 70px;
    .search_input{
        width: 550px;
        border: none;
        font-size: 18px;
        margin-left: 15px;
        :focus{
           outline: none;
        }
    }
    .search_button{
        border: none;
        background-color: rgba(0,0,0,0);
        :hover{
            cursor: pointer;
        }

    }
    img{
        width: 25px;
        height: 25px;
        margin-right: 15px;
        }
`;

const MusicalContainer =styled.div`
margin: auto;
    .musical_title{
        display: flex;
        justify-content: center;
        font-weight: 800;
        font-size: 35px;
        margin: 50px 0 10px 0;
        .musical_title_front{
            color: #810000;
        }
        .musical_title_back{
            color: #1b1717;
        }
    }
    .musical_name{
        width: 300px;
        color: #810000;
        font-weight: 700;
        font-size: 20px;
        margin: 0 50px 0 50px;
    }
    .musical_img{
        width: 300px;
        height: 400px;
        margin: 25px 50px 0 50px;
    }

    .theater_name{
        width: 300px;
        color: #1b1717;
        margin: 0 50px 0 50px;
    }
    .musical_date{
        color: #909090;
        font-size: 13px;
        margin: 0 50px 0 50px;
    }
    .openedMusical, .openBeforeMusical, .starRanking, .wishRanking{
        display: flex;
        justify-content: center;
        margin: auto;
    }

    .colorBlock{
        padding-top: 25px;
        padding-bottom: 35px;
        background-color: #F4F4F4;
        .musical_title{
            padding-top:30px;
        }
}
`;

///////////////////////////////////////////////////////////////////////////////////////////////////////////
const Home = () => {
    let navigate = useNavigate();
    const [musicalList,setMusicalList] = useState();

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
    const [wishRanking, setWishRanking] = useState();

    useEffect(() => {
        window.localStorage.setItem("countReview",0);
        const RankData = async () => {
            try{
                let response = await MuteApi.musicalList(); // 뮤지컬리스트호출 (서버에서 호출 후 바로 db에 저장)
                let response1 = await MuteApi.openedMusical();
                let response2 = await MuteApi.openBeforeMusical();
                let response3 = await MuteApi.starRanking();
                let response4 = await MuteApi.wishRanking();
                setMusicalList(response.data);
                setOpenedMusical(response1.data);
                setBeforeMusical(response2.data);
                setStarRanking(response3.data);
                setWishRanking(response4.data);
                console.log("꺼내야하는 데이터" + response3.data.map(e=>e.rankingListContent.map(el=>el.musical_id))); // 요게 맞음 PF195257,PF194963,PF195242

            } catch (e) {
                console.log(e + "뮤지컬 데이터 불러오기 실패");
            }
        };
        RankData();
    }, []);

    const onClick = (musicalId) => {
        window.localStorage.setItem("musicalId", musicalId);
        navigate('/MusicalDetail');
    }

    const onKeyPress = (e) => {
        if(e.key === 'Enter'){
            onClickInput();
        }
    }

    return(
        <>
        <SearchContainer>
        <input className="search_input" onChange={onChangeInput} onKeyDown={onKeyPress} placeholder="찾고 싶은 뮤지컬을 검색하세요!"></input>
        <button className="search_button" onClick={onClickInput} ><img src={Search}/></button>
        </SearchContainer>

        <MusicalContainer>
            <br/><br/>
            <div className="musical_title"><p className="musical_title_front">인기가 가장 많은&nbsp;</p><p className="musical_title_back">뮤지컬 TOP3</p></div>
            <div className="wishRanking">
            {wishRanking && wishRanking.map(e=>e.wishListContent.map(el=>
            <>
            <div onClick={()=>onClick(el.musicalId)}>
            <img className="musical_img" alt="poster" src={el.musicalPoster} />
            <p className="musical_name">{el.musicalName}</p>
            <p className="theater_name">{el.theaterName}</p>
            <p className="musical_date">{el.musicalStart} ~ {el.musicalEnd}</p>
            </div>
            </>
            ))}
            </div>

            <br/><br/>
            <div className="colorBlock">
            <div className="musical_title"><p className="musical_title_front">별점이 가장 높은&nbsp;</p><p className="musical_title_back">뮤지컬 TOP3</p></div>
            <div className="starRanking">
            {starRanking && starRanking.map(e=>e.rankingListContent.map(el=>
            <>
            <div onClick={()=>onClick(el.musicalId)}>
            <img className="musical_img" alt="poster" src={el.musical_poster} />
            <p className="musical_name">{el.musical_name}</p>
            <p className="theater_name">{el.theater_name}</p>
            <p className="musical_date">{el.musical_start} ~ {el.musical_end}</p>
            </div>
            </>
            ))}
            </div>
            </div>

            <br/><br/>
            <p className="musical_title"><p className="musical_title_front">예매 시작&nbsp;</p><p className="musical_title_back">뮤지컬 TOP3</p></p>
            <div className="openedMusical">
            {openedMusical && openedMusical.map(e => (
                <div onClick={() => onClick(e.musicalId) }>
                <img className="musical_img" alt="poster" src={e.musicalPoster}/>
                <p className="musical_name">{e.musicalName}</p>
                <p className="theater_name">{e.theaterName}</p>
                <p className="musical_date">{e.musicalStart} ~ {e.musicalEnd}</p>
                </div>
            ))}
            </div>

            <br/><br/> 
            <div className="colorBlock">
            <div className="musical_title"><p className="musical_title_front">예매 예정&nbsp;</p><p className="musical_title_back">뮤지컬 TOP3</p></div>
            <div className="openBeforeMusical"> 
            {openBeforeMusical && openBeforeMusical.map(e => (
                <div onClick={() => onClick(e.musicalId) }>           
                <img className="musical_img" alt="poster" src={e.musicalPoster} />
                <p className="musical_name">{e.musicalName}</p>
                <p className="theater_name">{e.theaterName}</p>
                <p className="musical_date">{e.musicalStart} ~ {e.musicalEnd}</p>
                </div>
            ))}
            </div>
            </div>

        </MusicalContainer>
        
        </>
    );
}  

export default Home;