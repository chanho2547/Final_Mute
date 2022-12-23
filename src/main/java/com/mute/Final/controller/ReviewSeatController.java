package com.mute.Final.controller;

import com.mute.Final.dto.ReviewSeatAvgDTO;
import com.mute.Final.dto.ReviewSeatDTO;
import com.mute.Final.dto.ReviewTotalDTO;
import com.mute.Final.entity.Member;
import com.mute.Final.entity.ReviewSeat;
import com.mute.Final.entity.ReviewSeatAvg;

import com.mute.Final.repository.ReviewSeatRepository;
import com.mute.Final.service.ReviewSeatService;
import org.springframework.http.HttpStatus;
import org.springframework.data.jpa.repository.Query;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import java.util.ArrayList;
import java.util.List;
import java.util.Map;

@RestController
public class ReviewSeatController {
    // Service 로직 연결
    private ReviewSeatService reviewSeatService;
    public  ReviewSeatController(ReviewSeatService reviewSeatService) {
        this.reviewSeatService = reviewSeatService;
    }

    // 좌석번호별 개인 후기 전체 조회
    @GetMapping("/reviewSeat/each")
    public ResponseEntity<List<ReviewSeatDTO>> reviewSeat(@RequestParam int seatNum) {
        List<ReviewSeatDTO> list = reviewSeatService.getReviewSeatEachList(seatNum);
        return new ResponseEntity(list, HttpStatus.OK);
    }

    // 좌석번호별 color
    @GetMapping("/reviewSeat/all")
    public ResponseEntity<List<ReviewSeatAvg>> reviewSeatAvgTest() {
        List<ReviewSeatAvgDTO> list = reviewSeatService.getReviewAvgList();
        return new ResponseEntity(list,HttpStatus.OK);
    }

    // 좌석번호별 평균 조회
    @GetMapping("/reviewSeat/avg")
    public ResponseEntity<List<?>> getReviewSeatAvg(@RequestParam int seatNum) {
        List<?> list = reviewSeatService.getReviewSeatAvg(seatNum);
        return new ResponseEntity<>(list, HttpStatus.OK);
    }

    // 마이페이지 회원별 리뷰
    @GetMapping("/reviewSeat/mypage")
    public ResponseEntity<List<ReviewSeatDTO>> getSeatReviewList(Member member) {
        List<ReviewSeatDTO> list = reviewSeatService.getSeatReviewList(member);
        return new ResponseEntity(list, HttpStatus.OK);
    }

    @DeleteMapping("/reviewSeat/delete")
    public boolean deleteReviewSeat(@RequestParam Map<String, String> reviewSeatData) {
        int userNum = Integer.parseInt(reviewSeatData.get("userNum"));
        String seatNum = reviewSeatData.get("seatNum");
        reviewSeatService.deleteReviewSeat(userNum, Integer.parseInt(seatNum));
        return true;
    }


}





