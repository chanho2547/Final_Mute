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
//    @DeleteMapping("/deleteTotal/{reviewMuId}")
//    public String delete(@PathVariable("reviewMuId") String userNum) {
//        deleteService.deletePost(userNum);
//
//        return "redirect:/";
//    }


    @DeleteMapping("/deleteTotal")

    public ResponseEntity<Boolean> deleteTotal(@RequestBody Map<String, String> deleteTotalData) {
//        String userNum = deleteTotalData.get("userNum");
        String reviewMuId = deleteTotalData.get("reviewMuId");
        boolean result = deleteService.deleteTotal(reviewMuId);
        if(result) {
            return new ResponseEntity(true, HttpStatus.OK);
        } else {
            return new ResponseEntity(false, HttpStatus.OK);
        }
    }

    // 좌석 후기 삭제
    @DeleteMapping("/deleteSeat")

    public ResponseEntity<Boolean> deleteSeat(@RequestBody Map<String, String> deleteSeatData) {
//        String userNum = deleteSeatData.get("userNum");
        String reviewSeId = deleteSeatData.get("reviewSeId");
        boolean result = deleteService.deleteSeat(reviewSeId);
        if(result) {
            return new ResponseEntity(true, HttpStatus.OK);
        } else {
            return new ResponseEntity(false, HttpStatus.OK);
        }
    }
}
