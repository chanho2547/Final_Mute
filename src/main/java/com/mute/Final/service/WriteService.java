package com.mute.Final.service;
import com.mute.Final.entity.ReviewTotal;
import com.mute.Final.entity.ReviewSeat;
import com.mute.Final.repository.ReviewSeatRepository;
import com.mute.Final.repository.ReviewTotalRepository;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.stereotype.Service;
import javax.transaction.Transactional;

@Service
@Transactional
@Slf4j
@RequiredArgsConstructor
public class WriteService {
    private final ReviewTotalRepository reviewTotalRepository; // 총평 후기
    private final ReviewSeatRepository reviewSeatRepository; // 좌석 후기

    // 총평 후기 작성
    public boolean writeTotal(String scoreStory, String scoreDirect, String scoreCast, String scoreNumber, String reviewMuTxt){
        ReviewTotal reviewTotal = new ReviewTotal();
        reviewTotal.setScoreStory(Integer.parseInt(scoreStory));
        reviewTotal.setScoreDirect(Integer.parseInt(scoreDirect));
        reviewTotal.setScoreCast(Integer.parseInt(scoreCast));
        reviewTotal.setScoreNumber(Integer.parseInt(scoreNumber));
        reviewTotal.setReviewMuTxt(reviewMuTxt);
        reviewTotalRepository.save(reviewTotal);
        return true;
    }

    // 좌석 후기 작성
    public boolean writeSeat(String scoreSeat, String scoreView, String scoreSound, String scoreLight, String reviewSeTxt){
        ReviewSeat reviewSeat  = new ReviewSeat();
        reviewSeat.setScoreSeat(Integer.parseInt(scoreSeat));
        reviewSeat.setScoreView(Integer.parseInt(scoreView));
        reviewSeat.setScoreSound(Integer.parseInt(scoreSound));
        reviewSeat.setScoreLight(Integer.parseInt(scoreLight));
        reviewSeat.setReviewSeTxt(reviewSeTxt);
        reviewSeatRepository.save(reviewSeat);
        return true;
    }


}

