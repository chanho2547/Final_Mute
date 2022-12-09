package com.mute.Final.dto;


import com.fasterxml.jackson.annotation.JsonFormat;
import lombok.Data;
import lombok.RequiredArgsConstructor;
import org.json.simple.JSONObject;
import org.springframework.format.annotation.DateTimeFormat;

import java.util.Date;

// 뮤지컬 검색 때문에 임시로 생성
// 윤정언니 추가하실꺼 있으시면 편하게 추가하세용!!
@Data
@RequiredArgsConstructor
public class MusicalDTO {
    private String musicalId; // 공연 ID(PK)
    private String musicalName; // 공연 이름
    private String theaterName; // 공연장 이름

    @DateTimeFormat(pattern = "yyyy.MM.dd")
    private Date musicalStart; // 공연 시작일
    @DateTimeFormat(pattern = "yyyy.MM.dd")
    private Date musicalEnd; // 공연 종료일

    private Date musicalTicketStart; // 티켓 예매 시작일
    private String musicalStatus; // 공연 상태 (공연예정/공연중/공연종료)
    private String musicalPoster; // 공연 포스터

    // api 저장
    public MusicalDTO (JSONObject itemJson) {
        this.musicalId = (String) itemJson.get("mt20id");
        this.musicalName = (String) itemJson.get("prfnm");
        this.theaterName = (String) itemJson.get("fcltynm");
        this.musicalStart = (Date) itemJson.get("prfpdfrom");
        this.musicalEnd = (Date) itemJson.get("prfpdto");
        this.musicalStatus = (String) itemJson.get("prfstate");
        this.musicalPoster = (String) itemJson.get("poster");
    }

}
