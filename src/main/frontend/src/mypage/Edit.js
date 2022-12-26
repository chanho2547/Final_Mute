import {useNavigate} from "react-router-dom";
import {useEffect, useState} from "react";
import MuteApi from "../api/MuteApi";
import Modal from "../util/Modal";
import styled from "styled-components";
import AWS from "aws-sdk";
import DelModal from "../util/DelModal";

const Img = styled.div `
    width: 100%;
    text-align: center;

    .img {
        text-align: center;
        display: inline-block;
        margin-top: 25px;
    }

    .image-upload { // 파일선택 버튼
  width: 120px !important;
  height: 120px !important;
  font-size: 100px;
  text-align: right;
  min-width: 0 !important;
  outline: none;
  background: rgb(0, 0, 0);
  cursor: inherit;
  display: block !important;
  border-radius: 50% !important;
  cursor: pointer;
  position: absolute;
  margin: 0 !important;
  z-index: -1;
}

 .image-upload-wrapper {
   position: inherit;
   width: 120px !important;
   height: 120px !important;
   font-size: 100px;
   text-align: right;
   min-width: 0 !important;
   outline: none;
   background: rgb(255, 255, 255);
   cursor: inherit;
   display: block !important;
   border-radius: 50% !important;
   cursor: pointer;
 }

 .profile-img {
   position: inherit;
   width: 120px !important;
   height: 120px !important;
   font-size: 100px;
   min-width: 0 !important;
   outline: none;
   cursor: inherit;
   display: block !important;
   border-radius: 50% !important;
   cursor: pointer;
 }
 `;

const EditBox = styled.div`
    width: 100%;
    margin-top:50px;
    text-align: center;
    margin-top: 5px;

    .info_id {
        position: relative;
    }

    .info_id .btn {
        position: absolute;
        width: 90px;
        height: 35px;
        margin-top: 5px;
        border-radius: 5px;
        border: none;
        margin-left: 10px;
    
    }
    .input {
        /* position: relative; */
        width : 270px;
        height : 35px;
        background-color : white;
        border-radius : 5px;
        border: solid 1.5px #eeeeee;
        text-align: center;
        margin : 5px;
        font-size: 12px;
        &:hover {
            border : solid rgb(129,0,0) 1px;
            font-weight: 600;
            color: rgb(129,0,0);
        } 
        &:focus {
            outline : solid rgb(129,0,0) 1px;
            font-weight: 600;
        }
    }

    .hint {
        font-size : 12px;
        color:#1B1717;
        text-align: center;
    }

    .Button {
        width: 280px;
        height: 40px;
        margin: 10px;
        color : white;
        font-weight: 700;
        opacity: 0.5;
        background-color: rgb(129,0,0); 
        border-radius: 5px;
        border: none;
        &:hover {
            border: none;
            opacity: 1;      
        }
    }
`; 


