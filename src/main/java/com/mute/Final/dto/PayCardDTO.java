package com.mute.Final.dto;

import lombok.Data;

// 카드 결제 정보
@Data
public class PayCardDTO {
    private String purchase_corp, purchase_corp_code; // 매입 카드사 한글명, 매입 카드사 코드
    private String issuer_corp, issuer_corp_code; // 카드 발급사 한글명, 카드 발급사 코드
    private String bin, card_type, install_month, approved_id, card_mid;
    // 카드 BIN, 카드 타입, 할부 개월 수, 카드사 승인번호, 카드사 가맹점 번호
    private String interest_free_install, card_item_code; // 무이자 할부 여부(Y/N), 카드 상품 코드
}
