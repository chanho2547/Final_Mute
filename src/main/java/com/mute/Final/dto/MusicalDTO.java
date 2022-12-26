package com.mute.Final.dto;


import lombok.Data;
import lombok.RequiredArgsConstructor;
import org.json.JSONObject;
import java.time.LocalDate;

@Data
@RequiredArgsConstructor
public class MusicalDTO {
    private String musicalId; // 공연 ID(PK)
    private String musicalName; // 공연 이름
    private String theaterName; // 공연장 이름

    private LocalDate musicalStart; // 공연 시작일
    private LocalDate musicalEnd; // 공연 종료일

    private LocalDate musicalTicketStart; // 티켓 예매 시작일
    private String musicalStatus; // 공연 상태 (공연예정/공연중/공연종료)
    private String musicalPoster; // 공연 포스터

    // api DTO에 저장
    public MusicalDTO (JSONObject itemJson) {
        String tmp1 = itemJson.getString("prfpdfrom");
        String tmp2 = itemJson.getString("prfpdto");

        this.musicalId = itemJson.getString("mt20id");
        this.musicalName = itemJson.getString("prfnm");
        this.theaterName = itemJson.getString("fcltynm");
        this.musicalStart = LocalDate.parse(tmp1.replace(".", "-"));
        this.musicalEnd = LocalDate.parse(tmp2.replace(".", "-"));
        this.musicalTicketStart = musicalStart.minusMonths(1);
        this.musicalStatus = itemJson.getString("prfstate");
        this.musicalPoster = itemJson.getString("poster");
    }

}
