package com.mute.Final.service;

import com.mute.Final.dto.MemberDTO;
import com.mute.Final.entity.Member;
import com.mute.Final.repository.EditRepository;
import com.mute.Final.repository.MemberRepository;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.util.List;


@Service
@Slf4j
@RequiredArgsConstructor
@Transactional
public class EditService {
    private final MemberRepository memberRepository;
    private final EditRepository editRepository;

    // 회원정보 불러오기
    public MemberDTO userInfo (String userId) {
        MemberDTO memberDTO = new MemberDTO();
        try {
            Member member = memberRepository.findByUserId(userId);
            memberDTO.setName(member.getName());
            memberDTO.setPwd(member.getPwd());
            memberDTO.setMail(member.getMail());
            memberDTO.setPhone(member.getPhone());
            memberDTO.setAddr(member.getAddress());
            memberDTO.setImg(member.getImg());
            memberDTO.setOk(true);
        } catch (Exception e) {
            memberDTO.setOk(false);
        }
        return memberDTO;
    }

    // 회원 정보 수정
    public boolean saveUserInfo(String userId, String name, String pwd, String phone) {
        try {
            Member member = memberRepository.findByUserId(userId);
            member.setName(name);
            member.setPwd(pwd);
            //member.setMail(mail);
            member.setPhone(phone);
            //member.setAddress(addr);
            memberRepository.save(member);
            log.error("저장완료");
        } catch (Exception e) {
            e.printStackTrace();
            return false;
        }
        return true;
    }

    // 프로필 이미지 수정
    public boolean imgEdit(String userId, String imgName) {
        try {
            Member member = memberRepository.findByUserId(userId);
            member.setImg(imgName);
            Member rst = memberRepository.save(member);
            log.error(rst.toString());
        } catch (Exception e) {
            return false;
        }
        return true;
    }
}
