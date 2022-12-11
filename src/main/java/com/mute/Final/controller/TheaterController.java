package com.mute.Final.controller;

import com.mute.Final.dto.TheaterDTO;
import com.mute.Final.service.TheaterService;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@RestController
@RequiredArgsConstructor
@Slf4j
public class TheaterController {
    private final TheaterService theaterService;

    // 공연장 검색
    @GetMapping("/theater/search")
    public ResponseEntity<List<TheaterDTO>> theaterSearch(@RequestParam String theaterName) {
        List<TheaterDTO> list = theaterService.searchTheaterList(theaterName);
        return new ResponseEntity(list, HttpStatus.OK);
    }






}