// 회원정보 수정 페이지
const Edit = () => {
    const navigate = useNavigate();
    const userId = window.localStorage.getItem("whoLogin");
    console.log(userId);


    const [userImg, setUserImg] = useState("");
    const [userUrl, setUserUrl] = useState({ backgroundImage: "url(https://mutemute.s3.ap-northeast-2.amazonaws.com/profileimg.png" + userImg + ")" });
    const [userName, setUserName] = useState("");
    const [userPwd, setUserPwd] = useState("");
    const [userPhone, setUserPhone] = useState("");
    const [userMail, setUserMail] = useState("");
    const [userAddr, setUserAddr] = useState("");

    // 변경한 값
    const [changeName, setChangeName] = useState("");
    const [changePwd, setChangePwd] = useState("");
    const [changePhone, setChangePhone] = useState("");
    //const [changeMail, setChangeMail] = useState("");
    //const [changeAddr, setChangeAddr] = useState("");

    const [nameMsg, setNameMsg] = useState("");
    const [pwdMsg, setPwdMsg] = useState("");
    const [phoneMsg, setPhoneMsg] = useState("");
   // const [mailMsg, setMailMsg] = useState("");

    // 유효성 확인
    const [isName, setIsName] = useState(true);
    const [isPwd, setIsPwd] = useState(true);
    const [isPhone, setIsPhone] = useState(true);
    const [isMail, setIsMail] = useState(true);

    const [comment, setCommnet] = useState("");
    const [modalOpen, setModalOpen] = useState(false);
    const [editModalOpen, setEditModalOpen] = useState(false); // 회원정보수정시
    const [delModalOpen, setDelModalOpen] = useState(false); // 회원탈퇴

    const closeModal = () => {
        setModalOpen(false);
    };

    const closeEditModal= () => {
        setEditModalOpen(false);
        navigate('/');
    }

    const closeDelModal = () => {
        setDelModalOpen(false);
        navigate('/');
    }


    // 회원 탈퇴
    const onClickMemDelete = async() => { // 탈퇴한다고 했을때

        await MuteApi.memberDelete(userId);
        window.localStorage.setItem("whoLogin","");
        window.localStorage.setItem("isLogin", "false")
        //alert("정말 탈퇴하시겠습니까?😥")
         setDelModalOpen(true);
         setCommnet("정말 탈퇴 하시겠습니까?😥");
        //navigate('/');
        console.log({userId});
        console.log("탈퇴된겨?" + userId);
        // } catch (e) {
        //     setDelModalOpen(true);
        //     setCommnet("탈퇴못해여!!")

    }


    useEffect(() => {
        const userInfoLoad = async() => {
            try {
                const response = await MuteApi.userInfoLoad(userId);
                console.log(response.data);
                setChangeName(response.data[0]);
                setChangePwd(response.data[1]);
                setChangePhone(response.data[3]);
                //setChangeMail(response.data[2]);
                //setChangeAddr(response.data[4]);

                setUserName(response.data[0])
                setUserPwd(response.data[1]);
                setUserPhone(response.data[3]);
                setUserMail(response.data[2]);
                //setUserAddr(response.data[4]);
                setUserImg(response.data[5]);
                setUserUrl({ backgroundImage: "url(https://musicalmate.s3.ap-northeast-2.amazonaws.com/profileimg.png" + response.data[5] + ")"});
            } catch (e) {
                console.log(e)
            }
        }
        userInfoLoad();
    }, [userId]);

    // 설정 저장
    const onClickSave = async() => {
        const saveInfo = await MuteApi.userInfoSave(userId, changeName, changePwd, changePhone, userMail);
        if(saveInfo.data) {
            //alert("회원정보 수정이 완료되었습니다.");
            setEditModalOpen(true);
            setCommnet("회원정보 수정이 완료되었습니다.");
            //navigate('/');
            console.log(saveInfo)

        } else {
            setEditModalOpen(true);
            setCommnet("회원정보 수정에 실패하였습니다.")
        }
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
        if(e.target.value.length === 0 || e.target.value.length < 12 || e.target.value.length > 13) setIsPhone(true);
        else setIsPhone(false);
    }

    // // 주소
    // const [enroll_company, setEnroll_company] = useState({
    //     address:'',
    // });
    //
    // const [popup, setPopup] = useState(false);
    //
    // const handleInput = (e) => {
    //     console.log(e.target.value);
    //     setUserAddr(e.target.value);
    //     setEnroll_company({
    //         ...enroll_company,
    //         [e.target.name]:e.target.value,
    //     })
    //     console.log(e.target.name);
    // }
    //
    // const handleComplete = (data) => {
    //     setPopup(!popup);
    // }

    // 전화번호 중복 확인
    const onBlurPhoneCheck = async() => {
        const memberCheck = await MuteApi.memberJoinCheck(changePhone, "TYPE_PHONE");
        if(memberCheck.data && (changePhone.length === 12 || changePhone.length === 13) && changePhone.indexOf('-') === 3) {
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

    // // 메일 중복 확인
    // const onChangeMail = (e) => {
    //     const mailRegex = /^[0-9a-zA-Z]([-_\.]?[0-9a-zA-Z])*@[0-9a-zA-Z]([-_\.]?[0-9a-zA-Z])*\.[a-zA-Z]{2,3}$/i;
    //     const mailCurrent = e.target.value;
    //     setChangeMail(mailCurrent);
    //     if(!mailRegex.test(mailCurrent)){
    //         setMailMsg('이메일의 형식이 올바르지 않습니다.')
    //         setIsMail(false);
    //     } else {
    //         setMailMsg('이메일의 형식이 올바르게 입력되었습니다.')
    //         setIsMail(true);
    //     }
    // }

    // const onBlurMailCheck = async() => {
    //     // 가입 여부 확인
    //     const memberCheck = await MuteApi.memberJoinCheck(changeMail, "TYPE_MAIL");
    //     if (userMail ===  changeMail) {
    //         setMailMsg("기존 Mail입니다.");
    //         setIsMail(true);
    //     } else if(memberCheck.data && !isMail){
    //         setMailMsg("이메일의 형식이 올바르지 않습니다.");
    //         setIsMail(false);
    //     } else if(memberCheck.data && isMail){
    //         setMailMsg("사용가능한 Mail입니다.");
    //         setIsMail(true);
    //     } else {
    //         setMailMsg("이미 사용하고 있는 Mail입니다.");
    //         setIsMail(false);
    //     }
    // }

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



    // 이미지
    AWS.config.update({
        region: "ap-northeast-2",
        credentials: new AWS.CognitoIdentityCredentials({
            IdentityPoolId: 'ap-northeast-2:ac1f0e18-a90f-43a3-95f5-8622818831c6'
        }),
    })

    const handleFileInput = async(e) => {
        const file = e.target.files[0]

        const upload = new AWS.S3.ManagedUpload({
            params: {
                Bucket: "musicalmate",
                Key: "profileimg.png",
                Body: file,
            },
        })

        const promise = upload.promise()

        promise.then(
            function (data) {
                alert("이미지 업로드 성공")
                navigate(0);
            },
            function (err) {
                return alert("업로드 오류 발생:" + err.message)
            }
        )
    }

    
    return(
        <>
            <Img >
                <div className="img">
                <input type="file" id="upload" accept='image/*' className="image-upload" onChange={handleFileInput} />
                <label htmlFor="upload" className="image-upload-wrapper">
                    <img
                        className="profile-img"
                        src={`https://musicalmate.s3.ap-northeast-2.amazonaws.com/profileimg.png`} />
                </label>
                </div>
            </Img>
            {/* <ProImg userId={userId} setUserImg={setUserImg} setUserUrl={setUserUrl} userUrl={userUrl}/> */}

            <EditBox>
            {/* 이름 입력창 */}
            <div className="info_id">
            <input className="input" onChange={onChangeName} value={changeName} onBlur={onBlurNameCheck} placeholder="이름" />
            <div className="hint">     
            {changeName && <span>{nameMsg}</span>}
            </div>    
            </div>

            {/* 비밀번호 변경*/}
            <div>
                <input className="input" type="password" onChange={onChangePwd} value={changePwd} placeholder="비밀번호" />
            <div className="hint">    
                <p>{changePwd && <span>{pwdMsg}</span>}</p>
            </div>
            </div>

            {/* 핸드폰 변경 */}
            <div>
                <input className="input" onChange={onChangePhone} value={changePhone} onBlur={onBlurPhoneCheck} placeholder="핸드폰" />
            <div className="hint">   
                <p>{changePhone && <span>{phoneMsg}</span>}</p>
            </div>
            </div> 

            {/* 메일 변경 */}
            <div>
                {/* <p>Mail</p> */}
                <input className="input" value={userMail}  placeholder="메일" readOnly/>
            </div>
            {/*<div>*/}
            {/*    <label className="address_search">주소</label><br/>*/}
            {/*    <input className="addr" type="text" required={true} name="address" onChange={handleInput} value={enroll_company.address}/>*/}
            {/*    <button onClick={handleComplete}>주소 검색</button>*/}
            {/*    {popup && <Post company={enroll_company} setcompany={setEnroll_company}></Post>}*/}
            {/*</div>*/}
            
            <div>
                <button className="Button" onClick={onClickSave} disabled={!(isPhone && isName)}>회원정보수정</button>
            </div>
            <div>
                <button className="Button" onClick={onClickMemDelete}>회원탈퇴</button>
            </div>
            {modalOpen && <Modal open={modalOpen} close={closeModal} header="탈퇴">{comment}</Modal>}
            {editModalOpen && <Modal open={editModalOpen} close={closeEditModal} header="확인">{comment}</Modal>}
                {delModalOpen && <Modal open={delModalOpen} close={closeDelModal} header="확인">{comment}</Modal>}
            </EditBox>
        </>
    )
}
export default Edit;