package lk.spring.repo;

import lk.spring.entity.Car;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;

public interface CarRepo extends JpaRepository<Car,String> {
    @Query(value = "select count(*) from Car ",nativeQuery = true)
    int totalCarCount();
}
