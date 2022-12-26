import AWS from "aws-sdk";
import styled from "styled-components";
import { useNavigate } from "react-router-dom";


const ProImg = () => {

    const ImgBox = styled.div`
    width: 100%;
    text-align: center;

    .img {
        text-align: center;
        display: inline-block;
        margin-top: 25px;
    }

        .image-upload {
    width: 120px !important;
    height: 120px !important;
    font-size: 100px;
    text-align: right;
    min-width: 0 !important;
    outline: none;
    background: rgb(0, 0, 0);
    cursor: inherit;
    display: block !important;
    border-radius: 50% !important;
    cursor: pointer;
    position: absolute;
    margin: 0 !important;
    z-index: -1;
    }

    .image-upload-wrapper {
    position: inherit;
    width: 120px !important;
    height: 120px !important;
    font-size: 100px;
    text-align: right;
    min-width: 0 !important;
    outline: none;
    background: rgb(255, 255, 255);
    cursor: inherit;
    display: block !important;
    border-radius: 50% !important;
    cursor: pointer;
    }

    .profile-img {
    position: inherit;
    width: 120px !important;
    height: 120px !important;
    font-size: 100px;
    min-width: 0 !important;
    outline: none;
    cursor: inherit;
    display: block !important;
    border-radius: 50% !important;
    cursor: pointer;
    }
    `;

const navigate = useNavigate();

    // 이미지
    AWS.config.update({
        region: "ap-northeast-2",
        credentials: new AWS.CognitoIdentityCredentials({
            IdentityPoolId: 'ap-northeast-2:ac1f0e18-a90f-43a3-95f5-8622818831c6'
        }),
    })

    const handleFileInput = async(e) => {
        const file = e.target.files[0]

        const upload = new AWS.S3.ManagedUpload({
            params: {
                Bucket: "musicalmate",
                Key: "profileimg.png",
                Body: file,
            },
        })

        const promise = upload.promise()

        promise.then(
            function (data) {
                alert("이미지 업로드 성공")
                navigate(0);
            },
            function (err) {
                return alert("업로드 오류 발생:" + err.message)
            }
        )
    }


        return (
            <>
            <ImgBox>
                <label>
                <div className="img">
                <input type="file" id="upload" accept='image/*' className="image-upload" onChange={handleFileInput} />
                <label htmlFor="upload" className="image-upload-wrapper">
                    <img
                        className="profile-img"
                        src={`https://musicalmate.s3.ap-northeast-2.amazonaws.com/profileimg.png`} />
                </label>
                </div>
                </label>
            </ImgBox>
            </>
        )
    }

export default ProImg;