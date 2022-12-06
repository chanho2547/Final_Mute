package com.mute.Final.repository;
import com.mute.Final.entity.ReviewMusical;
import org.springframework.data.jpa.repository.JpaRepository;

// 총평 후기 - 도연

public interface ReviewTotalRepository extends JpaRepository<ReviewMusical, Long> {

}
