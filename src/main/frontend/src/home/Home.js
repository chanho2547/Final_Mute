import FirstFloor from "../theaterInfo/charLotte/FirstFloorChar";
import { Link } from "react-router-dom";


const Home = () => {
    return(
        <>
        <Link to = "/FirstFloorChar"> 샤롯데 좌석 정보</Link> <br></br>
        <Link to = "/FirstFloorChung"> 충무아트 좌석 정보</Link> <br></br>
        <Link to = "/Reservation"> 예매 임시 페이지 </Link> <br></br>
        <Link to = "/Review"> 후기 작성 임시 페이지 </Link> <br></br>
        <Link to = "SeatView">좌석별 후기 페이지</Link>
        </>
    );
}  

export default Home;