package com.mute.Final.repository;

import com.mute.Final.entity.Member;
import com.mute.Final.entity.Payment;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Modifying;
import org.springframework.data.jpa.repository.Query;

import javax.transaction.Transactional;

public interface PayRepository extends JpaRepository<Payment, Long>{

    @Modifying //데이터베이스에 변경을 주는 네이티브 쿼리는 이 어노테이션 필요 (INSERT, UPDATE, DELETE)
    @Transactional
    @Query(value = "delete from payment where user_num = ?1", nativeQuery = true)
    void deleteByUserNum(String userId); // 회원탈퇴
}
