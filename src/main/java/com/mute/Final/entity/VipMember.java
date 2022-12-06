package com.mute.Final.entity;
import lombok.Getter;
import lombok.Setter;
import lombok.ToString;

import javax.persistence.*;
import java.sql.Date;
import java.time.LocalDateTime;

@Entity
@Getter @Setter @ToString
@Table(name = "vip_member")
public class VipMember {
    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    private Long vipUserNum; // 유료회원 번호(PK)
    @OneToOne // Member 엔티티와 일대일 매핑
    @JoinColumn(name = "user_num") // 회원 번호(FK)
    private Member member; // Member 객체
    @Column(name = "start_date", nullable = false)
    private LocalDateTime startDate; // 유료회원 가입일
    @Column(name = "end_date", nullable = false)
    private Date endDate; // 유료회원 탈퇴일
}
