import axios from "axios";
const HEADER = "application/json";
const MUTE_DOMAIN = "http://localhost:8282/";

const MuteApi =  {
    // 로그인 - 도연
    Login: async function(id, pwd) {
        const loginObj = {
            userId: id,
            pwd: pwd
        }
        return await axios.post(MUTE_DOMAIN + "member/login", loginObj, HEADER);
    },
    // 회원가입
    signUp: async function(userId, pwd, name, mail, phone, company) {
        console.log("이메일 : " + mail);
        console.log("주소 : " + company);

        const signUpObj = {
            userId: userId,
            pwd: pwd,
            name: name,
            mail: mail,
            phone: phone,
            addr: company
        }
        return await axios.post(MUTE_DOMAIN + "member/signup", signUpObj, HEADER);
    },

    // 총평 후기 작성 - 도연
    WriteTotal: async function(scoreStory, scoreDirect, scoreCast, scoreNumber, totalReview) {
        const reviewObj = {
            scoreStory: scoreStory,// 스토리 별점
            scoreDirect: scoreDirect, // 연출 별점
            scoreCast : scoreCast, // 캐스팅 별점
            scoreNumber : scoreNumber, // 넘버 별점
            reviewMuTxt : totalReview // 뮤지컬 후기 텍스트
        }
        return await axios.post(MUTE_DOMAIN + "review/writeTotal", reviewObj, HEADER);
    },

     // 좌석 후기 작성 - 도연
     WriteSeat: async function(seatRating, viewRating, soundRating, lightRating, seatReview) {
        const reviewObj = {
            scoreSeat: seatRating,// 좌석 별점 
            scoreView: viewRating, // 시야 별점
            scoreSound : soundRating, // 음향 별점
            scoreLight : lightRating, // 조명 별점
            reviewSeTxt : seatReview // 뮤지컬 후기 텍스트
        }
        return await axios.post(MUTE_DOMAIN + "review/writeSeat", reviewObj, HEADER);
    },

    // // 후기 삭제 - 도연
    // DeleteReview : async function(reviewMuId, musical, member) {
    //     const reviewObj = {
    //         reviewMuId : reviewMuId, // 뮤지컬 후기 글 번호
    //         musical : musical, // 공연 ID
    //         member : member // 회원번호
    //     }
    //     return await axios.post(MUTE_DOMAIN + "review/deleteReview", reviewObj, HEADER);
    // },

    // // 뮤지컬 후기 view - 도연
    // ReviewInfo : async function(reviewMuId, musical, member, writeDate, scoreStory, scoreDirect, scoreCast, scoreNumber, reviewMuTxt) {
    //     const reviewObj = {
    //         reviewMuId : reviewMuId, // 뮤지컬 후기 글 번호
    //         musical : musical, // 공연 ID
    //         member: member, // 회원번호
    //         writeDate : writeDate, // 작성일
    //         scoreStory: scoreStory,// 스토리 별점
    //         scoreDirect: scoreDirect, // 연출 별점
    //         scoreCast : scoreCast, // 캐스팅 별점
    //         scoreNumber : scoreNumber, // 넘버 별점
    //         reviewMuTxt : reviewMuTxt // 뮤지컬 후기 텍스트
    //     }
    //     return await axios.post(MUTE_DOMAIN + "review/ReviewInfo", reviewObj, HEADER);
    // }


    // 가입 중복 확인
    memberJoinCheck: async function(uni,type) {
        const doubleObj = {
            uni : uni,
            type:type
        }
        return await axios.post(MUTE_DOMAIN + "member/double_check", doubleObj, HEADER);
    },

    // 뮤지컬리스트 확인 (임시) - 찬호 
    musicalList: async function() {
        return await axios.get(MUTE_DOMAIN + "musical/list");
    }


}

export default MuteApi;