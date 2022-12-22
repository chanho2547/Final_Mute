package com.mute.Final.entity;

import com.mute.Final.constant.AlarmStatus;
import lombok.Getter;
import lombok.Setter;
import lombok.ToString;

import javax.persistence.*;

@Entity
@Getter @Setter @ToString
@Table
public class Wish {
    @Id
    @GeneratedValue
    private Long indexNum; // PK
    @ManyToOne(cascade = CascadeType.ALL)
    @JoinColumn(name = "user_num") // 회원 번호(FK)
    private Member member; // Member 객체
//    private Long userNum;

    @ManyToOne // Musical 엔티티와 일대일 매핑
    @JoinColumn(name = "musical_id") // 공연 ID(FK)
    private Musical musical;
    @Enumerated(EnumType.STRING)
    private AlarmStatus alarmStatus; // 알림(Enum)
}
