package com.mute.Final.dto;

import lombok.Data;

import java.time.LocalDate;
import java.util.Date;

@Data
public class WishDTO {
    private String userId; // 회원ID
    private String musicalName; // 공연 이름
    private LocalDate musicalTicketStart; // 티켓 예매 오픈일
    private String alarm; // 알람
}
