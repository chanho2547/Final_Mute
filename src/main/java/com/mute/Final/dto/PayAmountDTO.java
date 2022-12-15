package com.mute.Final.dto;

import lombok.Data;

// 전체 결제 정보
@Data
public class PayAmountDTO {
    private Integer total, tax_free, vat, point, discount;
    // 전체 결제 금액, 비과세 금액, 부과세 금액, 사용한 포인트 금액, 할인 금액
}
