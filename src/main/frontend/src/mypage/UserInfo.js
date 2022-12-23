import {useEffect, useState} from "react";
import MuteApi from "../api/MuteApi";
import {useNavigate} from "react-router-dom";

const UserInfo = () => {
    // const navigate = useNavigate();
    // const userId = window.localStorage.getItem("whoLogin");
    //
    // const [userInfo, setUserInfo] = useState("");
    // // 회원정보 불러오기
    // useEffect(() => {
    //     const userData = async(userId) => {
    //         try {
    //             const response = await MuteApi.userInfoLoad(userId);
    //             setUserInfo(response.data);
    //         } catch (e) {
    //             console.log(e + " 예외발생")
    //         }
    //     };
    //     userData();
    // }, [])
    //
    // const OnClickUser = (e) => {
    // };
    // const navigate = useNavigate();
    // const userId = window.localStorage.getItem("whoLogin");
    // console.log(userId);
    //
    //
    // const [userImg, setUserImg] = useState("");
    // const [userUrl, setUserUrl] = useState({ backgroundImage: "url(https://mutemute.s3.ap-northeast-2.amazonaws.com/profileimg.png" + userImg + ")" });
    // const [userName, setUserName] = useState("");
    // const [userPwd, setUserPwd] = useState("");
    // const [userPhone, setUserPhone] = useState("");
    // const [userMail, setUserMail] = useState("");
    // //const [userAddr, setUserAddr] = useState("");
    //
    // // 변경한 값
    // const [changeName, setChangeName] = useState("");
    // const [changePwd, setChangePwd] = useState("");
    // const [changePhone, setChangePhone] = useState("");
    // const [changeMail, setChangeMail] = useState("");
    // //const [changeAddr, setChangeAddr] = useState("");
    //
    // useEffect(() => {
    //     const userInfoLoad = async() => {
    //         try {
    //             const response = await MuteApi.userInfoLoad(userId);
    //             setChangeName(response.data[0]);
    //             setChangePwd(response.data[1]);
    //             setChangePhone(response.data[3]);
    //             setChangeMail(response.data[2]);
    //             //setChangeAddr(response.data[4]);
    //
    //             setUserName(response.data[0])
    //             setUserPwd(response.data[1]);
    //             setUserPhone(response.data[3]);
    //             setUserMail(response.data[2]);
    //             //setUserAddr(response.data[4]);
    //             setUserImg(response.data[5]);
    //             setUserUrl({ backgroundImage: "url(https://musicalmate.s3.ap-northeast-2.amazonaws.com/profileimg.png" + response.data[5] + ")"});
    //         } catch (e) {
    //         }
    //     }
    //     userInfoLoad();
    // }, [userId]);

    return(
        <></>
        // <div className="userInfo_container">
        //     {userInfo && userInfo.map(e =>
        //         <div className="userInfo">
        //             <div>{userId}님</div>
        //             <div onClick={()=>OnClickUser(e.userId)}>
        //             <p>이름: {e.name}</p>
        //             <p>비밀번호: {e.pwd}</p>
        //             <p>핸드폰: {e.phone}</p>
        //             <p>Mail: {e.mail}</p>
        //             </div>
        //         </div>
        //     )}
        // </div>
    )
}
export default UserInfo;