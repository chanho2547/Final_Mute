package com.mute.Final.repository;
import com.mute.Final.entity.Member;
import com.mute.Final.entity.Musical;
import com.mute.Final.entity.ReviewTotal;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Modifying;
import org.springframework.data.jpa.repository.Query;

import javax.transaction.Transactional;
import java.util.List;
import java.util.Map;

public interface ReviewTotalRepository extends JpaRepository<ReviewTotal, Long> {
    @Query(value = "select rm.musical_id as musicalId, m.musical_poster, m.musical_name, m.musical_start, " +
            "m.musical_end, m.theater_name, avg(rm.score_avg_total) as avg_musical " +
            "from review_musical as rm " +
            "join musical as m " +
            "on rm.musical_id = m.musical_id " +
            "group by m.musical_id " +
            "order by avg(rm.score_avg_total) desc limit 3", nativeQuery = true)
    List<Map<?, ?>> reviewTop3();

    List<ReviewTotal> findByMusicalId(Musical musicalId); // 도연 - 뮤지컬 총평 후기 view
    Long deleteByReviewMuId(long reviewMuId); // 도연 - 뮤지컬 총평 후기 삭제
    ReviewTotal findByReviewMuId(long reviewMuId); // 도연 - 뮤지컬 총평 후기 삭제
    List<ReviewTotal> findByMember(Member member); // 도연 - 마이페이지 - 나의 뮤지컬 후기 view

    @Modifying //데이터베이스에 변경을 주는 네이티브 쿼리는 이 어노테이션 필요 (INSERT, UPDATE, DELETE)
    @Transactional
    @Query(value = "delete from review_musical where user_num = ?1", nativeQuery = true)
    void deleteByUserNum(Member userId); // 회원탈퇴
}
