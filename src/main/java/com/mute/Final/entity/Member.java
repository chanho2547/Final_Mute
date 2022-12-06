package com.mute.Final.entity;
import lombok.Data;
import javax.persistence.*;
import java.time.LocalDateTime;

// 도연 작업완료
@Data
@Entity
@Table(name="member")
public class Member {
    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    private Long userNum; // 회원번호 - pk
    @Column(unique = true)
    private String userId; // 회원아이디
    private String pwd; // 비밀번호
    private String name; // 이름
    @Column(unique = true)
    private String phone; // 전화번호
    @Column(unique = true)
    private String mail; // 메일
    private String address; // 주소
    private LocalDateTime regData; // 가입일
    private LocalDateTime unRegData; // 탈퇴일
}
