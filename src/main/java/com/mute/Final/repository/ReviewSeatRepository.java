package com.mute.Final.repository;

import com.mute.Final.entity.ReviewSeat;
import org.springframework.data.jpa.repository.JpaRepository;
import java.util.List;

public interface ReviewSeatRepository extends JpaRepository<ReviewSeat,Long> {
    // 좌석번호별 개인 후기 전체조회
    List<ReviewSeat> findBySeatNum(int seatNum);
    Long deleteByReviewSeId(long reviewSeId); // 좌석 후기 삭제
}
