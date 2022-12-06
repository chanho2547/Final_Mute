package com.mute.Final.entity;

import com.mute.Final.constant.PaymentStatus;
import com.mute.Final.constant.PaymentStatus;
import lombok.Getter;
import lombok.Setter;
import lombok.ToString;
import javax.persistence.*;
import java.time.LocalDateTime;

@Entity
@Table(name = "payment")
@Getter @Setter @ToString
public class Payment {
    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    private Long paymentId; // 결제번호(PK)
    @ManyToOne
    @JoinColumn(name = "user_num")// 회원번호(FK)
    private Member member; // Member 객체
    private String paymentType; // 결제 수단
    private int paymentPrice; // 결제 가격
    private int paymentSale; // 할인 금액
    private int paymentTotal; // 최종 금액
    @Enumerated(EnumType.STRING)
    private PaymentStatus paymentStatus; // 결제 상태(Enum)
    private LocalDateTime paymentDate; // 결제 일시
    private LocalDateTime refundDate; // 환불 일시
    private int paymentCnt; // 구매 수량

}
