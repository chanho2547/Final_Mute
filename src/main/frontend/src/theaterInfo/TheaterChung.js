import { useNavigate  } from "react-router-dom";
import { useState } from "react";
import FirstFloorChar from "./charLotte/FirstFloorChar";
import SecondFloorChar from "./charLotte/SecondFloorChar";
import FirstFloorChung from "./chungmuArt/FirstFloorChung";
import SecondFloorChung from "./chungmuArt/SecondFloorChung";
import ThirdFloorChung from "./chungmuArt/ThirdFloorChung";


const TheaterChung = () => {
    const [floor,setFloor] = useState(1);

    const onClickFirstFloor = () => {
        setFloor(1);
    }
    const onClickSecondFloor = () => {
        setFloor(2);
    }
    const onClickThirdFloor = () => {
        setFloor(3);
    }


    return(
        <>
            <button onClick={onClickFirstFloor}>1층</button>
            <button onClick={onClickSecondFloor}>2층</button>
            <button onClick={onClickThirdFloor}>3층</button>

            {(floor === 1) ? <FirstFloorChung /> : null}
            {(floor === 2) ? <SecondFloorChung /> : null}
            {(floor === 3) ? <ThirdFloorChung /> : null}

        </>
    );
}

export default TheaterChung;