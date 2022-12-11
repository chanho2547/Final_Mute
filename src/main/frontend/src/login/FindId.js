import {useState} from "react";
import { Link } from "react-router-dom";
import MuteApi from "../api/MuteApi";

const FindId = () =>{
    // 이름, 이메일 입력 => 이메일값으로 ID찾음
    const [inputName, setInputName] = useState("");
    const [inputEmail, setInputEmail] = useState("");
    const [findId, setFindId] = useState("아이디를 찾지 못했습니다.");

    // 아이디 찾기 버튼 클릭시 팝업창 띄우기
    const [modalOpen, setModalOpen] = useState(false);
    const closeModal = () => {
        setModalOpen(false);
    };
    const onChangeName = (e) => {
        setInputName(e.target.value);
    }
    const onChangeEmail = (e) => {
        setInputEmail(e.target.value);
    }
    const onClickFindId = async() => {
        const res = await MuteApi.memberFind(inputName, inputEmail, "Type_ID");
        console.log(res.data.result);
        setModalOpen(true);

        if(res.data.result === true){
            setModalOpen(true);
        }
        else {
            setModalOpen(true);
        }
    }
    const onKeyDownFindId = (e) => {
        if(e.key === 'Enter'){
            onClickFindId();
        }
    }


    return (
        <>


        </>
    );
}

export default FindId;