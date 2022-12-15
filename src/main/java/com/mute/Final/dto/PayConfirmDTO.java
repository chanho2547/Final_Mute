package com.mute.Final.dto;

import lombok.Data;
import lombok.RequiredArgsConstructor;

import java.time.LocalDateTime;

@Data
@RequiredArgsConstructor
public class PayConfirmDTO {
    private String aid, tid, cid, sid; // 요청 고유 번호, 결제 고유 번호, 가맹점 코드, 정기결제용 ID
    private String partner_order_id, partner_user_id, payment_method_type;
    // 가맹점 주문번호, 가맹점 회원 id, 결제수단(CARD/MONEY)
    private PayAmountDTO amount; // 결제 금액 정보
    private PayCardDTO card_info; // 결제 상세 정보 (카드일 경우)
    private String item_name, item_code, payload; // 상품명, 상품코드, 결제 승인요청에 대해 저장한 값(요청 시 전달된 내용)
    private Integer quantity; // 상품수량
    private LocalDateTime created_at, approved_at; // 결제 준비 요청 시각, 결제 승인 시각
}
