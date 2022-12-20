import {useNavigate} from "react-router-dom";
import {useEffect, useState} from "react";
import MuteApi from "../api/MuteApi";
import React from "react";
import Post from '../login/Post';
import Modal from "../util/Modal";

// 회원정보 수정 페이지
const Edit = () => {
    const navigate = useNavigate();
    const userId = window.localStorage.getItem("whoLogin");
    console.log(userId);

    const [userImg, setUserImg] = useState(""); // aws나 파이어베이스 이미지 등록한 후 주소 저장 필요함
    // const [url, setUrl] = userState("");
    const [userName, setUserName] = useState("");
    const [userPwd, setUserPwd] = useState("");
    const [userPhone, setUserPhone] = useState("");
    const [userMail, setUserMail] = useState("");
    const [userAddr, setUserAddr] = useState("");

    const [changeName, setChangeName] = useState("");
    const [changePwd, setChangePwd] = useState("");
    const [changePhone, setChangePhone] = useState("");
    const [changeMail, setChangeMail] = useState("");
    const [changeAddr, setChangeAddr] = useState("");

    const [nameMsg, setNameMsg] = useState("");
    const [pwdMsg, setPwdMsg] = useState("");
    const [phoneMsg, setPhoneMsg] = useState("");
    const [mailMsg, setMailMsg] = useState("");
    const [addrMsg, setAddrMsg] = useState("");

    const [isName, setIsName] = useState(true);
    const [isPwd, setIsPwd] = useState(true);
    const [isPhone, setIsPhone] = useState(true);
    const [isMail, setIsMail] = useState(true);
    const [isAddr, setIsAddr] = useState(true);

    const [comment, setCommnet] = useState("");
    const [modalOpen, setModalOpen] = useState(false);

    const closeModal = () => { // 탈퇴 아니오 눌렀을 때
        setModalOpen(false);
    };

    // 회원 탈퇴
    const onClickMemDelete = async() => { // 탈퇴한다고 했을때
        await MuteApi.memberDelete(userId);
        window.localStorage.setItem("whoLogin","");
        window.localStorage.setItem("isLogin", "false")
        setModalOpen(true);
        setCommnet("정말 탈퇴 하시겠습니까?😥");
        console.log({userId});
        console.log("탈퇴된겨?" + userId);
        navigate('/');
    }


    useEffect(() => {
        const userInfo = async(userId) => {
            try {
                const response = await MuteApi.userInfo(userId);
                console.log(response.data);
                setChangeName(response.data[0]);
                setChangePwd(response.data[1]);
                setChangePhone(response.data[3]);
                setChangeMail(response.data[2]);
                setChangeAddr(response.data[4]);

                setUserName(response.data[0])
                setUserPwd(response.data[1]);
                setUserPhone(response.data[3]);
                setUserMail(response.data[2]);
                setUserAddr(response.data[4]);
                setUserImg(response.data[0]);
            } catch (e) {
                console.log(e);
            }
        }
        userInfo();
    }, [userId]);

    // 설정 저장
    const onClickSave = async(userId) => {
        await MuteApi.userInfoSave(userId, userName, userPwd, userPhone, userMail, enroll_company.address, userImg);
        setModalOpen(true);
        setCommnet("회원정보 수정이 완료되었습니다.");
        navigate('/');
    }

    // 이름 변경
    const onChangeName = (e) => {
        setChangeName(e.target.value);
        setIsName(false);
    }
    // pwd 변경
    const onChangePwd = (e) => {
        setChangePwd(e.target.value);
        setIsPwd(false);
    }
    // phone 변경
    const onChangePhone = (e) => {
        setChangePhone(e.target.value.replace(/[^0-9]/g, '').replace(/^(\d{2,3})(\d{3,4})(\d{4})$/, `$1-$2-$3`));
        if(e.target.value.length === 0) setIsPhone(true);
        else setIsPhone(false);
    }

    // 주소
    const [enroll_company, setEnroll_company] = useState({
        address:'',
    });

    const [popup, setPopup] = useState(false);

    const handleInput = (e) => {
        console.log(e.target.value);
        setUserAddr(e.target.value);
        setEnroll_company({
            ...enroll_company,
            [e.target.name]:e.target.value,
        })
        console.log(e.target.name);
    }

    const handleComplete = (data) => {
        setPopup(!popup);
    }

    // 전화번호 중복 확인
    const onBlurPhoneCheck = async() => {
        const memberCheck = await MuteApi.memberJoinCheck(changePhone, "TYPE_PHONE");
        if(memberCheck.data) {
            setPhoneMsg("사용가능한 번호입니다.");
            setIsPhone(true)
        } else if(memberCheck.data && userPhone === changePhone) {
            setPhoneMsg("기존의 번호입니다.");
            setIsPhone(true)
        } else {
            setPhoneMsg("중복된 번호입니다.");
            setIsPhone(false)
        }
    }

    // 메일 중복 확인
    const onChangeMail = (e) => {
        const mailRegex = /^[0-9a-zA-Z]([-_\.]?[0-9a-zA-Z])*@[0-9a-zA-Z]([-_\.]?[0-9a-zA-Z])*\.[a-zA-Z]{2,3}$/i;
        const mailCurrent = e.target.value;
        setChangeMail(mailCurrent);
        if(!mailRegex.test(mailCurrent)){
            setMailMsg('이메일의 형식이 올바르지 않습니다.')
            setIsMail(false);
        } else {
            setMailMsg('이메일의 형식이 올바르게 입력되었습니다.')
            setIsMail(true);
        }
    }

    const onBlurMailCheck = async() => {
        // 가입 여부 확인
        const memberCheck = await MuteApi.memberJoinCheck(changeMail, "TYPE_MAIL");
        if (userMail ===  changeMail) {
            setMailMsg("기존 Mail입니다.");
            setIsMail(true);
        } else if(memberCheck.data && !isMail){
            setMailMsg("이메일의 형식이 올바르지 않습니다.");
            setIsMail(false);
        } else if(memberCheck.data && isMail){
            setMailMsg("사용가능한 Mail입니다.");
            setIsMail(true);
        } else {
            setMailMsg("이미 사용하고 있는 Mail입니다.");
            setIsMail(false);
        }
    }

    const onBlurNameCheck = async() => {
        const memberCheck = await MuteApi.memberJoinCheck(changeName, "TYPE_NAME");
        if(userName === changeName) {
            setNameMsg("기존의 이름입니다.");
            setIsName(true);
        } else if (memberCheck.data && changeName.length > 0) {
            setNameMsg("사용가능한 이름입니다.");
            setIsName(true);
        } else {
            setNameMsg("이미 사용중인 이름입니다.")
            setIsName(false);
        }
    }


    return(
        <>
            <div>
                <p>닉네임 {changeName && <span>{nameMsg}</span>}</p>
                <input onChange={onChangeName} value={changeName} onBlur={onBlurNameCheck} placeholder="닉네임" />
            </div>
            <div>
                <p>비밀번호 {changePwd && <span>{pwdMsg}</span>}</p>
                <input type="password" onChange={onChangePwd} value={changePwd} placeholder="비밀번호" />
            </div>
            <div>
                <p>핸드폰 {changePhone && <span>{phoneMsg}</span>}</p>
                <input onChange={onChangePhone} value={changePhone} onBlur={onBlurPhoneCheck} placeholder="핸드폰" />
            </div>
            <div>
                <p>Mail {changeMail && <span>{mailMsg}</span>}</p>
                <input onChange={onChangeMail} value={changeMail} onBlur={onBlurMailCheck} placeholder="메일" />
            </div>
            <div>
                <label className="address_search">주소</label><br/>
                <input className="addr" type="text" required={true} name="address" onChange={handleInput} value={enroll_company.address}/>
                <button onClick={handleComplete}>주소 검색</button>
                {popup && <Post company={enroll_company} setcompany={setEnroll_company}></Post>}
            </div>
            <div>
                <button onClick={onClickSave} disabled={!(isMail && isPhone && isName)}>회원정보수정</button>
            </div>
            <div>
                <button onClick={onClickMemDelete}>회원탈퇴</button>
            </div>
            {modalOpen && <Modal open={modalOpen} close={closeModal} header="탈퇴">{comment}</Modal>}

        </>
    )
}
export default Edit;