package com.mute.Final.repository;
import com.mute.Final.entity.ReviewTotalAvg;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import java.util.List;

public interface ReviewTotalAvgRepository extends JpaRepository<ReviewTotalAvg,Integer> {

//    @Query(value = "select rm.musical_id, m.musical_name, m.musical_start, m.musical_end, m.theater_name, avg(rm.score_avg_total) " +
//            "from review_musical as rm join musical as m " +
//            "on rm.musical_id = m.musical_id " +
//            "group by m.musical_id " +
//            "order by avg(rm.score_avg_total) desc limit 3;", nativeQuery = true)
//    List<ReviewTotalAvg> findTop3();
}
