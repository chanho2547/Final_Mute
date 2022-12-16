package com.mute.Final.service;

import com.fasterxml.jackson.databind.ObjectMapper;
import com.mute.Final.dto.MusicalDetailDTO;
import com.mute.Final.repository.MusicalRepository;
import lombok.extern.slf4j.Slf4j;
import org.json.JSONArray;
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

import java.util.*;

@Service
@Component
@Slf4j
public class MusicalDetailApiService {

    @Value("${api.serviceKey}")
    private String key;

    public String MusicalDetailApi(@PathVariable String mt20id) {

        RestTemplate rest = new RestTemplate();
        HttpHeaders headers = new HttpHeaders();
        String body = "";

        HttpEntity<String> requestEntity = new HttpEntity<String>(body, headers);
        UriComponents uri = UriComponentsBuilder
                .fromUriString("https://www.kopis.or.kr")
                .path("/openApi/restful/pblprfr/")
                .path(mt20id) // 뮤지컬 id
                .queryParam("service", key) // 인증키
                .encode() // utf-8 로 인코딩
                .build();

        ResponseEntity<String> responseEntity = rest.exchange(uri.toUri(), HttpMethod.GET, requestEntity, String.class);
        String response = responseEntity.getBody();
        return response;
    }

    public List<MusicalDetailDTO> detailFromJsonObj(String result) {

        List<MusicalDetailDTO> list = new ArrayList<>();

        try {
            // xml 데이터를 json 데이터로 변환
            JSONObject xmlToJson = XML.toJSONObject(result);
            // JSONObject로 데이터 가져오기
            JSONObject jsonObj = xmlToJson.getJSONObject("dbs");
            // JSONObject로 가져오기
            JSONObject item = jsonObj.getJSONObject("db");

            log.warn(item.toString());

//            JSONArray jsonArray = item.getJSONObject("styurls").getJSONArray("styurl");
//            jsonArray.get(0);
//            jsonArray.get(1);
//
//            log.warn(jsonArray.get(0).toString());


//            JSONArray jsonArr = new JSONArray(Arrays.asList(item.get("styurls")));

//            JSONObject item2 = item.getJSONObject("styurls");

//            if (item.get("styurls") == jsonArr) {
//
//            }
//            log.error("item(db)까지::::" + item);
//            log.warn("styurls 제이슨어레이::::" + jsonArr);

            // DTO에 저장하기
            MusicalDetailDTO musicalDetailDTO = new MusicalDetailDTO(item);
            list.add(musicalDetailDTO);

            log.warn(musicalDetailDTO.toString());

        } catch (Exception e) {
            e.printStackTrace();
        }
        return list;
    }
}