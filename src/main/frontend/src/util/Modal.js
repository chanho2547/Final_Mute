import React from 'react';
import '../App';
import './Modal.css';
import {useNavigate} from "react-router-dom";
import MuteApi from "../api/MuteApi";

// 도연 작업 완료! (조원들 공동으로 사용하세요~)

const Modal = (props) => {
    const navigate = useNavigate();

    const { open, confirm, close, header } = props;

    const localId =window.localStorage.getItem("userId");
    const localPw =window.localStorage.getItem("userPw");
    const isLogin =window.localStorage.getItem("isLogin");

    // 회원 탈퇴
    const onClickMemDelete = async() => { // 탈퇴한다고 했을때
        await MuteApi.memberDelete(localId);
        window.localStorage.setItem("userId", "");
        window.localStorage.setItem("userPwd", "");
        window.localStorage.setItem("isLogin", "false")
        navigate('/');
    }

    return (
        <div className={open ? 'openModal modal' : 'modal'}>
            {open &&
                <section>
                    <header>
                        &nbsp;
                        <button className='close' onClick={close}>
                            &times;
                        </button>
                    </header>
                    <main>{props.children}</main>
                    <footer>
                        {(header === '탈퇴') ?<button onClick={onClickMemDelete}>네</button>: ''}
                        <button className='close' onClick={close}>close</button>
                    </footer>
                </section>
            }
        </div>
    );
};
export default Modal;