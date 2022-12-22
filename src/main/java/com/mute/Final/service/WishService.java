package com.mute.Final.service;
import com.mute.Final.constant.AlarmStatus;
import com.mute.Final.dto.MemberDTO;
import com.mute.Final.dto.WishDTO;
import com.mute.Final.entity.Member;
import com.mute.Final.entity.Musical;
import com.mute.Final.entity.Wish;
import com.mute.Final.repository.MemberRepository;
import com.mute.Final.repository.MusicalRepository;
import com.mute.Final.repository.WishRepository;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.data.convert.EntityWriter;
import org.springframework.stereotype.Service;
import javax.persistence.*;
import javax.transaction.Transactional;
import java.util.*;

@Service
@Slf4j
@Transactional
@RequiredArgsConstructor
public class WishService {
    private final WishRepository wishRepository;
    private final MemberRepository memberRepository;
    private final MusicalRepository musicalRepository;

    public List<?> getWishOnList(int userNum) {
        List<Map<?,?>> result = new ArrayList<>();
        Map<String, List<Map<?,?>>> map = new HashMap<>();
        map.put("wishListContent", wishRepository.wishON(userNum));
        System.out.println(map);
        for(int i = 0; i < map.size(); i++){
            result.add(map);
        }
        return result;
    }

    // 마이페이지 찜한 뮤지컬
    public List<WishDTO> getWishListALl(Member member) {
        List<WishDTO> wishDTOS = new ArrayList<>();
        List<Wish> wishList = wishRepository.findByMember(member);
        for (Wish e : wishList) {
            WishDTO wishDTO = new WishDTO();
            wishDTO.setMusicalId(e.getMusical().getMusicalId());
            wishDTO.setMusicalPoster(e.getMusical().getMusicalPoster());
            wishDTO.setUserId(e.getMember().getUserId());
            wishDTO.setMusicalName(e.getMusical().getMusicalName());
            wishDTO.setMusicalTicketStart(e.getMusical().getMusicalTicketStart());
            wishDTO.setMusicalStart(e.getMusical().getMusicalStart());
            wishDTO.setMusicalEnd(e.getMusical().getMusicalEnd());
            wishDTO.setAlarm(e.getAlarmStatus().toString());
            wishDTOS.add(wishDTO);
        }
        return wishDTOS;
    }

    // 찜 데이터 insert
    public boolean postWishList(String userNum, String musicalId) {
        Wish wish = new Wish();
        System.out.println("userNum: " + userNum);
        System.out.println("userNum Type : " + userNum.getClass().getName());
        System.out.println("musicalId: " + musicalId);
        Member member = memberRepository.findByUserNum(Long.parseLong(userNum));
        wish.setMember(member);
        log.info(String.valueOf(member));
        Musical musical = musicalRepository.findByMusicalId(musicalId);
        wish.setMusical(musical);
        log.info(String.valueOf(musical));
        wish.setAlarmStatus(AlarmStatus.ON);
        Wish test = wishRepository.save(wish);
        log.info(String.valueOf(test));
        return true;
    }

    // 찜 데이터 update 
    // userNum과 musicalId과 일치하는 alarmStatus를 "OFF"로 바꿔주고 싶음
    public boolean updateAlarm(int userNum, String musicalId) {
        Wish wish = new Wish();
        System.out.println("userNum : " + userNum);
        System.out.println("musicalId : " + musicalId);
        wishRepository.updateAlarm(userNum, musicalId);
        return true;
    }

    // 찜 데이터 delete
    // userNum과 musicalId의 데이터 삭제
    public void deleteAlarm(int userNum, String musicalId) {
        Wish wish = new Wish();
        System.out.println("userNum : " + userNum);
        System.out.println("musicalId : " + musicalId);
        wishRepository.deleteAlarm(userNum, musicalId);
    }

}
