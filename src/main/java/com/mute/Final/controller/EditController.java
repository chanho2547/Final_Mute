package com.mute.Final.controller;

import com.mute.Final.dto.MemberDTO;
import com.mute.Final.service.EditService;
import lombok.extern.slf4j.Slf4j;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.ArrayList;
import java.util.List;
import java.util.Map;

@RestController
@Slf4j
@RequestMapping("/user")
public class EditController {
    private final EditService editService;
    public EditController(EditService editService) {
        this.editService = editService;
    }
    // 회원 정보 불러오기
    @PostMapping("/userInfo")
    public ResponseEntity<List<Object>> userInfo(@RequestBody Map<String, String> userId) {
        String userId1 = userId.get("userId");
        MemberDTO memberDTO = editService.userInfo(userId1);
        if(memberDTO.isOk()) {
            List<Object> userInfo = new ArrayList<>();
            userInfo.add(memberDTO.getName());
            userInfo.add(memberDTO.getPwd());
            userInfo.add(memberDTO.getMail());
            userInfo.add(memberDTO.getPhone());
            userInfo.add(memberDTO.getAddr());
            //userInfo.add(memberDTO.getProfile());
            userInfo.add(memberDTO.getImg());

            return new ResponseEntity(userInfo, HttpStatus.OK);
        } else return new ResponseEntity(null, HttpStatus.OK);
    }

    // 회원 정보 수정
    @PostMapping("/saveInfo")
    public ResponseEntity<Boolean> userInfoSave(@RequestBody Map<String, String> userInfo) {
        String userId = userInfo.get("userId");
        String name = userInfo.get("name");
        String pwd = userInfo.get("pwd");
        String mail = userInfo.get("mail");
        String phone = userInfo.get("phone");
        //String profile = userInfo.get("profile");
        String addr = userInfo.get("addr");
        log.error("아이디 : " + userId);
        log.error("변경 name : " + name);
        log.error("변경 pwd : " + pwd);
        log.error("변경 mail : " + mail);
        log.error("변경 phone : " + phone);
        log.error("변경 addr : " + addr);

        boolean result = editService.saveUserInfo(userId, name, pwd, mail, phone, addr);
        if(result) {
            return new ResponseEntity(true, HttpStatus.OK);
        } else {
            return new ResponseEntity(false, HttpStatus.OK);
        }
    }

    // 프로필 이미지 수정
    @PostMapping("/editImg")
    public ResponseEntity<Boolean> ImgSave(@RequestBody Map<String, String> userImg) {
        String userId = userImg.get("userId");
        String img = userImg.get("img");

        boolean result = editService.imgEdit(userId,img);
        if(result) {
            return new ResponseEntity(true, HttpStatus.OK);
        } else {
            return new ResponseEntity(false, HttpStatus.OK);
        }
    }
}
