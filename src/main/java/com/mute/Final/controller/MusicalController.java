package com.mute.Final.controller;

import com.mute.Final.dto.MusicalDTO;
import com.mute.Final.dto.MusicalDetailDTO;
import com.mute.Final.service.MusicalApiService;
import com.mute.Final.service.MusicalDetailApiService;
import com.mute.Final.service.MusicalService;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import javax.transaction.Transactional;
import java.util.List;

@RequiredArgsConstructor
@Transactional
@RestController
@Slf4j
public class MusicalController {
    private final MusicalService musicalService;
    private final MusicalApiService musicalApiService;
    private final MusicalDetailApiService musicalDetailApiService;

    // 뮤지컬 검색
    @GetMapping("/musical/search")
    public ResponseEntity<List<MusicalDTO>> musicalSearch(@RequestParam String musicalName) {
        List<MusicalDTO> list = musicalService.searchMusicalList(musicalName);
        return new ResponseEntity(list, HttpStatus.OK);
    }

    // 뮤지컬 TOP3 티켓 오픈 빠른 순 조회
    @GetMapping("/musical/openedMusical")
    public ResponseEntity<List<MusicalDTO>> musicalTicketAlready() {
        List<MusicalDTO> list = musicalService.searchTopTicket();
        return new ResponseEntity<>(list, HttpStatus.OK);
    }

    // 뮤지컬 TOP3 티켓 오픈 예정 순 조회
    @GetMapping("/musical/openBeforeMusical")
    public ResponseEntity<List<MusicalDTO>> musicalTicketOpenStart() {
        List<MusicalDTO> list = musicalService.searchTopTicket2();
        return new ResponseEntity<>(list, HttpStatus.OK);
    }

    // 뮤지컬 목록 api 불러오기
    @GetMapping("/musical/list")
    public List<MusicalDTO> getMusicalList() {
        String resultString = musicalApiService.MusicalListApi();
        return musicalApiService.listFromJsonObj(resultString);
    }

    // 선택한 뮤지컬 상세정보 불러오기
    @GetMapping("/musical/{mt20id}")
    public List<MusicalDetailDTO> getMusicalDetail(@PathVariable String mt20id) {
        String result = musicalDetailApiService.MusicalDetailApi(mt20id);
        return musicalDetailApiService.detailFromJsonObj(result);
    }

    // 전체 뮤지컬 정보 DB에서 불러오기
    @GetMapping("musical/db/list")
    public ResponseEntity<List<MusicalDTO>> getMusicalDBList() {
        List<MusicalDTO> list= musicalService.getMusicalDBList();
        return new ResponseEntity<>(list, HttpStatus.OK);
    }
}
