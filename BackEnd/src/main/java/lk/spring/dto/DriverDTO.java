package lk.spring.dto;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;
import lombok.ToString;

@AllArgsConstructor
@NoArgsConstructor
@Data
public class DriverDTO {
    private String driverID;
    private String name;
    private String contact;
    private String nic;
    private String email;
    private String userName;
    private String password;
    private boolean available;

    public DriverDTO(String driverID, String name, String email, String userName, String password, boolean available) {
        this.driverID = driverID;
        this.name = name;
        this.email = email;
        this.userName = userName;
        this.password = password;
        this.available = available;
    }

    public DriverDTO(String driverID, String name, String contact, String nic, String email, String userName, String password) {
        this.driverID = driverID;
        this.name = name;
        this.contact = contact;
        this.nic = nic;
        this.email = email;
        this.userName = userName;
        this.password = password;
    }
}
