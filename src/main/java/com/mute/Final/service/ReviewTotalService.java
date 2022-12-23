package com.mute.Final.service;
import com.mute.Final.dto.ReviewTotalDTO;
import com.mute.Final.entity.Member;
import com.mute.Final.entity.Musical;
import com.mute.Final.entity.ReviewTotal;
import com.mute.Final.repository.MusicalRepository;
import com.mute.Final.repository.ReviewTotalRepository;
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
public class ReviewTotalService {
    private final ReviewTotalRepository reviewTotalRepository;
    private final MusicalRepository musicalRepository;

    // 뮤지컬 TOP3 별점 순 조회
    public List<?> getRankingList() {
        List<Map<?,?>> result = new ArrayList<>();
        Map<String, List<Map<?,?>>> map = new HashMap<>();
        map.put("rankingListContent", reviewTotalRepository.reviewTop3());
        System.out.println(map);
        for(int i = 0; i < map.size(); i++){
            result.add(map);
        }
        return result;
    }


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

    // 마이페이지 - 나의 뮤지컬 후기 view - 도연
    public List<ReviewTotalDTO> myTotalList(Member member) {
        List<ReviewTotalDTO> reviewTotalDTOS = new ArrayList<>();
        List<ReviewTotal> myTotalList = reviewTotalRepository.findByMember(member);
        for(ReviewTotal e : myTotalList) {
            ReviewTotalDTO reviewTotalDTO = new ReviewTotalDTO();
            reviewTotalDTO.setReviewMuId(e.getReviewMuId()); // 총평 후기 글 번호
            reviewTotalDTO.setMusicalId(e.getMusicalId().getMusicalId()); // 뮤지컬 아이디
            reviewTotalDTO.setMusicalName(e.getMusicalId().getMusicalName()); // 뮤지컬 제목
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
}
