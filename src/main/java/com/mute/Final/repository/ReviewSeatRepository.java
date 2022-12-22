package com.mute.Final.repository;

import com.mute.Final.entity.Member;
import com.mute.Final.entity.ReviewSeat;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Modifying;
import org.springframework.data.jpa.repository.Query;

import javax.transaction.Transactional;
import java.util.List;
import java.util.Map;

public interface ReviewSeatRepository extends JpaRepository<ReviewSeat,Long> {

    @Query(value = "select seat_num as seatNum,count(seat_num) as cnt, " +
            "avg(score_avg_seat) as avgSeat, avg(score_light) as light, avg(score_seat) as seat, " +
            "avg(score_sound) as sound, avg(score_view) as view " +
            "from review_seat WHERE seat_num = ?1 " +
            "group by seat_num", nativeQuery = true)
    List<Map<?,?>> reviewSeatScore(int seatNum); // 좌석번호별 후기 평균

    List<ReviewSeat> findBySeatNum(int seatNum); // 좌석번호별 개인 후기 전체조회
    Long deleteByReviewSeId(long reviewSeId); // 좌석 후기 삭제

}
