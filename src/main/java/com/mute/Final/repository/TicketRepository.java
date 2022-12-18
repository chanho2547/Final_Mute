package com.mute.Final.repository;

import com.mute.Final.entity.Member;
import com.mute.Final.entity.Ticket;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;


public interface TicketRepository extends JpaRepository<Ticket, Long> {


    @Query(value = "delete from ticket where user_num = ?", nativeQuery = true)
    void deleteByUserNum(Member member); // 회원탈퇴
}
