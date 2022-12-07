package com.mute.Final.controller;
import com.mute.Final.service.WriteService;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.Date;
import java.util.Map;

// 좌석 후기 등록 - 도연 작업중..

@CrossOrigin(origins = "http://localhost:3000")
@RestController
@RequestMapping("/review")
public class WriteController {
    // Service 로직 연결
    private WriteService writeService;

    public WriteController(WriteService writeService) {
        this.writeService = writeService;
    }

    // 총평 후기 작성
    @PostMapping("/writeTotal")
    public ResponseEntity<Boolean> writeTotal(@RequestBody Map<String, String> writeTotalData) {
        String scoreStory = writeTotalData.get("scoreStory");
        String scoreDirect = writeTotalData.get("scoreDirect");
        String scoreCast = writeTotalData.get("scoreCast");
        String scoreNumber = writeTotalData.get("scoreNumber");
        String reviewMuTxt = writeTotalData.get("reviewMuTxt");

        boolean result = writeService.writeTotal(scoreStory, scoreDirect, scoreCast, scoreNumber, reviewMuTxt);
        if(result) {
            return new ResponseEntity(true, HttpStatus.OK);
        }
        else {
            return new ResponseEntity(false, HttpStatus.BAD_REQUEST);
        }

    }


    // 좌석 후기 작성
    @PostMapping("/writeSeat")
    public ResponseEntity<Boolean> writeSeat(@RequestBody Map<String, String> writeSeatData) {
        String scoreSeat = writeSeatData.get("scoreSeat");
        String scoreView = writeSeatData.get("scoreView");
        String scoreSound = writeSeatData.get("scoreSound");
        String scoreLight = writeSeatData.get("scoreLight");
        String reviewSeTxt = writeSeatData.get("reviewSeTxt");

        boolean result = writeService.writeSeat(scoreSeat, scoreView, scoreSound, scoreLight, reviewSeTxt);
        if(result) {
            return new ResponseEntity(true, HttpStatus.OK);
        }
        else {
            return new ResponseEntity(false, HttpStatus.BAD_REQUEST);
        }

    }
    // 좌석 후기 삭제
//    @PostMapping("/deleteReview")

}
