import React from 'react';
import '../App';
import '../util/Modal.css';

// 도연 - 좌석 선택 모달

const TheaterModal = (props) => {
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
                        {type && <button onClick={confirm}>샤롯데씨어터</button>}
                        <button onClick={close}>충무아트센터</button>
                    </footer>
                </section>
            }
        </div>
    );
};
export default TheaterModal;