package com.mute.Final.repository;

import com.mute.Final.entity.Member;
import com.mute.Final.entity.ReviewSeat;
import com.mute.Final.entity.ReviewTotal;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Modifying;
import org.springframework.data.jpa.repository.Query;

import javax.transaction.Transactional;
import java.util.List;
import java.util.Map;

public interface ReviewSeatRepository extends JpaRepository<ReviewSeat,Long> {
    // 좌석번호별 평균 후기 view
    @Query(value = "select seat_num as seatNum,count(seat_num) as cnt, " +
            "avg(score_avg_seat) as avgSeat, avg(score_light) as light, avg(score_seat) as seat, " +
            "avg(score_sound) as sound, avg(score_view) as view " +
            "from review_seat WHERE seat_num = ?1 " +
            "group by seat_num", nativeQuery = true)
    List<Map<?,?>> reviewSeatScore(int seatNum);

    // 좌석번호별 개인별 후기 view
    List<ReviewSeat> findBySeatNum(int seatNum);

    // 좌석 후기 삭제
    Long deleteByReviewSeId(long reviewSeId);
    ReviewSeat findByReviewSeId(long reviewSeId);

    // 마이페이지 좌석 후기 view
    List<ReviewSeat> findByMember(Member member);

    // 좌석 후기 삭제 => 좌석번호랑 userNum가지고 지우기
    @Modifying
    @Transactional
    @Query(value = "delete from review_seat where user_num = ?1 and seat_num = ?2", nativeQuery = true)
    void deleteSeatReview(int userNum, int seatNum);

    @Modifying //데이터베이스에 변경을 주는 네이티브 쿼리는 이 어노테이션 필요 (INSERT, UPDATE, DELETE)
    @Transactional
    @Query(value = "delete from review_seat where user_num = ?1", nativeQuery = true)
    void deleteByUserNum(String userId); // 회원탈퇴

    @Modifying //데이터베이스에 변경을 주는 네이티브 쿼리는 이 어노테이션 필요 (INSERT, UPDATE, DELETE)
    @Transactional
    @Query(value = "delete from review_seat where user_id = ?1", nativeQuery = true)
    void deleteByUserId(Member member); // 회원탈퇴
}
