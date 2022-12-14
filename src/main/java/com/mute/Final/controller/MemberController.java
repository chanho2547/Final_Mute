package com.mute.Final.controller;
import com.mute.Final.dto.MemberDTO;
import com.mute.Final.entity.Member;
import com.mute.Final.service.MemberService;
import lombok.extern.slf4j.Slf4j;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Map;

@Slf4j
@RestController
@RequestMapping("/member")
public class MemberController {
    private final MemberService memberService;
    public MemberController(MemberService memberService) {
        this.memberService = memberService;
    }
    // 로그인
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
        try {
            String userId = signupData.get("userId");
            String name = signupData.get("name");
            String pwd = signupData.get("pwd");
            String phone = signupData.get("phone");
            String mail = signupData.get("mail");
            String addr = signupData.get("addr");
            String img = signupData.get("img");
            boolean result = memberService.memberJoin(userId, pwd, name, phone, mail,addr,img);
            log.warn(String.valueOf(result));
            if(result) {
                return new ResponseEntity(true, HttpStatus.OK);
            }
            else {
                log.warn("값이 false");
                return new ResponseEntity(false, HttpStatus.BAD_REQUEST);
            }
        } catch (Exception e) {
            log.warn("Controller 오류");
            return new ResponseEntity(false, HttpStatus.BAD_REQUEST);
        }
    }

    // 회원가입 중복 체크
    @PostMapping("/double_check")
    public ResponseEntity<Boolean> doubleCheck(@RequestBody Map<String, String> checkData) {
        try {
            String uni = checkData.get("uni");
            String type = checkData.get("type");

            boolean result = memberService.doubleCheck(uni, type);
            if(result) {
                return new ResponseEntity(true, HttpStatus.OK);
            }
            else {
                return new ResponseEntity(false, HttpStatus.BAD_REQUEST);
            }
        } catch (Exception e) {
            return new ResponseEntity(false, HttpStatus.BAD_REQUEST);
        }
    }
    // ID 찾기
    @PostMapping("/find_id")
    public ResponseEntity<List<MemberDTO>> findId(@RequestBody Map<String, String> find) {
        String uni = find.get("uni");
        String name = find.get("name");
        String type = find.get("type");

        MemberDTO memberDTO = memberService.findId(uni, name, type);
        if(memberDTO.isOk()) return  new ResponseEntity(memberDTO, HttpStatus.OK);
        else return new ResponseEntity(false, HttpStatus.BAD_REQUEST);
    }

    // PWD 찾기
    @PostMapping("/find_pwd")
    public ResponseEntity<Boolean> findPwd(@RequestBody Map<String, String> find) {
        String userId = find.get("userId");
        String mail = find.get("mail");

        boolean result = memberService.findPw(userId, mail);
        if(result == true) return  new ResponseEntity(true, HttpStatus.OK);
        else return new ResponseEntity(false, HttpStatus.BAD_REQUEST);
    }
    // 비밀번호 재설정
    @PostMapping("/re_pwd")
    public ResponseEntity<Boolean> memberNewPwd(@RequestBody Map<String, String> newPwd) {
        String userId = newPwd.get("userId");
        String pwd = newPwd.get("pwd");

        log.error("userId : " + userId);
        log.error("pwd : " + pwd);

        boolean result = memberService.regNewPwd(userId, pwd);
        if(result) {
            return new ResponseEntity(true, HttpStatus.OK);
        }
        else {
            return new ResponseEntity(false, HttpStatus.BAD_REQUEST);
        }
    }

    // 회원정보 전체 조회
    @GetMapping("/list")
    public ResponseEntity<List<MemberDTO>> memberList() {
        List<MemberDTO> list = memberService.getMemberList();
        return new ResponseEntity(list, HttpStatus.OK);
    }

//    // 회원 탈퇴
//    @PostMapping("/delete")
//    public ResponseEntity<Boolean> memberDelete(@RequestBody Map<String, Long> delete) {
//        Long userNum = delete.get("userNum");
//        log.error(String.valueOf(userNum));
//        boolean member = memberService.deleteMem(userNum);
//        log.error(String.valueOf(member));
//        if(member) {
//            return new ResponseEntity(true,HttpStatus.OK);
//        } else {
//            return new ResponseEntity(false, HttpStatus.OK);
//        }
//    }
    // 회원 탈퇴
    @PostMapping("delete")
    public ResponseEntity<Boolean> memberDelete(@RequestBody Map<String, String> delete) {
        String userId = delete.get("userId");
        boolean member = memberService.deleteMem(userId);
        if(member) {
            return new ResponseEntity(true,HttpStatus.OK);
        } else {
            return new ResponseEntity(false, HttpStatus.BAD_REQUEST);
        }
    }



    // 아이디 (userId) 입력 -> 회원번호 (userNum) 반환
    @PostMapping("/id_to_num")
    public ResponseEntity<Long> memberNumInfo(@RequestBody Map<String, String> userId) {
        String id = userId.get("userId");
        Long result = memberService.findByUserId(id);
        return new ResponseEntity<>(result,HttpStatus.OK);
//        if(memberDTO.isOk()) return  new ResponseEntity(memberDTO, HttpStatus.OK);
//        else return new ResponseEntity(false, HttpStatus.OK);
    }

}

