package com.mute.Final.entity;

import lombok.Data;
import javax.persistence.*;
import java.time.LocalDateTime;

@Data
@Entity
@Table(name = "review_seat_avg")
public class ReviewSeatAvg {
    @Id
    private int seatId;
    private double avgAllSeat;
    private long reviewCnt; // 좌석 리뷰 개수
    private double avgSeat; // 좌석 평균 별점
    private double avgView; // 시야 평균 별점
    private double avgSound; // 음향 평균 별점
    private double avgLight; // 조명 평균 별점
}