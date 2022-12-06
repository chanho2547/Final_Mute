package com.mute.Final.controller;
import com.mute.Final.dto.MemberDTO;
import com.mute.Final.entity.Member;
import com.mute.Final.service.MemberService;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Map;

@CrossOrigin(origins = "http://localhost:3000")
@RestController
@RequestMapping("/member")
public class MemberController {
    // 로그인 - 도연 작업완료
    private MemberService memberService;
    public MemberController(MemberService memberService) {
        this.memberService = memberService;
    }
    @PostMapping("/login")
    public Integer memberLogin(@RequestBody Map<String, String> loginData) {
        String userId = loginData.get("userId");
        String pwd = loginData.get("pwd");
        System.out.println("아이디 패스워드 확인 : "+userId + " " + pwd);
        Integer result = memberService.loginCheck(userId, pwd);
        return result;
    }

    // 회원가입
    @PostMapping("/signup")
    public ResponseEntity<Map<String, String>> signup(@RequestBody Map<String, String> signupData) {
        String userId = signupData.get("userId");
        String pwd = signupData.get("pwd");
        String name = signupData.get("name");
        String phone = signupData.get("phone");
        String mail = signupData.get("mail");
        boolean result = memberService.signup(userId, pwd, name, phone, mail);
        if(result) {
            return new ResponseEntity(true, HttpStatus.OK);
        } else {
            return new ResponseEntity(false, HttpStatus.BAD_REQUEST);
        }
    }
    // 회원정보 전체 조회
    @GetMapping("/list")
    public ResponseEntity<List<MemberDTO>> memberList() {
        List<MemberDTO> list = memberService.getMemberList();
        return new ResponseEntity(list, HttpStatus.OK);
    }
}

