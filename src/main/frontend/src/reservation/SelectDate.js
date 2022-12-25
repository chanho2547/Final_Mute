import React, { useEffect, useRef, useState } from 'react';
// import getYear from "date-fns/getYear";
// import getMonth from "date-fns/getMonth";
import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css'; 
import moment, { now } from 'moment';
import styled from 'styled-components';
import MuteApi from '../api/MuteApi';
import CalendarForRes from './CalendarForRes';



const Container = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-evenly;
  padding-left: 150px;
  padding-right: 150px;

.Title{
  /* color : #810000; */
  font-weight: 700;
  font-size: 20px;
}
.Info{
  font-size: 20px;
}
.time{
  width: fit-content;
  padding: 10px;
  border: 1px solid rgb(230,41,57);
  color:rgb(230,41,57);
  border-radius: 10px;
  font-size: 18px;
  font-weight: 900;
  margin-top: 10px;

}
.timeContainer {
  display: flex;
  flex-direction: row;
  margin-left: 20px;
}

`;

const DateContainer = styled.div`
  border: 2px solid #810000;
  border-radius: 10px;
`;

const InfoContainer = styled.div`
  display: flex;
  flex-direction: column;
  //align-items: center;
  justify-content: space-between;
  /* border: 1px solid blue; */
  padding-top: 10px;
`;

const CastContainer = styled.div`
  margin-left: 20px;
`;

const TimeInfo = styled.div`

`;

const BtnContainer = styled.div`

display: flex;
flex-direction: row;
justify-content: space-evenly;

.toSeatBtn {
  width: 140px;
  height: 40px;
  margin: 10px;
  color : white;
  font-weight: 700;
  opacity: 1;
  background-color: #810000; 
  border-radius: 5px;
  border: none;
  &:hover {
      border: none;
      opacity: 0.5;      
  }  
}
.toBackBtn{
  width: 140px;
  height: 40px;
  margin: 10px;
  color : white;
  font-weight: 700;
  opacity: 1;
  background-color: #909090; 
  border-radius: 5px;
  border: none;
  &:hover {
      border: none;
      opacity: 0.5;      
  } 
}
  
`;




const SelectDate = (props) => {
    const [value, onChange] = useState(new Date());
    //const [musicalDetail,setMusicalDetail] = useState();
    const musicalDetail = useRef();
    const [castInfo,setCastInfo] = useState("정보 없음");
    const [seeDate, setSeeDate] = useState();

    // const { data } = useQuery(
    //   ["logDate", month],
    //   async () => {
    //     const result = await axios.get(
    //       `/api/healthLogs?health_log_type=DIET`
    //     );
    //     return result.data;
    //   },
    //   {
    //     onSuccess: (data: any) => {
    //       setMark(data);
    //      // ["2022-02-02", "2022-02-02", "2022-02-10"] 형태로 가져옴
    //     },
    //   }
    // );

    const onClickNext = () => {
      console.log("SelectDate.js Date : " + seeDate);
      props.addSeeDate(seeDate);
      props.addTicketDate(moment().format("YYYY-MM-DD hh:mm:ss"))
      props.propFunction();
    }
    useEffect(()=>{
      const MusicalCast = async() => {
        try{
          console.log("props.musicalId : " + props.musicalId);
          const response = await MuteApi.musicalDetail(props.musicalId);
          //console.log("response.data" + response.data);
          // setMusicalDetail(response.data);
          musicalDetail.current = response.data;
          //
          console.log("musicalDetail.current 2234 : " + musicalDetail.current);
          console.log("musicalDetail.current.map(e=> e) 2234444 : " + musicalDetail.current.map(e=> e));
          //console.log("musicalDetail.current.musicalCast"+musicalDetail.current.get(0).musicalCast);
          // console.log("response.data.map(e=>e.musicalCast)" + response.data.map(e=>e.musicalCast));
          console.log("response.data.map(k=>k).musicalCast) : " + response.data.map(k=>k.musicalCast));

          console.log("response.data.map(k=>k).musicalCast) type : " + typeof response.data.map(k=>k.musicalCast));
          setCastInfo(response.data.map(k=>k.musicalCast));
          console.log("castInfo : " + castInfo);
          
         

        } catch(e) {
          console.log("오류 : " + e);
        } 
      }
      MusicalCast();
    },[])
    

    return(
      <>
        <Container>
        <DateContainer>
        <CalendarForRes setSeeDate={setSeeDate} />
        </DateContainer>


        <InfoContainer>

        <TimeInfo>
          <p className='Title'>회차</p>
          <div className='timeContainer'>
          <div className='time'>1회차 19:00</div>
          </div>
        </TimeInfo>
        
        
        <CastContainer>
         
            
              {/* <p className='Title'>출연진</p> */}
              <p className='Info'>{castInfo}</p> 
            
          
        </CastContainer>
     
        <BtnContainer>
        <button className='toBackBtn' onClick={onClickNext}>이전 단계</button>
        <button className='toSeatBtn' onClick={onClickNext}>좌석 선택</button>
        </BtnContainer>

        </InfoContainer>
        </Container>
        
      </>
    );
}

export default SelectDate;

