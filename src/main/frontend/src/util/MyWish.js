import { useEffect, useState } from "react";
import MuteApi from "../api/MuteApi";
// 마이페이지 wishlist 컴포넌트

const MyWish = () => {
    const [userWish, setUserWish] = useState("");
    let userNum =  window.localStorage.getItem("whoLoginUserNum");
    useEffect(() => {
        const wishInfo = async () => {
            try {
                console.log("마이페이지 wishList : " + userNum);
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
                    <div onClick={() => OnClickWishList(e.userNum)}>
                     <p>{e.musicalName}</p>
                     <p>{e.musicalTicketStart}</p>
                     <p>{e.alarm}</p>   
                    </div>
                </div>
            ))}
        </div>
    )
}

export default MyWish;