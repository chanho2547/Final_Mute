import {useState} from "react";
import styled from "styled-components";

const Answer = styled.div`
    display: none;
    padding-bottom: 30px;
    .faq-title {
        border: 1px solid #e0e0e0;
    }
`;

const Cs = ({title, content}) => {
    const items = document.querySelectorAll('.question');

    function openCliseAnswer() {
        const answerId = this.id.replace('que', 'ans');
    }





return(
    <>
    <h3>Mute 고객센터입니다</h3>

    </>
)
}
export default Cs;