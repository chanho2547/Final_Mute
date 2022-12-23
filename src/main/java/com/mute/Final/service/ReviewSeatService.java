package com.mute.Final.service;

import com.mute.Final.dto.ReviewSeatAvgDTO;
import com.mute.Final.dto.ReviewSeatDTO;
import com.mute.Final.dto.ReviewTotalDTO;
import com.mute.Final.entity.Member;
import com.mute.Final.entity.ReviewSeat;
import com.mute.Final.entity.ReviewSeatAvg;

import com.mute.Final.entity.ReviewTotal;
import com.mute.Final.repository.ReviewSeatAvgRepository;
import com.mute.Final.repository.ReviewSeatRepository;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.stereotype.Service;

import javax.transaction.Transactional;
import java.util.ArrayList;
import java.util.HashMap;
import java.util.List;
import java.util.Map;

@Service
@Slf4j
@Transactional
@RequiredArgsConstructor
public class ReviewSeatService {
    private final ReviewSeatRepository reviewSeatRepository;
    private final ReviewSeatAvgRepository reviewSeatAvgRepository;

    // 전체 좌석 평균 별점 조회
    public List<ReviewSeatAvgDTO> getReviewAvgList() {
        List<ReviewSeatAvgDTO> reviewSeatAvgDTOS = new ArrayList<>();
        List<ReviewSeatAvg> reviewSeatAvgList = reviewSeatAvgRepository.findAvg();
        for(ReviewSeatAvg e : reviewSeatAvgList) {
            ReviewSeatAvgDTO reviewSeatAvgDTO = new ReviewSeatAvgDTO();
            System.out.println("테스트 좌석번호 : "+e.getSeatId());
            System.out.println("테스트 좌석별 평균별점 : "+e.getAvgAllSeat());
            reviewSeatAvgDTO.setSeatId(e.getSeatId()); // 좌석 번호
            reviewSeatAvgDTO.setAvgAllSeat(e.getAvgAllSeat()); // 총 평균 별점
            reviewSeatAvgDTO.setReviewCnt(e.getReviewCnt()); // 후기 개수
            reviewSeatAvgDTO.setAvgSeat(e.getAvgSeat()); // 평균 좌석 별점
            reviewSeatAvgDTO.setAvgView(e.getAvgView()); // 평균 시야 별점
            reviewSeatAvgDTO.setAvgSound(e.getAvgSound()); // 평균 음향 별점
            reviewSeatAvgDTO.setAvgLight(e.getAvgLight()); // 평균 조명 별점
            reviewSeatAvgDTOS.add(reviewSeatAvgDTO);
        }
        return reviewSeatAvgDTOS;
    }

    // 좌석번호별 개인 후기 전체 조회
    public List<ReviewSeatDTO> getReviewSeatEachList(int seatNum) {
        List<ReviewSeatDTO> reviewSeatDTOS = new ArrayList<>();
        List<ReviewSeat> reviewSeatList = reviewSeatRepository.findBySeatNum(seatNum);
        for (ReviewSeat e : reviewSeatList) {
            ReviewSeatDTO reviewSeatDTO = new ReviewSeatDTO();
            reviewSeatDTO.setTheaterName(e.getTheater().getTheaterName()); // 공연장 이름
            reviewSeatDTO.setMusicalName(e.getMusical().getMusicalName()); // 공연 ID
            reviewSeatDTO.setUserId(e.getMember().getUserId());// 회원 ID
            reviewSeatDTO.setSeatNum(e.getSeatNum()); // 좌석 번호
            reviewSeatDTO.setWriteDate(e.getWriteDate()); // 작성일
            reviewSeatDTO.setScoreSeat(e.getScoreSeat()); // 좌석 별점
            reviewSeatDTO.setScoreView(e.getScoreView()); // 시야 별점
            reviewSeatDTO.setScoreSound(e.getScoreSound()); // 음향 별점
            reviewSeatDTO.setScoreLight(e.getScoreLight()); // 조명 별점
            // => 컬럼 없었을 경우
//            double AvgScore = ((double) (e.getScoreSeat() + e.getScoreView() + e.getScoreSound() + e.getScoreLight()) / 4);
//            reviewSeatDTO.setScoreAvg(AvgScore); // 개인 평균 별점
            // => 컬럼 있을 경우
            reviewSeatDTO.setScoreAvgSeat(e.getScoreAvgSeat()); // 평균 좌석 별점
            reviewSeatDTO.setReviewSeTxt(e.getReviewSeTxt()); // 좌석 후기 내용
            reviewSeatDTOS.add(reviewSeatDTO);
        }
        return reviewSeatDTOS;
    }

    // 좌석번호별 평균 후기 view
    public List<?> getReviewSeatAvg(int seatNum) {
        List<Map<?,?>> result = new ArrayList<>();
        Map<String, List<Map<?,?>>> map = new HashMap<>();
        map.put("seatAvgContent", reviewSeatRepository.reviewSeatScore(seatNum));
        System.out.println(map);
        for(int i = 0; i < map.size(); i++){
            result.add(map);
        }
        return result;
    }

    // 마이페이지 좌석 후기 view
    public List<ReviewSeatDTO> getSeatReviewList(Member member) {
        List<ReviewSeatDTO> reviewSeatDTOS = new ArrayList<>();
        List<ReviewSeat> reviewSeatList = reviewSeatRepository.findByMember(member);
        for(ReviewSeat e : reviewSeatList) {
            ReviewSeatDTO reviewSeatDTO = new ReviewSeatDTO();
            reviewSeatDTO.setTheaterName(e.getTheater().getTheaterName()); // 공연장 이름
            reviewSeatDTO.setSeatNum(e.getSeatNum()); // 좌석 번호
            reviewSeatDTO.setScoreAvgSeat(e.getScoreAvgSeat()); // 평균 총평 별점
            reviewSeatDTO.setScoreSeat(e.getScoreSeat()); // 좌석 별점
            reviewSeatDTO.setScoreView(e.getScoreView()); // 시야 별점
            reviewSeatDTO.setScoreSound(e.getScoreSound()); // 음향 별점
            reviewSeatDTO.setScoreLight(e.getScoreLight()); // 조명 별점
            reviewSeatDTO.setReviewSeTxt(e.getReviewSeTxt()); // 뮤지컬 총평 후기 텍스트
            reviewSeatDTO.setWriteDate(e.getWriteDate()); // 작성일
            reviewSeatDTOS.add(reviewSeatDTO);
        }
        return reviewSeatDTOS;
    }

    // 좌석 후기 삭제
    public void deleteReviewSeat(int userNum, int seatNum){
        ReviewSeat reviewSeat = new ReviewSeat();
        System.out.println("userNum : " + userNum);
        System.out.println("seatNum : " + seatNum);
        reviewSeatRepository.deleteSeatReview(userNum, seatNum);
    }



}