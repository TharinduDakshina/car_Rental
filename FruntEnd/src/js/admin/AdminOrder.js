$('#btnOrdersRefresh').click(function () {
    loadAllOrders();
});



function loadAllOrders() {
    $('#tblOrderBody').empty();
    $.ajax({
        url: 'http://localhost:8080/BackEnd_war/booking/admin/order/status',
        method: 'GET',
        async: false,
        dataType: 'json',
        success: function (res) {
            let values = res.data;
            for (i in values) {
                let id = values[i].bookingID;
                let date = values[i].date;
                let pickdate = values[i].pickupDate;
                let returndate = values[i].returnDate;
                let status = values[i].status;
                let customer = values[i].customer.customerID;
                let car = values[i].car.carID;
                let driver = values[i].driver.driverID;


                $('#tblOrderBody').append(`
                    <tr><td>${id}</td>
                    <td>${car}</td>
                    <td>${driver}</td>
                    <td>${customer}</td>
                    <td>${date}</td>
                    <td>${pickdate}</td>
                    <td>${returndate}</td>
                    <td>${status}</td>
                    <td><button id="adminAcceptBtn"  style="background-color: greenyellow;border-radius: 2px" class='editRow'>Accept</button></td>
                    <td><button id="adminRejectBtn"  style="background-color: red;border-radius: 2px" class='editRow'>Reject</button></td>
                    </tr>`)
            }

            bindClickEventAdminOrder();
        }
    });
}


function updateBookingAdminOrder(bId) {
    let id ;
    let date;
    let pickDate ;
    let returnDate ;
    let status ;
    let customer ;
    let car ;
    let driver ;


    $.ajax({
        url: "http://localhost:8080/BackEnd_war/booking/"+bId,
        method:"GET",
        async: false,
        success:function (res){
            if (res.constructor = 200) {
                 id =res.data.bookingID;
                 date=res.data.date;
                 pickDate =res.data.pickupDate;
                 returnDate =res.data.returnDate;
                 status ="Success";
                 customer =res.data.customer;
                 car =res.data.car;
                 driver =res.data.driver;
            }
        }
    });
//----------------------------------------------------------------------------------------
    $.ajax({
        url: "http://localhost:8080/BackEnd_war/booking",
        method: 'PUT',
        data: JSON.stringify({
            "bookingID": id,
            "date": date,
            "pickupDate": pickDate,
            "returnDate": returnDate,
            "status": status,
            "customer": customer,
            "car": car,
            "driver": driver
        }),
        dataType: 'Json',
        async: false,
        contentType: "application/json",
        success: function (resBooking) {
            if (resBooking.code == 200) {
                //alert(bId+" this is booking updated successful .");
            }else {
                alert(resBooking.message);
            }
        },error:function (ob,textStatus,error){
            console.log(textStatus);
            console.log(error);
        }
    });


}

function updateDriverAdminOrder(dID) {
    let dId ;
    let name;
    let contact ;
    let nic ;
    let email ;
    let username ;
    let password;
    let driverStatus;



    $.ajax({
        url: "http://localhost:8080/BackEnd_war/driver/"+dID,
        method:"GET",
        async: false,
        success:function (res){
            if (res.constructor = 200) {
                 dId=res.data.driverID ;
                 name=res.data.name;
                 contact =res.data.contact;
                 nic =res.data.nic;
                 email =res.data.email;
                 username =res.data.userName;
                 password=res.data.password;
                 driverStatus=false;
            }
        }
    });

    //==============================================================

    $.ajax({
        url: "http://localhost:8080/BackEnd_war/driver",
        method: 'PUT',
        data: JSON.stringify({
            "driverID": dId,
            "name": name,
            "contact": contact,
            "nic": nic,
            "email": email,
            "userName": username,
            "password": password,
            "available": driverStatus
        }),
        dataType: 'Json',
        async: false,
        contentType: "application/json",
        success: function (resBooking) {
            if (resBooking.code == 200) {
                //alert("Driver update");
            }else {
                alert(resBooking.message);
            }
        },error:function (ob,textStatus,error){
            console.log(textStatus);
            console.log(error);
        }
    });
}

