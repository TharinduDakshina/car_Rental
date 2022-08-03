package lk.spring.service.impl;


import lk.spring.dto.CustomerDTO;
import lk.spring.dto.DriverDTO;
import lk.spring.entity.Driver;
import lk.spring.repo.DriverRepo;
import lk.spring.service.DriverService;
import org.hibernate.criterion.Example;
import org.modelmapper.ModelMapper;
import org.modelmapper.TypeToken;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.util.List;

@Service
@Transactional
public class DriverServiceImpl implements DriverService {

    @Autowired
    ModelMapper mapper;

    @Autowired
    DriverRepo driverRepo;

    @Override
    public void saveDriver(DriverDTO dto) {
        if (!driverRepo.existsById(dto.getDriverID())){
            driverRepo.save(mapper.map(dto, Driver.class));
        }else{
            throw new RuntimeException("Driver Already Exists! Try Again");
        }
    }

    @Override
    public void updateDriver(DriverDTO dto) {
        if (driverRepo.existsById(dto.getDriverID())){
            driverRepo.save(mapper.map(dto,Driver.class));
        }else{
            throw new RuntimeException("Driver Not Exist..! Please Check ID");
        }
    }

    @Override
    public void deleteDriver(String id) {
        if (driverRepo.existsById(id)){
            driverRepo.deleteById(id);
        }else{
            throw new RuntimeException("Driver Not Exist..! Please Check ID");
        }
    }

    @Override
    public DriverDTO searchDriver(String id) {
        if (driverRepo.existsById(id)) {
            return mapper.map(driverRepo.findById(id).get(), DriverDTO.class);
        }else{
            throw new RuntimeException("No Driver For " + id + " ..!");
        }
    }

    @Override
    public DriverDTO searchDriverForLog(String userName, String password) {
        Driver byUserName = driverRepo.findByUserName(userName);
        System.out.println("Search driver table");
        System.out.println(byUserName);
        if (byUserName!=null) {
            return mapper.map(byUserName,DriverDTO.class);
        }else{
            System.out.println("driver table not found");
            return null;
        }

    }

    @Override
    public List<DriverDTO> getAllDrivers() {
        return mapper.map(driverRepo.findAll(), new TypeToken<List<DriverDTO>>() {
        }.getType());
    }

    @Override
    public DriverDTO findLastDriverById() {
        if (driverRepo.findTopByOrderByDriverIDDesc()==null){
            return null;
        }else{
            return mapper.map(driverRepo.findTopByOrderByDriverIDDesc(),DriverDTO.class);
        }
    }

    @Override
    public int getDriverCount() {
        int i = driverRepo.totalDriverCount();
        System.out.println("Booking ->"+i);
        return i;
    }

    @Override
    public DriverDTO getDriverRandom() {
        return mapper.map(driverRepo.findAvailableDriverRandomly(),DriverDTO.class);
    }

}
