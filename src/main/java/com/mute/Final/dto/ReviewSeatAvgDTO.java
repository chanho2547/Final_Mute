package com.mute.Final.dto;

import lombok.Data;

@Data
public class ReviewSeatAvgDTO {
    private int seatId; // 좌석번호
    private long reviewCnt; // 좌석 리뷰 개수
    private double avgAllSeat; // 전체 평균 별점
    private double avgSeat; // 좌석 평균 별점
    private double avgView; // 시야 평균 별점
    private double avgSound; // 음향 평균 별점
    private double avgLight; // 조명 평균 별점

}
