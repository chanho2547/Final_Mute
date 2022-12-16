package com.mute.Final.service;
import com.mute.Final.entity.ReviewSeat;
import com.mute.Final.entity.ReviewTotal;
import com.mute.Final.repository.MemberRepository;
import com.mute.Final.repository.MusicalRepository;
import com.mute.Final.repository.ReviewSeatRepository;
import com.mute.Final.repository.ReviewTotalRepository;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.stereotype.Service;
import javax.transaction.Transactional;

// 후기 삭제 - 도연

@Service
@Transactional
@Slf4j
@RequiredArgsConstructor
public class DeleteService {
    private final ReviewTotalRepository reviewTotalRepository; // 총평 후기
    private final ReviewSeatRepository reviewSeatRepository; // 좌석 후기
    private final MemberRepository memberRepository;
    private final MusicalRepository musicalRepository;

    // 총평 후기 삭제
//    @Transactional
//    public void deletePost(String userNum) {
//        reviewTotalRepository.deleteById(userNum);
//    }

    public boolean deleteTotal(String reviewMuId) {
//        log.error("reviewMuId 확인 : " + reviewMuId);

        try {
            ReviewTotal reviewTotal = reviewTotalRepository.findByReviewMuId(Long.parseLong(reviewMuId));
            return true;
        } catch (Exception e) {
            log.warn("실패!!!!!!!!!!!!!ㅠㅠㅠㅠㅠㅠ");
            return false;
        }
    }

    // 좌석 후기 삭제
    public boolean deleteSeat(String reviewSeId) {
        log.error("reviewSeId 확인 : " + reviewSeId);
        try {
            ReviewSeat reviewSeat = reviewSeatRepository.findByReviewSeId(Long.parseLong(reviewSeId));
            return true;
        } catch (Exception e) {
            log.warn("실패!!!!!!!!!ㅠㅠㅠㅠㅠㅠㅠ");
            return false;
        }
    }
}
