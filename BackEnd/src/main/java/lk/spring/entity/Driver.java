package lk.spring.entity;

import com.fasterxml.jackson.annotation.JsonIgnore;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;
import lombok.ToString;

import javax.persistence.CascadeType;
import javax.persistence.Entity;
import javax.persistence.Id;
import javax.persistence.OneToMany;
import java.util.ArrayList;
import java.util.List;

@AllArgsConstructor

@Data
@Entity
@ToString
public class Driver {
    @Id
    private String driverID;
    private String name;
    private String contact;
    private String nic;
    private String email;
    private String userName;
    private String password;
    private boolean available;

    @OneToMany(mappedBy = "driver",cascade = CascadeType.ALL)
    private List<Booking> bookings = new ArrayList<Booking>();

    public Driver(String driverID, String name, String email, String userName, String password, boolean available) {
        this.driverID = driverID;
        this.name = name;
        this.email = email;
        this.userName = userName;
        this.password = password;
        this.available = available;
    }

    public Driver(String driverID, String name, String contact, String nic, String email, String userName, String password) {
        this.driverID = driverID;
        this.name = name;
        this.contact = contact;
        this.nic = nic;
        this.email = email;
        this.userName = userName;
        this.password = password;
    }

    public Driver() {
    }
}
