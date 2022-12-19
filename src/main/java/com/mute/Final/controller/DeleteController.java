package com.mute.Final.controller;
import com.mute.Final.service.DeleteService;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import java.util.Map;

// 후기 삭제  - 도연

@RestController
@RequestMapping(value = "/review", method = RequestMethod.POST)
public class DeleteController {
    // Service 로직 연결
    private DeleteService deleteService;

    public DeleteController(DeleteService deleteService) {
        this.deleteService = deleteService;
    }

    // 총평 후기 삭제
    @DeleteMapping("/deleteTotal")
    public ResponseEntity<Boolean> deleteTotal(@RequestBody Map<String, String> deleteTotalData) {
        String member = deleteTotalData.get("member");
        String reviewMuId = deleteTotalData.get("reviewMuId");

        //System.out.println("asdf : " + member + " || " + reviewMuId);

        boolean result = deleteService.deleteTotal(member, reviewMuId);
        if(result) {
            return new ResponseEntity(true, HttpStatus.OK);
        } else {
            return new ResponseEntity(false, HttpStatus.BAD_REQUEST);
        }
    }

    // 좌석 후기 삭제
    @DeleteMapping("/deleteSeat")
    public ResponseEntity<Boolean> deleteSeat(@RequestBody Map<String, String> deleteSeatData) {
        String member = deleteSeatData.get("member");
        String reviewSeId = deleteSeatData.get("reviewSeId");
        boolean result = deleteService.deleteSeat(reviewSeId);
        if(result) {
            return new ResponseEntity(true, HttpStatus.OK);
        } else {
            return new ResponseEntity(false, HttpStatus.BAD_REQUEST);
        }
    }
}
