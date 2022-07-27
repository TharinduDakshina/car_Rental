package lk.spring.repo;

import lk.spring.entity.Customer;
import lk.spring.entity.Driver;
import org.springframework.data.jpa.repository.JpaRepository;

public interface CustomerRepo extends JpaRepository<Customer,String> {

    Customer findTopByOrderByCustomerIDDesc();
    Customer findByUserName(String userName);
}
