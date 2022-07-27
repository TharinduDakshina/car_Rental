package lk.spring.controller;

import lk.spring.dto.DriverDTO;
import lk.spring.service.DriverService;
import lk.spring.util.ResponseUtil;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.MediaType;
import org.springframework.web.bind.annotation.*;

@RestController
@CrossOrigin
@RequestMapping("driver")
public class DriverController {

    @Autowired
    DriverService driverService;

    @ResponseStatus(HttpStatus.CREATED)//201
    @PostMapping(consumes = "application/json",produces = MediaType.APPLICATION_JSON_VALUE)
    public ResponseUtil saveDriver(@RequestBody DriverDTO driver){
        System.out.println("111111111111111111");
        driverService.saveDriver(driver);
        return new ResponseUtil(201,"Saved",null);
    }

    @PutMapping(produces = MediaType.APPLICATION_JSON_VALUE)
    public ResponseUtil updateDriver(@RequestBody DriverDTO driver){
        driverService.updateDriver(driver);
        return new ResponseUtil(200,"Updated",null);
    }

    @GetMapping(produces = MediaType.APPLICATION_JSON_VALUE)
    public ResponseUtil getAllDrivers(){
        return new ResponseUtil(200,"Ok",driverService.getAllDrivers());
    }

    @GetMapping(path = "{id}",produces = MediaType.APPLICATION_JSON_VALUE)
    public ResponseUtil searchDriver(@PathVariable String id){
        return new ResponseUtil(200,"Ok",driverService.searchDriver(id));
    }
    @GetMapping(params = {"userName","password"},produces = MediaType.APPLICATION_JSON_VALUE)
    public ResponseUtil searchDriverForLogin(@RequestParam String userName,String password){
       return new ResponseUtil(200,"Ok",driverService.searchDriverForLog(userName,password));
    }

    @DeleteMapping(path = "/{id}",produces = MediaType.APPLICATION_JSON_VALUE)
    public ResponseUtil deleteDriver(@PathVariable String id){
        driverService.deleteDriver(id);
        return new ResponseUtil(200,"Deleted",null);
    }

    @GetMapping(params = {"driverId"},produces = MediaType.APPLICATION_JSON_VALUE)
    public ResponseUtil getLastDriver(){
        DriverDTO driverById = driverService.findLastDriverById();
        String id=null;
        if (driverById!= null) {
            int tempId = Integer.parseInt(driverById.getDriverID().split("-")[1]);
            tempId = tempId + 1;
            if (tempId <= 9) {
                id = "D-000" + tempId;
            } else if (tempId <= 99) {
                id = "D-00" + tempId;
            } else if (tempId <= 999) {
                id = "D-0" + tempId;
            } else if (tempId <= 9999) {
                id = "D-" + tempId;
            }
        } else {
            id = "D-0001";
        }

        return new  ResponseUtil(200,"0k",id);
    }
}
