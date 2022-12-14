import { Link } from 'react-router-dom';
import styled from 'styled-components';

// 푸터 스타일
const StyledFooter = styled.footer`
    background-color: #1b1717;
    width: 100%;
    padding: 20px;
    display:flex;
    flex-direction: column;
    text-align: center;
    height: 100px;
    margin-top: auto;
    .nav-bottom {
        justify-content: center;
        align-items: center;
        text-decoration: none;
        font-size: 13px;
        color: #ffffff;
    }
    .cs, .privacy, .home {
        text-decoration: none;
        color: #ffffff;
    }
    .slash {
        margin: 7px;
    }
    .mute {
        margin-top: 10px;
        font-size: 0.7em;
        color: #838383;
    }
`;



const Footer = () => {
    if (window.location.pathname === '/PayEnd') return null;
    return (
        <>
            <StyledFooter>
                <div className='nav-bottom'>
                    <Link to={"/Cs"} className="cs">고객센터 </Link>
                    <span className='slash'> | </span>
                    <Link to={"/Privacy"} className="privacy"> 개인정보처리방침 </Link>
                    <span className='slash'> | </span>
                    <Link to={"/"} className="home"> Mute</Link>
                </div>
                <div className="mute">
                    대표: 정경수 | 소재지: 서울시 강남구 테헤란로 14길 6 남도빌딩 3층 | 사업자등록번호: 101-50-41461<br/>
                    개인정보관리책임자: 김도연 | e-mail: support@mute.com | FAX: 02-514-2236
                </div>
            </StyledFooter>
        </>
    );
}
export default Footer;