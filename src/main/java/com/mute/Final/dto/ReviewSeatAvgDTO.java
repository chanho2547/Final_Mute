package com.mute.Final.dto;

import lombok.Data;

@Data
public class ReviewSeatAvgDTO {
//    추후 ReviewSeatDTO에서 평균값들 여기로 옮길 예정
//    // 전체조회시 findAll
//    // 극장별 좌석별 전체평균, 좌석 평균, 시야평균, 음향평균, 조명평균
//    private String theaterId; // 공연장 ID
//    private String theaterName; // 공연장 이름
    private int seatId; // 좌석번호
//    private int scoreAvgSeat; // 좌석별 개인 평균 별점
//    private long reviewCnt; // 좌석 리뷰 개수
    private double avgAllSeat; // 전체 평균 별점
//    private double avgSeat; // 좌석 평균 별점
//    private double avgView; // 시야 평균 별점
//    private double avgSound; // 음향 평균 별점
//    private double avgLight; // 조명 평균 별점

}
