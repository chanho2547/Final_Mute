package com.mute.Final.service;
import com.mute.Final.entity.Member;
import com.mute.Final.entity.Musical;
import com.mute.Final.entity.ReviewTotal;
import com.mute.Final.entity.ReviewSeat;
import com.mute.Final.repository.*;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.stereotype.Service;
import javax.transaction.Transactional;
import java.time.LocalDateTime;

// 후기 작성 - 도연

@Service
@Transactional
@Slf4j
@RequiredArgsConstructor
public class WriteService {
    private final ReviewTotalRepository reviewTotalRepository; // 총평 후기
    private final ReviewSeatRepository reviewSeatRepository; // 좌석 후기
    private final MemberRepository memberRepository;
    private final MusicalRepository musicalRepository;


    // 총평 후기 작성
    public boolean writeTotal(String userNum, String musicalId, String scoreStory, String scoreDirect, String scoreCast, String scoreNumber, String scoreAvgTotal, String reviewMuTxt){
        ReviewTotal reviewTotal = new ReviewTotal();

        Member member = memberRepository.findByUserNum(Long.parseLong(userNum));
        reviewTotal.setMember(member);
        log.info(String.valueOf(member));

        Musical musical = musicalRepository.findByMusicalId(musicalId);
        reviewTotal.setMusicalId(musical);
        log.info(String.valueOf(musical));

        reviewTotal.setScoreStory(Integer.parseInt(scoreStory));
        reviewTotal.setScoreDirect(Integer.parseInt(scoreDirect));
        reviewTotal.setScoreCast(Integer.parseInt(scoreCast));
        reviewTotal.setScoreNumber(Integer.parseInt(scoreNumber));
        reviewTotal.setScoreAvgTotal(Double.parseDouble(scoreAvgTotal));
        reviewTotal.setReviewMuTxt(reviewMuTxt);
        System.out.println(reviewTotal.getReviewMuTxt());
        reviewTotal.setWriteDate(LocalDateTime.now());
        reviewTotalRepository.save(reviewTotal);
        return true;
    }

    // 좌석 후기 작성
    public boolean writeSeat(String userNum, String musicalId, String scoreSeat, String scoreView, String scoreSound, String scoreLight, String scoreAvgSeat, String reviewSeTxt){
        ReviewSeat reviewSeat  = new ReviewSeat();

        Member member = memberRepository.findByUserNum(Long.parseLong(userNum));
        reviewSeat.setMember(member);
        log.info(String.valueOf(member));

        Musical musical = musicalRepository.findByMusicalId(musicalId);
        reviewSeat.setMusical(musical);
        log.info(String.valueOf(musical));

        reviewSeat.setScoreSeat(Integer.parseInt(scoreSeat));
        reviewSeat.setScoreView(Integer.parseInt(scoreView));
        reviewSeat.setScoreSound(Integer.parseInt(scoreSound));
        reviewSeat.setScoreLight(Integer.parseInt(scoreLight));
        reviewSeat.setScoreAvgSeat(Double.parseDouble(scoreAvgSeat));
        reviewSeat.setReviewSeTxt(reviewSeTxt);
        reviewSeat.setWriteDate(LocalDateTime.now());
        reviewSeatRepository.save(reviewSeat);
        return true;
    }
}

