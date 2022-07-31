package lk.spring.repo;

import lk.spring.entity.Admin;
import lk.spring.entity.Driver;
import org.springframework.data.jpa.repository.JpaRepository;

public interface AdminRepo extends JpaRepository<Admin,String> {

    Admin findByUserName(String userName);
}
