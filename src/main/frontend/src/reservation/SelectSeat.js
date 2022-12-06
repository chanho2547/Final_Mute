import { Link } from "react-router-dom";
import FirstFloorChar from "../theaterInfo/charLotte/FirstFloorChar";
import FirstFloorChung from "../theaterInfo/chungmuArt/FirstFloorChung";

const SelectSeat = () => {
    return(
        <>
            {/* <h1>좌석 선택 페이지 입니다</h1> */}
            {/* 나중에 로컬스토리지로 샤롯데랑 충무 if로 나눠서 불러오기 */}
            {/* <Link to = "/"> Home으로 돌아가기</Link> <br></br>
            <Link to = "/FirstFloorChung">충무 1층보기</Link><br></br>
            <Link to = "/SecondFloorChung">충무 2층보기</Link><br></br>
            <Link to = "/ThirdFloorChung">충무 3층보기</Link><br></br> */}
            <FirstFloorChung />

        </>
    );
}

export default SelectSeat;