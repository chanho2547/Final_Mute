package com.mute.Final.controller;

import com.mute.Final.service.PayService;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import java.net.URISyntaxException;

@RequiredArgsConstructor
@RestController
@Slf4j
public class PayController {
    private final PayService payService;

//    @GetMapping("/kakaoPay")
//    public void kakaoPayGet() {
//    }

    // 카카오페이 결제 요청
    @GetMapping("/pay")
    public String kakaoPay() throws URISyntaxException {
        log.info("kakaoPay post..........");
        return "redirect:" + payService.PayReady();
        // tid, next_redirect_pc_url이 담겨있는 걸 클라이언트에 보냄
    }

    // 카카오페이 결제 승인 요청
    @GetMapping("/pay/success")
    public String paySuccess(@RequestParam("pg_token") String pg_token, Model model) throws URISyntaxException {
        log.info("kakaoPaySuccess get..............");
        log.info("kakaoPaySuccess pg_token : " + pg_token);

        // 결제 정보를 모델에 저장함
        model.addAttribute("info", payService.PayInfo(pg_token));
        return "redirect:/";
    }

    // 카카오페이 결제 취소시 실행 url
    @GetMapping("/pay/cancel")
    public String payCancel() {
        log.error("결제 취소!!!!!!!!!!!!!");
        return "redirect:/"; // 일단 홈으로
    }

    // 카카오페이 결제 실패시 실행 url
    @GetMapping("/pay/fail")
    public String payFail() {
        log.error("결제 실패!!!!!!!!!!!!!!");
        return "redirect:/"; // 일단 홈으로
    }

}
