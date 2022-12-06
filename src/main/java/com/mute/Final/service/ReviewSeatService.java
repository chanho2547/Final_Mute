package com.mute.Final.service;
import com.mute.Final.dto.ReviewSeatAvgDTO;
import com.mute.Final.dto.ReviewSeatDTO;
import com.mute.Final.entity.ReviewSeat;
import com.mute.Final.repository.MemberRepository;
import com.mute.Final.repository.ReviewSeatRepository;
import lombok.extern.slf4j.Slf4j;
import org.springframework.stereotype.Service;

import java.util.ArrayList;
import java.util.List;

@Service
@Slf4j
public class ReviewSeatService {
    private ReviewSeatRepository reviewSeatRepository;
    public ReviewSeatService(ReviewSeatRepository reviewSeatRepository) {
        this.reviewSeatRepository = reviewSeatRepository;
    }

    // 좌석번호별 개인 후기 전체 조회
    public List<ReviewSeatDTO> getReviewSeatList(int seatNum) {
        List<ReviewSeatDTO> reviewSeatDTOS = new ArrayList<>();
        List<ReviewSeat> reviewSeatList = reviewSeatRepository.findBySeatNum(seatNum);

        for (ReviewSeat e : reviewSeatList) {
            ReviewSeatDTO reviewSeatDTO = new ReviewSeatDTO();
            reviewSeatDTO.setReviewMuId(e.getReviewSeId());
            reviewSeatDTO.setTheaterId(e.getTheater().getTheaterId()); // 공연장 ID
            reviewSeatDTO.setMusicalId(e.getMusical().getMusicalId()); // 공연 ID
            reviewSeatDTO.setMemberNum(e.getMember().getUserNum()); // 회원 고유 번호
            reviewSeatDTO.setUserId(e.getMember().getUserId());// 회원 ID
            reviewSeatDTO.setSeatId(e.getSeatNum()); // 좌석 번호
            reviewSeatDTO.setWriteDate(e.getWriteDate()); // 작성일
            reviewSeatDTO.setScoreSeat(e.getScoreSeat()); // 좌석 별점
            reviewSeatDTO.setScoreView(e.getScoreView()); // 시야 별점
            reviewSeatDTO.setScoreSound(e.getScoreSound()); // 음향 별점
            reviewSeatDTO.setScoreLight(e.getScoreLight()); // 조명 별점
            double AvgScore = ((double) (e.getScoreSeat() + e.getScoreView() + e.getScoreSound() + e.getScoreLight()) / 4);
            reviewSeatDTO.setScoreAvg(AvgScore); // 개인 평균 별점
            reviewSeatDTO.setReviewSeTxt(e.getReviewSeTxt()); // 좌석 후기 내용
            reviewSeatDTOS.add(reviewSeatDTO);
        }
        return reviewSeatDTOS;
    }

    // 좌석번호별 평균 별점 조회
    public List<ReviewSeatAvgDTO> getReviewSeatAvgList() {
        List<ReviewSeatAvgDTO> reviewSeatAvgDTOS = new ArrayList<>();
        List<ReviewSeat> reviewSeatAvgList = reviewSeatRepository.findAll();
        for (ReviewSeat e : reviewSeatAvgList) {
            ReviewSeatAvgDTO reviewSeatAvgDTO = new ReviewSeatAvgDTO();
            reviewSeatAvgDTO.setTheaterId(e.getTheater().getTheaterId()); // 공연장 ID
            reviewSeatAvgDTO.setTheaterName(e.getTheater().getTheaterName()); // 공연장 이름
            reviewSeatAvgDTO.setSeatId(e.getSeatNum()); // 좌석번호
            double AllAvg = ((double) (e.getScoreSeat() + e.getScoreView() + e.getScoreSound() + e.getScoreLight()) / 4);
            reviewSeatAvgDTO.setAllScoreAvg(AllAvg); // 좌석별 총 평균 별점
            reviewSeatAvgDTOS.add(reviewSeatAvgDTO);
        }
        return reviewSeatAvgDTOS;
    }

}