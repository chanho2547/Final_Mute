package com.mute.Final.dto;
import com.mute.Final.entity.Member;
import lombok.*;

import java.util.Date;

// 도연 작업완료
@Getter @Setter @ToString
@NoArgsConstructor // 기본 생성자를 자동으로 만들어 줌
@AllArgsConstructor // 필드를 모두 다 매개변수로 하는 생성자를 만들어줌
public class MemberDTO {
//     회원정보에 필요한 내용을 필드로 정의하는 곳
//    private Long userNum; // 회원번호
    private String userId; // 회원아이디
    private String pwd; // 비밀번호
    private String name; // 이름
    private String phone; // 전화번호
    private String mail; // 메일
//    private String addr; // 주소
//    private Date regDate; // 가입일
//    private Date unRegDate; // 탈퇴일

    public static MemberDTO toMemberDTO(Member member) {
        MemberDTO memberDTO = new MemberDTO();
        memberDTO.setUserId(member.getUserId());
        memberDTO.setPwd(member.getPwd());
        memberDTO.setName(member.getName());
        memberDTO.setPhone(member.getPhone());
        memberDTO.setMail(member.getMail());
        return memberDTO;
    }
}
