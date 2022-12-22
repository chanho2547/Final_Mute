package com.mute.Final.controller;

import com.mute.Final.dto.ReviewSeatAvgDTO;
import com.mute.Final.dto.ReviewSeatDTO;
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
        List<ReviewSeatDTO> list = reviewSeatService.getReviewSeatList(seatNum);
        return new ResponseEntity(list, HttpStatus.OK);
    }

    @GetMapping("/reviewSeat/all")
    public ResponseEntity<List<ReviewSeatAvg>> reviewSeatAvgTest() {
        List<ReviewSeatAvgDTO> list = reviewSeatService.getReviewAvgList();
        return new ResponseEntity(list,HttpStatus.OK);
    }

    @GetMapping("/reviewSeat/avg")
    public ResponseEntity<List<?>> getReviewSeatAvg(@RequestParam int seatNum) {
        List<?> list = reviewSeatService.getReviewSeatAvg(seatNum);
        return new ResponseEntity<>(list, HttpStatus.OK);
    }

    // 좌석번호별 총 평균 별점, 평균 좌석 별점, 평균 시야 별점, 평균 음향 별점, 평균 조명 별점 조회
//    @GetMapping("/reviewSeat/avg")
//    public ResponseEntity<List<ReviewSeatDTO>> reviewSeat() {
//        int count = 1;
//        List<ReviewSeatDTO> reviewSeatDTOS = new ArrayList<>();
//        for(int i=8000 ; i<11000 ; i++) {
//            double totalScore = 0;
//            double totalSeat = 0;
//            double totalView = 0;
//            double totalSound = 0;
//            double totalLight = 0;
//            if(reviewSeatService.getReviewSeatList(i).size() > 0) {
//                List<ReviewSeatDTO> list = reviewSeatService.getReviewSeatList(i);
//                ReviewSeatDTO reviewSeatDTO = new ReviewSeatDTO();
//                count = 0;
//                for(ReviewSeatDTO e : list) {
//                    reviewSeatDTO.setSeatId(e.getSeatId()); // 좌석 번호
//                    totalScore += e.getScoreAvgSeat(); // 좌석별 개인 평균 별졈 누적
//                    totalSeat += e.getScoreSeat(); // 좌석별 개인 좌석 별점 누적
//                    totalView += e.getScoreView(); // 좌석별 개인 뷰 별점 누적
//                    totalSound += e.getScoreSound(); // 좌석별 개인 음향 별점 누적
//                    totalLight += e.getScoreLight(); // 좌석별 개인 조명 별점 누적
//                    count ++;
//                    reviewSeatDTO.setAvgSeAll(totalScore/count);
//                    reviewSeatDTO.setAvgSeat(totalSeat/count);
//                    reviewSeatDTO.setAvgView(totalView/count);
//                    reviewSeatDTO.setAvgSound(totalSound/count);
//                    reviewSeatDTO.setAvgLight(totalLight/count);
//                    reviewSeatDTO.setReviewSeCnt(count);
//                }
//                reviewSeatDTOS.add(reviewSeatDTO);
//            }
//        }
//        return new ResponseEntity<>(reviewSeatDTOS, HttpStatus.OK);
//    }






}





