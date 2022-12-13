package com.mute.Final.controller;

import com.mute.Final.dto.TheaterDTO;
import com.mute.Final.service.TheaterService;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequiredArgsConstructor
@Slf4j
public class TheaterController {
    private final TheaterService theaterService;
// (value="theaterName", required=false)
    // 공연장 검색
    @GetMapping("/theater/search")
    public ResponseEntity<List<TheaterDTO>> theaterSearch(@RequestParam(value="theaterName") String theaterName) {
        System.out.println("극장 이름 : " + theaterName);
        List<TheaterDTO> list = theaterService.searchTheaterList(theaterName);
        return new ResponseEntity(list, HttpStatus.OK);
    }






}
