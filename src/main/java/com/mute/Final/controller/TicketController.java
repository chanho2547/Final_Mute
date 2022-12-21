package com.mute.Final.controller;

import com.mute.Final.dto.TicketDTO;
import com.mute.Final.service.TicketService;
import lombok.extern.slf4j.Slf4j;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.text.SimpleDateFormat;
import java.time.LocalDateTime;
import java.util.Date;
import java.util.List;
import java.util.Map;

@RestController

@Slf4j
@RequestMapping("/ticket")
public class TicketController {

    private final TicketService ticketService;

    public TicketController(TicketService ticketService) {
        this.ticketService = ticketService;
    }

    @PostMapping("/insert")
    public ResponseEntity<Boolean> ticketInsert(@RequestBody Map<String, String> data) {
        String seatNum = data.get("seatNum");
        String seatPos = data.get("seatPos");
        String seeDate = data.get("seeDate");
        String ticketDate = data.get("ticketDate");
        String userNum = data.get("userNum");
        String musicalId = data.get("musicalId");
        String paymentId = data.get("paymentId");

        //System.out.println("테스트 티켓컨트롤러 asdfasdf : "+seatNum + seatPos + seeDate + ticketDate + userNum + musicalId + paymentId);

        boolean result = ticketService.insertTicket(seatNum, seatPos, seeDate, ticketDate, userNum, musicalId, paymentId);
        if(result) {
            return new ResponseEntity(true, HttpStatus.OK);
        }
        else {
            return new ResponseEntity(false, HttpStatus.BAD_REQUEST);
        }
    }

    @GetMapping ("/get_sold_seat")
    public ResponseEntity<List<TicketDTO>> getSoldSeat() {

        List<TicketDTO> soldOutList = ticketService.getAllSoldSeat();


            return new ResponseEntity(soldOutList, HttpStatus.OK);

    }

    @PostMapping ("/get_sold_seat_by_date")
    public ResponseEntity<List<TicketDTO>> getSoldSeatByDate(@RequestBody Map<String, LocalDateTime> data) {

//        try{
//            SimpleDateFormat simpleDateFormat = new SimpleDateFormat("yyyy-MM-dd HH:mm:ss");
//            SimpleDateFormat dtFormat = new SimpleDateFormat("yyyy-MM-dd HH:mm:ss");
//            SimpleDateFormat newDtFormat = new SimpleDateFormat("yyyy-MM-dd HH:mm:ss");
//
//            Date formatDate = dtFormat.parse(seeDate);
//
//        }catch (Exception e) {
//
//        }

        LocalDateTime seeDate = data.get("seeDate");






        List<TicketDTO> soldOutList = ticketService.getSoldSeatByDate(seeDate);


        return new ResponseEntity(soldOutList, HttpStatus.OK);

    }


}
