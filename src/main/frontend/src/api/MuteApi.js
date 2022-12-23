import axios from "axios";

const MuteApi =  {

    // 로그인 - 도연
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

    // 이메일 인증
    mailAuth: async function(mail) {
        const mailAuthObj = {
            email: mail
        }
        return await axios.post("login/mailConfirm", mailAuthObj);
    },

    // 뮤지컬 총평 후기 작성 - 도연
    WriteTotal: async function(userNum, musicalId, scoreStory, scoreDirect, scoreCast, scoreNumber, scoreAvgTotal, totalReview) {
        const reviewObj = {
            userNum : userNum,
            musicalId : musicalId, 
            scoreStory: scoreStory,// 스토리 별점
            scoreDirect: scoreDirect, // 연출 별점
            scoreCast : scoreCast, // 캐스팅 별점
            scoreNumber : scoreNumber, // 넘버 별점
            scoreAvgTotal : scoreAvgTotal, // 뮤지컬 총평 별점 총점
            reviewMuTxt : totalReview // 뮤지컬 총평 후기 텍스트
        }
        return await axios.post("review/writeTotal", reviewObj);
    },

     // 좌석 후기 작성 - 도연
     WriteSeat: async function(userNum, musicalId, theaterId, pkNum, seatRating, viewRating, soundRating, lightRating, scoreAvgSeat, seatReview) {
        const reviewObj = {
            userNum : userNum,
            musicalId : musicalId, 
            theaterId : theaterId, 
            seatNum : pkNum, // 좌석
            scoreSeat: seatRating,// 좌석 별점 
            scoreView: viewRating, // 시야 별점
            scoreSound : soundRating, // 음향 별점
            scoreLight : lightRating, // 조명 별점
            scoreAvgSeat : scoreAvgSeat, // 좌석 후기 별점 총점
            reviewSeTxt : seatReview // 좌석 후기 텍스트
        }
        return await axios.post("review/writeSeat", reviewObj);
    },

    // 뮤지컬 총평 후기 삭제 - 도연
    DeleteTotal : async function(member, reviewMuId) {
        const reviewObj = {
            member : member, // 회원 아이디 
            reviewMuId : reviewMuId // 뮤지컬 후기 글 번호
        }
        return await axios.post("review/deleteTotal", reviewObj);
    },

    // 좌석 후기 삭제 - 도연
    DeleteSeat : async function(reviewSeId) {
        const reviewObj = {
            reviewSeId : reviewSeId, // 좌석 후기 글 번호
            // member : member // 회원 아이디
        }
        return await axios.post("review/deleteSeat", reviewObj);
    },

    // 뮤지컬 후기 view - 도연
    ReviewInfo : async function(musicalId) {
        const reviewObj = {
            musicalId : musicalId
        }
        return await axios.get(`totalView?musicalId=${musicalId}`);
    },

    // 마이페이지 - 나의 뮤지컬 후기 view - 도연
    myReview : async function(userNum) {
        const reviewObj = {
            member : userNum
        }
        return await axios.get(`myTotalView?userNum=${userNum}`);
    },

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
    
    // Id 찾기
    researchId: async function (uni, name, type) {
        const reg = {
            uni: uni,
            name: name,
            type: type
        };
        return await axios.post("member/find_id", reg);
    },
    
    // PWD 찾기
    researchPwd: async function (userId, mail) {
        const reg = {
            userId: userId,
            mail: mail
        }
        return await axios.post("member/find_pwd", reg);
    },

    // 비밀번호 재설정
    rePwd: async function(userId, pwd) {
        const rePwdObj = {
            userId: userId,
            pwd: pwd
        }
        return await axios.post("member/re_pwd", rePwdObj)
    },

    // 회원탈퇴
    memberDelete: async function (userId){
        const reg = {
            userId: userId
        };
        return await axios.post("member/delete", reg);
    },

    // 좌석 전체 후기 평균 별점
    seatReviewAvg: async function() {
        return await axios.get("reviewSeat/all");
    },

    // 좌석별 평균 별점 // 내일 이름 바꾸기
    seatReviewStar: async function(pkNum) {
        return await axios.get(`reviewSeat/avg?seatNum=${pkNum}`);
    },

    // 선택 좌석별 후기
    seatReview: async function(pkNum) {
        return await axios.get(`reviewSeat/each?seatNum=${pkNum}`);
    },

    // 공연장 검색
    searchTheater: async function(inputTheater) {
        return await axios.get(`/theater/search?theaterName=${inputTheater}`);
    },

    // 뮤지컬 검색
    searchMusical: async function(inputMusical) {
        return await axios.get(`/musical/search?musicalName=${inputMusical}`);
    },

    // 선택된 뮤지컬 상세정보 불러오기
    musicalDetail: async function(mt20id) {
        const musicalId = {
            musicalId : mt20id
        }
        return await axios.get(`/musical/${mt20id}`, musicalId);
    },

    insertTicket: async function(seatNum, seatPos, seeDate, ticketDate, userNum, musicalId, paymentId) {
        const ticketObj = {
            seatNum: seatNum,
            seatPos: seatPos,
            seeDate: seeDate,
            ticketDate: ticketDate,
            userNum: userNum,
            musicalId: musicalId,
            paymentId : paymentId
        }
        return await axios.post("/ticket/insert", ticketObj);
    },
    
    openedMusical: async function() {
        return await axios.get("/musical/openedMusical");
    },

    openBeforeMusical: async function() {
        return await axios.get("/musical/openBeforeMusical");
    },

    starRanking: async function() {
        return await axios.get("/starRanking");
    },

    wishReg: async function(userNum, mt20id) {
        const wishInsert = {
        userNum : userNum,
        musicalId : mt20id
        }
    return await axios.post("/wish/insert", wishInsert)
    },

    alarmOn: async function(userNum) {
        return await axios.get(`/wish/select?userNum=${userNum}`);
    },

    alarmOff: async function(userNum, mt20id) {
        const alarmUpdate = {
            userNum : userNum,
            musicalId : mt20id
        }
        return await axios.post("/wish/update", alarmUpdate)
    },

    userIdToNum: async function(userId) {
        const userNumInfo = {
            userId : userId
        }
        return await axios.post("/member/id_to_num",userNumInfo);
    },

    musicalDBList: async function() {
        return await axios.get("musical/db/list")
    },

    // 회원정보 불러오기
    userInfoLoad: async function(userId) {
        const ediObj = {
            userId: userId
        }
        return await axios.post("user/userInfo", ediObj);
    },

    // 수정한 회원 정보 저장
    userInfoSave: async function(userId, name, pwd, phone) {
        const ediObj = {
            userId: userId,
            name: name,
            pwd: pwd,
            phone: phone,
            //userMail: mail,
            //userAddr: addr,
            //userImg: img
        }
        return await axios.post("user/saveInfo", ediObj);
    },

    // 서버에 이미지 저장
    userImgSave: async function(userId, img) {
        const imgObj = {
            userId: userId,
            imgName: img
        }
        return await axios.post("user/editImg", imgObj);
    },


    wishCancel: async function(userNum, mt20id) {
        return await axios.delete(`/wish/delete?userNum=${userNum}&musicalId=${mt20id}`)
    },

    userWish:async function(userNum) {
        // const wishObj = {
        //     userNum : userNum
        // }
        return await axios.get(`/wish/select/all?userNum=${userNum}`)
    },

    // 선택된 극장 상세정보 불러오기
    theaterDetail: async function(mt10id) {
        const theaterId = {
            theaterId : mt10id
        }
        return await axios.get(`/theater/${mt10id}`, theaterId);
    },
    // 예약된 좌석 확인
    isReservation : async function (seeDate) {
        const seeDateInfo = {
            seeDate : seeDate
        }
        return await axios.post("/ticket/get_sold_seat_by_date",seeDateInfo);
    },

    // 찜랭킹 top3
    wishRanking: async function() {
        return await axios.get("/wish/select/top");
    },

    myReviewSeat: async function(userNum) {
        return await axios.get(`/reviewSeat/mypage?userNum=${userNum}`)
    },

    deleteReviewSeat: async function(userNum, seatNum) {
        return await axios.delete(`/reviewSeat/delete?userNum=${userNum}&seatNum=${seatNum}`)
    }

}

export default MuteApi;