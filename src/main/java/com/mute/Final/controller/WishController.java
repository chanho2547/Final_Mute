package com.mute.Final.controller;

import com.mute.Final.dto.WishDTO;
import com.mute.Final.entity.Member;
import com.mute.Final.service.WishService;
import lombok.extern.slf4j.Slf4j;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import java.util.List;
import java.util.Map;

@Slf4j
@RestController
public class WishController {
    // Service 로직 연결
    private WishService wishService;
    public WishController(WishService wishService){
        this.wishService = wishService;
    }

    // mypage 찜 목록 Select
    @GetMapping("/wish/select/all")
    public ResponseEntity<List<WishDTO>> wishSelectAll(Member member) {
        List<WishDTO> list = wishService.getWishListALl(member);
        return new ResponseEntity(list, HttpStatus.OK);
    }

    // wishTop Select
    @GetMapping("/wish/select/top")
    public ResponseEntity<List<?>> getWishTopList() {
        List<?> list = wishService.getWishTopList();
        return new ResponseEntity<>(list, HttpStatus.OK);
    }


    // ID별 alarm = "on", date 비교 Select
    @GetMapping("/wish/select")
    public ResponseEntity<List<?>> getWishOnList(@RequestParam int userNum) {
        List<?> list = wishService.getWishOnList(userNum);
        return new ResponseEntity<>(list, HttpStatus.OK);
    }

    // Wish 데이터 Insert
    @PostMapping("/wish/insert")
    public ResponseEntity<Boolean> wishInsert(@RequestBody Map<String, String> wishData) {
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

    // Wish 데이터 Update
    @PostMapping("/wish/update")
    public ResponseEntity<Boolean> wishUpdate(@RequestBody Map<String, String> wishData) {
        String userNum = wishData.get("userNum");
        String musicalId = wishData.get("musicalId");
        boolean result = wishService.updateAlarm(Integer.parseInt(userNum), musicalId);
        if(result) {
            return new ResponseEntity(true, HttpStatus.OK);
        }
        else {
            return new ResponseEntity(false, HttpStatus.BAD_REQUEST);
        }
    }

    // Wish 데이터 Delete
    @DeleteMapping("/wish/delete")
    public boolean wishDelete(@RequestParam Map<String, String> wishData) {
        String userNum = wishData.get("userNum");
        String musicalId = wishData.get("musicalId");
        wishService.deleteAlarm(Integer.parseInt(userNum), musicalId);
        return true;
    }
}
