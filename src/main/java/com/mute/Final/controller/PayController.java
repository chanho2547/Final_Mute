package com.mute.Final.controller;

import com.mute.Final.dto.PayReadyDTO;
import com.mute.Final.service.PayService;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.*;

import java.net.URISyntaxException;

@RequiredArgsConstructor
@Controller // redirect 동작하려면 이걸로!
@Slf4j
public class PayController {

    // 카카오페이 결제 요청
    @Autowired
    private PayService payService;

//    @GetMapping("/pay")
//    public void PayReadyGet() {
//    }
    @GetMapping("/pay")
    public String PayReady() {
        log.info("kakaoPay post..........");
        log.info(payService.PayReady());

        return "redirect:" + payService.PayReady();
        // 클라이언트에 보냄.(tid, next_redirect_pc_url이 담겨있음.)
        // 결제요청하는 카카오페이 qr코드 url로 리다이렉트됨
    }

    // 카카오페이 결제 승인 요청
    @GetMapping("/pay/success")
    public void paySuccess(@RequestParam("pg_token") String pg_token, Model model) {
        log.info("kakaoPaySuccess get..............");
        log.info("kakaoPaySuccess pg_token : " + pg_token);

        // 결제 정보를 모델에 저장함
        model.addAttribute("info", payService.PayInfo(pg_token));
    }

    // 카카오페이 결제 취소시 실행 url
    @GetMapping("/pay/cancel")
    public String payCancel() {
        log.error("결제 취소!!!!!!!!!!!!!");
        return "redirect:/"; //
    }

    // 카카오페이 결제 실패시 실행 url
    @GetMapping("/pay/fail")
    public String payFail() {
        log.error("결제 실패!!!!!!!!!!!!!!");
        return "redirect:/"; //
    }

}
