package com.mute.Final.service;


import com.mute.Final.dto.TheaterDTO;
import com.mute.Final.entity.Theater;
import com.mute.Final.repository.TheaterRepository;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.stereotype.Service;

import java.util.ArrayList;
import java.util.List;

@Service
@Slf4j
@RequiredArgsConstructor
public class TheaterService {
    private final TheaterRepository theaterRepository;

    // 공연장 검색
    public List<TheaterDTO> searchTheaterList(String theaterName) {
        List<TheaterDTO> theaterDTOS = new ArrayList<>();
        List<Theater> theaterList = theaterRepository.findByTheaterNameLike("%" + theaterName + "%");
        for(Theater e : theaterList) {
            TheaterDTO theaterDTO = new TheaterDTO();
            theaterDTO.setTheaterId(e.getTheaterId());
            theaterDTO.setTheaterName(e.getTheaterName());
            theaterDTO.setTheaterAddr(e.getTheaterAddr());
            theaterDTO.setTheaterPoster(e.getTheaterPoster());
            theaterDTO.setTheaterSeats(e.getTheaterSeats());
            theaterDTOS.add(theaterDTO);
        }
        return theaterDTOS;
    }


}
