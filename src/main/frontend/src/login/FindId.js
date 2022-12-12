import {useState} from "react";
import {Link} from "react-router-dom";
import MuteApi from "../api/MuteApi";
import Modal from "../util/Modal";

const FindId = () =>{
    // 이름, 이메일 입력 => 이메일값으로 ID찾음
    const [inputName, setInputName] = useState("");
    const [findId, setFindId] = useState("");
    const [inputMail, setInputMail] = useState("");

    const [mailMsg, setMailMsg] = useState("");
    const [isMail, setIsMail] = useState(false);

    const [inputAuth, setInputAuth] = useState('');
    const [serverAuth, setServerAuth] = useState('');

    // 아이디 찾기 버튼 클릭시 팝업창 띄우기
    const [comment, setComment] = useState("");
    const [modalOpen, setModalOpen] = useState(false);
    const closeModal = () => {
        setModalOpen(false);
    };

    // 이름 입력
    const onChangeName = (e) => {
        setInputName(e.target.value);
    }

    // 이메일 입력
    const onChangeMail = (e) => {
        const mailRegex = /^[0-9a-zA-Z]([-_\.]?[0-9a-zA-Z])*@[0-9a-zA-Z]([-_\.]?[0-9a-zA-Z])*\.[a-zA-Z]{2,3}$/i;
        const mailCurrent = e.target.value;
        setInputMail(mailCurrent);
        if(!mailRegex.test(mailCurrent)) {
            setMailMsg("이메일 형식이 올바르지 않습니다.")
            setIsMail(false);
        } else {
            setMailMsg("이메일이 올바르게 입력되었습니다.")
            setIsMail(true);
        }
    }

    // api 호출
    const onClickFindId = async() => {
        const res = await MuteApi.researchId(inputName, inputMail, "Type_ID");
        console.log(res.data);
        if(res.data){
            setModalOpen(true);
            setComment("찾으신 아이디는 [" + res.data.userId + "] 입니다.");
        } else {
            setModalOpen(true);
            setComment("아이디가 없습니다.")
            console.log("아이디 찾기 실패")
        }
    }
    const onKeyDownFindId = (e) => {
        if(e.key === 'Enter'){
            onClickFindId();
        }
    }
    return (
        <>
            <div>
                <h5>아이디 찾기</h5>
                {/* 이름 입력창 */}
                <input className="input" placeholder="이름" value={inputName} onChange={onChangeName}></input>
                <br/>

                {/* 이메일 입력창 */}
                <p> {inputMail.length > 0 && <span>{mailMsg}</span>}
                    <input className="input" placeholder="이메일"  value={inputMail} onChange={onChangeMail} onKeyDown={onKeyDownFindId}></input>
                    <br/></p>

                {/* 아이디 찾기 버튼 활성화 */}
                <button className="idButton" disabled={!(inputName && isMail)} onClick={onClickFindId} >FIND ID</button>
            </div>
            <div>
                {/* 다른 페이지 연결 */}
                <Link to="/SignUp" className="link_item">회원가입</Link>
                <Link to="/Login" className="link_item">로그인</Link>
                <Link to="/FindPwd" className="link_item">비밀번호 찾기</Link>
            </div>
            {modalOpen && <Modal open={modalOpen} close={closeModal} header="확인">{comment}</Modal>}
        </>
    );
}

export default FindId;