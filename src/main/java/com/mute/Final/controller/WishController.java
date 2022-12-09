package com.mute.Final.controller;

import com.mute.Final.constant.AlarmStatus;
import com.mute.Final.dto.WishDTO;
import com.mute.Final.service.WishService;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Map;

//@CrossOrigin(origins = "http://localhost:3000")
@RestController
public class WishController {
    // Service 로직 연결
    private WishService wishService;
    public WishController(WishService wishService){
        this.wishService = wishService;
    }

    // ID별 alarm = on Select
    @GetMapping("/wish/on")
    public ResponseEntity<List<WishDTO>> wish(@RequestParam int userNum) {
        List<WishDTO> list = wishService.getWishList(userNum);
        return new ResponseEntity(list, HttpStatus.OK);
    }
    // Wish 데이터 Insert
    @PostMapping("/wish/insert")
    public ResponseEntity<Boolean> wish(@RequestBody Map<String, String> wishData) {
        String userNum = wishData.get("userNum");
        String musicalId = wishData.get("musicalId");
        boolean result = wishService.postWishList(userNum, musicalId);
        if(result) {
            return new ResponseEntity(true, HttpStatus.OK);
        }
        else {
            return new ResponseEntity(false, HttpStatus.BAD_REQUEST);
        }
    }



}
