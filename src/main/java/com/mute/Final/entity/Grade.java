//package com.mute.Final_BE.entity;
//
//import com.mute.Final_BE.constant.GradeSeat;
//import lombok.Data;
//
//import javax.persistence.*;
//
//@Data
//@Entity
//@Table(name = "grade") // 좌석등급 테이블
//public class Grade {
//    @Id
//    @GeneratedValue(strategy = GenerationType.AUTO)
//    private Long indexNum; // pk부여를 위한 인덱스
//
//    @OneToOne // 하나의 공연장에
//    @JoinColumn(name = "theater_id")
//    private Theater theater;
//
//    @Enumerated(EnumType.STRING)
//    private GradeSeat gradeSeat; // 등급목록 (VIP, R, S, A)
//
//    private int gradePrice; // 등급별 가격
//    private int lowSeat; // 등급 커트라인을 위한 좌석 최저번호
//    private int highSeat; // 등급 커트라인을 위한 좌석 최고번호
//
//}