function updateCarAdminOrder(cId) {
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
        url: 'http://localhost:8080/BackEnd_war/car/'+cId,
        method: 'GET',
        async: false,
        success: function (resCar) {
            if (resCar.code == 200) {
                adminCarId =resCar.data.carID;
                adminCarBrand =resCar.data.brand;
                adminCarColor =resCar.data.colour;
                adminCarType =resCar.data.type;
                adminCarPass =resCar.data.numberOfPassengers;
                adminCarTran =resCar.data.transmissionType;
                adminCarFuel =resCar.data.fuelType;
                adminCarExKm =resCar.data.priceForExtraKM;
                adminCarStatus ="OK";
                adminCarDam =resCar.data.lossDamageWaiver;
                adminCarDalyRate =resCar.data.dailyRate;
                adminCarMonthlyRate =resCar.data.monthlyRate;
                adminCarFreeKmD =resCar.data.freeKmforDay;
                adminCarFreeKmM =resCar.data.freeKmforMonth;
                adminCarCompleteKm =resCar.data.completeKm;
            }else {
                console.log(resCar.message);
            }
        },error:function (ob,textStatus,error){
            console.log(error);
            console.log(textStatus);
        }
    });

    //--------------------------------------------------------------
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
                console.log("car status update")
            }else {
                console.log(res.message);
            }
        },error:function (ob,textStatus,error){
            console.log(error);
            console.log(textStatus);
        }
    });
}

function payment(totalAmount,pYear,rYear,rMonth,pMonth,rDay,pDay,carDalyRent,carMonthlyRent) {
    //paymentLogic
    if (pYear==rYear){
        console.log("1");
        if (rMonth==pMonth){
            console.log("2");
            if (rDay==pDay){
                console.log("3");
                totalAmount+=carDalyRent;
            }else {
                console.log("4");
                totalAmount+=carDalyRent*(rDay-pDay);
            }
        }else if (rMonth>pMonth){
            console.log("4");
            totalAmount+=carMonthlyRent*(rMonth-pMonth);
        }else {
            console.log("5");
            totalAmount+=0;
            alert("This order has date range is invalided");
        }
    }else {
        console.log("6");
        totalAmount+=0;
        alert("This order has date range is invalided");
    }
    return totalAmount;
}

