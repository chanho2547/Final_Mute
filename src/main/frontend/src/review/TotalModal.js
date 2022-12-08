import React from 'react';
import '../App';
import '../util/Modal.css';


// 도연 - 뮤지컬 총평 후기 모달

const TotalModal = (props) => {
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
                        {type && <button onClick={confirm}>좌석 후기도 작성하기!</button>}
                        <button onClick={close}>아니오</button>
                    </footer>
                </section>
            }
        </div>
    );
};
export default TotalModal;