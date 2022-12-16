import React, { useState } from 'react';
import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css'; 
import moment from 'moment';
import styled from 'styled-components';


const Container = styled.div`
  
`;




const SelectDate = (props) => {
    const [value, onChange] = useState(new Date());
    const onClickNext = () => {
      console.log("SelectDate.js Date : " + moment(value).format("YYYY년 MM월 DD일 19:00"));
      props.addSeeDate(moment(value).format("YYYY-MM-DD 19:00:00"));
      props.propFunction();
    }
    return(
        <Container>
        <Calendar onChange={onChange} value={value} />
        <div className="text-gray-500 mt-4">
          {moment(value).format("YYYY년 MM월 DD일 19:00")} 
        </div>
        <button onClick={onClickNext}>선택완료</button>
        </Container>
    );
}

export default SelectDate;

