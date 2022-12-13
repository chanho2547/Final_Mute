import { useEffect, useState } from "react";
import MuteApi from "../api/MuteApi";
import styled from "styled-components";
import { useNavigate } from "react-router-dom";

// 임시로 뮤지컬 목록 불러오는 페이지

// --------- 스타일 컴포넌트 -----------
const Container = styled.div`

  display: flex;
  flex-wrap: wrap;

`;

const ListBlock = styled.div`

  width: 200px;

  img {
    width: 100px;
    cursor: pointer;
  }

  .title {
    font-weight: 600;
  }

`;


const MusicalListTmp = (props) => {

  const [musicalList,setMusicalList] = useState();
  const [thisMusical,setThisMusical] = useState();
  const navigate = useNavigate();

  useEffect(() => {
      const MusicalData = async () => {
          try {
              let response = await MuteApi.musicalList(); // 뮤지컬 불러오기
              setMusicalList(response.data);
              
          } catch (e) {  
              console.log(e + "실패");
          }
         
      };
      MusicalData(); // 첫 페이지 로딩시 목록을 다 끌어온다

  }, []);

  // 포스터 클릭 시 해당 뮤지컬 id값으로 상세페이지로 넘겨주기
  const OnClickPoster = (muId) => {
    console.log("클릭한 뮤지컬 ID값 : " + muId)
    window.localStorage.setItem("musicalId", muId);
    navigate('/MusicalDetail');
  }

  return(
      <Container>
     
      {musicalList && musicalList.map(e => (        
          <ListBlock onClick={() => OnClickPoster(e.musicalId) }>
          <img alt="poster" src={e.musicalPoster}/>
          <p className="title">{e.musicalName}</p>
          <p className="theater">{e.theaterName}</p>
          
        
          </ListBlock>
      ))}
      
      </Container>
  );
}

export default MusicalListTmp;