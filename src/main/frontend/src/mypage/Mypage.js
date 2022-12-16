import React, {useState} from "react";
import Modal from "../util/Modal";
import MuteApi from "../api/MuteApi";
import {useNavigate} from "react-router-dom";


const MyPage = () => {
    const navigate = useNavigate();
    // 로그인한 사람 아이디 가져오기
    let localId = window.localStorage.getItem("localId");
    console.log(localId);
    const [userImg, setUserImg] = useState(""); // aws나 파이어베이스 이미지 등록한 후 주소 저장 필요함
    const [userName, setUserName] = useState("");
    const [userPwd, setUserPwd] = useState("");
    const [userPhone, setUserPhone] = useState("");
    const [userMail, setUserMail] = useState("");
    const [userAddr, setUserAddr] = useState("");

    const [changeName, setChangeName] = useState("");
    const [ChangePwd, setChangePwd] = useState("");
    const [ChangePhone, setChangePhone] = useState("");
    const [ChangeMail, setChangeMail] = useState("");
    const [ChangeAddr, setChangeAddr] = useState("");

    const [nameMsg, setNameMsg] = useState("");
    const [pwdMsg, setPwdMsg] = useState("");
    const [phoneMsg, setPhoneMsg] = useState("");
    const [mailMsg, setMailMsg] = useState("");
    const [addrMsg, setAddrMsg] = useState("");

    const [isName, setIsName] = useState("");
    const [isPwd, setIsPwd] = useState("");
    const [isPhone, setIsPhone] = useState("");
    const [isMail, setIsMail] = useState("");
    const [isAddr, setIsAddr] = useState("");

    // useEffect(() => {
    //     const userInfo = async() => {
    //         try {
    //             const response = await MuteApi.userInfo(userId);
    //             console.log(response.data);
    //             setChangeName(response.data[2]);
    //             setChangePwd(response.data[1]);
    //             setChangePhone(response.data[3]);
    //             setChangeMail(response.data[4]);
    //             setChangeAddr(response.data[5]);
    //
    //             setUserName(response.data[2])
    //             setUserPwd(response.data[1]);
    //             setUserPhone(response.data[3]);
    //             setUserMail(response.data[4]);
    //             setUserAddr(response.data[5]);
    //             setUserImg(response.data[0]);
    //         } catch (e) {
    //             console.log(e);
    //         }
    //     }
    //     userInfo();
    // }, [userId]);
    //
    // // 설정 저장
    // const onClickSave = async() => {
    //     await MuteApi.userInfoSave(userId, userName, userPwd, userPhone, userMail, userAddr, userImg);
    //     navigate('/Home');
    // }

    //회원탈퇴 팝업
    const [comment, setCommnet] = useState("");
    const [modalOpen, setModalOpen] = useState(false);

    const closeModal = () => { // 탈퇴 아니오 눌렀을 때
        setModalOpen(false);
    };
    const onClickMemDelete = () => {
    setModalOpen(true);
    setCommnet("탈퇴 하시겠습니까?");
    }

    return(
        <>
            <div>
                <button onClick={onClickMemDelete}>회원탈퇴</button>
                <Modal open={modalOpen} close={closeModal} header="탈퇴">{comment}</Modal>
            </div>
        </>
    )
}

export default MyPage;