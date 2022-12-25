package com.mute.Final.service;
import com.mute.Final.entity.ReviewSeat;
import com.mute.Final.entity.ReviewTotal;
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
    public boolean deleteTotal(String member, String reviewMuId) {
        try {
            ReviewTotal reviewTotal =  reviewTotalRepository.findByReviewMuId(Long.parseLong(reviewMuId));

            if(reviewTotal.getMember().getUserNum().equals(Long.parseLong(member))){
                Long result = reviewTotalRepository.deleteByReviewMuId(Long.parseLong(reviewMuId));
                if (result==1) return true;
                else return false;
            }


        } catch (Exception e) {
            log.warn("실패!!!!!!!!!!!!!ㅠㅠㅠㅠㅠㅠ");
            return false;
        }
        return false;
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


    // 좌석 후기 삭제(은종)
    public boolean deleteSeatView(String member, String reviewSeId) {
        try {
            ReviewSeat reviewSeat =  reviewSeatRepository.findByReviewSeId(Long.parseLong(reviewSeId));
            log.warn("test1 : " + reviewSeId);
            if(reviewSeat.getMember().getUserNum().equals(Long.parseLong(member))){
                Long result = reviewSeatRepository.deleteByReviewSeId(Long.parseLong(reviewSeId));
                if (result==1) return true;
                else return false;
            }
        } catch (Exception e) {
            log.warn("실패!!!!!!!!!!!!!ㅠㅠㅠㅠㅠㅠ");
            return false;
        }
        return false;
    }
}

