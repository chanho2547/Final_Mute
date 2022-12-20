package com.mute.Final.service;

import com.mute.Final.dto.MusicalDetailDTO;
import com.mute.Final.dto.TheaterDTO;
import com.mute.Final.entity.Musical;
import com.mute.Final.entity.Theater;
import com.mute.Final.repository.TheaterRepository;
import lombok.extern.slf4j.Slf4j;
import org.json.JSONObject;
import org.json.XML;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.http.HttpEntity;
import org.springframework.http.HttpHeaders;
import org.springframework.http.HttpMethod;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Component;
import org.springframework.stereotype.Service;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.client.RestTemplate;
import org.springframework.web.util.UriComponents;
import org.springframework.web.util.UriComponentsBuilder;

import java.util.ArrayList;
import java.util.List;

@Service
@Component
@Slf4j
public class TheaterDetailApiService {

    @Value("${api.serviceKey}")
    private String key;

    @Autowired
    TheaterRepository theaterRepository;

    public String TheaterDetailApi(@PathVariable String mt10id) {

        RestTemplate rest = new RestTemplate();
        HttpHeaders headers = new HttpHeaders();
        String body = "";

        HttpEntity<String> requestEntity = new HttpEntity<String>(body, headers);
        UriComponents uri = UriComponentsBuilder
                .fromUriString("https://www.kopis.or.kr")
                .path("/openApi/restful/prfplc/")
                .path(mt10id) // 극장 id
                .queryParam("service", key) // 인증키
                .encode() // utf-8 로 인코딩
                .build();

        ResponseEntity<String> responseEntity = rest.exchange(uri.toUri(), HttpMethod.GET, requestEntity, String.class);
        String response = responseEntity.getBody();
        return response;
    }

    public List<TheaterDTO> detailFromJsonObj(String result) {

        List<TheaterDTO> list = new ArrayList<>();

        try {
            // xml 데이터를 json 데이터로 변환
            JSONObject xmlToJson = XML.toJSONObject(result);

            log.error("처음 변환한 값:" + xmlToJson);
            // JSONObject로 데이터 가져오기
            JSONObject jsonObj = xmlToJson.getJSONObject("dbs");
            // JSONObject로 가져오기
            JSONObject item = jsonObj.getJSONObject("db");

            log.warn(item.toString());

            // DTO에 저장하기
            TheaterDTO theaterDTO = new TheaterDTO(item);
            list.add(theaterDTO);
            log.warn(theaterDTO.toString());

            // DB에 저장하기
            Theater theater = new Theater(item);
            theaterRepository.save(theater);

        } catch (Exception e) {
            e.printStackTrace();
        }
        return list;
    }
}