package com.mute.Final.entity;

import com.mute.Final.dto.MusicalDetailDTO;
import com.mute.Final.repository.MusicalRepository;
import lombok.*;
import lombok.extern.slf4j.Slf4j;
import org.json.JSONObject;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;

import javax.persistence.*;

import java.time.LocalDate;

@Slf4j
@Entity
@Getter @Setter @ToString
@Table(name = "musical")
@RequiredArgsConstructor
public class Musical {

    @Id
    @Column(name = "musical_id", nullable = false)
    private String musicalId; // 공연 ID(PK)
    private String musicalName; // 공연 이름

    private LocalDate musicalStart; // 공연 시작일
    private LocalDate musicalEnd; // 공연 종료일

    private String musicalPlan; // 공연 스케줄(월, 수 19:00)
    private String theaterName; // 공연장 이름
    private LocalDate musicalTicketStart; // 공연 예매 시작일
    private String musicalStatus; // 공연 상태 (공연예정, 공연중, 공연종료)
    private String musicalPoster; // 공연 포스터
//    private String musicalAge; // 공연 관람 연령

//    @OneToOne(mappedBy = "musical", fetch = FetchType.LAZY) // musical 테이블이 주인
//    private MusicalDetail musicalDetail;



    // api 호출 후 DB에 저장
    public Musical (JSONObject item) {
        String tmp1 = item.getString("prfpdfrom");
        String tmp2 = item.getString("prfpdto");

        this.musicalId = item.getString("mt20id");
        this.musicalName = item.getString("prfnm");
        this.theaterName = item.getString("fcltynm");
        this.musicalStart = LocalDate.parse(tmp1.replace(".", "-"));
        this.musicalEnd = LocalDate.parse(tmp2.replace(".", "-"));
        this.musicalTicketStart = musicalStart.minusMonths(1);
        this.musicalStatus = item.getString("prfstate");
        this.musicalPoster = item.getString("poster");
    }

//    public Musical (MusicalDetailDTO musicalDetailDTO) {
////        MusicalDetailDTO musicalDetailDTO = new MusicalDetailDTO();
//        this.musicalAge = musicalDetailDTO.getMusicalAge();
//        log.warn("세이브됐나? : " + musicalAge); // 안됨. 값은 가져와진다..
//    }

//    public static MusicalBuilder builder(MusicalDetailDTO musicalDetailDTO) {
//        return MusicalBuilder()
//                .musicalAge(musicalDetailDTO.getMusicalAge());
//    }
}

