package com.mute.Final.controller;

import com.mute.Final.dto.ReviewTotalDTO;
import com.mute.Final.service.ReviewTotalService;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@RestController
public class ReviewTotalController {
    private ReviewTotalService reviewTotalService;
    public ReviewTotalController(ReviewTotalService reviewTotalService) {
        this.reviewTotalService = reviewTotalService;
    }

    @GetMapping("/reviewMusical/avgTop")
    public ResponseEntity<List<ReviewTotalDTO>> reviewMusical() {
        List<ReviewTotalDTO> list = reviewTotalService.searchTopStar();
        return new ResponseEntity(list, HttpStatus.OK);
    }
}
