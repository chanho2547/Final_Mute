package com.mute.Final.repository;

import com.mute.Final.entity.ReviewSeat;
import com.mute.Final.entity.ReviewSeatAvg;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;

import java.util.List;

public interface ReviewSeatAvgRepository extends JpaRepository<ReviewSeatAvg,Integer> {

    @Query(value = "select seat_num as seat_id, count(seat_num) as review_cnt, avg(score_avg_seat) as avg_all_seat, avg(score_light) as avg_light, avg(score_view) as avg_view, avg(score_sound) as avg_sound, avg(score_seat) as avg_seat  from review_seat group by seat_num;", nativeQuery = true)
    List<ReviewSeatAvg> findAvg();
}
