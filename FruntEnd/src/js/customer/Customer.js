var loginCustomerId;

//Start Customer Validation Section
let regxCstName = /^[A-z ]{3,20}$/;
let regxEmail = /^[a-zA-Z0-9.! #$%&'*+/=? ^_`{|}~-]+@[a-zA-Z0-9-.]+(?:\. [a-zA-Z0-9-]+)*$/;
let regxCstAddress = /^[A-z 0-9]{3,50}$/;
let regxCstNic = /^([0-9]{9}[v|V]|[0-9]{12})$/;
let regxDrivingLicense = /^[A-z 0-9]{3,15}$/;
let regxContact = /^[0-9]{10}$/;
let regxUsername = /^[a-zA-Z0-9]([._-](?![._-])|[a-zA-Z0-9]){3,18}[a-zA-Z0-9]$/;

$("#cstId,#cstName,#cstAddress,#cstEmail,#cstNic,#cstDl,#cstContact,#cstPassword,#cstUsername").on('keydown', function (eventOb) {
    if (eventOb.key == "Tab") {
        eventOb.preventDefault();
    }
});


$("#cstId,#cstName,#cstAddress,#cstEmail,#cstNic,#cstDl,#cstContact,#cstPassword,#cstUsername").on('blur', function () {
    formValidCustomer();
});

function formValidCustomer() {
    var fCstName = $("#cstName").val();
    if (regxCstName.test(fCstName)) {
        $("#cstName").css('border', '2px solid #eaecf4');
        var cstAddress = $("#cstAddress").val();
        if (regxCstAddress.test(cstAddress)) {
            $("#cstAddress").css('border', '2px solid #eaecf4');
            var cstNic = $("#cstNic").val();
            if (regxCstNic.test(cstNic)) {
                $("#cstNic").css('border', '2px solid #eaecf4');
                var cstDL = $("#cstDl").val();
                if (regxDrivingLicense.test(cstDL)) {
                    $("#cstDl").css('border', '2px solid #eaecf4');
                    var cstContact = $("#cstContact").val();
                    if (regxContact.test(cstContact)) {
                        $("#cstContact").css('border', '2px solid #eaecf4');
                        var cstUsername = $("#cstUsername").val();
                        if (regxUsername.test(cstUsername)) {
                            $("#cstUsername").css('border', '2px solid #eaecf4');
                           var cstPassword= $("#cstPassword").val();
                            if (cstPassword!= "") {
                                $("#cstPassword").css('border', '2px solid #eaecf4');
                                var cstEmail = $("#cstEmail").val();
                                if (regxEmail.test(cstEmail)){
                                    $("#cstEmail").css('border', '2px solid #eaecf4');
                                    return true;
                                }else{
                                    $("#cstEmail").css('border', '2px solid red');
                                    return false;
                                }
                            }else {
                                $("#cstPassword").css('border', '2px solid red');
                                return false;
                            }
                        }else {
                            $("#cstUsername").css('border', '2px solid red');
                            return false;
                        }
                    }else {
                        $("#cstContact").css('border', '2px solid red');
                        return false;
                    }

                } else {
                    $("#cstDl").css('border', '2px solid red');
                    return false;
                }
            } else {
                $("#cstNic").css('border', '2px solid red');
                return false;
            }

        } else {
            $("#cstAddress").css('border', '2px solid red');
            return false;
        }
    } else {
        $("#cstName").css('border', '2px solid red');
        return false;
    }
}

$("#cstName").on('keyup', function (eventOb) {
    setButtonCustomer();
    if (eventOb.key == "Enter") {
        checkIfValidCustomer();
    }
});

$("#cstAddress").on('keyup', function (eventOb) {
    setButtonCustomer();
    if (eventOb.key == "Enter") {
        checkIfValidCustomer();
    }
});

$("#cstEmail").on('keyup', function (eventOb) {
    setButtonCustomer();
    if (eventOb.key == "Enter") {
        checkIfValidCustomer();
    }
});

$("#cstNic").on('keyup', function (eventOb) {
    setButtonCustomer();
    if (eventOb.key == "Enter") {
        checkIfValidCustomer();
    }
});

$("#cstDl").on('keyup', function (eventOb) {
    setButtonCustomer();
    if (eventOb.key == "Enter") {
        checkIfValidCustomer();
    }
});

$("#cstContact").on('keyup', function (eventOb) {
    setButtonCustomer();
    if (eventOb.key == "Enter") {
        checkIfValidCustomer();
    }
});

$("#cstPassword").on('keyup', function (eventOb) {
    setButtonCustomer();
    if (eventOb.key == "Enter") {
        checkIfValidCustomer();
    }
});

$("#cstUsername").on('keyup', function (eventOb) {
    setButtonCustomer();
    if (eventOb.key == "Enter") {
        checkIfValidCustomer();
    }
});

function checkIfValidCustomer() {
    var cstName = $("#cstName").val();
    if (regxCstName.test(cstName)) {
        $("#cstAddress").focus();
        var cstAddress = $("#cstAddress").val();
        if (regxCstAddress.test(cstAddress)) {
            $("#cstNic").focus();
            var cstNic = $("#cstNic").val();
            if (regxCstNic.test(cstNic)) {
                $("#cstDl").focus();
                var cstDL = $("#cstDl").val();
                if (regxDrivingLicense.test(cstDL)) {
                    $("#cstContact").focus();
                    var cstContact = $("#cstContact").val();
                    if (regxContact.test(cstContact)){
                        $("#cstUsername").focus();
                        var cstUsername = $("#cstUsername").val();
                        if (regxUsername.test(cstUsername)){
                            $("#cstPassword").focus();
                            var cstPassword = $("#cstPassword").val();
                            if (cstPassword!=""){
                                $("#cstEmail").focus();
                                var cstEmail = $("#cstEmail").val();
                                if (regxEmail.test(cstEmail)){
                                    let res = confirm("Do you really need to add this Customer..?");
                                    if (res) {
                                        // saveCustomer();
                                        //clearAll();
                                    }
                                }else $("#cstEmail").focus();
                            }else $("#cstPassword").focus();
                        }else $("#cstUsername").focus();
                    }else $("#cstContact").focus();
                } else {
                    $("#cstDl").focus();
                }
            } else {
                $("#cstNic").focus();
            }
        } else {
            $("#cstAddress").focus();
        }
    } else {
        $("#cstName").focus();
    }
}

function setButtonCustomer() {
    let b = formValidCustomer();
    if (b) {
        $("#btnCustomerUpdate").attr('disabled', false);
    } else {
        $("#btnCustomerUpdate").attr('disabled', true);
    }
}

//End Customer Validation Section


//start validation customerOrder

function orderFormValidate(){
    var cId=$("#carid").val()
    var cType=$("#carType").val()
    var pickerDate=$("#pickUpDate").val()
    var returnDate=$("#returnDate").val()

    if (cId!=""&&cType!=""&&returnDate!=""&&pickerDate!=""){
        $("#btnPlaceOrder").attr('disabled', false);
    }else {
        $("#btnPlaceOrder").attr('disabled', true);
    }
}

$("#pickUpDate").click(function (){
    orderFormValidate();
});

$("#returnDate").click(()=>{
    orderFormValidate();
});



//End validation customerOrder


function loadCustomer(customerId){
    loginCustomerId=customerId;
    $.ajax({
        url:"http://localhost:8080/BackEnd_war/customer/"+customerId,
        method: "GET",
        success:function (res){
            if (res.code==200){
                $("#cstId").val(res.data.customerID);
                $("#cstName").val(res.data.name);
                $("#cstAddress").val(res.data.address);
                $("#cstEmail").val(res.data.email);
                $("#cstNic").val(res.data.nicNo);
                $("#cstDl").val(res.data.drivingLicenceNo);
                $("#cstContact").val(res.data.contact);
                $("#cstPassword").val(res.data.password);
                $("#cstUsername").val(res.data.userName);
            }
        }
    });
}



//Start Customer Save Section
$("#btnCustomerUpdate").click(() => {

    let cId = $('#cstId').val();
    let cName = $('#cstName').val();
    let cAdd = $('#cstAddress').val();
    let cEmail = $('#cstEmail').val();
    let cNic = $('#cstNic').val();
    let cDl = $('#cstDl').val();
    let cContact = $('#cstContact').val();
    let cPassword = $('#cstPassword').val();
    let cUsername = $("#cstUsername").val();



    $.ajax({
        url: "http://localhost:8080/BackEnd_war/customer",
        method: "PUT",
        data: JSON.stringify({
            "customerID": cId,
            "name": cName,
            "contact": cContact,
            "address": cAdd,
            "email": cEmail,
            "nicNo": cNic,
            "drivingLicenceNo": cDl,
            "userName": cUsername,
            "password": cPassword
        }),
        dataType: 'Json',
        contentType: "application/json",
        success: function (res) {
            if (res.code == 200) {
                alert("Successfully Updated..");
            } else alert(res.message);
        },
        error: function (ob, textStatus, error) {
            alert(error);
        }
    });
});
//End Customer Save Section

function loadAllCars() {
    $('#tblCustomerCarBody').empty();
    $.ajax({
        url: 'http://localhost:8080/BackEnd_war/car',
        method: 'GET',
        async: false,
        dataType: 'json',
        success: function (res) {
            if (res.code == 200) {
                let values = res.data;
                for (i in values) {
                    let carId = values[i].carID;
                    let carBrand = values[i].brand;
                    let nubOfPassengers = values[i].numberOfPassengers;
                    let carDaliFreeKm = values[i].freeKmforDay;
                    let priceExtraKm = values[i].priceForExtraKM;
                    let carMonthlyFreeKm = values[i].freeKmforMonth;
                    let damageWaiver = values[i].lossDamageWaiver;
                    let status = values[i].status;
                    let completeKm = values[i].completeKm;


                    $('#tblCustomerCarBody').append(`<tr>
                                            <td>${carId}</td>
                                            <td>${carBrand}</td>
                                            <td>${nubOfPassengers}</td>
                                            <td>${priceExtraKm}</td>
                                            <td>${carDaliFreeKm}</td>
                                            <td>${carMonthlyFreeKm}</td>
                                            <td>${damageWaiver}</td>
                                            <td>${status}</td>
                                            <td>${completeKm}</td>
                                            </tr>`);
                }
            }

        }
    });
}


function updateCustomerCarStatus(carId) {

    let adminCarId ;
    let adminCarBrand ;
    let adminCarColor ;
    let adminCarType ;
    let adminCarPass ;
    let adminCarTran ;
    let adminCarFuel ;
    let adminCarExKm ;
    let adminCarStatus ;
    let adminCarDam ;
    let adminCarDalyRate ;
    let adminCarMonthlyRate ;
    let adminCarFreeKmD ;
    let adminCarFreeKmM ;
    let adminCarCompleteKm ;


    $.ajax({
        url: 'http://localhost:8080/BackEnd_war/car/'+carId,
        method: 'GET',
        async: false,
        success: function (res) {
            if (res.code == 200) {
                 adminCarId =res.data.carID;
                 adminCarBrand =res.data.brand;
                 adminCarColor =res.data.colour;
                 adminCarType =res.data.type;
                 adminCarPass =res.data.numberOfPassengers;
                 adminCarTran =res.data.transmissionType;
                 adminCarFuel =res.data.fuelType;
                 adminCarExKm =res.data.priceForExtraKM;
                 adminCarStatus ="No";
                 adminCarDam =res.data.lossDamageWaiver;
                 adminCarDalyRate =res.data.dailyRate;
                 adminCarMonthlyRate =res.data.monthlyRate;
                 adminCarFreeKmD =res.data.freeKmforDay;
                 adminCarFreeKmM =res.data.freeKmforMonth;
                 adminCarCompleteKm =res.data.completeKm;
            }else {
                console.log(res.message);
            }
        },error:function (ob,textStatus,error){
            console.log(error);
            console.log(textStatus);
        }
    });


//-----------------------------------------------------------------------
    $.ajax({
        url: 'http://localhost:8080/BackEnd_war/car',
        method: 'PUT',
        data: JSON.stringify({
            "carID": adminCarId,
            "brand": adminCarBrand,
            "type": adminCarType,
            "numberOfPassengers": adminCarPass,
            "transmissionType": adminCarTran,
            "fuelType": adminCarFuel,
            "colour": adminCarColor,
            "dailyRate": adminCarDalyRate,
            "monthlyRate": adminCarMonthlyRate,
            "freeKmforMonth": adminCarFreeKmM,
            "freeKmforDay": adminCarFreeKmD,
            "lossDamageWaiver": adminCarDam,
            "priceForExtraKM": adminCarExKm,
            "status": adminCarStatus,
            "completeKm": adminCarCompleteKm
        }),
        async: false,
        dataType: 'json',
        contentType: "application/json",
        success: function (res) {
            if (res.code == 200) {
                    alert("car status update");
            }else {
                console.log(res.message);
            }
        },error:function (ob,textStatus,error){
            console.log(error);
            console.log(textStatus);
        }
    });
}

function updateDriverStatus(drId) {
    let adminDriverId ;
    let adminDriverName ;
    let adminDriverNic ;
    let adminDriverContact ;
    let adminDriverEmail ;
    let adminDriverUsername ;
    let adminDriverPassword ;

    $.ajax({
        url: 'http://localhost:8080/BackEnd_war/driver/'+drId,
        method: 'GET',
        async: false,
        success: function (res) {
            if (res.code == 200) {
                 adminDriverId =res.data.driverID;
                 adminDriverName =res.data.name;
                 adminDriverNic =res.data.nic;
                 adminDriverContact =res.data.contact;
                 adminDriverEmail =res.data.email;
                 adminDriverUsername =res.data.userName;
                 adminDriverPassword =res.data.password;
            }else {
                console.log(res.message);
            }
        },error:function (ob,textStatus,error){
            console.log(error);
            console.log(textStatus);
        }
    });

    //-----------------------------------------------------------------

    $.ajax({
        url: "http://localhost:8080/BackEnd_war/driver",
        method: "PUT",
        data: JSON.stringify({
            "driverID": adminDriverId,
            "name": adminDriverName,
            "contact": adminDriverContact,
            "nic": adminDriverNic,
            "email": adminDriverEmail,
            "userName": adminDriverUsername,
            "password": adminDriverPassword,
            "available": true
        }),
        dataType: 'Json',
        contentType: "application/json",
        success: function (res) {
            if (res.code == 200) {
                console.log("Driver update success");
            }else {
                alert(res.message);
            }
        },
        error: function (ob, textStatus, error) {
            alert(textStatus);
        }
    });
}

//Start Customer PlaceOrder Section
$('#btnPlaceOrder').click(function () {

    let currentDate = $("#date").text();
    let bookingId = $("#custBookingID").val();
    let pickDate=$("#pickUpDate").val();
    let returnDate=$("#returnDate").val();
    let carBrand=$("#carType").val();
    let csID=$("#ctId").val();
    let carId=$("#carid").val();
    let drId=$("#dId").val();

    var customerDTO;
    var carDTO;
    var driverDTO;

    $.ajax({
        url:"http://localhost:8080/BackEnd_war/customer/"+csID,
        method:"GET",
        async: false,
        success:function (resCustomer){
            if (resCustomer.code == 200) {
                customerDTO=resCustomer.data;
                console.log("customer Ok");
            }else {
                alert(resCustomer.message);
            }
        }
    });

    $.ajax({
        url:"http://localhost:8080/BackEnd_war/car/"+carId,
        method:"GET",
        async: false,
        success:function (resCar){
            if (resCar.code == 200) {
                carDTO=resCar.data;
                console.log("car Ok");
            }else {
                alert(resCar.message);
            }
        }
    });

    $.ajax({
        url:"http://localhost:8080/BackEnd_war/driver/"+drId,
        method:"GET",
        async: false,
        success:function (resDriver){
            if (resDriver.code == 200) {
                driverDTO=resDriver.data;
                console.log("driver Ok");
            }else {
                alert(resDriver.message);
            }
        }
    });

    if (confirm("Do you want to " + carBrand + " Car Booking ") == true) {
        console.log(bookingId);
        console.log(drId);
        $.ajax({
            url: "http://localhost:8080/BackEnd_war/booking",
            method: 'POST',
            data: JSON.stringify({
                "bookingID": bookingId,
                "date": currentDate,
                "pickupDate": pickDate,
                "returnDate": returnDate,
                "status": "Pending",
                "customer": customerDTO,
                "car": carDTO,
                "driver": driverDTO
            }),
            dataType: 'Json',
            async: false,
            contentType: "application/json",
            success: function (res) {
                if (res.code == 200) {
                    alert("Your Booking Successful .");
                    clearOrderPage();
                    updateCustomerCarStatus(carId);
                    updateDriverStatus(drId)
                    loadCarForCarOrders();
                    getBookingID();
                    loadDate();
                    loadCustomerId();
                    orderFormValidate();
                    loadDriverRandom();
                }else {
                    alert(res.message);
                }
            },error:function (ob,textStatus,error){
                console.log(textStatus);
                console.log(error);
            }
        });
    }


});
//End Customer PlaceOrder Section




$('#btnCustProfile').click(function () {
    $('#custProfilePage').css({
        'display': 'block'
    });
    $('#customer_Car_Page').css({
        'display': 'none'
    });
    $('#custOrderPage').css({
        'display': 'none'
    });
    $('#customer_Pay_Page').css({
        'display': 'none'
    });
});



$('#btnCustCars').click(function () {
    $('#custProfilePage').css({
        'display': 'none'
    });
    $('#customer_Car_Page').css({
        'display': 'block'
    });
    $('#custOrderPage').css({
        'display': 'none'
    });
    $('#customer_Pay_Page').css({
        'display': 'none'
    });
    loadAllCars();

});

function loadCarForCarOrders() {
    $('#tblOrderBody').empty();
    $.ajax({
        url: 'http://localhost:8080/BackEnd_war/car',
        method: 'GET',
        async: false,
        dataType: 'json',
        success: function (res) {
            if (res.code == 200) {
                let values = res.data;
                for (i in values) {
                    let carId = values[i].carID;
                    let carBrand = values[i].brand;
                    let carPass = values[i].numberOfPassengers;
                    let carTran = values[i].transmissionType;
                    let carType = values[i].type;
                    let carColor = values[i].colour;
                    let carFuel = values[i].fuelType;
                    let carDailyRent = values[i].dailyRate;
                    let carMonthlyRent = values[i].monthlyRate;
                    let status = values[i].status;

                    $('#tblOrderBody').append(`<tr>
                                            <td>${carId}</td>
                                            <td>${carBrand}</td>
                                            <td>${carPass}</td>
                                            <td>${carTran}</td>
                                            <td>${carType}</td>
                                            <td>${carColor}</td>
                                            <td>${carFuel}</td>
                                            <td>${carDailyRent}</td>
                                            <td>${carMonthlyRent}</td>
                                            <td>${status}</td>
                                            </tr>`);
                }
                bindClickEventCustomerOrder();
            }

        }
    });
}

function bindClickEventCustomerOrder() {

   /* $("#tblOrderBody>tr").click(function (){
        $(this).children().css({"background-color":"#e3e6f0"});
    });*/

    $("#tblOrderBody>tr").click(function () {
        //Get values from the selected row
        let id = $(this).children().eq(0).text();
        let carType = $(this).children().eq(1).text();
        /*let name = $(this).children().eq(2).text();
        let address = $(this).children().eq(3).text();
        let email = $(this).children().eq(4).text();
        let dl = $(this).children().eq(5).text();
        let contact = $(this).children().eq(6).text();*/

        //Set values to the text-fields
        $('#carid').val(id);
        $('#carType').val(carType);
       /* $('#adCustAddress').val(address);
        $('#adCustEmail').val(email);
        $('#adCustNic').val(nic);
        $('#adCustDl').val(dl);
        $('#adCustContact').val(contact);*/

       // $(this).children().css({"background-color":"rgb(141 207 249 / 48%)"});
        orderFormValidate();
    });
}

$('#btnCustOrders').click(function () {
    $('#custProfilePage').css({
        'display': 'none'
    });
    $('#customer_Car_Page').css({
        'display': 'none'
    });
    $('#custOrderPage').css({
        'display': 'block'
    });
    $('#customer_Pay_Page').css({
        'display': 'none'
    });
    getBookingID();
    loadCarForCarOrders();
    loadDriverRandom();
    loadDate();
    loadCustomerId();
    orderFormValidate();
});
$('#btnCustPay').click(function () {
    $('#custProfilePage').css({
        'display': 'none'
    });
    $('#customer_Car_Page').css({
        'display': 'none'
    });
    $('#custOrderPage').css({
        'display': 'none'
    });
    $('#customer_Pay_Page').css({
        'display': 'block'
    });
});
//Start Search Customer Section

//End Search Customer Section

function searchCustomerCar() {
    let bookingId = $('#custBookingID').val();
    let id = $("#carid").val();
    if (id != "") {
        $.ajax({
            method: "GET",
            url: 'http://localhost:8080/GMA_Backend_war_exploded/v2/car/' + id,
            async: true,
            dataType: 'json',
            success: function (response) {
                var data = response.data;

                $('#carid').val(data.carId);
                $('#carType').val(data.carType);
                $('#carPrice').val(data.car)
                $('#tblOrderBody').append(`<tr>
                                      
                                  <td>${bookingId}</td>
                                  <td>${data.carBrand}</td>
                                  <td>${data.carNmbOfPassengers}</td>
                                  <td>${data.carTransmissionType}</td>
                                  <td>${data.carType}</td>
                                  <td>${data.carColour}</td>
                                  <td>${data.carFuelType}</td>
                               
                                     </tr>`)

                let getPickDate = $('#pickUpDate').val();
                let getReturn = $('#returnDate').val();


                let tot = $('carPrice').val();
                let time = getReturn - getPickDate;
                let price = tot * time;
                console.log(price);
            }
        });
    } else {
    }
}

function getBookingID() {
    $.ajax({
        url: 'http://localhost:8080/BackEnd_war/booking?bookingId=0000',
        method: "get",
        async: false,
        success: function (response) {
            if (response.code == 200) {
                $('#custBookingID').val(response.data)
            }else console.log(response.code);
        },error:function(ob,textStatus,error) {
            console.log(textStatus);
        }
    });
}

function loadDriverRandom() {
    console.log("Driver load");
    $.ajax({
        url:"http://localhost:8080/BackEnd_war/driver/0000/randomDriver",
        method:"GET",
        success:function (res){
            if (res.code == 200) {
             $("#dId").val(res.data.driverID);
             $("#dName").val(res.data.name);
            }else alert(res.message);
        },error:function (ob,textStatus,error){
            console.log("Driver  randomly load error");
        }
    });
}

function loadCustomerId() {
    $("#ctId").val(loginCustomerId);
}

function loadDate() {
    var now = new Date();

    var day = ("0" + now.getDate()).slice(-2);
    var month = ("0" + (now.getMonth() + 1)).slice(-2);

    var today = now.getFullYear()+"-"+(month)+"-"+(day) ;

    $('#date').text(today);
}


function clearOrderPage(){
    $("#ctId").val("");
    $("#dId").val("");
    $("#dName").val("");
    $("#carid").val("");
    $("#carType").val("");
    $("#bookingId").val("");
    $("#pickUpDate").val("");
    $("#returnDate").val("");
}