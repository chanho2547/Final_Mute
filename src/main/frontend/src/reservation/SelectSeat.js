import { Link } from "react-router-dom";
import { useEffect,useState } from "react";
import FirstFloorChar from "../theaterInfo/charLotte/FirstFloorChar";
import FirstFloorChung from "../theaterInfo/chungmuArt/FirstFloorChung";

const SelectSeat = () => {

    //const [text,setText] = useState('');
    const highFunction = (text) => {
        //setText(text);
        //console.log(document.getElementById("selected").innerText);
        document.getElementById("selected").innerText = text;
      }
    

    return(
        <>
            
            <h2>(SelectedSeats Here)<h2 id="selected">(선택한 좌석이 여기에 표시됩니다)</h2></h2>
            
            <FirstFloorChar propFunction={highFunction}/>

        </>
    );
}

export default SelectSeat;



