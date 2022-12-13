package com.mute.Final.controller;
import com.mute.Final.dto.ReviewSeatAvgDTO;
import com.mute.Final.dto.ReviewTotalAvgDTO;
import com.mute.Final.dto.ReviewTotalDTO;
import com.mute.Final.entity.ReviewSeatAvg;
import com.mute.Final.entity.ReviewTotal;
import com.mute.Final.entity.ReviewTotalAvg;
import com.mute.Final.service.ReviewTotalService;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;
import java.util.ArrayList;
import java.util.List;

@RestController
public class ReviewTotalController {
    private ReviewTotalService reviewTotalService;
    public ReviewTotalController(ReviewTotalService reviewTotalService) {
        this.reviewTotalService = reviewTotalService;
    }

    @GetMapping("/reviewMusical/starRanking")
    public ResponseEntity<List<ReviewTotalDTO>> reviewMusical() {
        List<ReviewTotalDTO> list = reviewTotalService.searchTopStar();
        return new ResponseEntity(list, HttpStatus.OK);
    }

    // 뮤지컬 총평 후기 view
    @GetMapping("/totalView")
    public ResponseEntity<List<ReviewTotalDTO>> totalView(@RequestParam int musicalId) {
        List<ReviewTotalDTO> list = reviewTotalService.totalList(musicalId);
        return new ResponseEntity(list, HttpStatus.OK);
    }


//    // 뮤지컬별 평균 별점 조회
//    @GetMapping("/TotalView")
//    public ResponseEntity<List<ReviewTotalDTO>> reviewTotal() {
//        int count = 1;
//        List<ReviewTotalDTO> reviewTotalDTOS = new ArrayList<>();
//        for(int i = 1 ; i < 100 ; i++) {
//            double totalScore = 0;
//            double totalStory = 0;
//            double totalDirect = 0;
//            double totalCast = 0;
//            double totalNumber = 0;
//            if(reviewTotalService.getReviewTotalList(i).size() > 0) {
//                List<ReviewTotalDTO> list = reviewTotalService.getReviewTotalList(i);
//                ReviewTotalDTO reviewTotalDTO = new ReviewTotalDTO();
//                count = 0;
//                for(ReviewTotalDTO e : list) {
//                    reviewTotalDTO.setMusicalId(e.getMusicalId()); // 뮤지컬 번호
//                    totalScore += e.getScoreAvgTotal(); // 뮤지컬별 개인 평균 별점 누적
//                    totalStory += e.getScoreStory(); // 뮤지컬별 개인 스토리 별점 누적
//                    totalDirect += e.getScoreDirect(); // 뮤지컬별 연출 뷰 별점 누적
//                    totalCast += e.getScoreCast(); // 뮤지컬별 개인 캐스팅 별점 누적
//                    totalNumber += e.getScoreNumber(); // 뮤지컬별 개인 넘버 별점 누적
//                    count ++;
//                    reviewTotalDTO.setAvgMuAll(totalScore/count);
//                    reviewTotalDTO.setAvgStory(totalStory/count);
//                    reviewTotalDTO.setAvgDirect(totalDirect/count);
//                    reviewTotalDTO.setAvgCast(totalCast/count);
//                    reviewTotalDTO.setAvgNumber(totalNumber/count);
//                    reviewTotalDTO.setReviewMuCnt(count);
//                }
//                reviewTotalDTOS.add(reviewTotalDTO);
//            }
//        }
//        return new ResponseEntity<>(reviewTotalDTOS, HttpStatus.OK);
//    }
}
