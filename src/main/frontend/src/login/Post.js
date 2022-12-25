import DaumPostcode from "react-daum-postcode";
import styled from "styled-components";

const PostStyle = styled.div `
    width: 100%;
    text-align: center;

    .postmodal{
    background : rgba(0,0,0,0.25);
    position: static;
    left:0;
    top:0;
    height:10%;
    width:10%;
    box-sizing: border-box;

    }
`; 

// api를 실행할 컴포넌트 
const Post = (props) => {

    const complete = (data) =>{
        let fullAddress = data.address;
        let extraAddress = '';

        if (data.addressType === 'R') {
            if (data.bname !== '') {
                extraAddress += data.bname;
            }
            if (data.buildingName !== '') {
                extraAddress += (extraAddress !== '' ? `, ${data.buildingName}` : data.buildingName);
            }
            fullAddress += (extraAddress !== '' ? ` (${extraAddress})` : '');
        }
        console.log(data)
        console.log(fullAddress)
        console.log(data.zonecode)

        props.setcompany({
            ...props.company,
            address:fullAddress,
        })
    }

    return (
        <PostStyle>
            <DaumPostcode
                className="postmodal"
                autoClose
                onComplete={complete} />
        </PostStyle>
        
    );
};

export default Post;