package com.mute.Final.dto;

import lombok.Data;

import java.util.Date;

// 뮤지컬 검색 때문에 임시로 생성
// 윤정언니 추가하실꺼 있으시면 편하게 추가하세용!!
@Data
public class MusicalDTO {
    private String musicalId; // 공연 ID(PK)
    private String musicalName; // 공연 이름
    private Date musicalStart; // 공연 시작일
    private Date musicalEnd; // 공연 종료일
    private Date musicalTicketStart; // 티켓 예매 시작일
    private String theaterName; // 공연장 이름
    private String musicalPoster; // 공연 포스터
}
