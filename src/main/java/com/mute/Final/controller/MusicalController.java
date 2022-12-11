package com.mute.Final.controller;

import com.mute.Final.dto.MusicalDTO;
import com.mute.Final.service.MusicalApiService;
import com.mute.Final.service.MusicalService;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.format.annotation.DateTimeFormat;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import javax.transaction.Transactional;
import java.util.List;
@RequiredArgsConstructor
@Transactional
@RestController
@Slf4j
public class MusicalController {
    private final MusicalService musicalService;
//    public MusicalController(MusicalService musicalService) {
//        this.musicalService = musicalService;
//    }

// => 윤정언니 내일 말씀드리기!!!!! + 언니꺼 잘 돌아가시는지 확인
    private  final MusicalApiService musicalApiService;
//    public MusicalController(MusicalApiService musicalApiService) {
//        this.musicalApiService = musicalApiService;
//    }


    // 뮤지컬 검색
    @GetMapping("/musical/search")
    public ResponseEntity<List<MusicalDTO>> musicalSearch(@RequestParam String musicalName) {
        List<MusicalDTO> list = musicalService.searchMusicalList(musicalName);
        return new ResponseEntity(list, HttpStatus.OK);
    }

    // 뮤지컬 TOP3 티켓 오픈 빠른 순 조회
    @GetMapping("/musical/ticket/open/before")
    public ResponseEntity<List<MusicalDTO>> musicalTicketAlready() {
        List<MusicalDTO> list = musicalService.searchTopTicket();
        return new ResponseEntity<>(list, HttpStatus.OK);
    }

    // 뮤지컬 TOP3 티켓 오픈 예정 순 조회
    @GetMapping("/musical/ticket/open/after")
    public ResponseEntity<List<MusicalDTO>> musicalTicketOpenStart() {
        List<MusicalDTO> list = musicalService.searchTopTicket2();
        return new ResponseEntity<>(list, HttpStatus.OK);
    }

    // 뮤지컬 목록 api 불러오기
    @GetMapping("/api/list")
    public List<MusicalDTO> getMusicalList() {
        String resultString = musicalApiService.MusicalListApi();
        return musicalApiService.fromJSONtoItems(resultString);
    }


}
