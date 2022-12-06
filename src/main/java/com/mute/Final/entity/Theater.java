package com.mute.Final.entity;

import lombok.Data;

import javax.persistence.*;

@Data
@Entity
@Table(name = "theater") // 공연장 테이블
public class Theater {
    @Id
    @Column(name = "theater_id")
    private String theaterId; // 공연장 ID

    private String theaterName; // 공연장 이름
    private int theaterSeats; // 전체 좌석 수
}
