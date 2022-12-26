package com.mute.Final.repository;

import com.mute.Final.entity.Theater;
import org.springframework.data.jpa.repository.JpaRepository;
import java.util.List;

public interface TheaterRepository extends JpaRepository<Theater, String> {
    List<Theater> findByTheaterNameLike(String theaterName);

    Theater findByTheaterId(String theaterId); // 도연 - 좌석 후기 작성
}
