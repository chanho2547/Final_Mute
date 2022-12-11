package com.mute.Final.service;

import com.fasterxml.jackson.core.JsonProcessingException;
import com.fasterxml.jackson.databind.JsonMappingException;
import com.fasterxml.jackson.databind.ObjectMapper;
import com.mute.Final.dto.MusicalDTO;
import com.mute.Final.dto.MusicalDetailDTO;
import com.mute.Final.entity.Musical;
import com.mute.Final.repository.MusicalRepository;
import org.json.JSONArray;
import org.json.JSONObject;
import org.json.XML;
import org.json.simple.parser.JSONParser;
import org.json.simple.parser.ParseException;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpEntity;
import org.springframework.http.HttpHeaders;
import org.springframework.http.HttpMethod;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Component;
import org.springframework.stereotype.Service;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.client.RestTemplate;
import org.springframework.web.util.UriComponents;
import org.springframework.web.util.UriComponentsBuilder;

import java.io.IOException;
import java.util.ArrayList;
import java.util.HashMap;
import java.util.List;
import java.util.Map;

@Service
@Component
public class MusicalDetailApiService {

    private String key="5a64fe18bbc04f6aaedbedbe0e9dfa13";

    @Autowired
    MusicalRepository musicalRepository;

    public String MusicalDetailApi() {

        RestTemplate rest = new RestTemplate();
        HttpHeaders headers = new HttpHeaders();
        String body = "";

        HttpEntity<String> requestEntity = new HttpEntity<String>(body, headers);
        UriComponents uri = UriComponentsBuilder
                .fromUriString("https://www.kopis.or.kr")
                .path("/openApi/restful/pblprfr/")
                .path("PF202217") // 뮤지컬 id (임시 : 베토벤 id)
                .queryParam("service", key) // 인증키
                .encode() // utf-8 로 인코딩
                .build();

        ResponseEntity<String> responseEntity = rest.exchange(uri.toUri(), HttpMethod.GET, requestEntity, String.class);
        String response = responseEntity.getBody();
        return response;
    }

    public Map<String, Object> getMapFromJsonObj(JSONObject jsonObject) throws ParseException {

        Map<String, Object> map = new HashMap<>();
        Map<String, Object> map2 = new HashMap<>();

        // xml 데이터를 json 데이터로 변환
        JSONObject xmlToJson = XML.toJSONObject(String.valueOf(jsonObject));

        // JSONObject로 데이터 가져오기
        JSONObject jsonObj = xmlToJson.getJSONObject("dbs");

        // JSONObject로 가져오기
        JSONObject jsonObj2 = jsonObj.getJSONObject("db");

        // 상세이미지 저장하기 위해 파싱
        JSONParser jsonParser = new JSONParser();
        JSONObject jsonParseObj = (JSONObject) jsonParser.parse("styurls");


        // DTO에 MAP형식으로 저장하기 => 수정필요!
        try {
            map = new ObjectMapper().readValue(jsonObj2.toString(), Map.class);
            map2 = new ObjectMapper().readValue(jsonParseObj.toString(), Map.class);
//            MusicalDetailDTO musicalDetailDTO = new MusicalDetailDTO();
//            musicalDetailDTO.setMusicalId((String) map.get("mt20id"));
//            musicalDetailDTO.setMusicalName((String) map.get("prfnm"));
//            musicalDetailDTO.setMusicalDescImg((String) map2.get("styurl"));

//            Musical musical = new Musical(item2);
//            musicalRepository.save(musical);

        } catch (IOException e) {
            e.printStackTrace();
        }

//        // DB에 저장하기
//        for (int i = 0; i < jsonArr.length(); i++) {
//            JSONObject item = (JSONObject) jsonArr.get(i);
//            Musical musical = new Musical(item);
//            musicalRepository.save(musical);
//        }
        return map;
    }
}
