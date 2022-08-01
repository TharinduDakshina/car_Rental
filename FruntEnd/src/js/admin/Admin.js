/*
$("#adminChangePitcher").click(function (){
    $("#filedId").click();

    var data=new FormData();
    let file=$("#filedId")[0].files[0];
    let fileName=$("#filedId")[0].files[0].name;
    data.append("myFile",file,fileName);

    $.ajax({
        url: baseUrl + "api/v1/upload",
        method: 'post',
        async: true,
        contentType: false,
        processData: false,
        data: data,
        success: function (resp) {
            alert("Successfully Uploaded");
            loadTheLastUploadedImage();
        },
        error: function (err) {
            console.log(err);
        }
    });

});
*/

//$("#adminNameInHeader").val(adminUserName);

$(document).ready(function () {
    getCustomerCount();
    getCarCount();
    getOrderCount();
    getDriverCount();
});
$('#btn_mainPage').click(function () {
    $('#admin_Home_Page').css({
        'display': 'block'
    });
    $('#admin_profile_Page').css({
        'display': 'none'
    });
    $('#admin_Customer_Page').css({
        'display': 'none'
    });
    $('#admin_Car_Page').css({
        'display': 'none'
    });
    $('#admin_Driver_Page').css({
        'display': 'none'
    });
    $('#admin_Order_Page').css({
        'display': 'none'
    });
    $('#admin_Payment_Page').css({
        'display': 'none'
    });
    getCustomerCount();
    getCarCount();
    getDriverCount();
    getOrderCount();
});

$('#btn_ProfilePage').click(function () {
    $('#admin_Home_Page').css({
        'display': 'none'
    });
    $('#admin_profile_Page').css({
        'display': 'block'
    });
    $('#admin_Customer_Page').css({
        'display': 'none'
    });
    $('#admin_Car_Page').css({
        'display': 'none'
    });
    $('#admin_Driver_Page').css({
        'display': 'none'
    });
    $('#admin_Order_Page').css({
        'display': 'none'
    });
    $('#admin_Payment_Page').css({
        'display': 'none'
    });
    getAdmin();
});

$('#btn_CustomerPage').click(function () {
    $('#admin_Home_Page').css({
        'display': 'none'
    });
    $('#admin_profile_Page').css({
        'display': 'none'
    });
    $('#admin_Customer_Page').css({
        'display': 'block'
    });
    $('#admin_Car_Page').css({
        'display': 'none'
    });
    $('#admin_Driver_Page').css({
        'display': 'none'
    });
    $('#admin_Order_Page').css({
        'display': 'none'
    });
    $('#admin_Payment_Page').css({
        'display': 'none'
    });
    loadAllCustomer();
    getLastCustomerId();
    getCustomerDLIC();
});

$('#btn_CarPage').click(function () {
    $('#admin_Home_Page').css({
        'display': 'none'
    });
    $('#admin_profile_Page').css({
        'display': 'none'
    });
    $('#admin_Customer_Page').css({
        'display': 'none'
    });
    $('#admin_Car_Page').css({
        'display': 'block'
    });
    $('#admin_Driver_Page').css({
        'display': 'none'
    });
    $('#admin_Order_Page').css({
        'display': 'none'
    });
    $('#admin_Payment_Page').css({
        'display': 'none'
    });
    loadAllCars();
    getLastCarId();
    getCarRegNo();

});

$('#btn_DriverPage').click(function () {
    $('#admin_Home_Page').css({
        'display': 'none'
    });
    $('#admin_profile_Page').css({
        'display': 'none'
    });
    $('#admin_Customer_Page').css({
        'display': 'none'
    });
    $('#admin_Car_Page').css({
        'display': 'none'
    });
    $('#admin_Driver_Page').css({
        'display': 'block'
    });
    $('#admin_Order_Page').css({
        'display': 'none'
    });
    $('#admin_Payment_Page').css({
        'display': 'none'
    });
    loadAllDriver();
    getLastDriverId();
});

