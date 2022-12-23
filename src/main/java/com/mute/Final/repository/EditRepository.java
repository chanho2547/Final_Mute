package com.mute.Final.repository;

import com.mute.Final.entity.Member;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.List;

public interface EditRepository extends JpaRepository<Member, String> {
    List<Member> findByUserId (String userId);
}
