package lk.spring.repo;

import lk.spring.entity.Car;
import lk.spring.entity.Customer;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;

public interface CarRepo extends JpaRepository<Car,String> {
    @Query(value = "select count(*) from Car ",nativeQuery = true)
    int totalCarCount();

    Car findTopByOrderByCarIDDesc();

    @Query(value = "update car set status=?1 where carID=?2",nativeQuery = true)
    void updateCarStatus(String cValue ,String id);

}
