package com.mute.Final.entity;
import lombok.Data;
import javax.persistence.Entity;
import javax.persistence.Id;
import javax.persistence.Table;

@Data
@Entity
@Table(name = "review_total_avg")
public class ReviewTotalAvg {
    @Id
    private int musicalId; // 뮤지컬 번호
    private long reviewCnt; // 뮤지컬 총평 후기 개수
    private double avgAllTotal; // 전체 평균 별점
    private double avgStory; // 스토리 평균 별점
    private double avgDirect; // 연출 평균 별점
    private double avgCast; // 캐스팅 평균 별점
    private double avgNumber; // 넘버 평균 별점
}
