package com.mute.Final.service;
import com.mute.Final.constant.AlarmStatus;
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
import java.util.ArrayList;
import java.util.Date;
import java.util.List;

@Service
@Slf4j
@Transactional
@RequiredArgsConstructor
public class WishService {
    private final WishRepository wishRepository;
    private final MemberRepository memberRepository;
    private final MusicalRepository musicalRepository;
//    public WishService(WishRepository wishRepository) {
//        this.wishRepository = wishRepository;
//    }

    // ID별 알림 상태 ON인 경우 조회
    public List<WishDTO> getWishList(int userNum) {
        List<WishDTO> wishDTOS = new ArrayList<>();
        List<Wish> wishList = wishRepository.findUserNumON(userNum);
        for (Wish e : wishList) {
            WishDTO wishDTO = new WishDTO();
            wishDTO.setUserId(e.getMember().getUserId());
            wishDTO.setMusicalName(e.getMusical().getMusicalName());
            wishDTO.setMusicalTicketStart(e.getMusical().getMusicalTicketStart());
            wishDTO.setAlarm(e.getAlarmStatus().toString());
            wishDTOS.add(wishDTO);
        }
        return wishDTOS;
    }

    public boolean postWishList(String userNum, String musicalId){
      //  try {
            // 회원ID랑 공연 이름, 티켓 예매 오픈일, 알람 상태 들어가야 함
            Wish wish = new Wish();

            Member member = memberRepository.findByUserId(userNum);
            wish.setMember(member);
            log.info(String.valueOf(member));

            Musical musical = musicalRepository.findByMusicalName(musicalId);
            wish.setMusical(musical);
            log.info(String.valueOf(musical));

            wish.setAlarmStatus(AlarmStatus.ON);
            Wish test = wishRepository.save(wish);
            log.info(String.valueOf(test));

            return true;
//        } catch (Exception e) {
//            System.out.println(e.getStackTrace());
//        }
//        return false;
    }


}
