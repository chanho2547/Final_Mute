package com.mute.Final.service;

import com.mute.Final.dto.PayConfirmDTO;
import com.mute.Final.dto.PayReadyDTO;
import com.mute.Final.entity.Musical;
import com.mute.Final.entity.Payment;
import com.mute.Final.repository.MusicalRepository;
import lombok.RequiredArgsConstructor;
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
@RequiredArgsConstructor
public class PayService {

    @Value("${api.kakaoAdminKey}")
    private String adminKey; // 카카오 api를 이용하기 위한 admin 키

    private String url = "https://kapi.kakao.com/v1/payment"; // 카카오페이 api 호출주소

    private PayReadyDTO PayReadyDTO;
    private PayConfirmDTO PayConfirmDTO;




    // 결제 준비 요청 단계
    public String PayReady() {

        RestTemplate restTemplate = new RestTemplate();

        // 카카오가 요구한 값을 서버로 요청할 Header
        HttpHeaders headers = new HttpHeaders();
        headers.add("Authorization", "KakaoAK " + adminKey); // 카카오 인증키
        headers.add("Content-Type", "application/x-www-form-urlencoded;charset=utf-8"); // 넘겨줄 타입

        // 카카오가 요구한 결제 요청값을 담아줄 Body
        MultiValueMap<String, String> params = new LinkedMultiValueMap<>();
        params.add("cid", "TC0ONETIME"); // 가맹점 코드 (필수), 테스트용 고정값
        params.add("partner_order_id", "mute001"); // 가맹점 주문번호 (필수)
        params.add("partner_user_id", "mute"); // 가맹점 회원id (필수)
        params.add("item_name", "뮤지컬이름"); // 상품명 (필수) -> 변수받아오기
        params.add("item_code", "뮤지컬id"); // 상품코드 -> 변수받아오기
        params.add("quantity", "1"); // 상품수량 (필수) -> 변수받아오기
        params.add("total_amount", "59000"); // 상품총액 (필수) -> 변수받아오기
        params.add("tax_free_amount", "0"); // 상품 비과세 금액 (필수)
        params.add("approval_url", "http://localhost:8282/PayEnd"); // 결제 성공시 url -> 결제완료페이지
        params.add("cancel_url", "http://localhost:8282/pay/cancel"); // 결제 취소시 url
        params.add("fail_url", "http://localhost:8282/pay/fail"); // 결제 실패시 url

        // 하나의 map안에 header와 parameter값을 담아줌.
        HttpEntity<MultiValueMap<String, String>> body = new HttpEntity<>(params, headers);

        PayReadyDTO = restTemplate.postForObject(url + "/ready", body, PayReadyDTO.class);
        log.info("" + PayReadyDTO);
        log.info(PayReadyDTO.getNext_redirect_pc_url());

        return PayReadyDTO.getNext_redirect_pc_url(); // 요청 후 응답받는 리다이렉트 url을 리턴함
    }

    // 결제 승인 단계
    public PayConfirmDTO PayInfo(String pg_token) {

        log.info("PayConfirmDTO................");

        RestTemplate restTemplate = new RestTemplate();

        // 서버로 요청할 Header
        HttpHeaders headers = new HttpHeaders();
        headers.add("Authorization", "KakaoAK " + adminKey);
        headers.add("Content-Type", "application/x-www-form-urlencoded;charset=utf-8");

        // 카카오가 요구한 결제 승인 요청값을 담아줄 Body
        MultiValueMap<String, String> params = new LinkedMultiValueMap<>();
        params.add("cid", "TC0ONETIME");
        params.add("tid", PayReadyDTO.getTid()); // 결제요청단계에서 받은 tid를 넘겨줌
        params.add("partner_order_id", "mute001");
        params.add("partner_user_id", "mute");
        params.add("pg_token", pg_token); // 결제 승인이 되면 생성되는 토큰을 넘겨줌
        params.add("total_amount", "59000"); // 상품총액 -> 변수받아오기

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
