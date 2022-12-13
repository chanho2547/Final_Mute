import {Link, useNavigate} from "react-router-dom";
import {useState} from "react";
import MuteApi from "../api/MuteApi";
import Modal from "../util/Modal";

const FindPwd = () => {
    const navigate = useNavigate();
    // 아이디, 메일 입력받기
    const [inputId, setInputId] = useState("");
    const [inputMail, setInputMail] = useState("");

    const [mailMsg, setMailMsg] = useState("");

    const [comment, setComment] = useState("");
    const [modalOpen, setModalOpen] = useState(false);
    const closeModal = () => {
        setModalOpen(false);
    };

    const onChangeId = (e) => {
        setInputId(e.target.value);
    }
    const onChangeMail = (e) => {
        setInputMail(e.target.value);
    }
    // 아이디와 이메일이 맞으면 새로운 비밀번호를 지정할 수 있는 html을 불러옴
    const [isNewPwd, setIsNewPwd] = useState(false);


    // api 호출
    const onClickFindPwd = async() => {
        try {
        const res = await MuteApi.researchPwd(inputId, inputMail, "Type_PWD");
        console.log(res.data);

        if(res.data) {
            setModalOpen(true);
            setComment("비밀번호를 재설정합니다.")
            window.localStorage.setItem("localId",inputId);
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
        <>
            <h5>비밀번호 찾기</h5>
            {/* 아이디 입력창 */}
                <input className="input" placeholder="아이디" value={inputId} onChange={onChangeId}></input>
                <br/>

            {/* 이메일 입력창 */}
                <p> {inputMail.length > 0 && <span>{mailMsg}</span>}</p>
                <input className="input" placeholder="이메일" value={inputMail} onChange={onChangeMail} onKeyDown={onKeyDownFindPwd}></input>
                <br/>
            {/* 비밀번호 찾기 버튼 활성화 */}
                <button className="pwdButton" onClick={onClickFindPwd}>FIND PASSWORD</button>
                <br/>

            <div>
                {/* 다른 페이지 연결 */}
                <Link to="/SignUp" className="link_item">회원가입</Link>
                <Link to="/Login" className="link_item">로그인</Link>
                <Link to="/FindId" className="link_item">아이디 찾기</Link>
            </div>
            {modalOpen && <Modal open={modalOpen} close={closeModal} header="확인">{comment}</Modal>}
        </>
    )
}
export default FindPwd;