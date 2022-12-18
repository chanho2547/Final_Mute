import React, {useState} from "react";
import Modal from "../util/Modal";
import Edit from "./Edit";
import MyWish from "../util/MyWish";


const MyPage = () => {


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
            <Edit/>
            <div>
                <button onClick={onClickMemDelete}>회원탈퇴</button>
                <Modal open={modalOpen} close={closeModal} header="탈퇴">{comment}</Modal>
            </div>
            <MyWish/>
        </>
    )
}

export default MyPage;