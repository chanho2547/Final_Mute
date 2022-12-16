package com.mute.Final.controller;
import com.mute.Final.service.WriteService;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import java.util.Map;

// 후기 등록 - 도연

@RestController
@RequestMapping(value = "/review", method = RequestMethod.POST)
public class WriteController {
    // Service 로직 연결
    private WriteService writeService;

    public WriteController(WriteService writeService) {
        this.writeService = writeService;
    }

    // 총평 후기 작성
    @PostMapping("/writeTotal")
    public ResponseEntity<Boolean> writeTotal(@RequestBody Map<String, String> writeTotalData) {
        String userNum = writeTotalData.get("userNum");
        String musicalId = writeTotalData.get("musicalId");
        String scoreStory = writeTotalData.get("scoreStory");
        String scoreDirect = writeTotalData.get("scoreDirect");
        String scoreCast = writeTotalData.get("scoreCast");
        String scoreNumber = writeTotalData.get("scoreNumber");
        String scoreAvgTotal = writeTotalData.get("scoreAvgTotal");
        String reviewMuTxt = writeTotalData.get("reviewMuTxt");
        System.out.println(reviewMuTxt);

        boolean result = writeService.writeTotal(userNum, musicalId, scoreStory, scoreDirect, scoreCast, scoreNumber, scoreAvgTotal, reviewMuTxt);
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
        String member = writeSeatData.get("member");
        String musicalId = writeSeatData.get("musicalId");
        String scoreSeat = writeSeatData.get("scoreSeat");
        String scoreView = writeSeatData.get("scoreView");
        String scoreSound = writeSeatData.get("scoreSound");
        String scoreLight = writeSeatData.get("scoreLight");
        String scoreAvgSeat = writeSeatData.get("scoreAvgSeat");
        String reviewSeTxt = writeSeatData.get("reviewSeTxt");

        boolean result = writeService.writeSeat(member, musicalId, scoreSeat, scoreView, scoreSound, scoreLight, scoreAvgSeat, reviewSeTxt);
        if(result) {
            return new ResponseEntity(true, HttpStatus.OK);
        }
        else {
            return new ResponseEntity(false, HttpStatus.BAD_REQUEST);
        }

    }
}