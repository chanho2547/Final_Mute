package com.mute.Final.service;

import com.mute.Final.dto.MusicalDTO;
import com.mute.Final.entity.Musical;
import com.mute.Final.repository.MusicalRepository;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.stereotype.Service;
import javax.transaction.Transactional;
import java.util.ArrayList;
import java.util.List;

@Service
@Slf4j
@RequiredArgsConstructor
@Transactional
public class MusicalService {
    private final MusicalRepository musicalRepository;

        // 뮤지컬 검색
        public List<MusicalDTO> searchMusicalList(String musicalName) {
            List<MusicalDTO> musicalDTOS = new ArrayList<>();
            List<Musical> musicalList = musicalRepository.findByMusicalNameLike("%" + musicalName + "%");
//            List<Musical> musicalList = musicalRepository.findAll();
            for (Musical e : musicalList) {
                MusicalDTO musicalDTO = new MusicalDTO();
                musicalDTO.setMusicalId(e.getMusicalId()); // 공연 고유 번호
                musicalDTO.setMusicalName(e.getMusicalName()); // 공연 이름
                musicalDTO.setMusicalStart(e.getMusicalStart()); // 공연 시작일
                musicalDTO.setMusicalEnd(e.getMusicalEnd()); // 공연 종료일
                musicalDTO.setTheaterName(e.getTheaterName()); // 공연장 이름
                musicalDTO.setMusicalPoster(e.getMusicalPoster()); // 공연 포스터
                musicalDTO.setMusicalStatus("혹시 이것때문에..?에러..?");
                musicalDTOS.add(musicalDTO);
            }
            return musicalDTOS;
        }

        // 뮤지컬 TOP3 티켓 오픈 빠른 순 조회
        public List<MusicalDTO> searchTopTicket() {
        List<MusicalDTO> musicalDTOS = new ArrayList<>();
        List<Musical> musicalList = musicalRepository.findAllSysdateBefore();
        for(Musical e : musicalList) {
            MusicalDTO musicalDTO = new MusicalDTO();
            musicalDTO.setMusicalId(e.getMusicalId()); // 공연 고유 번호
            musicalDTO.setMusicalName(e.getMusicalName()); // 공연 이름
            musicalDTO.setMusicalStart(e.getMusicalStart()); // 공연 시작일
            musicalDTO.setMusicalEnd(e.getMusicalEnd()); // 공연 종료일
            musicalDTO.setMusicalTicketStart(e.getMusicalTicketStart()); // 공연 티켓 예메 시작일
            musicalDTO.setTheaterName(e.getTheaterName()); // 공연장 이름
            musicalDTO.setMusicalPoster(e.getMusicalPoster()); // 공연 포스터
            musicalDTOS.add(musicalDTO);
        }
            return musicalDTOS;
        }

        // 뮤지컬 TOP3 티켓 오픈 예정 순 조회
        public List<MusicalDTO> searchTopTicket2() {
            List<MusicalDTO> musicalDTOS = new ArrayList<>();
            List<Musical> musicalList = musicalRepository.findAllSysdateAfter();
            for(Musical e : musicalList) {
                MusicalDTO musicalDTO = new MusicalDTO();
                musicalDTO.setMusicalId(e.getMusicalId()); // 공연 고유 번호
                musicalDTO.setMusicalName(e.getMusicalName()); // 공연 이름
                musicalDTO.setMusicalStart(e.getMusicalStart()); // 공연 시작일
                musicalDTO.setMusicalEnd(e.getMusicalEnd()); // 공연 종료일
                musicalDTO.setMusicalTicketStart(e.getMusicalTicketStart()); // 공연 티켓 예메 시작일
                musicalDTO.setTheaterName(e.getTheaterName()); // 공연장 이름
                musicalDTO.setMusicalPoster(e.getMusicalPoster()); // 공연 포스터
                musicalDTOS.add(musicalDTO);
            }
            return musicalDTOS;
        }



}
