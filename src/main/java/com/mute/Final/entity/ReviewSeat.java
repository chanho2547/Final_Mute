package com.mute.Final.entity;

import lombok.Data;
import javax.persistence.*;
import java.time.LocalDateTime;

@Data
@Entity
@Table(name = "review_seat") // 좌석별 후기 테이블
public class ReviewSeat {
    @Id
    @GeneratedValue
    private Long reviewSeId; // 좌석후기 글 번호

    @ManyToOne
    @JoinColumn(name = "musical_id")
    private Musical musical; // 공연 ID

    @ManyToOne
    @JoinColumn(name = "theater_id")
    private Theater theater; // 공연장 ID

    @ManyToOne
    @JoinColumn(name = "user_num")
    private Member member; // 회원 번호
    private int seatNum; // 좌석번호
    private LocalDateTime writeDate; // 작성일
    private int scoreSeat; // 좌석 별점
    private int scoreView; // 시야 별점
    private int scoreSound; // 음향 별점
    private int scoreLight; // 조명 별점
    private double scoreAvgSeat; // 평균 별점

//    @Lob
    @Column(nullable = false)
    private String reviewSeTxt; // 좌석 후기 내용
}