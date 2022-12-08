package com.mute.Final.service;

import com.mute.Final.dto.ReviewSeatDTO;
import com.mute.Final.dto.ReviewTotalDTO;
import com.mute.Final.entity.ReviewSeat;
import com.mute.Final.entity.ReviewTotal;
import com.mute.Final.repository.ReviewTotalRepository;
import lombok.extern.slf4j.Slf4j;
import org.springframework.stereotype.Service;

import java.util.ArrayList;
import java.util.List;

@Service
@Slf4j
public class ReviewTotalService {
    private ReviewTotalRepository reviewTotalRepository;
    public ReviewTotalService(ReviewTotalRepository reviewTotalRepository) {
        this.reviewTotalRepository = reviewTotalRepository;
    }

    // 뮤지컬 TOP3 별점 순 조회

    public List<ReviewTotalDTO> searchTopStar() {
        List<ReviewTotalDTO> reviewTotalDTOS = new ArrayList<>();
        List<ReviewTotal> reviewTotalList = reviewTotalRepository.findTopStar();
        for(ReviewTotal e : reviewTotalList) {
            ReviewTotalDTO reviewTotalDTO = new ReviewTotalDTO();

            reviewTotalDTO.setReviewMuId(reviewTotalDTO.getReviewMuId());
            reviewTotalDTO.setReviewMuTxt(reviewTotalDTO.getReviewMuTxt());
            reviewTotalDTO.setReviewMuId(e.getReviewMuId());
            reviewTotalDTO.setReviewMuTxt(e.getReviewMuTxt());
//            reviewTotalDTO.setReviewMuId(e.getReviewMuId());
//            reviewTotalDTO.setMusicalName(e.getMusical().getMusicalName());
//            reviewTotalDTO.setReviewMuCnt(reviewTotalRepository.count());
            reviewTotalDTOS.add(reviewTotalDTO);
        }
        return reviewTotalDTOS;
    }

    // 뮤지컬별 개인 후기 전체 조회 및 평균 별점 조회 - 도연
    public List<ReviewTotalDTO> getReviewTotalList(int musicalId) {
        List<ReviewTotalDTO> reviewTotalDTOS = new ArrayList<>();
        List<ReviewTotal> reviewTotalList = reviewTotalRepository.findByMusicalId(musicalId);
        for (ReviewTotal e : reviewTotalList) {
            ReviewTotalDTO reviewTotalDTO = new ReviewTotalDTO();
//            reviewTotalDTO.setReviewMuId(e.getReviewMuId()); // 총평 후기 글 번호
            reviewTotalDTO.setMusicalId(e.getMusicalId()); // 공연 ID
            reviewTotalDTO.setMember(e.getMember()); // 회원 번호
//            reviewTotalDTO.setWriteDate(e.getWriteDate()); // 작성일
            reviewTotalDTO.setScoreStory(e.getScoreStory()); // 스토리 별점
            reviewTotalDTO.setScoreDirect(e.getScoreDirect()); // 연출 별점
            reviewTotalDTO.setScoreCast(e.getScoreCast()); // 캐스팅 별점
            reviewTotalDTO.setScoreNumber(e.getScoreNumber()); // 넘버 별점
            reviewTotalDTO.setScoreAvgTotal(e.getScoreAvgTotal()); // 평균 좌석 별점
            reviewTotalDTO.setReviewMuTxt(e.getReviewMuTxt()); // 좌석 후기 텍스트
            reviewTotalDTOS.add(reviewTotalDTO);
        }
        return reviewTotalDTOS;
    }






}
