package com.mute.Final.repository;

import com.mute.Final.entity.Member;
import com.mute.Final.entity.Wish;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Modifying;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;

import javax.transaction.Transactional;
import java.util.List;
import java.util.Map;

public interface WishRepository extends JpaRepository<Wish, Long> {
    // 티켓 오픈 전 알림 on select
    @Query(value = "select w.user_num as userNum, w.musical_id as musicalId, w.alarm_status as alarm, m.musical_ticket_start as musicalTicketStart, m.musical_name as musicalName, m.theater_name as theaterName \n" +
            "from wish w " +
            "join musical m\n" +
            "on w.musical_id = m.musical_id\n" +
            "where user_num = :user_num and w.alarm_status = 'ON' and m.musical_ticket_start > sysdate()", nativeQuery = true)
    List<Map<?,?>> wishON(@Param("user_num") int userNum);

    // 인기순 뮤지컬 top3(홈화면)
    @Query(value = "select m.musical_id as musicalId, m.musical_name as musicalName, m.musical_poster as musicalPoster, \n" +
            "m.musical_start as musicalStart, m.musical_end as musicalEnd, m.theater_name as theaterName,  count(w.musical_id) as countId\n" +
            "from wish w \n" +
            "join musical m \n" +
            "on w.musical_id = m.musical_id  \n" +
            "group by(w.musical_id) \n" +
            "order by count(w.musical_id) desc limit 3", nativeQuery = true)
    List<Map<?,?>> wishTop3();

    // 알림 off로 update
    @Modifying
    @Transactional
    @Query(value = "update wish set alarm_status = 'OFF' where user_num = ?1 and musical_id = ?2 and alarm_status = 'ON'", nativeQuery = true)
    Integer updateAlarm(int userNum, String musicalId);

    // 찜한 뮤지컬 삭제
    @Modifying
    @Transactional
    @Query(value = "delete from wish where user_num = ?1 and musical_id = ?2", nativeQuery = true)
    void deleteAlarm(int userNum, String musicalId);

    // 찜한 뮤지컬 전체 조회
    List<Wish> findByMember(Member member);




}
