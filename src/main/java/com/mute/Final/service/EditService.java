package com.mute.Final.service;

import com.mute.Final.dto.MemberDTO;
import com.mute.Final.entity.Member;
import com.mute.Final.repository.MemberRepository;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

@Service
@Slf4j
@RequiredArgsConstructor
@Transactional
public class EditService {
    private final MemberRepository memberRepository;
    public MemberDTO userInfo (String userId) {
        MemberDTO memberDTO = new MemberDTO();
        try {
            Member member = memberRepository.findByUserId(userId);

            // 회원정보 불러오기
            memberDTO.setName(member.getName());
            memberDTO.setPwd(member.getPwd());
            memberDTO.setMail(member.getMail());
            memberDTO.setPhone(member.getPhone());
            memberDTO.setAddr(member.getAddress());
            //memberDTO.setProfile(member.getProfile());
            memberDTO.setImg(member.getImg());
            memberDTO.setOk(true);
        } catch (Exception e) {
            memberDTO.setOk(false);
        } return memberDTO;
    }

    // 회원 정보 수정
    public boolean saveUserInfo(String userId, String name, String pwd, String mail, String phone, String addr) {
        try {
            Member member = memberRepository.findByUserId(userId);
            log.error("아이디 : " + userId);
            log.error("변경 name : " + name);
            log.error("변경 pwd : " + pwd);
            log.error("변경 mail : " + mail);
            log.error("변경 phone : " + phone);
            log.error("변경 addr : " + addr);
            member.setName(name);
            member.setPwd(pwd);
            member.setMail(mail);
            member.setPhone(phone);
            //member.setProfile(profile);
            member.setAddress(addr);
            memberRepository.save(member);
            log.error("저장완료");
        } catch (Exception e) {
            return false;
        } return true;
    }
    // 프로필 이미지 수정
    public boolean imgEdit(String userId, String img) {
        try {
            Member member = memberRepository.findByUserId(userId);
            member.setImg(img);
            Member rst = memberRepository.save(member);
            log.error(rst.toString());
        } catch (Exception e) {
            return false;
        } return true;
    }
}
