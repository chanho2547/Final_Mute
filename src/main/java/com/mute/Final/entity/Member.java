package com.mute.Final.entity;
import lombok.Data;
import javax.persistence.*;
import java.time.LocalDateTime;
import java.util.List;

// 도연 작업완료
@Data
@Entity
@Table(name="member")
public class Member {
    // 프론트엔드에 뿌려줄 값과 받아올 값을 정의하는 곳
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
    private String profile;
    private String img; // 프로필 사진
    private LocalDateTime regData; // 가입일
    //private LocalDateTime unRegData; // 탈퇴일

}
