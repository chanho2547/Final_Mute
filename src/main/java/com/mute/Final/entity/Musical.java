package com.mute.Final.entity;

import lombok.Data;
import lombok.Getter;
import lombok.Setter;
import lombok.ToString;

import javax.persistence.*;
import java.time.LocalDateTime;
import java.util.Date;

@Entity
@Getter @Setter @ToString
@Table(name = "musical")
public class Musical {
    @Id
    private String musicalId; // 공연 ID(PK)
    private String musicalName; // 공연 이름
    private Date musicalStart; // 공연 시작일
    private Date musicalEnd; // 공연 종료일
    private String musicalPlan; // 공연 스케줄(월, 수 19:00)
    private String theaterName; // 공연장 이름
    private Date musicalTicketStart; // 공연 예매 시작일
    private String musicalPoster; // 공연 포스터

    public Musical (String mt20id, String prfnm,
                    String fcltynm, Date prfpdfrom, Date prfpdto,
                    String poster) {
        this.musicalId = mt20id;
        this.musicalName = prfnm;
        this.theaterName = fcltynm;
        this.musicalStart = prfpdfrom;
        this.musicalEnd = prfpdto;
        this.musicalPoster = poster;
    }

    public Musical() {

    }
}

