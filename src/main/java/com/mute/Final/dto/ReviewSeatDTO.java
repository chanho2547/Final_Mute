package com.mute.Final.dto;

import com.mute.Final.entity.Theater;
import lombok.Data;

import javax.persistence.*;
import java.time.LocalDateTime;

@Data
public class ReviewSeatDTO {
    private Long reviewSeId; // 좌석 후기 글 번호
    private int seatId; // 좌석번호
    private String musicalName; // 공연 이름
    private String theaterName; // 공연장 이름
    private String userId; // 회원 ID
    private LocalDateTime writeDate; // 작성일
    private double scoreAvgSeat; // 개인 평균 좌석 별점
    private int scoreSeat; // 좌석 별점
    private int scoreView; // 시야 별점
    private int scoreSound; // 음향 별점
    private int scoreLight; // 조명 별점
    private String reviewSeTxt; // 좌석 후기 내용
}
