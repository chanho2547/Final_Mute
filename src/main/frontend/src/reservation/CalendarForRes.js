import React from 'react';
import { useState } from 'react';

import { format } from 'date-fns';
import { DayPicker } from 'react-day-picker';
import 'react-day-picker/dist/style.css';



export default function CalendarForRes(props) {
    const [selected, setSelected] = useState();
    
  
    let footer = <p>Please pick a day.</p>;
    if (selected) {
      //footer = <p>You picked {format(selected, 'yyyy년 MM월 dd일 19:00:00')}</p>;
      props.setSeeDate(format(selected, 'yyyy-MM-dd 19:00:00'));
    }
    return (
      <DayPicker
        mode="single"
        selected={selected}
        onSelect={setSelected}
        // footer={footer}
      />
    );
  }