//package com.mute.Final_BE.entity;
//
//import lombok.Data;
//
//import javax.persistence.*;
//
//@Data
//@Entity
//@Table(name = "seats") // 공연장 좌석 테이블
//public class Seats {
//    @Id
//    @GeneratedValue(strategy = GenerationType.AUTO)
//    private Long indexNum; // pk부여를 위한 인덱스
//
//    @ManyToOne // 하나의 공연장은 여러개의 좌석을 갖고 있음
//    @JoinColumn(name = "theater_id")
//    private Theater theater;
//
//    private int seatsFloor; // 층(1층,2층,3층)
//    private int seatsLine; // 열(가로줄로 1열,2열,3열..)
//    private int lowSeat; // 해당 층과 해당 열의 좌석 최저번호
//    private int highSeat; // 해당 층과 해당 열의 좌석 최고번호
//}
