package com.mute.Final.dto;

import lombok.Data;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.json.JSONArray;
import org.json.JSONObject;
import java.time.LocalDate;

@Data
@RequiredArgsConstructor
@Slf4j
public class MusicalDetailDTO {
    private String musicalId; // 공연 ID(PK)
    private String musicalName; // 공연 이름
    private String theaterName; // 공연장 이름
    private String theaterId; // 공연장 ID
    private LocalDate musicalStart; // 공연 시작일
    private LocalDate musicalEnd; // 공연 종료일
    private String musicalRuntime; // 공연 런타임
    private String musicalStatus; // 공연 상태 (공연예정/공연중/공연종료)
    private String musicalPoster; // 공연 포스터
    private String musicalCast; // 공연 출연진 (박효신, 박은태, 조정은, 옥주현)
    private String musicalAge; // 공연 관람 연령 (만 0세 이상)
    private String musicalPrice; // 좌석별 가격 (R석 170,000원, S석 140,000원, A석 110,000원, B석 80,000원)
    private String musicalDescImg1; // 상세이미지1
    private String musicalDescImg2; // 상세이미지2
    private String musicalPlan; // 공연 스케줄(화요일(19:30), 수요일(14:30,19:30), 목요일(19:30), 금요일 ~ 토요일(14:30,19:30), 일요일(15:00))

    /// api DTO에 저장
    public MusicalDetailDTO (JSONObject item) {
        String tmp1 = item.getString("prfpdfrom");
        String tmp2 = item.getString("prfpdto");

        String descImg1 = null;
        String descImg2 = null;

        Object obj = item.getJSONObject("styurls").get("styurl");
        if (obj instanceof String) {
            descImg1 = item.getJSONObject("styurls").getString("styurl");
        } else if(obj instanceof JSONArray) {
            JSONArray jsonArray = item.getJSONObject("styurls").getJSONArray("styurl");
            for (int i = 0; i < jsonArray.length(); i++) {
                descImg1 = (String) jsonArray.get(0);
                descImg2 = (String) jsonArray.get(1);
            }
        }

        this.musicalId = item.getString("mt20id");
        this.musicalName = item.getString("prfnm");
        this.theaterName = item.getString("fcltynm");
        this.theaterId = item.getString("mt10id");
        this.musicalStart = LocalDate.parse(tmp1.replace(".", "-"));
        this.musicalEnd = LocalDate.parse(tmp2.replace(".", "-"));
        this.musicalRuntime = item.getString("prfruntime");
        this.musicalStatus = item.getString("prfstate");
        this.musicalPoster = item.getString("poster");
        this.musicalCast = item.getString("prfcast");
        this.musicalAge = item.getString("prfage");
        this.musicalPrice = item.getString("pcseguidance");
        this.musicalDescImg1 = descImg1;
        this.musicalDescImg2 = descImg2;
        this.musicalPlan = item.getString("dtguidance");
    }

}

