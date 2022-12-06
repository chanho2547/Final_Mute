package com.mute.Final.service;
import com.mute.Final.dto.MemberDTO;
import com.mute.Final.entity.Member;
import com.mute.Final.repository.MemberRepository;
import lombok.extern.slf4j.Slf4j;
import org.springframework.stereotype.Service;
import javax.transaction.Transactional;
import java.time.LocalDateTime;
import java.util.ArrayList;
import java.util.List;

// 로그인 - 도연 작업완료
@Service
@Transactional
@Slf4j
public class MemberService {
    private MemberRepository memberRepository;
    public MemberService(MemberRepository memberRepository) {
        this.memberRepository = memberRepository;
    }
    public Integer loginCheck(String userId, String pwd) {
        System.out.println("here is loginCheck");
        System.out.println("In Service, id/pwd : "+ userId + pwd);
        List<Member> memberCheckedList = memberRepository.findByUserIdAndPwd(userId, pwd);
        List<Member> memberExistList = memberRepository.findByUserId(userId);

        System.out.println("test33"+memberCheckedList + memberCheckedList.size() + memberExistList.size() );
        if(memberCheckedList.size() != 0 ) {return 200;}
        else if (memberExistList.size() != 0) {return 300;}
        else {return 400;}
    }
    // 회원가입
    public boolean signup(String userId, String pwd, String name, String phone, String mail) {
        Member member = new Member();
        member.setUserId(userId);
        member.setPwd(pwd);
        member.setName(name);
        member.setPhone(phone);
        member.setMail(mail);
        member.setRegData(LocalDateTime.now());
        Member rst = memberRepository.save(member);
        log.warn(rst.toString());
        return true;
    }
    // 회원정보 전체 조회
    public List<MemberDTO> getMemberList() {
        List<MemberDTO> memberDTOS = new ArrayList<>();
        List<Member> memberList = memberRepository.findAll();
        for(Member e : memberList) {
            MemberDTO memberDTO = new MemberDTO();
            memberDTO.setUserId(e.getUserId());
            memberDTO.setPwd(e.getPwd());
            memberDTO.setName(e.getName());
            memberDTO.setPhone(e.getPhone());
            memberDTO.setMail(e.getMail());
            memberDTOS.add(memberDTO);
        }
        return memberDTOS;
    }
}
