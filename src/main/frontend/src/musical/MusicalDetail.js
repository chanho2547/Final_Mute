import { useEffect, useState } from "react";
import MuteApi from "../api/MuteApi";
import styled from "styled-components";
import { useNavigate } from "react-router-dom";


// 선택된 뮤지컬 상세페이지
const MusicalDetail = (props) => {
  const [wish, setWish] = useState(false); // 찜하기 등록 취소
  const [musicalDetail,setMusicalDetail] = useState();
  const musicalId = window.localStorage.getItem("musicalId"); // 선택한 뮤지컬id
  const userNum = window.localStorage.getItem("userNum"); //
  console.log(musicalId);

  useEffect(() => {
      const MusicalData = async () => {
          try {
              let response = await MuteApi.musicalDetail(musicalId); // 받은 뮤지컬id 서버로 넘겨주기
              setMusicalDetail(response.data);
              
          } catch (e) {  
              console.log(e + "실패");
          }
         
      };
      MusicalData();
  }, []);

  
  const OnClickPoster = (e) => {
  }

  const OnClickWish = async() => {

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
          <div on></div>
      
      </>
  );
}

export default MusicalDetail;