package com.mute.Final.service;
import com.mute.Final.dto.MemberDTO;
import com.mute.Final.entity.Member;
import com.mute.Final.repository.*;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.stereotype.Service;
import javax.transaction.Transactional;
import java.time.LocalDateTime;
import java.util.ArrayList;
import java.util.List;

// 로그인 - 도연 작업완료
@Slf4j
@Service
@Transactional
@RequiredArgsConstructor // final 혹은 @NotNull이 붙은 필드의 생성자를 자동으로 생성
public class MemberService {
    private final MemberRepository memberRepository;
    private final DeleteRepository deleteRepository;
    private final TicketRepository ticketRepository;
    private final ReviewSeatRepository reviewTotalRepository;
    private final ReviewSeatRepository reviewSeatRepository;
    private final PayRepository payRepository;
    private final WishRepository wishRepository;


    // 로그인 체크
//    public boolean loginCheck(String userId, String pwd) {
//        try {
//            return memberRepository.findByUserId(userId).getPwd().equals(pwd);
//        } catch (Exception e) {
//            return false;
//        }
//    }
    // 해당부분 @RequiredArgsConstructor 어노테이션으로 대체
//    public MemberService(MemberRepository memberRepository) {
//
//        this.memberRepository = memberRepository;
//    }
    public Integer loginCheck(String userId, String pwd) {
        System.out.println("here is loginCheck");
        System.out.println("In Service, id/pwd : "+ userId + pwd);
        List<Member> memberCheckedList = memberRepository.findByUserIdAndPwd(userId, pwd);
        //List<Member> memberExistList = memberRepository.findByUserId(userId);

        System.out.println("test33"+memberCheckedList + memberCheckedList.size()  );
        if(memberCheckedList.size() != 0 ) {return 200;}
        //else if (memberExistList.size() != 0) {return 300;}
        else {return 400;}
    }
    // 회원가입
    public boolean memberJoin(String userId, String pwd, String name, String phone, String mail, String addr, String img) {
        try {
            Member member = new Member();
            member.setUserId(userId);
            member.setPwd(pwd);
            member.setName(name);
            member.setPhone(phone);
            member.setMail(mail);
            member.setAddress(addr);
            member.setImg(img);
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

    // ID 찾기
    public MemberDTO findId(String uni, String name, String type) {
        MemberDTO memberDTO = new MemberDTO();
        try{
            char c = type.charAt(5);
            Member member;

            switch (c) {
                case 'I' :
                    member = memberRepository.findByNameAndMail(uni, name);
                    if(member != null) {
                        memberDTO.setReg(true);
                        memberDTO.setUserId(member.getUserId());
                    } else {
                        memberDTO.setReg(false);
                    }
                    memberDTO.setOk(true);
                    break;
            }
        } catch (Exception e) {
            memberDTO.setOk(false);
        }
        return memberDTO;
    }
    // PWD 찾기
    public boolean findPw(String userId, String mail) {
        try{
            Member member;
            member = memberRepository.findByUserId(userId);
            log.error(mail);
            log.error(member.getMail().toString());
            if(mail.equals(member.getMail().toString())){
                return true;
            }
            else return false;

        } catch (Exception e) {
            return false;
        }
    }

    // 비밀번호 찾기 시 새 비밀번호 설정
    public boolean regNewPwd(String userId, String pwd) {
        log.info("userId : " + userId);
        log.info("pwd : " + pwd);
        try{
            Member member = memberRepository.findByUserId(userId);
            member.setPwd(pwd);
            log.warn(member.getUserNum().toString());
            Member rst = memberRepository.save(member);
            if(rst != null) return true;
            else return false;

        } catch(Exception e) {
            return false;
        }
    }


    // 회원탈퇴
//    @Transactional
//    public boolean deleteMem(String userId) {
//        log.error("userId : " + userId );
//        try {
//            List<Member> member = deleteRepository.findByUserId(userId);
//            log.error(String.valueOf(userId));
//            //ticketRepository.deleteByUserNum(userId);
//            reviewTotalRepository.deleteByUserNum(userId);
//            reviewSeatRepository.deleteByUserNum(userId);
//            payRepository.deleteByUserNum(userId);
//            wishRepository.deleteByUserNum(userId);
//            memberRepository.deleteByUserId(userId);
//            return true;
//        } catch (Exception e) {
//            log.warn("실패");
//            return false;
//        }
//    }
//    // 회원탈퇴
//    @Transactional
//    public boolean deleteMem(Long userNum) {
//        log.error("userNum : " + userNum );
//        try {
//            Member member = memberRepository.findByUserNum(userNum);
//            log.error(String.valueOf(userNum));
//            ticketRepository.deleteByUserNum(member);
//            reviewTotalRepository.deleteByUserNum(member);
//            reviewSeatRepository.deleteByUserNum(member);
//            paymentRepository.deleteByUserNum(member);
//            wishRepository.deleteByUserNum(member);
//            memberRepository.deleteByUserNum(member);
//            return true;
//        } catch (Exception e) {
//            log.warn("실패");
//            return false;
//        }
//    }
    // 회원탈퇴
//    public boolean deleteMem(String userId) {
//        log.error("Id : " + userId);
//
//        try {
//            List<Member> member = deleteRepository.findByUserId(userId);
//            wishRepository.deleteByUserId((Member) member);
//            ticketRepository.deleteByUserId((Member) member);
//            reviewTotalRepository.deleteByUserId((Member) member);
//            reviewSeatRepository.deleteByUserId((Member) member);
//            payRepository.deleteByUserId((Member) member);
//
//            if (member.size() == 1) {
//                memberRepository.deleteAll(member);
//                return true;
//            }
//            else return false;
//        } catch (Exception e) {
//            log.error("탈퇴 못해?!!!!!!!!!");
//            return false;
//        }
//    }


    // 회원탈퇴
    public boolean deleteMem(String userId) {
        log.error("Id" + userId);

        List<Member> member = deleteRepository.findByUserId(userId);

        if(member.size() == 1) {
            memberRepository.deleteAll(member);
            return true;
        } else return false;
    }
    // 아이디 (userId) 입력 -> 회원번호 (userNum) 반환
    public Long findByUserId(String userId) {
        Member member = memberRepository.findByUserId(userId);
        return member.getUserNum();
    }
}
