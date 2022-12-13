import { useNavigate  } from "react-router-dom";
import { useState } from "react";
import FirstFloorChar from "./charLotte/FirstFloorChar";
import SecondFloorChar from "./charLotte/SecondFloorChar";


const TheaterChar = () => {
    let [floor,setFloor] = useState(1);

    const onClickFirstFloor = () => {
        setFloor(1);
    }
    const onClickSecondFloor = () => {
        setFloor(2);
    }


    return(
        <>
            <button onClick={onClickFirstFloor}>1층</button>
            <button onClick={onClickSecondFloor}>2층</button>

            {(floor === 1) ? <FirstFloorChar /> : null}
            {(floor === 2) ? <SecondFloorChar /> : null}
   
        </>
    );
}

export default TheaterChar;