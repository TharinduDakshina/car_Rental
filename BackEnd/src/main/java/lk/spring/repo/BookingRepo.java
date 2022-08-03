package lk.spring.repo;

import lk.spring.entity.Booking;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;

import java.util.List;

public interface BookingRepo extends JpaRepository<Booking,String> {

    Booking findTopByOrderByBookingIDDesc();
    @Query(value = "select count(*) FROM booking",nativeQuery = true)
    int totalBookingAmount();

    List<Booking> findByStatus(String value);
}
