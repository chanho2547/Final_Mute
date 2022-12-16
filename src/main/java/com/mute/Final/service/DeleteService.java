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

    // 총평 후기 삭제
    public boolean deleteTotal(String reviewMuId) {
        try {
            Long result = reviewTotalRepository.deleteByReviewMuId(Long.parseLong(reviewMuId));
            if (result==1) return true;
            else return false;
        } catch (Exception e) {
            log.warn("실패!!!!!!!!!!!!!ㅠㅠㅠㅠㅠㅠ");
            return false;
        }
    }

    // 좌석 후기 삭제
    public boolean deleteSeat(String reviewSeId) {
        try {
            Long result = reviewSeatRepository.deleteByReviewSeId(Long.parseLong(reviewSeId));
            if (result==1) return true;
            else return false;
        } catch (Exception e) {
            log.warn("실패!!!!!!!!!ㅠㅠㅠㅠㅠㅠㅠ");
            return false;
        }
    }
}
