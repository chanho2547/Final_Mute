package com.mute.Final.entity;

import lombok.Data;

import javax.persistence.*;
import java.time.LocalDateTime;

@Data
@Entity
@Table(name = "review_musical") // 뮤지컬 후기 테이블
public class ReviewTotal {
    @Id
    @GeneratedValue
    private Long reviewMuId; // 총평 후기 글 번호

    @ManyToOne
    @JoinColumn(name = "musical_id")
    private Musical musicalId; // 공연 ID

    @ManyToOne
    @JoinColumn(name = "user_num")
    private Member member; // 회원번호

    private LocalDateTime writeDate; // 작성일
    private int scoreStory; // 스토리 별점
    private int scoreDirect; // 연출 별점
    private int scoreCast; // 캐스팅 별점
    private int scoreNumber; // 넘버 별점
    private double scoreAvgTotal; // 평균 별점

    @Lob
    private String reviewMuTxt; // 총평 후기 텍스트

}
