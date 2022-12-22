package com.mute.Final.dto;

import lombok.Data;

import java.time.LocalDate;
import java.util.Date;

@Data
public class WishDTO {
    private int userNum; // 회원 고유 번호
    private String userId; // 회원ID
    private String musicalName; // 공연 이름
    private String musicalId; // 공연 고유번호
    private String musicalPoster; // 공연 포스터
    private LocalDate musicalTicketStart; // 티켓 예매 오픈일
    private LocalDate musicalStart; // 공연 시작일
    private LocalDate musicalEnd; // 공연 종료일
    private String alarm; // 알람
}
