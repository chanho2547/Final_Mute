package com.mute.Final.repository;

import com.mute.Final.entity.ReviewSeat;
import com.mute.Final.entity.ReviewSeatAvg;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;

import java.util.List;

public interface ReviewSeatAvgRepository extends JpaRepository<ReviewSeatAvg,Integer> {

    @Query(value = "select seat_num as seat_id, avg(score_avg_seat) as avg_all_seat from review_seat group by seat_num", nativeQuery = true)
    List<ReviewSeatAvg> findAvg();
}
