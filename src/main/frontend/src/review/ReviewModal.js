import React from 'react';
import '../App';
import './ReviewModal.css';

// 후기 작성 모달 - 도연 작업중

const ReviewModal = (props) => {

    const { open, confirm, close, type, header } = props;
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
                        {type && <button onClick={confirm}>후기 등록</button>}
                        <button onClick={close}>취소</button>
                    </footer>
                </section>
            }
        </div>
    );
};
export default ReviewModal;