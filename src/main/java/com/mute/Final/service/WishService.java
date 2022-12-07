package com.mute.Final.service;

import com.mute.Final.dto.WishDTO;
import com.mute.Final.entity.Wish;
import com.mute.Final.repository.WishRepository;
import lombok.extern.slf4j.Slf4j;
import org.springframework.stereotype.Service;
import javax.persistence.*;
import java.util.ArrayList;
import java.util.List;

@Service
@Slf4j
public class WishService {
    private WishRepository wishRepository;
    public WishService(WishRepository wishRepository) {
        this.wishRepository = wishRepository;
    }

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
}
