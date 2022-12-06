package com.mute.Final.entity;

import lombok.Getter;
import lombok.Setter;
import lombok.ToString;

import javax.persistence.*;

@Entity
@Getter @Setter @ToString
@Table(name = "vip_payment")
public class VipPayment {
    @Id
    @GeneratedValue
    private Long indexNum; // pk부여를 위한 인덱스
    @OneToOne
    @JoinColumn(name = "payment_id") //결제번호(FK)
    private Payment payment;
    @OneToOne
    @JoinColumn(name = "vip_user_num") // 유료회원 번호(FK)
    private VipMember vipMember;

}
