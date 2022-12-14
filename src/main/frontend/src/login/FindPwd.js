import {Link, useNavigate} from "react-router-dom";
import {useState} from "react";
import MuteApi from "../api/MuteApi";
import Modal from "../util/Modal";
import styled from "styled-components";

const FindPwdBlock = styled.div`
    width: 100%;
    text-align: center;
    margin-top:50px;
    .input {
        width : 270px;
        height : 35px;
        background-color : white;
        border-radius : 5px;
        border: solid 1.5px #eeeeee;
        margin : 5px;
        text-align: center;
        font-size: 12px;
        &:hover {
            border : solid rgb(129,0,0) 1px;
            color: rgb(129,0,0);
            font-weight: 600;
        } 
        &:focus {
            outline : solid rgb(129,0,0) 1px;
            font-weight: 600;
        }
    }
        .hint {
        font-size : 12px;
        color:green;
        text-align: center;
    }
  
    

    .pwdButton {
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

const PageLink = styled.div`
    text-align: center;
    margin-bottom: 40px;
    .link_item {
        margin: 20px;
        color: rgb(57,62,70);
        font-size : 14px;
        text-decoration-line: none;
        &:hover {
            color: rgb(129,0,0);
            font-weight: 600;
        }
    }
`;

const FindPwd = () => {
    const navigate = useNavigate();
    // 아이디, 메일 입력받기
    const [inputId, setInputId] = useState("");
    const [inputMail, setInputMail] = useState("");

    const [mailMsg, setMailMsg] = useState("");
    const [isMail, setIsMail] = useState(false);

    const [comment, setComment] = useState("");
    const [modalOpen, setModalOpen] = useState(false);
    const closeModal = () => {
        setModalOpen(false);
    };

    const onChangeId = (e) => {
        setInputId(e.target.value);
    }
    // 이메일 입력
    const onChangeMail = (e) => {
        const mailRegex = /^[0-9a-zA-Z]([-_\.]?[0-9a-zA-Z])*@[0-9a-zA-Z]([-_\.]?[0-9a-zA-Z])*\.[a-zA-Z]{2,3}$/i;
        const mailCurrent = e.target.value;
        setInputMail(mailCurrent);
        if (!mailRegex.test(mailCurrent)) {
            setMailMsg("이메일 형식이 올바르지 않습니다.")
            setIsMail(false);
        } else {
            setMailMsg("이메일이 올바르게 입력되었습니다.")
            setIsMail(true);
        }
    }

    // api 호출
    const onClickFindPwd = async() => {
        try {
            const res = await MuteApi.researchPwd(inputId, inputMail);
            console.log(res.data);
            if(res.data) {
                setModalOpen(true);
                setComment("비밀번호를 재설정합니다.")
                //window.localStorage.setItem("whoLogin",inputId);
                navigate('/RePwd');
            } else {
                setModalOpen(true);
                setComment("가입된 정보가 없습니다.")
            }
        } catch (e) {
            setModalOpen(true);
            setComment("패스워드 찾기 오류")
        }
    }
    const onKeyDownFindPwd = (e) => {
        if(e.key === 'Enter'){
            onClickFindPwd();
        }
    }


    return(
        <div className="container">
            <FindPwdBlock>
            <h5>비밀번호 찾기</h5>
            {/* 아이디 입력창 */}
                <div calassName="input">
                <input className="input" placeholder="아이디" value={inputId} onChange={onChangeId}></input>
                </div>

            {/* 이메일 입력창 */}
                <input className="input" placeholder="이메일" value={inputMail} onChange={onChangeMail} onKeyDown={onKeyDownFindPwd}></input>
                <br/>
                <div className="hint">
                {inputMail.length > 0 && <span>{mailMsg}</span>}
                </div>
               
            {/* 비밀번호 찾기 버튼 활성화 */}
                <button className="pwdButton" onClick={onClickFindPwd}>FIND PASSWORD</button>
            </FindPwdBlock>

            <PageLink>
                {/* 다른 페이지 연결 */}
                <Link to="/SignUp" className="link_item">회원가입</Link>
                <Link to="/Login" className="link_item">로그인</Link>
                <Link to="/FindId" className="link_item">아이디 찾기</Link>
            </PageLink>
            {modalOpen && <Modal open={modalOpen} close={closeModal} header="확인">{comment}</Modal>}
        </div>
    )
}
export default FindPwd;