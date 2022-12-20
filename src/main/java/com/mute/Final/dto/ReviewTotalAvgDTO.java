package com.mute.Final.dto;
import lombok.Data;

import java.time.LocalDate;

@Data
public class ReviewTotalAvgDTO {
    private int musicalId; // 뮤지컬 번호
    private long reviewCnt; // 뮤지컬 총평 후기 개수
    private double avgAllTotal; // 전체 평균 별점
    private double avgStory; // 스토리 평균 별점
    private double avgDirect; // 연출 평균 별점
    private double avgCast; // 캐스팅 평균 별점
    private double avgNumber; // 넘버 평균 별점
//    private String musicalName; // 공연 이름
//    private String theaterName; // 공연장 이름
//    private LocalDate musicalStart; // 공연 시작일
//    private LocalDate musicalEnd; // 공연 종료일
}
