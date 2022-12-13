package com.mute.Final.service;

import com.mute.Final.constant.AlarmStatus;
import com.mute.Final.entity.Member;
import com.mute.Final.entity.Musical;
import com.mute.Final.entity.Ticket;
import com.mute.Final.entity.Wish;
import com.mute.Final.repository.MemberRepository;
import com.mute.Final.repository.MusicalRepository;
import com.mute.Final.repository.TicketRepository;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.stereotype.Service;

import javax.persistence.criteria.CriteriaBuilder;
import javax.transaction.Transactional;
import java.rmi.registry.LocateRegistry;
import java.sql.Date;
import java.time.LocalDateTime;
import java.util.List;

@Service
@Slf4j
@Transactional
@RequiredArgsConstructor
public class TicketService {

    private final TicketRepository ticketRepository;
    private final MemberRepository memberRepository;

    private final MusicalRepository musicalRepository;

    public boolean postTicket(Integer seatNum, LocalDateTime seeDate, LocalDateTime ticketDate, Long userNum, String musicalId, Integer paymentID, String seatPos) {
        Ticket ticket = new Ticket();
//        System.out.println("userNum: " + userNum);
//        System.out.println("userNum Type : " + userNum.getClass().getName());
//        System.out.println("musicalId: " + musicalId);

        ticket.setSeatNum(seatNum);
        ticket.setSeeDate(seeDate);
        ticket.setTicketDate(ticketDate);

        // userNum으로 찾기
        Member member = memberRepository.findByUserNum(userNum);
        ticket.setMember(member);

        // musical 엔티티 불러와서 넣기
        List<Musical> musical = musicalRepository.findByMusicalNameLike(musicalId);
        ticket.setMusical(musical.get(0));

        //payment는 임시로 제외함

        ticket.setSeatPosition(seatPos);

        try{
            ticketRepository.save(ticket);
            return true;

        }catch (Exception e) {
            return false;
        }




//        Member member = memberRepository.findByUserNum(Long.parseLong(userNum));
//        wish.setMember(member);
//        log.info(String.valueOf(member));
//        Musical musical = musicalRepository.findByMusicalId(musicalId);
//        wish.setMusical(musical);
//        log.info(String.valueOf(musical));
//        wish.setAlarmStatus(AlarmStatus.ON);
//        Wish test = wishRepository.save(wish);
//        log.info(String.valueOf(test));

        //return true;
    }
}
