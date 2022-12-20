package com.mute.Final.repository;

import com.mute.Final.entity.Member;
import com.mute.Final.entity.Ticket;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Modifying;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;

import javax.transaction.Transactional;


public interface TicketRepository extends JpaRepository<Ticket, Long> {

    Ticket ticket = new Ticket();

    @Modifying
    @Transactional
    @Query(value = "delete from ticket where user_num = ?1", nativeQuery = true)
    void deleteByUserNum(Member member); // 회원탈퇴


}
