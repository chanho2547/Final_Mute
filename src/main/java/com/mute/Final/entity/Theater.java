package com.mute.Final.entity;

import lombok.Data;
import lombok.RequiredArgsConstructor;
import org.json.JSONObject;

import javax.persistence.*;

@Data
@Entity
@Table(name = "theater") // 공연장 테이블
@RequiredArgsConstructor
public class Theater {
    @Id
    @Column(name = "theater_id")
    private String theaterId; // 공연장 ID
    private String theaterName; // 공연장 이름
    private String theaterAddr; // 공연장 주소
    private int theaterSeats; // 전체 좌석 수
    private String theaterCall; // 연락처
    private String theaterWeb; // 홈페이지
    private String theaterPoster;

    // api DB에 저장
    public Theater (JSONObject item) {
        this.theaterId = item.getString("mt10id");
        this.theaterName = item.getString("fcltynm");
        this.theaterAddr = item.getString("adres");
        this.theaterSeats = item.getInt("seatscale");
        this.theaterCall = item.getString("telno");
        this.theaterWeb = item.getString("relateurl");
    }
}
