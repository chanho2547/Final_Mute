//package com.mute.Final.entity;
//
//import lombok.Getter;
//import lombok.RequiredArgsConstructor;
//import lombok.Setter;
//import lombok.ToString;
//import lombok.extern.slf4j.Slf4j;
//import org.json.JSONObject;
//
//import javax.persistence.*;
//import java.time.LocalDate;
//
//@Slf4j
//@Entity
//@Getter @Setter @ToString
//@Table(name = "musical_detail")
//@RequiredArgsConstructor
//public class MusicalDetail {
//
//    @Id
//    @GeneratedValue(strategy = GenerationType.AUTO)
//    private Long indexNum;
//
////    @OneToOne(fetch = FetchType.LAZY, cascade = CascadeType.ALL)
////    @JoinColumn(name = "musical_id")// 일대일양방향
////    private Musical musical; // 뮤지컬 객체
//
//    @OneToOne(fetch = FetchType.LAZY, cascade = CascadeType.ALL)
//    @JoinColumn(name = "index_num")// 일대일양방향
//    private Musical musical; // 뮤지컬 객체
//
//    private String musicalAge; // 공연 관람 연령
//
//
//    public MusicalDetail (JSONObject item) {
//        this.musicalAge = item.getString("prfage");
//    }
//}
