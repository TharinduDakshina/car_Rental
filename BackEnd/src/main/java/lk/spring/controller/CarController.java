package lk.spring.controller;


import lk.spring.dto.CarDTO;
import lk.spring.dto.CustomerDTO;
import lk.spring.service.CarService;
import lk.spring.util.ResponseUtil;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.MediaType;
import org.springframework.web.bind.annotation.*;

@RestController
@CrossOrigin
@RequestMapping("car")
public class CarController {

    @Autowired
    CarService carService;

    @ResponseStatus(HttpStatus.CREATED)//201
    @PostMapping(produces = MediaType.APPLICATION_JSON_VALUE)
    public ResponseUtil saveCar(@RequestBody CarDTO car){
        carService.saveCar(car);
        return new ResponseUtil(200,"Saved",null);
    }

    @PutMapping(produces = MediaType.APPLICATION_JSON_VALUE)
    public ResponseUtil updateCar(@RequestBody CarDTO car){
        carService.updateCar(car);
        return new ResponseUtil(200,"Updated",null);
    }

    @GetMapping(produces = MediaType.APPLICATION_JSON_VALUE)
    public ResponseUtil getAllCars(){
        return new ResponseUtil(200,"Ok",carService.getAllCars());
    }

    @GetMapping(path = "{id}",produces = MediaType.APPLICATION_JSON_VALUE)
    public ResponseUtil searchCar(@PathVariable String id){
        return new ResponseUtil(200,"Ok",carService.searchCar(id));
    }
    @GetMapping(params = {"carCount"},produces = MediaType.APPLICATION_JSON_VALUE)
    public ResponseUtil getCarCountDatabase(){
        return new ResponseUtil(200,"OK",carService.getCarCount());
    }

    @DeleteMapping(path = "{id}",produces = MediaType.APPLICATION_JSON_VALUE)
    public ResponseUtil deleteCar(@PathVariable String id){
        carService.deleteCar(id);
        return new ResponseUtil(200,"Deleted",null);
    }

    @GetMapping(params = {"carId"},produces = MediaType.APPLICATION_JSON_VALUE)
    public ResponseUtil getLastCar(){
        CarDTO carById = carService.findLastCarById();
        String idCar=null;
        if (carById!= null) {
            int tempId = Integer.parseInt(carById.getCarID().split("-")[1]);
            tempId = tempId + 1;
            if (tempId <= 9) {
                idCar = "C-000" + tempId;
            } else if (tempId <= 99) {
                idCar = "C-00" + tempId;
            } else if (tempId <= 999) {
                idCar = "C-0" + tempId;
            } else if (tempId <= 9999) {
                idCar = "C-" + tempId;
            }
        } else {
            idCar = "C-0001";
        }

        return new  ResponseUtil(200,"0k",idCar);
    }


}
