import { useEffect, useState } from "react";
import MuteApi from "../api/MuteApi";
import styled from "styled-components";
import { useNavigate } from "react-router-dom";


// 선택된 뮤지컬 상세페이지
const MusicalDetail = (props) => {

  const [musicalDetail,setMusicalDetail] = useState();
  const musicalId = window.localStorage.getItem("musicalId");

  useEffect(() => {
      const MusicalData = async () => {
          try {
              let response = await MuteApi.musicalDetail(musicalId); // 뮤지컬 아이디를 통해 불러오기
              setMusicalDetail(response.data);
              
          } catch (e) {  
              console.log(e + "실패");
          }
         
      };
      MusicalData();

  }, []);

  const OnClickPoster = (e) => {

  }

  return(
      <>
     
      {musicalDetail && musicalDetail.map(e => (        
          <div onClick={() => OnClickPoster(e.musicalId) }>
          <img alt="poster" src={e.musicalPoster}/>
          <p className="title">{e.musicalName}</p>
          <p className="theaterName">{e.theaterName}</p>
          <p className="startDate">{e.musicalStart}</p>
          <p className="endDate">{e.musicalEnd}</p>
          <p className="status">{e.musicalStatus}</p>
          <p className="casting">{e.musicalCast}</p>
          <p className="ageLimit">{e.musicalAge}</p>
          <p className="price">{e.musicalPrice}</p>
          <p className="plan">{e.musicalPlan}</p>
          </div>
      ))}
      
      </>
  );
}

export default MusicalDetail;