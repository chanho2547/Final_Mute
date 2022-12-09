import axios from "axios";

const MuteApi =  {

    Login: async function(id, pwd) {
        const loginObj = {
            userId: id,
            pwd: pwd
        }
        return await axios.post( "member/login", loginObj);
    },
    // 회원가입
    signUp: async function(userId, pwd, name, mail, phone, addr) {
        console.log("이메일 : " + mail);
        console.log("주소 : " + addr);

        const signUpObj = {
            userId: userId,
            pwd: pwd,
            name: name,
            mail: mail,
            phone: phone,
            addr: addr
        }
        return await axios.post("member/signup", signUpObj);
    },

    // 뮤지컬 총평 후기 작성 - 도연
    WriteTotal: async function(scoreStory, scoreDirect, scoreCast, scoreNumber, scoreAvgTotal, totalReview) {
        const reviewObj = {
            scoreStory: scoreStory,// 스토리 별점
            scoreDirect: scoreDirect, // 연출 별점
            scoreCast : scoreCast, // 캐스팅 별점
            scoreNumber : scoreNumber, // 넘버 별점
            scoreAvgTotal : scoreAvgTotal, // 뮤지컬 총평 별점 총점
            reviewMuTxt : totalReview // 뮤지컬 총평 후기 텍스트
        }
        return await axios.post( "review/writeTotal", reviewObj);
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
        return await axios.post("review/writeSeat", reviewObj);
    },

    // // 후기 삭제 - 도연
    // DeleteReview : async function(reviewMuId, musical, member) {
    //     const reviewObj = {
    //         reviewMuId : reviewMuId, // 뮤지컬 후기 글 번호
    //         musical : musical, // 공연 ID
    //         member : member // 회원번호
    //     }
    //     return await axios.post("review/deleteReview", reviewObj);
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
    //     return await axios.post("review/ReviewInfo", reviewObj);
    // }


    // 가입 중복 확인
    memberJoinCheck: async function(uni,type) {
        const doubleObj = {
            uni : uni,
            type:type
        }
        return await axios.post( "member/double_check", doubleObj);
    },

    // 뮤지컬리스트 확인 (임시) - 찬호 
    musicalList: async function() {
        return await axios.get( "musical/list");
    },

    // ID, PWD 찾기
    memberFind: async function (uni, mail, type) {
        const reg = {
            uni: uni,
            mail: mail,
            type: type
        };
        return await axios.post("member/find", reg);
    },
    // 새 비밀번호 저장
    memberNewPwd: async function (userId, pwd) {
        const reg = {
            userId: userId,
            pwd: pwd
        };
        return await axios.post("member/new_pwd", reg);
    },
    // 회원탈퇴
    memberDelete: async function (userId){
        const reg = {
            userId: userId
        };
    }

}

export default MuteApi;