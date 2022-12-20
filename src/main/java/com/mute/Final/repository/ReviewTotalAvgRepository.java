package com.mute.Final.repository;
import com.mute.Final.entity.ReviewTotalAvg;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import java.util.List;

public interface ReviewTotalAvgRepository extends JpaRepository<ReviewTotalAvg,Integer> {
    @Query(value = "select musical_id as musical_id, count(musical_id) as review_cnt, " +
            "avg(score_avg_total) as avg_all_total, avg(score_story) as avg_story, " +
            "avg(score_direct) as avg_direct, avg(score_cast) as avg_cast, " +
            "avg(score_number) as avg_number from review_total group by musical_id;", nativeQuery = true)
    List<ReviewTotalAvg> findAvg();

//    @Query(value = "select rm.musical_id, m.musical_name, m.musical_start, m.musical_end, m.theater_name, avg(rm.score_avg_total) " +
//            "from review_musical as rm join musical as m " +
//            "on rm.musical_id = m.musical_id " +
//            "group by m.musical_id " +
//            "order by avg(rm.score_avg_total) desc limit 3;", nativeQuery = true)
//    List<ReviewTotalAvg> findTop3();
}
