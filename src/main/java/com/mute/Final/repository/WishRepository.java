package com.mute.Final.repository;

import com.mute.Final.entity.Member;
import com.mute.Final.entity.Wish;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Modifying;
import org.springframework.data.jpa.repository.Query;
import javax.transaction.Transactional;
import java.util.List;
import java.util.Optional;

public interface WishRepository extends JpaRepository<Wish, Long> {
//    List<Wish> findByUserNumAndAlarmStatus(int userNum, String alarm);
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

    @Modifying //데이터베이스에 변경을 주는 네이티브 쿼리는 이 어노테이션 필요 (INSERT, UPDATE, DELETE)
    @Transactional
    @Query(value = "delete from wish where user_num = ?1", nativeQuery = true)
    void deleteByUserNum(Member member); // 회원탈퇴

//    List<Wish> findByUserNum(int userNum);

}
