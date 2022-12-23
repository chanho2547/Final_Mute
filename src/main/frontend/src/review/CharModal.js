import React from 'react';
import '../App';
import './CharModal.css';

// 도연 - 샤롯데 좌석선택 모달

const CharModal = (props) => {
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
                    {type && <button onClick={confirm}>선택하기</button>}
                        <button className='confirm' onClick={close}>취소</button>
                    </footer>
                </section>
            }
        </div>
    );
};
export default CharModal;