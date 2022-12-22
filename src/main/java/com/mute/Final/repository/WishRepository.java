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
    // 찜한 뮤지컬 중 티켓 오픈 예정 전 목록(알림창)
    @Query(value = "select w.user_num, w.musical_id, w.alarm_status, m.musical_ticket_start, m.musical_name, m.theater_name \n" +
            "from wish w " +
            "join musical m\n" +
            "on w.musical_id = m.musical_id\n" +
            "where user_num = :user_num and w.alarm_status = 'ON' and m.musical_ticket_start > sysdate()", nativeQuery = true)
    List<Map<?,?>> wishON(@Param("user_num") int userNum);


    List<Wish> findByMember(Member member);

    @Query(value = "select * from wish where user_num = ?1 and alarm_status = 'ON'", nativeQuery = true)
    List<Wish> findUserNumON(int userNum);

    @Modifying
    @Transactional
    @Query(value = "update wish set alarm_status = 'OFF' where user_num = ?1 and musical_id = ?2 and alarm_status = 'ON'", nativeQuery = true)
    Integer updateAlarm(int userNum, String musicalId);

    @Modifying
    @Transactional
    @Query(value = "delete from wish where user_num = ?1 and musical_id = ?2", nativeQuery = true)
    void deleteAlarm(int userNum, String musicalId);
//    void deleteByUserNumAndMusicalId(int userNum, String musicalId);

}
