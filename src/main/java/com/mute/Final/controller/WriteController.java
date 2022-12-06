package com.mute.Final.controller;
import com.mute.Final.service.WriteService;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

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
    // 좌석 후기 작성
//    @PostMapping("/writeSeat")
    // 좌석 후기 삭제
//    @PostMapping("/deleteReview")

}
