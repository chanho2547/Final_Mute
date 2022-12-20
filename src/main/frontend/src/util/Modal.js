import React, {useState} from 'react';
import '../App';
import './Modal.css';
import {useNavigate} from "react-router-dom";
import MuteApi from "../api/MuteApi";

// 도연 작업 완료! (조원들 공동으로 사용하세요~)

const Modal = (props) => {
    const navigate = useNavigate();

    const { open, confirm, close, header } = props;

    const userId =window.localStorage.getItem("userId");
    const localPw =window.localStorage.getItem("userPw");
    const isLogin =window.localStorage.getItem("isLogin");

    const [comment, setCommnet] = useState("");
    const [modalOpen, setModalOpen] = useState(false);

    const closeModal = () => {
        setModalOpen(false);
    };

    const onClickLogout = () => {
        window.localStorage.setItem("userId", "");
        window.localStorage.setItem("isLogin", "false");
        navigate('/');
    }

    // 회원 탈퇴
    const onClickMemDelete = async() => { // 탈퇴한다고 했을때
        await MuteApi.memberDelete(userId);
        window.localStorage.setItem("userId", "");
        window.localStorage.setItem("userPwd", "");
        window.localStorage.setItem("isLogin", "false")
        setModalOpen(true);
        setCommnet("정말 탈퇴 하시겠습니까?😥");
        navigate('/');
    }




    return (
        <div className={open ? 'openModal modal' : 'modal'}>
            {open &&
                <section>
                    <header>
                        &nbsp;
                        <button onClick={close}>
                            &times;
                        </button>
                    </header>
                    <main>{props.children}</main>
                    <footer>
                        {(header === '로그아웃') ?<button onClick={onClickLogout}>네</button>: ''}
                        {(header === '탈퇴') ?<button onClick={onClickMemDelete}>네</button>: ''}
                        {(header === '취소'? <button onClick={confirm}>yes</button>:'')}
                        <button onClick={()=>props.close()}>close</button>
                    </footer>
                </section>
            }
        </div>
    );
};
export default Modal;