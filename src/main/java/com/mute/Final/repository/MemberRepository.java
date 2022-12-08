package com.mute.Final.repository;
import com.mute.Final.entity.Member;
import org.springframework.data.jpa.repository.JpaRepository;
import java.util.List;
public interface MemberRepository extends JpaRepository<Member, Long> {
    // 도연 - 로그인
    List<Member> findByUserIdAndPwd(String userId, String pwd);

    //List<Member> findByUserId (String userId);
    Member findByUserId(String userId);

    Member findByMail(String mail);

    Member findByPhone(String phone);

    Member findByNameAndMail(String name, String mail);

    Member findByIdAndMail(String id, String mail);
}

