package com.mute.Final.entity;

import lombok.Getter;
import lombok.Setter;
import lombok.ToString;

import javax.persistence.*;

@Entity
@Getter @Setter @ToString
@Table(name = "actor")
public class Actor {
    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    private Long indexNum; // PK
    @ManyToOne // Musical 엔티티와 일대일 매핑
    @JoinColumn(name = "musical_id")// 공연 ID(FK)
    private Musical musical; // Member 객체
    private String actorImage; // 배우 이미지
    private String actorName; // 배우 본명
    private String actorRole; // 배우 작중명
}
