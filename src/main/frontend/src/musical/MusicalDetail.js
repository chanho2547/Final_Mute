import { useEffect, useState } from "react";
import MuteApi from "../api/MuteApi";
import styled from "styled-components";

// 임시로 뮤지컬 목록 불러오는 페이지
const MusicalDetail = (props) => {

  const [musicalList,setMusicalList] = useState();

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

  const OnClickPoster = (e) => {
      
  }

  return(
      <>
     
      {musicalList && musicalList.map(e => (        
          <div onClick={() => OnClickPoster(e.prfnm) }>
          <img alt="poster" src={e.poster} size="150px"/>
          <p className="title">{e.prfnm}</p>
          
        
          </div>
      ))}
      
      </>
  );
}

export default MusicalDetail;