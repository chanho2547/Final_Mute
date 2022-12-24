import { useEffect, useState } from "react";
import styled from "styled-components";
import MuteApi from "../api/MuteApi";
// 마이페이지 wishlist 컴포넌트
const UserMusicalListContainer = styled.div`
width:70%;
.userWishList{
    display: flex;
    margin-bottom: 70px;

    .userWishList_name{
        color: #810000;
        margin-left: 30px;
        font-size: 30px;
        font-weight: 700;

    .userWishList_date{
        display:flex;
    }

    .userWishList_ticket{
        display:flex;

    }

    .userWishList_date{
        display:flex;
    }

    .userWishList_alarrm{
        display:flex;
    }

    }
}
    `;

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
        <UserMusicalListContainer>
            {userWish && userWish.map(e => (
                    <div onClick={() => OnClickWishList(e.userNum)}>
                    <div className="userWishList">
                     <img alt="userWishListPoster" src={e.musicalPoster} size width={220} height={300}/>
                     <p className="userWishList_name">{e.musicalName}</p>
                     <p className="userWishList_ticket">공연 예매일 {e.musicalTicketStart}</p>
                     <p className="userWishList_date">공연 기간 {e.musicalStart} ~ {e.musicalEnd}</p>
                     <p className="userWishList_alarrm">알림 상태 {e.alarm}</p> 
                     
                    </div>
                </div>
            ))}
        </UserMusicalListContainer>
    )
}

export default MyWish;