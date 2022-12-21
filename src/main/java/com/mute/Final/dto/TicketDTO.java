package com.mute.Final.dto;

import com.mute.Final.entity.Member;
import com.mute.Final.entity.Musical;
import com.mute.Final.entity.Payment;
import lombok.*;

import java.time.LocalDateTime;

@Getter
@Setter
@ToString
@NoArgsConstructor // 기본 생성자를 자동으로 만들어 줌
@AllArgsConstructor
public class TicketDTO {
    private Long ticketId; // 예매 번호(PK)
    private int seatNum; // 좌석 번호
    private String seatPosition; // 예매한 좌석 위치
    private LocalDateTime seeDate; // 공연 관람일
    private LocalDateTime ticketDate; // 예매 일시
    private Long userNum;
    private String musicalId;
    private Long paymentId;
}
