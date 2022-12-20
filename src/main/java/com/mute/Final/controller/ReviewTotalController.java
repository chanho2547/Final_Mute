package com.mute.Final.controller;
import com.mute.Final.dto.ReviewSeatAvgDTO;
import com.mute.Final.dto.ReviewTotalAvgDTO;
import com.mute.Final.dto.ReviewTotalDTO;
import com.mute.Final.entity.Musical;
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

    // 뮤지컬 총평 후기 view - 도연
    @GetMapping("/totalView")
    public ResponseEntity<List<ReviewTotalDTO>> totalView(Musical musicalId) {
        List<ReviewTotalDTO> list = reviewTotalService.totalList(musicalId);
        return new ResponseEntity(list, HttpStatus.OK);
    }

    // 뮤지컬별 평균 별점 - 도연
    @GetMapping("/totalAvg")
    public ResponseEntity<List<ReviewTotalAvgDTO>> totalAvgList() {
        int count = 1;
        List<ReviewTotalAvgDTO> reviewTotalAvgDTOS = new ArrayList<>();
        for(int i = 1 ; i < 100 ; i++) {
            double totalScore = 0;
            double totalStory = 0;
            double totalDirect = 0;
            double totalCast = 0;
            double totalNumber = 0;
            if(reviewTotalService.totalAvgList(i).size() > 0) {
                List<ReviewTotalAvgDTO> list = reviewTotalService.totalAvgList(i);
                ReviewTotalAvgDTO reviewTotalAvgDTO = new ReviewTotalAvgDTO();
                count = 0;
                for(ReviewTotalAvgDTO e : list) {
                    reviewTotalAvgDTO.setMusicalId(e.getMusicalId()); // 뮤지컬 번호
                    totalScore += e.getAvgAllTotal(); // 뮤지컬별 총 평균 별점 누적
                    totalStory += e.getAvgStory(); // 뮤지컬별 스토리 별점 누적
                    totalDirect += e.getAvgDirect(); // 뮤지컬별 연출 별점 누적
                    totalCast += e.getAvgCast(); // 뮤지컬별 캐스팅 별점 누적
                    totalNumber += e.getAvgNumber(); // 뮤지컬별 넘버 별점 누적
                    count ++;
                    reviewTotalAvgDTO.setAvgAllTotal(totalScore/count);
                    reviewTotalAvgDTO.setAvgStory(totalStory/count);
                    reviewTotalAvgDTO.setAvgDirect(totalDirect/count);
                    reviewTotalAvgDTO.setAvgCast(totalCast/count);
                    reviewTotalAvgDTO.setAvgNumber(totalNumber/count);
                    reviewTotalAvgDTO.setReviewCnt(count);
                }
                reviewTotalAvgDTOS.add(reviewTotalAvgDTO);
            }
        }
        return new ResponseEntity<>(reviewTotalAvgDTOS, HttpStatus.OK);
    }
}
