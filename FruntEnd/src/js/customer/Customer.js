var loginCustomerId;
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
    console.log(cId);
    console.log(cName);
    console.log(cAdd);
    console.log(cEmail);
    console.log(cNic);
    console.log(cDl);
    console.log(cContact);
    console.log(cPassword);
    console.log(cUsername);

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
                }else alert(res.message);
            },
            error: function (ob, textStatus, error) {
                alert(error);
            }
        });

});
//End Customer Save Section

//Start Customer get all car Section
$('#btnCarsRefresh').click(function () {
    loadAllCars();
});

function loadAllCars() {
    $('#tblCarBody').empty();
    $.ajax({
        url: 'http://localhost:8080/GMA_Backend_war_exploded/v2/car',
        method: 'GET',
        async: false,
        dataType: 'json',
        success: function (res) {
            let values = res.data;
            for (i in values) {
                let adminCarId = values[i].carId;
                let adminCarBrand = values[i].carBrand;
                let adminCarPass = values[i].carNmbOfPassengers;
                let adminCarTran = values[i].carTransmissionType;
                let adminCarType = values[i].carType;
                let adminCarColor = values[i].carColour;
                let adminCarFuel = values[i].carFuelType;

                $('#tblCarBody').append(`<tr>
                                            <td>${adminCarId}</td>
                                            <td>${adminCarBrand}</td>
                                            <td>${adminCarPass}</td>
                                            <td>${adminCarTran}</td>
                                            <td>${adminCarType}</td>
                                            <td>${adminCarColor}</td>
                                            <td>${adminCarFuel}</td>
                                       
                                            </tr>`)
            }
        }
    });
}

//End Customer get all car Section

//Start Customer PlaceOrder Section
$('#btnPlaceOrder').click(function () {

    var today = new Date();
    var dd = String(today.getDate()).padStart(2, '0');
    var mm = String(today.getMonth() + 1).padStart(2, '0');
    var yyyy = today.getFullYear();
    today = mm + '-' + dd + '-' + yyyy;

    let pickupDate = $('#pickUpDate').val();
    let returnDate = $('#returnDate').val();
    let cusID = "C001";
    let driverId = "D001";
    let carid = "CR001";
    let bookingId = "B001";
    let customer;
    let car;
    let driver;

    $.ajax({
        method: 'GET',
        url: 'http://localhost:8080/GMA_Backend_war_exploded/v2/customer/' + cusID,
        async: false,
        success: function (res) {
            customer = res.data;
        }
    });

    $.ajax({
        method: 'GET',
        url: 'http://localhost:8080/GMA_Backend_war_exploded/v2/car/' + carid,
        async: false,
        success: function (res) {
            car = res.data;
        }
    });

    $.ajax({
        method: 'GET',
        url: 'http://localhost:8080/GMA_Backend_war_exploded/v2/driver/' + driverId,
        async: false,
        success: function (res) {
            driver = res.data;
        }
    });

    console.log(customer);
    console.log(car);
    console.log(driver);

    $.ajax({
        method: 'POST',
        url: 'http://localhost:8080/GMA_Backend_war_exploded/v2/booking',
        data: JSON.stringify({
            "bookingId": bookingId,
            "bookingDate": today,
            "bookingPickDate": pickupDate,
            "bookingStatus": "Ordered",
            "bookingNote": "normal",
            "bookingReturnDate": returnDate,
            "customerId": cusID,
            "carId": carid,
            "driverId": driverId
        }),
        async: false,
        dataType: 'Json',
        contentType: "application/json; charset=utf-8",
        success: function (res) {
            if (res.message == 'Success') {
                alert('Booking successFul..!');
                $("#tblOrderBody").empty();
                clearOrderPage();
                getBookingID();
            }
        }
    });
});
//End Customer PlaceOrder Section

function clearOrderPage(){
    $('#driver').val("");
    $('#pickUpDate').val("");
    $('#returnDate').val("");
    $('#carType').val("");
    $('#carid').val("");

}


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
});
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
function searchCustomerProfile() {
    // $("#tblCustomerBody").empty();
    let id = $("#custId").val();
    if (id != "") {
        $.ajax({
            method: "get",
            url: 'http://localhost:8080/GMA_Backend_war_exploded/v2/customer/' + id,
            async: true,
            dataType: 'json',
            success: function (response) {
                var data = response.data;

                $('#custId').val(data.customerId);
                $('#custName').val(data.customerName);
                $('#custAddress').val(data.customerAddress);
                $('#custEmail').val(data.customerEmail);
                $('#custNic').val(data.customerNIC);
                $('#custDl').val(data.customerDrivingLIC);
                $('#custContact').val(data.customerContact);
                $('#custPassword').val(data.customerPassword);
            }
        });
    } else {
    }
}
//End Search Customer Section
//Start Customer Update
$('#btnAdminCustomerUpdate').click(() => {
    updateCustomer();
});
function updateCustomer() {
    if (checkValidationAdminCustomer()) {
        let custId = $('#custId').val();
        let custName = $('#custName').val();
        let custAdd = $('#custAddress').val();
        let custEmail = $('#custEmail').val();
        let custNic = $('#custNic').val();
        let custDl = $('#custDl').val();
        let custContact = $('#custContact').val();
        let custPassword = $('#custPassword').val();

        $.ajax({
            method: "put",
            url: "http://localhost:8080/GMA_Backend_war_exploded/v2/customer",
            contentType: "application/json",
            async: false,
            data: JSON.stringify(
                {
                    "customerId": custId,
                    "customerName": custName,
                    "customerAddress": custAdd,
                    "customerEmail": custEmail,
                    "customerNIC": custNic,
                    "customerDrivingLIC": custDl,
                    "customerContact": custContact
                    // "password":custPassword
                }
            ),
            success: function (data) {
                return true;
            }
        });
    }
}
//End Customer Update
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
// function total(){
//
// }


function getBookingID() {
    $.ajax({
        method: "get",
        url: 'http://localhost:8080/GMA_Backend_war_exploded/v2/booking/getBookingLastID',
        async: false,
        success: function (response) {
            var data = response.data;
            console.log("data" + data);
            $('#custBookingID').val(data)
            console.log($('#custBookingID').val());
        }

    });
}

