import { useEffect, useState } from "react";
import MuteApi from "../api/MuteApi";
import styled from "styled-components";
import { useNavigate } from "react-router-dom";


// 선택된 뮤지컬 상세페이지
const MusicalDetail = (props) => {

  const [musicalDetail,setMusicalDetail] = useState();

  useEffect(() => {
      const MusicalData = async () => {
          try {
              let response = await MuteApi.musicalDetail(); // 뮤지컬 아이디를 통해 불러오기
              setMusicalDetail(response.data);
              
          } catch (e) {  
              console.log(e + "실패");
          }
         
      };
      MusicalData(); // 첫 페이지 로딩시 목록을 다 끌어온다

  });

  const OnClickPoster = (e) => {

  }

  return(
      <>
     
      {musicalDetail && musicalDetail.map(e => (        
          <div onClick={() => OnClickPoster(e.musicalId) }>
          <img alt="poster" src={e.musicalPoster}/>
          
          <p className="title">{e.musicalName}</p>
          
        
          </div>
      ))}
      
      </>
  );
}

export default MusicalDetail;