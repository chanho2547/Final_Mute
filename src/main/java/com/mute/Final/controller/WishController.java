package com.mute.Final.controller;

import com.mute.Final.dto.WishDTO;
import com.mute.Final.service.WishService;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@CrossOrigin(origins = "http://localhost:3000")
@RestController
public class WishController {
    // Service 로직 연결
    private WishService wishService;
    public WishController(WishService wishService){
        this.wishService = wishService;
    }

    // ID별 alarm = on 목록 조회
    @GetMapping("/wish/on")
    public ResponseEntity<List<WishDTO>> wish(@RequestParam int userNum) {
        List<WishDTO> list = wishService.getWishList(userNum);
        return new ResponseEntity(list, HttpStatus.OK);
    }

}
