package lk.spring.repo;

import lk.spring.entity.Customer;
import lk.spring.entity.Driver;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;

public interface CustomerRepo extends JpaRepository<Customer,String> {

    Customer findTopByOrderByCustomerIDDesc();
    Customer findByUserName(String userName);
    /*long countByCustomerID();*/

    @Query(value = "select count(*) from Customer",nativeQuery = true)
    int countByCustomerID();
}
