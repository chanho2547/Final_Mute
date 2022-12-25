import { useEffect, useState } from "react";
import styled from "styled-components";
import MuteApi from "../api/MuteApi";
// 마이페이지 wishlist 컴포넌트
const UserMusicalListContainer = styled.div`
.userWishList{
    display: flex;
    .poster{
        margin-left: 250px;
        margin-bottom: 100px;
        width: 170px;
        height: 230px;
    }
    .title {
        font-size: 20px;
        font-weight: 700; 
        color: #810000;    
        text-align: left;
        margin-top: 20px;
        margin-left: 100px;
    }
    table {
        margin-left: 100px;
        width: 550px;
        height: 160px;
        float: left;
        font-weight: 500;
        .text{
            width: 100px;
        }
        td {
            text-align:left; 
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
                     <img className="poster" alt="poster" src={e.musicalPoster}/>
                     <div className="wishInfo">
                        <div className="title">{e.musicalName}</div>
                            <table>
                                <tr>
                                    <td className="text">장소&nbsp;</td><td>{e.theaterName}</td>
                                </tr>
                                <tr>
                                    <td className="text">공연기간</td><td>{e.musicalStart} ~ {e.musicalEnd}</td>
                                </tr>
                                <tr>
                                    <td className="text">공연상태</td><td>{e.musicalStatus}</td>
                                </tr>
                            </table>
                    </div>
                    </div>
                </div>
            ))}
        </UserMusicalListContainer>
    )
}

export default MyWish;
