package com.mute.Final.repository;

import com.mute.Final.entity.Wish;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Modifying;
import org.springframework.data.jpa.repository.Query;
import javax.transaction.Transactional;
import java.util.List;

public interface WishRepository extends JpaRepository<Wish, Long> {
    // 회원 아이디로 조회했을 때 alarm = on인 데이터만 select
//    List<Wish> findByUserNumAndAlarmStatus(int userNum, String alarm);
    @Query(value = "select * from wish where user_num = ?1 and alarm_status = 'ON'", nativeQuery = true)
    List<Wish> findUserNumON(int userNum);

    // alarm = "on" => "update"
    @Modifying
    @Transactional
    @Query(value = "update wish set alarm_status = 'OFF' where user_num = ?1 and musical_id = ?2 and alarm_status = 'ON'", nativeQuery = true)
    Integer updateAlarm(int userNum, String musicalId);

}
