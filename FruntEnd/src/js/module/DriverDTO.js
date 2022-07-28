function driverDto(driverID,name,contactNo,nic,email,userName,password,available) {

    var __id=driverID;
    var __name= name;
    var __contact=contactNo;
    var __nic= nic;
    var __email= email;
    var __userName= userName;
    var __password= password;
    var __available= available;

    this.getId=function (){
        return __id;
    }

}


