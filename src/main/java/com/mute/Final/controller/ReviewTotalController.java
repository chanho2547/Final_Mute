package com.mute.Final.controller;
import com.mute.Final.dto.ReviewTotalDTO;
import com.mute.Final.entity.Member;
import com.mute.Final.entity.Musical;
import com.mute.Final.service.ReviewTotalService;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@RestController
public class ReviewTotalController {
    private ReviewTotalService reviewTotalService;
    public ReviewTotalController(ReviewTotalService reviewTotalService) {
        this.reviewTotalService = reviewTotalService;
    }

    @GetMapping("/starRanking")
    public ResponseEntity<List<?>> getRankingList() {
        List<?> list = reviewTotalService.getRankingList();
        return new ResponseEntity<>(list, HttpStatus.OK);
    }

    // 뮤지컬 후기 view - 도연
    @GetMapping("/totalView")
    public ResponseEntity<List<ReviewTotalDTO>> totalView(Musical musicalId) {
        List<ReviewTotalDTO> list = reviewTotalService.totalList(musicalId);
        return new ResponseEntity(list, HttpStatus.OK);
    }

    // 마이페이지 - 나의 뮤지컬 후기 view - 도연
    @GetMapping("/myTotalView")
    public ResponseEntity<List<ReviewTotalDTO>> myTotalView(Member member) {
        List<ReviewTotalDTO> list = reviewTotalService.myTotalList(member);
        return new ResponseEntity(list, HttpStatus.OK);
    }
}
