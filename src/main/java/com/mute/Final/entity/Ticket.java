package com.mute.Final.entity;

import lombok.Getter;
import lombok.Setter;
import lombok.ToString;
import javax.persistence.*;
import java.sql.Date;
import java.time.LocalDateTime;

@Entity
@Getter @Setter @ToString
@Table
public class Ticket {
    @Id
    @GeneratedValue
    private Long ticketId; // 예매 번호(PK)
    @ManyToOne
    @JoinColumn(name = "musical_id") // 공연 ID(FK)
    private Musical musical;
    @ManyToOne
    @JoinColumn(name = "user_num") // 회원번호(FK)
    private Member member; // Member 객체
    @OneToOne // Payment 엔티티와 일대일 매핑
    @JoinColumn(name = "payment_id") // 결제번호(FK)
    private Payment payment;
    private LocalDateTime ticketDate; // 예매 일시
    private Date seeDate; // 공연 관람일
    private Date seeTime; // 공연 관람시간
    private int seatNum; // 좌석 번호
    private String seatPosition; // 예매한 좌석 위치
}
