import { useEffect, useState } from "react";
import MuteApi from "../api/MuteApi";
// 마이페이지 wishlist 컴포넌트

const MyWish = () => {
    const [userWish, setUserWish] = useState("");
    let userNum =  window.localStorage.getItem("whoLoginUserNum");
    useEffect(() => {
        const wishInfo = async () => {
            try {
                console.log("마이페이지 wishList userNum: " + userNum);
                let response = await MuteApi.userWish(userNum);
                setUserWish(response.data);
            } catch(e) {
                console.log(e + "마이페이지 wishList 실패")
            }
        }
        wishInfo();
    }, []);

    const OnClickWishList = (e) => {
    };

    return(
        <div className="userWish_container">
            {userWish && userWish.map(e => (
                <div className="userWish">
                    <p>마이페이지 찜 List</p>
                    <div onClick={() => OnClickWishList(e.userNum)}>
                     <img alt="poster" src={e.musicalPoster} />
                     <p>공연이름 : {e.musicalName}</p>
                     <p>공연 예매일 : {e.musicalTicketStart}</p>
                     <p>공연일자 : {e.musicalStart} ~ {e.musicalEnd}</p>
                     <p>알림 상태 : {e.alarm}</p> 
                     
                    </div>
                </div>
            ))}
        </div>
    )
}

export default MyWish;