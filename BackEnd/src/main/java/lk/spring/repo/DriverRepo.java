package lk.spring.repo;


import lk.spring.entity.Driver;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;

public interface DriverRepo extends JpaRepository<Driver,String> {

    Driver findTopByOrderByDriverIDDesc();
    Driver findByUserName(String userName);

    @Query(value = "select count(*) from Driver",nativeQuery = true)
    int totalDriverCount();
}
