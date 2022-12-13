package com.mute.Final.controller;

import com.mute.Final.service.TicketService;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import java.util.Map;

@RestController
@RequiredArgsConstructor
@Slf4j
public class TicketController {

    private final TicketService ticketService;

    @PostMapping("/ticket/insert")
    public ResponseEntity<Boolean> ticketInsert(@RequestBody Map<String, String> data) {
        String seatNum = data.get("seatNum");
        String seatPos = data.get("seatPos");
        String seeDate = data.get("seeDate");
        String ticketDate = data.get("ticketDate");
        String userNum = data.get("userNum");
        String musicalId = data.get("musicalId");
        String paymentId = data.get("paymentId");

        boolean result = ticketService.insertTicket(seatNum, seatPos, seeDate, ticketDate, userNum, musicalId, paymentId);
        if(result) {
            return new ResponseEntity(true, HttpStatus.OK);
        }
        else {
            return new ResponseEntity(false, HttpStatus.BAD_REQUEST);
        }
    }


}
