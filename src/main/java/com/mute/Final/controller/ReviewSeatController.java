//package com.mute.Final.controller;
//
//import com.mute.Final.dto.ReviewSeatAvgDTO;
//import com.mute.Final.dto.ReviewSeatDTO;
//import com.mute.Final.entity.ReviewSeat;
//import com.mute.Final.service.ReviewSeatService;
//import org.springframework.http.HttpStatus;
//import org.springframework.data.jpa.repository.Query;
//import org.springframework.http.ResponseEntity;
//import org.springframework.web.bind.annotation.*;
//
//import java.util.ArrayList;
//import java.util.List;
//
//@CrossOrigin(origins = "http://localhost:3000")
//@RestController
//public class ReviewSeatController {
//    // Service 로직 연결
//    private ReviewSeatService reviewSeatService;
//    public  ReviewSeatController(ReviewSeatService reviewSeatService) {
//        this.reviewSeatService = reviewSeatService;
//    }
//
//    // 좌석번호별 개인 후기 전체 조회
//    @GetMapping("/reviewSeat/each")
//    public ResponseEntity<List<ReviewSeatDTO>> reviewSeat(@RequestParam int seatNum) {
//        List<ReviewSeatDTO> list = reviewSeatService.getReviewSeatList(seatNum);
//        return new ResponseEntity(list, HttpStatus.OK);
//    }
//
//    // 좌석번호별 평균 별점 조회
//    @GetMapping("/reviewSeat/avg")
//    public ResponseEntity<List<ReviewSeatDTO>> reviewSeatAvg() {
//        int count = 1;
//        List<ReviewSeatDTO> reviewSeatDTOS = new ArrayList<>();
//        for(int i=8000 ; i<11000 ; i++) {
//            double totalScore = 0;
//            if(reviewSeatService.getReviewSeatList(i).size() > 0) {
//                totalScore = 0;
//                List<ReviewSeatDTO> list = reviewSeatService.getReviewSeatList(i);
//                ReviewSeatDTO reviewSeatDTO = new ReviewSeatDTO();
//                count = 0;
//                for(ReviewSeatDTO e : list) {
//                    reviewSeatDTO.setSeatId(e.getSeatId());
//                    totalScore += e.getScoreAvg();
//                    reviewSeatDTO.setScoreAvg(totalScore);
//                    count ++;
//                }
//                reviewSeatDTO.setScoreAvg(totalScore/count);
//                reviewSeatDTOS.add(reviewSeatDTO);
//            }
//        }
//        return new ResponseEntity<>(reviewSeatDTOS, HttpStatus.OK);
//    }
//
//}