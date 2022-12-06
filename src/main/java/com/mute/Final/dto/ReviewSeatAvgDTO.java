package com.mute.Final.dto;

import lombok.Data;

@Data
public class ReviewSeatAvgDTO {
    // 지금 필요한 것
    // 전체조회시 findAll
    // 극장별 좌석별 전체평균, 좌석 평균, 시야평균, 음향평균, 조명평균
    private String theaterId; // 공연장 ID
    private String theaterName; // 공연장 이름
    private int seatId; // 좌석번호
    private double allScoreAvg; // 전체 평균 별점
//    private double avgSeat; // 좌석 평균 별점
//    private double avgView; // 시야 평균 별점
//    private double avgSound; // 음향 평균 별점
//    private double avgLight; // 조명 평균 별점
}
