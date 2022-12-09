package com.mute.Final.repository;

import com.mute.Final.entity.ReviewSeat;
import com.mute.Final.entity.ReviewSeatAvg;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;

import java.util.List;

public interface ReviewSeatRepository extends JpaRepository<ReviewSeat,Long> {
    // 좌석번호별 개인 후기 전체조회
    List<ReviewSeat> findBySeatNum(int seatNum);

    // 좌석번호별 후기 개수
    // select count(*) from review_seat where seat_num = 8450; //  => 만들어야 하는 쿼리
    // Long countBySeatNum(int seatNum); // Long타입..?     // JPA쿼리
    // @Query(value = "count")     // native쿼리

}
