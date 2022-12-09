package com.mute.Final.repository;

import com.mute.Final.entity.Musical;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;

import java.time.LocalDateTime;
import java.util.List;

public interface MusicalRepository extends JpaRepository<Musical, Long> {
    // 뮤지컬 이름으로 뮤지컬 검색
    List<Musical> findByMusicalNameLike(String musicalName);

    // 뮤지컬 이름으로 찾기
    Musical findByMusicalName(String musicalName);

    // 뮤지컬 ID 찾기(Wish 테이블 데이터 추가)
    Musical findByMusicalId(String musicalId);

    // 티켓 최근 오픈순 top3
    // 필요한 쿼리 => select * from musical where musical_ticket_start < sysdate() order by musical_ticket_start desc limit 3;
    //List<Musical>findTop3ByOrderByMusicalTicketStartDesc(); // 티켓 최근 오픈 순 TOP3 => error 수정 예정
    @Query(value = "select * from musical where musical_ticket_start < sysdate() order by musical_ticket_start desc limit 3", nativeQuery = true)
    List<Musical> findAllSysdateBefore();

    // 티켓 오픈 예정순 top3
    // 필요한 쿼리 => select * from musical where musical_ticket_start > sysdate() order by musical_ticket_start limit 3;
    //  List<Musical>findAllByMusicalTicketStartAfter(LocalDateTime now); // 티켓 오픈 예정 순 TOP3 뮤지컬 조회 => error
    @Query(value = "select * from musical where musical_ticket_start > sysdate() order by musical_ticket_start limit 3", nativeQuery = true)
    List<Musical> findAllSysdateAfter();


}
