package com.mute.Final.service;

import com.mute.Final.constant.AlarmStatus;
import com.mute.Final.dto.TicketDTO;
import com.mute.Final.entity.*;
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
import java.time.format.DateTimeFormatter;
import java.util.ArrayList;
import java.util.List;

@Service
@Slf4j
@Transactional
@RequiredArgsConstructor
public class TicketService {

    private final TicketRepository ticketRepository;
    private final MemberRepository memberRepository;

    private final MusicalRepository musicalRepository;

    DateTimeFormatter formatter = DateTimeFormatter.ofPattern("yyyy-MM-dd HH:mm:ss");

    public boolean insertTicket(String seatNum, String seatPos, String seeDate, String ticketDate, String userNum, String musicalId, String paymentId) {
        Ticket ticket = new Ticket();
        Payment payment = new Payment();
        //Musical musical = new Musical();

        ticket.setSeatNum(Integer.parseInt(seatNum));
        ticket.setSeatPosition(seatPos);
        ticket.setSeeDate(LocalDateTime.parse(seeDate,formatter));
        ticket.setTicketDate(LocalDateTime.parse(ticketDate,formatter));

        // userNum으로 찾기
        Member member = memberRepository.findByUserNum(Long.parseLong(userNum));
        // 찾은거 넣어주기
        ticket.setMember(member);

        // musical 엔티티 불러와서 넣기
        List<Musical> musical = musicalRepository.findByMusicalNameLike(musicalId);

        //System.out.println("musical 테스트 : "+musical.get(0));
        ticket.setMusical(musical.get(0));


        //payment는 임시로 제외함
        payment.setPaymentId(Long.parseLong(paymentId));
        //System.out.println("payment 테스트1 : " + payment);
        ticket.setPayment(payment);
        //System.out.println("payment 테스트2 : " + payment);


        try{
            ticketRepository.save(ticket);
            return true;

        }catch (Exception e) {
            return false;
        }
    }

    public List<TicketDTO> getAllSoldSeat() {
        List<Ticket> ticketList = ticketRepository.findAll();
        List<TicketDTO> ticketDTOS = new ArrayList<>();
        for(Ticket e : ticketList) {
            TicketDTO ticketDTO = new TicketDTO();
            ticketDTO.setTicketId(e.getTicketId());
            ticketDTO.setSeatNum(e.getSeatNum());
            ticketDTO.setSeatPosition(e.getSeatPosition());
            ticketDTO.setSeeDate(e.getSeeDate());
            ticketDTO.setTicketDate(e.getTicketDate());
            ticketDTO.setUserNum(e.getMember().getUserNum());
            ticketDTO.setMusicalId(e.getMusical().getMusicalId());
            ticketDTO.setPaymentId(e.getPayment().getPaymentId());
            ticketDTOS.add(ticketDTO);
        }

        return ticketDTOS;
    }


    public List<TicketDTO> getSoldSeatByDate(LocalDateTime seeDate) {
        List<Ticket> ticketList = ticketRepository.findBySeeDate(seeDate);
        List<TicketDTO> ticketDTOS = new ArrayList<>();
        for(Ticket e : ticketList) {
            TicketDTO ticketDTO = new TicketDTO();
            ticketDTO.setTicketId(e.getTicketId());
            ticketDTO.setSeatNum(e.getSeatNum());
            ticketDTO.setSeatPosition(e.getSeatPosition());
            ticketDTO.setSeeDate(e.getSeeDate());
            ticketDTO.setTicketDate(e.getTicketDate());
            ticketDTO.setUserNum(e.getMember().getUserNum());
            ticketDTO.setMusicalId(e.getMusical().getMusicalId());
            ticketDTO.setPaymentId(e.getPayment().getPaymentId());
            ticketDTOS.add(ticketDTO);
        }

        return ticketDTOS;
    }



}
