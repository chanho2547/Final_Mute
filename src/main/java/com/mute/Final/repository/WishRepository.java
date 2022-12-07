package com.mute.Final.repository;


import com.mute.Final.entity.Wish;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import java.util.List;

public interface WishRepository extends JpaRepository<Wish, Long> {
    // 회원 아이디로 조회했을 때 alarm = on인 데이터만 select
    @Query(value = "select * from wish where user_num = ?1 and alarm_status = 'ON'", nativeQuery = true)
    List<Wish> findUserNumON(int userNum);
}
