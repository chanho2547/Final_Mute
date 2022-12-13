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

import java.util.ArrayList;
import java.util.HashMap;
import java.util.List;
import java.util.Map;

@Service
@Component
@Slf4j
public class MusicalDetailApiService {

    @Value("${api.serviceKey}")
    private String key;

    @Autowired
    MusicalRepository musicalRepository;

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

//            // 상세이미지 가져오기.. 못가져옴
//            JSONObject item2 = item.getJSONObject("styurls");
//
//            JSONArray item2 = item.getJSONArray("styurls");
//            String str = item2.toString();
//            String[] splitImgUrl = str.split(",");
//
//            for (int i = 0; i <splitImgUrl.length; i++) {
//                log.error(splitImgUrl.toString());
//            }

//            log.warn(item2.toString());
//            JSONArray item3 = item2.getJSONArray("styurl");
//            log.error(item3.toString());

            // 상세이미지 가져오기.. 못가져옴ㅠㅠ
//            JSONObject item2 = item.getJSONObject("styurls");
//            JSONArray jsonArr = item2.getJSONArray("styurl");
//
//            String arrStr = jsonArr.toString();
//
//            log.warn("styurl ToString확인 :: " + arrStr);

            //arrStr = arrStr.split(",");

            //log.error("split확인 :: " + strSplit);
//            String tmp1 = arrStr.replace("[", "");
//            String tmp2 = arrStr.replace("]", "");
//            JSONArray jsonArr = new JSONArray(Arrays.asList(arrStr));

//            for(String s : arrayStr) {
//                String musicalDescImg1 = arrayStr[0];
//                String musicalDescImg2 = arrayStr[1];
////                String musicalDescImg3 = arrayStr[2];
////                String musicalDescImg4 = arrayStr[3];
//
////                musicalDescImg2 = musicalDescImg2.substring(0, musicalDescImg2.length() - 1);
//
////                musicalDescImg1 = musicalDescImg1.replace("[", "");
////                musicalDescImg2 = musicalDescImg2.replace("]", "");
////                String tmp3 = musicalDescImg3.replace("]", "");
////                String tmp4 = musicalDescImg4.replace("]", "");
//
//                log.warn("이미지주소확인" + s);
//
//
//            }

            // DTO에 저장하기
            MusicalDetailDTO musicalDetailDTO = new MusicalDetailDTO(item);
            list.add(musicalDetailDTO);

            log.warn(musicalDetailDTO.toString());

//            // DB에 저장하기
//            Musical musical = new Musical(item);
//            musicalRepository.save(musical);

        } catch (Exception e) {
            e.printStackTrace();
        }
        return list;
    }
}