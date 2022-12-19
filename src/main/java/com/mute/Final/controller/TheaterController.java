package com.mute.Final.controller;

import com.mute.Final.dto.TheaterDTO;
import com.mute.Final.service.TheaterDetailApiService;
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
    private final TheaterDetailApiService theaterDetailApiService;

    // (value="theaterName", required=false)
    // 공연장 검색
    @GetMapping("/theater/search")
    public ResponseEntity<List<TheaterDTO>> theaterSearch(@RequestParam(value="theaterName") String theaterName) {
        System.out.println("극장 이름 : " + theaterName);
        List<TheaterDTO> list = theaterService.searchTheaterList(theaterName);
        return new ResponseEntity(list, HttpStatus.OK);
    }


    // 선택한 극장 상세정보 불러오기
    @GetMapping("/theater/{mt10id}")
    public List<TheaterDTO> getTheaterDetail(@PathVariable String mt10id) {
        String result = theaterDetailApiService.TheaterDetailApi(mt10id);
        return theaterDetailApiService.detailFromJsonObj(result);
    }

}
