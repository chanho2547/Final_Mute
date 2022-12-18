package com.mute.Final.repository;
import com.mute.Final.entity.ReviewSeatAvg;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import java.util.List;

public interface ReviewTotalAvgRepository extends JpaRepository<ReviewSeatAvg,Integer> {
    @Query(value = "select musical_id as musical_id, count(musical_id) as review_cnt, " +
            "avg(score_avg_total) as avg_all_total, avg(score_story) as avg_story, " +
            "avg(score_direct) as avg_direct, avg(score_cast) as avg_cast, " +
            "avg(score_number) as avg_number from review_total group by musical_id;", nativeQuery = true)
    List<ReviewSeatAvg> findAvg();
}
