import { useEffect, useState } from "react";
import styled from "styled-components";
import MuteApi from "../api/MuteApi";
// 마이페이지 wishlist 컴포넌트
const UserMusicalListContainer = styled.div`
.userWishList{
    display: flex;
    margin-bottom: 70px;
    .poster{
        width: 150px;
		height: 300px;

    }
    .musicalName{
        color: #810000;
        margin-left: 30px;
        font-size: 20px;
        font-weight: 700;
    }
    table {
		margin-left: 50px;
		height: 340px;
		width: 600px;
		td {
			vertical-align: top;
			padding: 5px;
		}
        tr {
            font-weight: 600; 
        }

	}
	.title {
		width: 150px;
		padding-right: 25px;
		color: #810000;
		font-weight: 500;
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
                    <div>
                     <img alt="poster" src={e.musicalPoster}/>
                     {/* </div>
                     <p className="musicalName">{e.musicalName}</p>
                     <div> */}
                        <table>
                            <th>{e.musicalName}</th>
                            <tr>
								<td className="text">장소</td><td>{e.theaterName}</td>
							</tr>
							<tr>
								<td className="text">공연기간</td><td>{e.musicalStart} ~ {e.musicalEnd}</td>
							</tr>
							<tr>
								<td className="text">공연상태</td><td>{e.musicalStatus}</td>
                            </tr>
                            </table>
                     {/* <p className="userWishList_theaterName">장소 {e.theaterName}</p>
                     <p className="userWishList_date">공연기간 {e.musicalStart} ~ {e.musicalEnd}</p>
                     <p className="userWishList_alarrm">공연상태 {e.musicalStatus}</p>    */}
                     </div>
                    </div>
                </div>
            ))}
        </UserMusicalListContainer>
    )
}

export default MyWish;