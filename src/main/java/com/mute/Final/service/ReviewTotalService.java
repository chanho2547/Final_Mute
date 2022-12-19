package com.mute.Final.service;
import com.mute.Final.dto.ReviewTotalAvgDTO;
import com.mute.Final.dto.ReviewTotalDTO;
import com.mute.Final.entity.Musical;
import com.mute.Final.entity.ReviewTotal;
import com.mute.Final.entity.ReviewTotalAvg;
import com.mute.Final.repository.ReviewTotalAvgRepository;
import com.mute.Final.repository.ReviewTotalRepository;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.stereotype.Service;

import javax.transaction.Transactional;
import java.util.ArrayList;
import java.util.List;

@Service
@Slf4j
@Transactional
@RequiredArgsConstructor
public class ReviewTotalService {
    private final ReviewTotalRepository reviewTotalRepository;
    private final ReviewTotalAvgRepository reviewTotalAvgRepository;

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


    // 뮤지컬 총평 후기 view - 도연
    public List<ReviewTotalDTO> totalList(Musical musicalId) {
        List<ReviewTotalDTO> reviewTotalDTOS = new ArrayList<>();
        List<ReviewTotal> totalList = reviewTotalRepository.findByMusicalId(musicalId);
        for(ReviewTotal e : totalList) {
            ReviewTotalDTO reviewTotalDTO = new ReviewTotalDTO();
            reviewTotalDTO.setReviewMuId(e.getReviewMuId()); // 총평 후기 글 번호
            reviewTotalDTO.setMusicalId(e.getMusicalId().getMusicalId()); // 뮤지컬 아이디
            reviewTotalDTO.setMember(e.getMember().getUserId()); // 회원 아이디
            reviewTotalDTO.setScoreAvgTotal(e.getScoreAvgTotal()); // 평균 총평 별점
            reviewTotalDTO.setScoreStory(e.getScoreStory()); // 스토리 별점
            reviewTotalDTO.setScoreDirect(e.getScoreDirect()); // 연출 별점
            reviewTotalDTO.setScoreCast(e.getScoreCast()); // 캐스팅 별점
            reviewTotalDTO.setScoreNumber(e.getScoreNumber()); // 넘버 별점
            reviewTotalDTO.setReviewMuTxt(e.getReviewMuTxt()); // 뮤지컬 총평 후기 텍스트
            reviewTotalDTO.setWriteDate(e.getWriteDate()); // 작성일
            reviewTotalDTOS.add(reviewTotalDTO);
        }
        return reviewTotalDTOS;

    }

    // 뮤지컬별 총 평균 별점 - 도연
    public List<ReviewTotalAvgDTO> totalAvgList(int musicalId) {
        List<ReviewTotalAvgDTO> reviewTotalAvgDTOS = new ArrayList<>();
        List<ReviewTotalAvg> reviewTotalAvgList = reviewTotalAvgRepository.findAvg();
        for (ReviewTotalAvg e : reviewTotalAvgList) {
            ReviewTotalAvgDTO reviewTotalAvgDTO = new ReviewTotalAvgDTO();
            reviewTotalAvgDTO.setMusicalId(e.getMusicalId()); // 뮤지컬 아이디
            reviewTotalAvgDTO.setAvgStory(e.getAvgStory()); // 스토리 별점
            reviewTotalAvgDTO.setAvgDirect(e.getAvgDirect()); // 연출 별점
            reviewTotalAvgDTO.setAvgCast(e.getAvgCast()); // 캐스팅 별점
            reviewTotalAvgDTO.setAvgNumber(e.getAvgNumber()); // 넘버 별점
            reviewTotalAvgDTO.setAvgAllTotal(e.getAvgAllTotal()); // 평균 좌석 별점
            reviewTotalAvgDTOS.add(reviewTotalAvgDTO);
        }
        return reviewTotalAvgDTOS;
    }
}