$('#btn_OrderPage').click(function () {
    $('#admin_Home_Page').css({
        'display': 'none'
    });
    $('#admin_profile_Page').css({
        'display': 'none'
    });
    $('#admin_Customer_Page').css({
        'display': 'none'
    });
    $('#admin_Car_Page').css({
        'display': 'none'
    });
    $('#admin_Driver_Page').css({
        'display': 'none'
    });
    $('#admin_Order_Page').css({
        'display': 'block'
    });
    $('#admin_Payment_Page').css({
        'display': 'none'
    });
    loadAllOrders();
});

$('#btn_PaymentPage').click(function () {
    $('#admin_Home_Page').css({
        'display': 'none'
    });
    $('#admin_profile_Page').css({
        'display': 'none'
    });
    $('#admin_Customer_Page').css({
        'display': 'none'
    });
    $('#admin_Car_Page').css({
        'display': 'none'
    });
    $('#admin_Driver_Page').css({
        'display': 'none'
    });
    $('#admin_Order_Page').css({
        'display': 'none'
    });
    $('#admin_Payment_Page').css({
        'display': 'block'
    });
});

$('#btnAdminProfile').click(function () {
    $('#admin_Home_Page').css({
        'display': 'none'
    });
    $('#admin_profile_Page').css({
        'display': 'block'
    });
    $('#admin_Customer_Page').css({
        'display': 'none'
    });
    $('#admin_Car_Page').css({
        'display': 'none'
    });
    $('#admin_Driver_Page').css({
        'display': 'none'
    });
    $('#admin_Order_Page').css({
        'display': 'none'
    });
    $('#admin_Payment_Page').css({
        'display': 'none'
    });
});



function getAdmin(){

}




//get count customer
function getCustomerCount() {
    $.ajax({
        url: "http://localhost:8080/BackEnd_war/customer?customerCount=001",
        method: "get",
        async: true,
        success: function (response) {
            if (response.code== 200) {
                $('#TxtCustomerCount').text(response.data);
            }else {
                alert(response.message);
            }
        }
    });
}

function getCarCount() {
    $.ajax({
        url: 'http://localhost:8080/BackEnd_war/car?carCount=001',
        method: "get",
        async: true,
        success: function (response) {
            if (response.code==200) $('#txtCarCount').text(response.data);
            else alert(response.message);
        }

    });
}
function getOrderCount() {
    $.ajax({
        url: 'http://localhost:8080/BackEnd_war/booking?countBooking=001',
        method: "get",
        async: true,
        success: function (response) {
            if (response.code == 200) {
                $('#txtOrderCount').text(response.data);
            }else alert(response.message);
        }

    });
}
function getDriverCount() {
    $.ajax({
        url: 'http://localhost:8080/BackEnd_war/driver?driverCount=001',
        method: "get",
        async: true,
        success: function (response) {
            if (response.code==200)$('#txtDriverCount').text(response.data);
            else alert(response.message);

        }

    });
}

function getLastCustomerId() {
    $.ajax({
        method: "get",
        url: 'http://localhost:8080/GMA_Backend_war_exploded/v2/customer/lastCustomerId',
        async: false,
        success: function (response) {
            var data = response.data;
            console.log("data" + data);
            $('#adCustId').val(data)
            console.log($('#adCustId').val());
        }

    });
}
function getLastCarId() {
    $.ajax({
        method: "get",
        url: 'http://localhost:8080/GMA_Backend_war_exploded/v2/car/lastCarId',
        async: false,
        success: function (response) {
            var data = response.data;
            console.log("data" + data);
            $('#adCarId').val(data)
            console.log($('#adCarId').val());
        }

    });
}
function getLastDriverId() {
    $.ajax({
        method: "get",
        url: 'http://localhost:8080/GMA_Backend_war_exploded/v2/driver/lastDriverId',
        async: false,
        success: function (response) {
            var data = response.data;
            console.log("data" + data);
            $('#adDriverId').val(data)
            console.log($('#adDriverId').val());
        }

    });
}
function getCarRegNo() {
    $.ajax({
        method: "get",
        url: 'http://localhost:8080/GMA_Backend_war_exploded/v2/car/lastCarRegNo',
        async: false,
        success: function (response) {
            var data = response.data;
            console.log("data" + data);
            $('#adCarRegistration').val(data)
            console.log($('#adCarRegistration').val());
        }

    });
}

