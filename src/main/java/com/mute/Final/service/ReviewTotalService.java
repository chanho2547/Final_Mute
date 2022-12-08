package com.mute.Final.service;

import com.mute.Final.dto.ReviewTotalDTO;
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






}
