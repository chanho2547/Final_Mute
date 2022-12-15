package com.mute.Final.dto;

import lombok.Data;
import lombok.RequiredArgsConstructor;

import java.time.LocalDateTime;

@Data
@RequiredArgsConstructor
public class PayReadyDTO {
    private String tid; // 결제고유번호
    private String next_redirect_pc_url;
    // 요청한 클라이언트가 PC 웹일 경우
    // 카카오톡으로 결제 요청 메시지(TMS)를 보내기 위한 사용자 정보 입력 화면 Redirect URL
    private LocalDateTime created_at; // 결제 준비 요청 시간
}
