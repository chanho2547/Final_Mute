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

    // 뮤지컬 TOP3 별점 순 조회 // 뮤지컬아이디, 뮤지컬이름, 전체 평균 별점, 총평 후기 개수, 공연 기간, 공연장소
//    public List<ReviewTotalAvgDTO> searchTopStar() {
//        List<ReviewTotalAvgDTO> reviewTotalAvgDTOS = new ArrayList<>();
//        List<ReviewTotalAvg> reviewTotalAvgList = reviewTotalAvgRepository.findTop3();
//        //
//        for(ReviewTotalAvg e : reviewTotalAvgList) {
//            ReviewTotalAvgDTO reviewTotalAvgDTO = new ReviewTotalAvgDTO();
//            reviewTotalAvgDTO.setMusicalId(e.getMusicalId()); // 뮤지컬 아이디
//            reviewTotalAvgDTO.setAvgAllTotal(e.getAvgAllTotal()); // 뮤지컬 평점
//            reviewTotalAvgDTO.setReviewCnt(e.getReviewCnt()); // 뮤지컬 총평 후기 개수
//            // 지금 추가로 뮤지컬 테이블에서 뮤지컬 이름, 공연 기간, 공연 장소 필요
//            // 현재 문제점 reviewTotalAvgRepository 엔티티 수정못함,, 다시 쿼리 날리기
////            reviewTotalAvgDTO.setTheaterName();
////            reviewTotalAvgDTO.setMusicalStart();
////            reviewTotalAvgDTO.setMusicalEnd();
//        }
//        return reviewTotalAvgDTOS;
//    }


    // 뮤지컬 총평 후기 view - 도연
    public List<ReviewTotalDTO> totalList(Musical musicalId) {
        List<ReviewTotalDTO> reviewTotalDTOS = new ArrayList<>();
        List<ReviewTotal> totalList = reviewTotalRepository.findByMusicalId(musicalId);
        for(ReviewTotal e : totalList) {
            ReviewTotalDTO reviewTotalDTO = new ReviewTotalDTO();
            reviewTotalDTO.setReviewMuId(e.getReviewMuId()); // 총평 후기 글 번호
            reviewTotalDTO.setMusicalId(e.getMusicalId().getMusicalId()); // 뮤지컬 아이디
            reviewTotalDTO.setMember(e.getMember().getUserId().replaceAll("(?<=.{2}).", "*")); // 회원 아이디
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

//    // 뮤지컬별 총 평균 별점 - 도연
//    public List<ReviewTotalAvgDTO> totalAvgList(int musicalId) {
//        List<ReviewTotalAvgDTO> reviewTotalAvgDTOS = new ArrayList<>();
//        List<ReviewTotalAvg> reviewTotalAvgList = reviewTotalAvgRepository.findAvg();
//        for (ReviewTotalAvg e : reviewTotalAvgList) {
//            ReviewTotalAvgDTO reviewTotalAvgDTO = new ReviewTotalAvgDTO();
//            reviewTotalAvgDTO.setMusicalId(e.getMusicalId()); // 뮤지컬 아이디
//            reviewTotalAvgDTO.setAvgStory(e.getAvgStory()); // 스토리 별점
//            reviewTotalAvgDTO.setAvgDirect(e.getAvgDirect()); // 연출 별점
//            reviewTotalAvgDTO.setAvgCast(e.getAvgCast()); // 캐스팅 별점
//            reviewTotalAvgDTO.setAvgNumber(e.getAvgNumber()); // 넘버 별점
//            reviewTotalAvgDTO.setAvgAllTotal(e.getAvgAllTotal()); // 총 평균 별점
//            reviewTotalAvgDTOS.add(reviewTotalAvgDTO);
//        }
//        return reviewTotalAvgDTOS;
//    }
//}

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
            reviewTotalAvgDTO.setAvgAllTotal(e.getAvgAllTotal()); // 총 평균 별점
            reviewTotalAvgDTOS.add(reviewTotalAvgDTO);
        }
        return reviewTotalAvgDTOS;
    }
}
