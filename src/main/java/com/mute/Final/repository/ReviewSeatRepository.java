package com.mute.Final.repository;

import com.mute.Final.entity.Member;
import com.mute.Final.entity.ReviewSeat;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Modifying;
import org.springframework.data.jpa.repository.Query;

import javax.transaction.Transactional;
import java.util.List;

public interface ReviewSeatRepository extends JpaRepository<ReviewSeat,Long> {
    // 좌석번호별 개인 후기 전체조회
    List<ReviewSeat> findBySeatNum(int seatNum);
    Long deleteByReviewSeId(long reviewSeId); // 좌석 후기 삭제
    @Modifying //데이터베이스에 변경을 주는 네이티브 쿼리는 이 어노테이션 필요 (INSERT, UPDATE, DELETE)
    @Transactional
    @Query(value = "delete from review_seat where user_num = ?1", nativeQuery = true)
    void deleteByUserNum(Member member); // 회원탈퇴
}