function paymentSetData(pickDate,returnDate,cId,bId) {
    let pYear=parseInt(pickDate.split("-")[0]);
    let pMonth=parseInt(pickDate.split("-")[1]);
    let pDay=parseInt(pickDate.split("-")[2]);

    let rYear=parseInt(returnDate.split("-")[0]);
    let rMonth=parseInt(returnDate.split("-")[1]);
    let rDay=parseInt(returnDate.split("-")[2]);

    var now = new Date();
    var day = ("0" + now.getDate()).slice(-2);
    var month = ("0" + (now.getMonth() + 1)).slice(-2);
    var today = now.getFullYear()+"-"+(month)+"-"+(day) ;



    var carDalyRent;
    var carMonthlyRent;
    var paymentId;
    var totalAmount=0.00;

    var bookingDTO;

    $.ajax({
        url: 'http://localhost:8080/BackEnd_war/payment?paymentId=P-000',
        method: 'GET',
        async: false,
        success: function (resPaymentId) {
            if (resPaymentId.code == 200) {
                paymentId=resPaymentId.data;
            }else {
                console.log(resPaymentId.message);
            }
        },error:function (ob,textStatus,error){
            console.log(error);
            console.log(textStatus);
        }
    });

    //--------------------------Load BookingDTO---------------------------------------------

    $.ajax({
        url: "http://localhost:8080/BackEnd_war/booking/"+bId,
        method:"GET",
        async: false,
        success:function (res){
            if (res.constructor = 200) {
                bookingDTO=res.data;
            }else {
                console.log(res.message);
            }
        },error:function (ob,texStatus,error){
            console.log(texStatus);
        }
    });


    //--------------------------------------------------------------------------------------

    $.ajax({
        url: 'http://localhost:8080/BackEnd_war/car/'+cId,
        method: 'GET',
        async: false,
        success: function (resCar) {
            if (resCar.code == 200) {
                carDalyRent=parseInt(resCar.data.dailyRate);
                carMonthlyRent=parseInt(resCar.data.monthlyRate);
            }else {
                console.log(resCar.message);
            }
        },error:function (ob,textStatus,error){
            console.log(error);
            console.log(textStatus);
        }
    });



    var amount=payment(totalAmount,pYear,rYear,rMonth,pMonth,rDay,pDay,carDalyRent,carMonthlyRent);

    if (amount!=0){
        $.ajax({
           url:"http://localhost:8080/BackEnd_war/payment",
           method:"POST",
            data: JSON.stringify({
                "paymentID":paymentId,
                "date":today,
                "amount":amount,
                "description":"Payment success",
                "booking":bookingDTO
            }),
            async: false,
            dataType: 'json',
            contentType: "application/json",
            success:function (resPayment){
                if (resPayment.code = 200) {
                    console.log("payment table added data");
                }else {
                    console.log(resPayment.message);
                }
            },error:function (ob,textStatus,error){
                console.log(error);
                console.log(textStatus);
            }
        });
    }


    console.log("amount : "+amount);




}



function bindClickEventAdminOrder() {
    let bId;
    let dId;
    let cId;
    let pickDate;
    let returnDate;

    $("#tblOrderBody>tr").click(function (){
        bId = $(this).children().eq(0).text();
        cId = $(this).children().eq(1).text();
        dId = $(this).children().eq(2).text();
        pickDate = $(this).children().eq(5).text();
        returnDate = $(this).children().eq(6).text();
    });


    $('#tblOrderBody').on('click', "#adminAcceptBtn", function () {
        if (confirm("Do you want to confirm this Order ?") == true) {

            updateBookingAdminOrder(bId);
            paymentSetData(pickDate,returnDate,cId,bId);
            loadAllOrders();
            alert(bId+" this is booking updated successful .");
        }
    });

    $('#tblOrderBody').on('click', "#adminRejectBtn", function () {
        if (confirm("Are you sure reject " + bId + " booking ?") == true) {
            updateDriverAdminOrder(dId);
            updateCarAdminOrder(cId);
            rejectedBooking(bId);
            loadAllOrders();
        }
    });
}

function rejectedBooking(bId) {
    let id ;
    let date;
    let pickDate ;
    let returnDate ;
    let status ;
    let customer ;
    let car ;
    let driver ;


    $.ajax({
        url: "http://localhost:8080/BackEnd_war/booking/"+bId,
        method:"GET",
        async: false,
        success:function (res){
            if (res.constructor = 200) {
                id =res.data.bookingID;
                date=res.data.date;
                pickDate =res.data.pickupDate;
                returnDate =res.data.returnDate;
                status ="Rejected";
                customer =res.data.customer;
                car =res.data.car;
                driver =res.data.driver;
            }
        }
    });
//----------------------------------------------------------------------------------------
    $.ajax({
        url: "http://localhost:8080/BackEnd_war/booking",
        method: 'PUT',
        data: JSON.stringify({
            "bookingID": id,
            "date": date,
            "pickupDate": pickDate,
            "returnDate": returnDate,
            "status": status,
            "customer": customer,
            "car": car,
            "driver": driver
        }),
        dataType: 'Json',
        async: false,
        contentType: "application/json",
        success: function (resBooking) {
            if (resBooking.code == 200) {
                //alert(bId+" this is booking updated successful .");
            }else {
                alert(resBooking.message);
            }
        },error:function (ob,textStatus,error){
            console.log(textStatus);
            console.log(error);
        }
    });
}