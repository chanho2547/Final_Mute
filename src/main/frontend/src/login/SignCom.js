import { Link } from "react-router-dom";
import styled from "styled-components";

const SignComBlock = styled.div`
    width: 500px;
    height: 200px;
    margin-left: 700px;
    margin-top: 150px;
    margin-bottom: 350px;
    padding: 50px;
    border-radius : 5px;
    border: solid #eeeeee;
`;

const PageLink = styled.div`
    .link_item {
        margin: 10px;
        color: white;
        font-size : 14px;
        text-decoration-line: none;
    }
`;

const Button = styled.button`
    text-decoration: none;
    border: none;
    background-color: rgb(0,173,181);
    text-decoration: none;
    color: white;
    width: 250px;
    height: 40px;
    margin: 10px;
    border-radius: 5px;
`;

const SignCom = () => {
    return(
        <SignComBlock>
            <p>Mute 회원가입이 완료되었습니다.</p>
            <PageLink><Button><Link to="/Login" className="link_item">로그인</Link></Button></PageLink>
        </SignComBlock>
    );
}
export default SignCom;