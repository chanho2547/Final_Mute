package com.mute.Final.repository;

import com.mute.Final.entity.Member;
import com.mute.Final.entity.Musical;
import com.mute.Final.entity.Ticket;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Modifying;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;

import javax.transaction.Transactional;
import java.time.LocalDateTime;
import java.util.List;


public interface TicketRepository extends JpaRepository<Ticket, String> {

    Ticket ticket = new Ticket();

    @Modifying
    @Transactional
    @Query(value = "delete from ticket where user_id = ?1", nativeQuery = true)
    void deleteByUserId(Member member); // 회원탈퇴


    List<Ticket> findBySeeDate(LocalDateTime seeDate);


}
