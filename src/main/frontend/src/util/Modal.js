import React, {useState} from 'react';
import '../App';
import './Modal.css';
import {useNavigate} from "react-router-dom";
import MuteApi from "../api/MuteApi";

// 도연 작업 완료! (조원들 공동으로 사용하세요~)

const Modal = (props) => {
    const navigate = useNavigate();

    const { open, confirm, close, header } = props;

    const userId =window.localStorage.getItem("whoLogin");
    // const userPwd =window.localStorage.getItem("whoPwd");
    // const isLogin =window.localStorage.getItem("isLogin");

    const [comment, setCommnet] = useState("");
    const [modalOpen, setModalOpen] = useState(false);

    const closeModal = () => {
        setModalOpen(false);
    };

    // const onClickLogout = (userId) => {
    //     setModalOpen(true);
    //     setCommnet("로그아웃되었습니다.");
    // }

    // 회원 탈퇴
    const onClickMemDelete = () => { // 탈퇴한다고 했을때
        setModalOpen(true);
        setCommnet("정말 탈퇴 하시겠습니까?😥");
    }


    return (
        <div className={open ? 'openModal modal' : 'modal'}>
            {open &&
                <section>
                    <header>
                        {header}
                        <button onClick={close}>
                            &times;
                        </button>
                    </header>
                    <main>{props.children}</main>
                    <footer>
                        {/*{(header === '로그아웃') ?<button onClick={onClickLogout}>로그아웃</button>: ''}*/}
                        {(header === '탈퇴') ?<button onClick={onClickMemDelete}>네</button>: ''}
                        {(header === '취소'? <button onClick={confirm}>네 </button>:'')}
                        {/* <button onClick={()=>props.close()}>close</button> */}
                        <button className='close' onClick={close}>확인</button>
                    </footer>
                </section>
            }
        </div>
    );
};
export default Modal;
