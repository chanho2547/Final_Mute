import AWS from "aws-sdk";
import styled from "styled-components";
import MuteApi from "../api/MuteApi";

const Img = styled.div`
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

const ProImg = ({userId, setUserUrl, setUserImg, userUrl}) => {

    // 이미지 저장 aws s3
    const bucket = "musicalmate";

    AWS.config.update({
        region: "ap-northeast-2",
        credentials: new AWS.CognitoIdentityCredentials({
            IdentityPoolId: 'ap-northeast-2:ac1f0e18-a90f-43a3-95f5-8622818831c6'
        }),
    })

const handleFileInput = async(e) => {
    const file = e.target.files[0];
    const fileName = userId + e.target.files[0].name;


    // s3 sdk에 내장된 업로드 함수
    const upload = new AWS.S3.ManagedUpload({
        params: {
            Bucket: bucket, // 업로드할 aws 버킷명
            Key: fileName, // 업로드할  파일 이름
            Body: file, // 업로드할 파일
        },
    })
    const promise = upload.promise()

    promise.then(
        function (data) {
            alert("이미지 업로드 성공")
        },
        function (err) {
            return alert("업로드 오류 발생:"  + err.message)
        }
    )
    setUserImg(fileName);

    // 서버에 이미지 저장
    await MuteApi.userImgSave(userId, fileName);

    // 이미지 미리보기
    const fileUrl = URL.createObjectURL(file);
    setUserUrl({ backgroundImage: "url(" + fileUrl + ")" });


return (

    <Img style={userUrl}>
        <label htmlFor="upload" className="image-upload-wrapper">
        <input type="file" id="upload" accept='image/*' className="image-upload" onChange={handleFileInput} />
            <img
                className="profile-img"
                src={`https://musicalmate.s3.ap-northeast-2.amazonaws.com/profileimg.png`} />
        </label>
    </Img>
        )
    }
}
export default ProImg;