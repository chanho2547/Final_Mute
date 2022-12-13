package com.mute.Final.repository;

import com.mute.Final.entity.Ticket;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;


public interface TicketRepository extends JpaRepository<Ticket, Long> {
}
