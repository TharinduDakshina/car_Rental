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
    $("#btnAdminCustomerSave,#btnAdminCustomerUpdate").attr('disabled', true);
    loadAllCustomer();
    getLastCustomerId();
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
    loadAllAdminCars();
    getLastCarId();
    $("#btnAdminCarSave,#btnAdminCarUpdate").attr('disabled', true);
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
    loadLastDriver()
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
    loadPaymentsTable();
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
        url: 'http://localhost:8080/BackEnd_war/booking/countBooking/booking',
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
        url: 'http://localhost:8080/BackEnd_war/customer?cusId=C-000',
        method: "get",
        async: false,
        success: function (response) {
            if (response.code == 200) {
                $("#adCustId").attr("placeholder",response.data);
            }else console.log(response.message);
        }

    });
}
function getLastCarId() {
    $.ajax({
        url: 'http://localhost:8080/BackEnd_war/car?carId=C-001',
        method: "GET",
        async: false,
        success: function (response) {
            if (response.code == 200) {
                $("#adCarId").attr("placeholder",response.data);
            }else alert(response.message);
        }

    });
}

function loadAllDriver() {
    $('#tblDriverBody').empty();
    $.ajax({
        url: 'http://localhost:8080/BackEnd_war/driver',
        method: 'GET',
        async: false,
        dataType: 'json',
        success: function (res) {
            let values = res.data;
            for (i in values) {
                let adminDriverId = values[i].driverID;
                let adminDriverName = values[i].name;
                let adminDriverNic = values[i].nic;
                let adminDriverContact = values[i].contact;
                let adminDriverEmail = values[i].email;
                let adminDriverUsername = values[i].userName;
                let adminDriverPassword = values[i].password;
                let adminDriverStatus = values[i].available;

                $('#tblDriverBody').append(`<tr><td>${adminDriverId}</td><td>${adminDriverName}</td><td>${adminDriverNic}</td><td>${adminDriverContact}</td><td>${adminDriverEmail}</td><td>${adminDriverStatus}</td></tr>`)
            }

            bindClickEventAdminDriver();
        }
    });
}

function loadPaymentsTable() {
    $('#tblPayment').empty();
    $.ajax({
        url: 'http://localhost:8080/BackEnd_war/payment',
        method: 'GET',
        async: false,
        dataType: 'json',
        success: function (res) {
            let values = res.data;
            for (i in values) {
                let paymentID = values[i].paymentID;
                let date = values[i].date;
                let amount = values[i].amount;
                let description = values[i].description;
                let booking = values[i].booking.bookingID;
                $('#tblPayment').append(`<tr><td>${paymentID}</td><td>${date}</td><td>${amount}</td><td>${description}</td><td>${booking}</td></tr>`)
            }

            bindClickEventAdminDriver();
        }
    });
}
