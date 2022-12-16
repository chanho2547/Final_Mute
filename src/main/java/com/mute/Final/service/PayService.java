package com.mute.Final.service;

import com.mute.Final.dto.PayConfirmDTO;
import com.mute.Final.dto.PayReadyDTO;
import com.mute.Final.entity.Payment;
import lombok.extern.slf4j.Slf4j;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.http.HttpEntity;
import org.springframework.http.HttpHeaders;
import org.springframework.http.MediaType;
import org.springframework.stereotype.Service;
import org.springframework.util.LinkedMultiValueMap;
import org.springframework.util.MultiValueMap;
import org.springframework.web.client.RestClientException;
import org.springframework.web.client.RestTemplate;

import java.io.IOException;
import java.net.URI;
import java.net.URISyntaxException;


@Service
@Slf4j
public class PayService {

    @Value("${api.kakaoAdminKey}")
    private String adminKey;
    private String url = "https://kapi.kakao.com/v1/payment";

    private PayReadyDTO PayReadyDTO;
    private PayConfirmDTO PayConfirmDTO;



    // 결제 준비 요청 단계
    public String PayReady() {

        RestTemplate restTemplate = new RestTemplate();

        // 서버로 요청할 Header
        HttpHeaders headers = new HttpHeaders();
        headers.add("Authorization", "KakaoAK " + adminKey);
//        headers.add("Accept", MediaType.APPLICATION_FORM_URLENCODED_VALUE);
        headers.add("Content-Type", "application/x-www-form-urlencoded;charset=utf-8");

        // 카카오가 요구한 결제 요청값을 담아줄 Body
        MultiValueMap<String, String> params = new LinkedMultiValueMap<>();
        params.add("cid", "TC0ONETIME"); // 가맹점 코드 (필수), 테스트용 고정값
        params.add("partner_order_id", "mute001"); // 가맹점 주문번호 (필수)
        params.add("partner_user_id", "mute"); // 가맹점 회원id (필수)
        params.add("item_name", "뮤지컬이름"); // 상품명 (필수)
        params.add("item_code", "뮤지컬id"); // 상품코드
        params.add("quantity", "1"); // 상품수량 (필수)
        params.add("total_amount", "59000"); // 상품총액 (필수)
        params.add("tax_free_amount", "0"); // 상품 비과세 금액 (필수)
        params.add("approval_url", "http://localhost:8282/pay/success"); // 결제 성공시 url
        params.add("cancel_url", "http://localhost:8282/pay/cancel"); // 결제 취소시 url
        params.add("fail_url", "http://localhost:8282/pay/fail"); // 결제 실패시 url

        // 하나의 map안에 header와 parameter값을 담아줌.
        HttpEntity<MultiValueMap<String, String>> body = new HttpEntity<>(params, headers);

//        try {
            PayReadyDTO = restTemplate.postForObject(url + "/ready", body, PayReadyDTO.class);
            log.info("" + PayReadyDTO);
            log.info(PayReadyDTO.getNext_redirect_pc_url());

            return PayReadyDTO.getNext_redirect_pc_url();
//
//        } catch (Exception e) {
//            e.printStackTrace();
//        } return "/pay";
    }

    // 결제 승인 단계
    public PayConfirmDTO PayInfo(String pg_token) {

        log.info("PayConfirmDTO................");
        log.info("-----------------------------");

        RestTemplate restTemplate = new RestTemplate();

        // 서버로 요청할 Header
        HttpHeaders headers = new HttpHeaders();
        headers.add("Authorization", "KakaoAK " + adminKey);
        headers.add("Content-Type", "application/x-www-form-urlencoded;charset=utf-8");

        // 카카오가 요구한 결제 요청값을 담아줄 Body
        MultiValueMap<String, String> params = new LinkedMultiValueMap<>();
        params.add("cid", "TC0ONETIME");
        params.add("tid", PayReadyDTO.getTid());
        params.add("partner_order_id", "mute001");
        params.add("partner_user_id", "mute");
        params.add("pg_token", pg_token);
        params.add("total_amount", "59000");

        HttpEntity<MultiValueMap<String, String>> body = new HttpEntity<>(params, headers);

        try {
            PayConfirmDTO = restTemplate.postForObject(url + "/approve", body, PayConfirmDTO.class);
            log.info("" + PayConfirmDTO);
            return PayConfirmDTO;
        } catch (Exception e) {
            e.printStackTrace();
        } return null;



    }


}
