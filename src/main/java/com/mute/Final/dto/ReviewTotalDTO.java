package com.mute.Final.dto;
import com.mute.Final.entity.Member;
import com.mute.Final.entity.Musical;
import lombok.Data;
import java.time.LocalDateTime;

// 총평 후기 - 도연

@Data
public class ReviewTotalDTO {
    private Long reviewMuId; // 총평 후기 글 번호
    private Musical musicalId; // 공연 ID
    private String musicalName; // 공연 이름
    private String member; // 회원번호
    private LocalDateTime writeDate; // 작성일
    private int scoreStory; // 스토리 별점
    private int scoreDirect; // 연출 별점
    private int scoreCast; // 캐스팅 별점
    private int scoreNumber; // 넘버 별점
    private double scoreAvgTotal; // 평균 총평 별점
    private String reviewMuTxt; // 총평 후기 텍스트

    private long reviewMuCnt; // 평균 리뷰 개수
    private double avgMuAll; // 전체 평균 별점
    private double avgStory; // 스토리 평균 별점
    private double avgDirect; // 연출 평균 별점
    private double avgCast; // 캐스팅 평균 별점
    private double avgNumber; // 넘버 평균 별점
}
