import { Link } from "react-router-dom";
import { useEffect,useRef,useState } from "react";
import FirstFloorChar from "../theaterInfo/charLotte/FirstFloorChar";
import FirstFloorChung from "../theaterInfo/chungmuArt/FirstFloorChung";

const SelectSeat = (props) => {

    //const [text,setText] = useState();
    const textRef = useRef();
    const highFunction = (text) => {
        document.getElementById("selected").innerText = text;
        textRef.current = text;
    }
    const onClickNext = () => {
        console.log(textRef.current);
        props.addSeat(textRef.current);
        props.propFunction();
    }
    

    return(
        <>
            
            <h2 id="selected">(선택한 좌석이 여기에 표시됩니다)</h2>
            <button onClick={()=>onClickNext()}>선택완료</button>
            
            {/* 모든 층수, 극장 다 만들어놓아야함 */}
            <FirstFloorChar propFunction={highFunction}/>

        </>
    );
}

export default SelectSeat;



