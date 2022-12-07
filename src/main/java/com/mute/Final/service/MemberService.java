package com.mute.Final.service;
import com.mute.Final.dto.MemberDTO;
import com.mute.Final.entity.Member;
import com.mute.Final.repository.MemberRepository;
import lombok.RequiredArgsConstructor;
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
@RequiredArgsConstructor
public class MemberService {
    private final MemberRepository memberRepository;
    // 로그인 체크
    public boolean loginCheck(String userId, String pwd) {
        try {
            return memberRepository.findByUserId(userId).getPwd().equals(pwd);
        } catch (Exception e) {
            return false;
        }
    }
//    public MemberService(MemberRepository memberRepository) {
//
//        this.memberRepository = memberRepository;
//    }
//    public Integer loginCheck(String userId, String pwd) {
//        System.out.println("here is loginCheck");
//        System.out.println("In Service, id/pwd : "+ userId + pwd);
//        List<Member> memberCheckedList = memberRepository.findByUserIdAndPwd(userId, pwd);
//        List<Member> memberExistList = memberRepository.findByUserId(userId);
//
//        System.out.println("test33"+memberCheckedList + memberCheckedList.size() + memberExistList.size() );
//        if(memberCheckedList.size() != 0 ) {return 200;}
//        else if (memberExistList.size() != 0) {return 300;}
//        else {return 400;}
//    }
    // 회원가입
    public boolean memberjoin(String userId, String pwd, String name, String phone, String mail) {
        try {
            Member member = new Member();
            member.setUserId(userId);
            member.setPwd(pwd);
            member.setName(name);
            member.setPhone(phone);
            member.setMail(mail);
            member.setRegData(LocalDateTime.now());
            log.warn("회원정보 입력완료");
            memberRepository.save(member);
            log.warn("저장완료");
            return true;
        } catch (Exception e) {
            log.warn("Service 오류");
            return false;
        }
    }
    // 회원가입 여부 확인
    public boolean doubleCheck (String uni, String type) {
        boolean isNotMember = true;
        try {
            Member member;
            char c = type.charAt(5);
            switch (c) {
                case 'I' :
                    member = memberRepository.findByUserId(uni);
                    if(member != null) isNotMember = false;
                    else break;
                case 'M' :
                    member = memberRepository.findByMail(uni);
                    if(member != null) isNotMember = false;
                    else break;
                case 'P' :
                    member = memberRepository.findByPhone(uni);
                    if(member != null) isNotMember = false;
                    else break;
            }
            return isNotMember;
        } catch (Exception e) {
            return isNotMember;
        }
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
