package com.mute.Final.controller;


import com.mute.Final.entity.Musical;
import com.mute.Final.repository.MusicalRepository;
import lombok.extern.slf4j.Slf4j;
import org.json.simple.JSONArray;
import org.json.simple.JSONObject;
import org.json.XML;
import org.json.simple.parser.JSONParser;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.client.RestTemplate;
import org.springframework.web.util.UriComponents;
import org.springframework.web.util.UriComponentsBuilder;

import java.text.SimpleDateFormat;
import java.time.LocalDate;
import java.util.Date;

@RestController
@Slf4j
@RequestMapping("/musical")
public class MusicalListApiController {

    @Autowired
    private MusicalRepository musicalRepository;

    private String key="5a64fe18bbc04f6aaedbedbe0e9dfa13";

    @GetMapping("/list")
    public String MusicalList() {
        JSONArray jsonArr = null;
        try {
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

            RestTemplate restTemplate = new RestTemplate();

            // api를 호출하여 결과를 가져온 다음 String형태로 먼저 받음
            // RestTemplate.getForObject(URI url, Class<T> responseType) => (호출하는 url, 반환타입)
            String response = restTemplate.getForObject(uri.toUri(), String.class);

            // xml 데이터를 json 데이터로 변환
            org.json.JSONObject jsonObj1 = XML.toJSONObject(response);

            // 파싱해서 데이터 분리하기
            JSONParser jsonParser = new JSONParser();
            JSONObject jsonParseObj = (JSONObject) jsonParser.parse(jsonObj1.toString());

            // JSONObject로 데이터 가져오기
            JSONObject jsonObj2 = (JSONObject) jsonParseObj.get("dbs");

            // 배열형식이니 JSONArray로 가져오기
            jsonArr = (JSONArray) jsonObj2.get("db");

//            // db에 저장 -> 오류나서 막아둠
//            for(int i = 0; i < jsonArr.size(); i++) {
//                JSONObject tmp = (JSONObject) jsonArr.get(i);
//                Musical musical = new Musical(
//                        (String)tmp.get("mt20id"), (String)tmp.get("prfnm"),
//                        (String)tmp.get("fcltynm"), (Date)tmp.get("prfpdfrom"),
//                        (Date)tmp.get("prfpdto"), (String)tmp.get("poster"));
//
//                musicalRepository.save(musical);
//            }

        } catch (Exception e) {
            e.printStackTrace();
        }
        return jsonArr.toString();
    }
}
