package com.mute.Final.controller;

import com.mute.Final.dto.EmailAuthRequestDto;
import com.mute.Final.service.EmailService;
import lombok.RequiredArgsConstructor;
import org.springframework.messaging.MessagingException;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import java.io.UnsupportedEncodingException;

@RestController
@RequiredArgsConstructor
public class EmailController {

    private final EmailService emailService;

    @PostMapping("login/mailConfirm")
    public String mailConfirm(@RequestBody EmailAuthRequestDto emailDto) throws MessagingException, UnsupportedEncodingException, UnsupportedEncodingException, javax.mail.MessagingException {

        String authCode = emailService.sendEmail(emailDto.getEmail());
        return authCode;
    }
}
