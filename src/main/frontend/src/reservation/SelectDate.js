import React, { useEffect, useState } from 'react';
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
`;




const SelectDate = (props) => {
    const [value, onChange] = useState(new Date());
    const [musicalDetail,setMusicalDetail] = useState();
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
          console.log("response.data" + response.data);
          setMusicalDetail(response.data);
          console.log("musicalDetail : " + musicalDetail);

        } catch(e) {

        } 
      }
      MusicalCast();
    },[])

    return(
      <>
        {/* <Container>
        <Calendar onChange={onChange} value={value} />
        <div className="text-gray-500 mt-4">
          {moment(value).format("YYYY년 MM월 DD일 19:00")} 
        </div>
        
        
        </Container> */}
        
        <CalendarForRes setSeeDate={setSeeDate}/>
        {musicalDetail&&musicalDetail.map(e=>{
          <h1>출연진 : {e.MusicalCast}</h1>
        })}

        <button onClick={onClickNext}>선택완료</button>

        
        
      </>
    );
}

export default SelectDate;

