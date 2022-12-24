
import { useEffect,useState } from "react";
import MuteApi from "../api/MuteApi";
import styled from "styled-components";
import { useNavigate } from "react-router-dom";
import Search from '../images/search.png';
import MusicalSearchList from "../musical/MusicalSearchList";
import MusicalSearchRes from "./MusicalSearchRes";

const Container = styled.div`



    margin: 20px auto;
    flex-wrap: wrap;

`;


const MusicalContainer = styled.div`

flex-wrap: wrap;

.title {
    font-weight: 700;
    color: #810000;
    font-size: 20px;
}
.theaterName{

}
.period{

}

img{
    width: 300px;
}
:hover{
    opacity: 0.5;
    cursor: pointer;
}
`;

const SearchContainer = styled.div`
  margin: auto;
  border: 4px solid #810000;
  display: flex;
  width: 580px;
  height: 60px;
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


const SelectMusical = (props) => {

    const [musicalInfo,setMusicalInfo] = useState();
    const [openedMusical, setOpenedMusical] = useState();
    const [openBeforeMusical, setBeforeMusical] = useState();
    const [musicalList,setMusicalList] = useState();
    const [starRanking, setStarRanking] = useState();
    const [musicalSearchList,setMusicalSearchList] = useState(false);
    let navigate = useNavigate();

    useEffect(() => {
        const MusicalData = async () => {
            window.localStorage.setItem("payStatus","no");
            try {
                let response = await MuteApi.musicalDBList(); // 뮤지컬 리스트 불러오기
                setMusicalInfo(response.data);
                
            } catch (e) {  
                console.log(e + "실패 입니다");
            }
           
        };
        MusicalData(); // 첫 페이지 로딩시 목록을 다 끌어온다

        // const RankData = async () => {
        //     try{
        //         let response = await MuteApi.musicalList(); // 뮤지컬리스트호출 (서버에서 호출 후 바로 db에 저장)
        //         let response1 = await MuteApi.openedMusical();
        //         let response2 = await MuteApi.openBeforeMusical();
        //         let response3 = await MuteApi.musicalRanking();
        //         setMusicalList(response.data);
        //         setOpenedMusical(response1.data);
        //         setBeforeMusical(response2.data);
        //         setStarRanking(response3.data);

        //         console.log("꺼내야하는 데이터" + response3.data.list.get(0)); // [Object object]

        //     } catch (e) {
        //         console.log(e + "뮤지컬 데이터 불러오기 실패");
        //     }
        // };
        // RankData();

    });

    
    const OnClickPoster = (e) => {
        props.addMusicalName(e.musicalName);
        props.addMusicalId(e.musicalId);
        props.propFunction(); // 상위 컴포넌트의 함수를 불러 count ++
    }

    const onClick = (musicalId) => {
        window.localStorage.setItem("musicalId", musicalId);
        navigate('/MusicalDetail');

    }

    const onKeyPress = (e) => {
        if(e.key === 'Enter'){
            onClickInput();
        }
    }

    const [inputMusical, SetInputMusical] = useState("");

    const onChangeInput = (e) => {
        SetInputMusical(e.target.value)
      };
  
      const onClickInput = async() => {
        window.localStorage.setItem("inputMusical", inputMusical);
        setMusicalSearchList(true);
        //navigate("/MusicalSearchList")
      }

    return(
        <Container>

            <SearchContainer>
            <input className="search_input" onChange={onChangeInput} onKeyDown={onKeyPress} placeholder="찾고 싶은 뮤지컬을 검색하세요!"></input>
            <button className="search_button" onClick={onClickInput} ><img src={Search}/></button>
            </SearchContainer>

            {musicalSearchList ? 
            <MusicalSearchRes propFunction={props.propFunction} addMusicalId={props.addMusicalId} addMusicalName={props.addMusicalName}/> :
             musicalInfo && musicalInfo.map(e => (        
                <MusicalContainer onClick={() => OnClickPoster(e) }>
                <img alt="poster" src={e.musicalPoster}/>
                <p className="title">{e.musicalName}</p>
                <p className="theaterName">{e.theaterName}</p>
                <p className="period">{e.musicalStart}~{e.musicalEnd}</p>
              
                </MusicalContainer>)
                
            )}

        </Container>
    );
}

export default SelectMusical;