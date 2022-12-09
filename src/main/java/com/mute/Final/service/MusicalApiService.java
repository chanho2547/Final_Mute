package com.mute.Final.service;

import com.fasterxml.jackson.annotation.JsonFormat;
import com.mute.Final.dto.MusicalDTO;
import lombok.extern.slf4j.Slf4j;
import org.json.JSONArray;
import org.json.JSONObject;
import org.json.XML;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.format.annotation.DateTimeFormat;
import org.springframework.http.*;
import org.springframework.stereotype.Component;
import org.springframework.stereotype.Service;
import org.springframework.web.client.RestTemplate;
import org.springframework.web.util.UriComponents;
import org.springframework.web.util.UriComponentsBuilder;

import java.text.SimpleDateFormat;
import java.util.ArrayList;
import java.util.Date;
import java.util.List;

@Service
@Slf4j
@Component
public class MusicalApiService {
    private String key="5a64fe18bbc04f6aaedbedbe0e9dfa13";

    public String MusicalListApi() {

        RestTemplate rest = new RestTemplate();
        HttpHeaders headers = new HttpHeaders();
        String body = "";

        HttpEntity<String> requestEntity = new HttpEntity<String>(body, headers);
        UriComponents uri = UriComponentsBuilder
                .fromUriString("https://www.kopis.or.kr")
                .path("/openApi/restful/pblprfr/")
                .queryParam("service", key) // 인증키 (필수)
                .queryParam("stdate", 20230101) // 공연시작일 (필수)
                .queryParam("eddate", 20230401) // 공연종료일 (필수)
                .queryParam("cpage", 1) // 현재 페이지 (필수)
                .queryParam("rows", 50) // 페이지 당 목록 수 (필수)
                .queryParam("signgucode", 11) // 지역코드(11 = 서울)
                .queryParam("shcate", "AAAB") // 장르코드(AAAB = 뮤지컬)
                .encode() // utf-8 로 인코딩
                .build();

        ResponseEntity<String> responseEntity = rest.exchange(uri.toUri(), HttpMethod.GET, requestEntity, String.class);
        String response = responseEntity.getBody();
        return response;
//
//        RestTemplate restTemplate = new RestTemplate();
//        UriComponents uri = UriComponentsBuilder
//                .fromUriString("https://www.kopis.or.kr")
//                .path("/openApi/restful/pblprfr/")
//                .queryParam("service", key) // 인증키 (필수)
//                .queryParam("stdate", 20230101) // 공연시작일 (필수)
//                .queryParam("eddate", 20230401) // 공연종료일 (필수)
//                .queryParam("cpage", 1) // 현재 페이지 (필수)
//                .queryParam("rows", 50) // 페이지 당 목록 수 (필수)
//                .queryParam("signgucode", 11) // 지역코드(11 = 서울)
//                .queryParam("shcate", "AAAB") // 장르코드(AAAB = 뮤지컬)
//                .encode() // utf-8 로 인코딩
//                .build();
//
//        // api를 호출하여 결과를 가져온 다음 String형태로 먼저 받음
//        // RestTemplate.getForObject(URI url, Class<T> responseType) => (호출하는 url, 반환타입)
//        String response = restTemplate.getForObject(uri.toUri(), String.class);
//
//        log.warn(response);

    }

    public List<MusicalDTO> fromJSONtoItems(String result) {

        // xml 데이터를 json 데이터로 변환
        JSONObject xmlToJson = XML.toJSONObject(result);

        // JSONObject로 데이터 가져오기
        JSONObject jsonObj = xmlToJson.getJSONObject("dbs");

        // 배열형식이니 JSONArray로 가져오기
        JSONArray jsonArr = jsonObj.getJSONArray("db");

        // DTO에 List형식으로 저장하기
        List<MusicalDTO> musicalListDTOList = new ArrayList<>();
        for (int i = 0; i < jsonArr.length(); i++) {
            org.json.simple.JSONObject itemJson = (org.json.simple.JSONObject) jsonArr.get(i);
            MusicalDTO musicalListDTO = new MusicalDTO(itemJson);
            musicalListDTOList.add(musicalListDTO);
        }
        return musicalListDTOList;
    }

}
