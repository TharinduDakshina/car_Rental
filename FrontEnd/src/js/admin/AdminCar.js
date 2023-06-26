//Start Admin Car Validation Section
let regxAdCarID = /^(C-)[0-9]{1,4}$/
let regxAdCartStatus = /^(OK|ok|oK|Ok|NO|no|On|oN|No)$/;
let regxAmount = /^\d{1,12}(\.\d{1,2})?$/;
let regxAmountKm = /^\d{1,4}(\.\d{1,2})?$/;

$("#adCarId,#adCarBrand,#adCarColor,#adCarType,#adCarPassengers,#adCarTransmission,#adCarFuel,#adCarExtraKm,#adCarStatus,#adCarDamage,#adCarDailyRate,#adCarMonthlyRate,#adCarFreeKmDay,#adCarFreeKmMonthly,#adCarCompleteKm").on('keydown', function (eventOb) {
    if (eventOb.key == "Tab") {
        eventOb.preventDefault();
    }
});

$("#adCarId,#adCarBrand,#adCarColor,#adCarType,#adCarPassengers,#adCarTransmission,#adCarFuel,#adCarExtraKm,#adCarStatus,#adCarDamage,#adCarDailyRate,#adCarMonthlyRate,#adCarFreeKmDay,#adCarFreeKmMonthly,#adCarCompleteKm").on('blur', function () {
    formValidAdminCar();
});



function formValidAdminCar() {
    var adCarId = $("#adCarId").val();
    if (regxAdCarID.test(adCarId)) {
        $("#adCarId").css('border', "2px solid #eaecf4");
        var adCarExrKm = $("#adCarExtraKm").val();
        if (regxAmount.test(adCarExrKm)) {
            $("#adCarExtraKm").css('border', '2px solid #eaecf4');
            var adCarStatus = $("#adCarStatus").val();
            if (regxAdCartStatus.test(adCarStatus)) {
                $("#adCarStatus").css('border', '2px solid #eaecf4');
                var adCarDamage = $("#adCarDamage").val();
                if (regxAmount.test(adCarDamage)) {
                    $("#adCarDamage").css('border', '2px solid #eaecf4');
                    var adCarDalyRate = $("#adCarDailyRate").val();
                    if (regxAmount.test(adCarDalyRate)) {
                        $("#adCarDailyRate").css('border', '2px solid #eaecf4');
                        var adCarMonthlyRate = $("#adCarMonthlyRate").val();
                        if (regxAmount.test(adCarMonthlyRate)) {
                            $("#adCarMonthlyRate").css('border', '2px solid #eaecf4');
                            var adCarDalyKm = $("#adCarFreeKmDay").val();
                            if (regxAmountKm.test(adCarDalyKm)) {
                                $("#adCarFreeKmDay").css('border', '2px solid #eaecf4');
                                var adCarMonthlyKm = $("#adCarFreeKmMonthly").val();
                                if (regxAmountKm.test(adCarMonthlyKm)) {
                                    $("#adCarFreeKmMonthly").css('border', '2px solid #eaecf4');
                                    var adCarCompleteKm = $("#adCarCompleteKm").val();
                                    if (regxAmountKm.test(adCarCompleteKm)) {
                                        $("#adCarCompleteKm").css('border', '2px solid #eaecf4');
                                        return true;
                                    } else {
                                        $("#adCarCompleteKm").css('border', '2px solid red');
                                        return false;
                                    }
                                } else {
                                    $("#adCarFreeKmMonthly").css('border', '2px solid red');
                                    return false;
                                }
                            } else {
                                $("#adCarFreeKmDay").css('border', '2px solid red');
                                return false;
                            }
                        } else {
                            $("#adCarMonthlyRate").css('border', '2px solid red');
                            return false;
                        }
                    } else {
                        $("#adCarDailyRate").css('border', '2px solid red');
                        return false;
                    }
                } else {
                    $("#adCarDamage").css('border', '2px solid red');
                    return false;
                }
            } else {
                $("#adCarStatus").css('border', '2px solid red');
                return false;
            }
        } else {
            $("#adCarExtraKm").css('border', '2px solid red');
            return false;
        }
    } else {
        $("#adCarId").css('border', '2px solid red');
        return false;
    }
}


function isEmty() {
    if ($("#adCarBrand option:selected").text()!=""&&$("#adCarBrand option:selected").text()!="Car Brand"){
        if ($("#adCarColor option:selected").text()!=""&&$("#adCarColor option:selected").text()!="Car Color"){
            if ($("#adCarType option:selected").text()!=""&&$("#adCarType option:selected").text()!="Car Type"){
                if ($("#adCarPassengers option:selected").text()!=""&&$("#adCarPassengers option:selected").text()!="Passengers"){
                    if ($("#adCarTransmission option:selected").text()!=""&&$("#adCarTransmission option:selected").text()!="Transmission"){
                        if ($("#adCarFuel option:selected").text()!=""&&$("#adCarFuel option:selected").text()!="Fuel"){
                            return true;
                        }else return false;
                    }else return false;
                }else return false;
            }else return false;
        }else return false;
    }else return false;
}

$("#adCarFuel").on('click', function (eventOb) {
    setCarButton();
});


$("#adCarTransmission").on('click', function (eventOb) {
    setCarButton();
});

$("#adCarPassengers").on('click', function (eventOb) {
    setCarButton();
});

$("#adCarType").on('click', function (eventOb) {
    setCarButton();
});

$("#adCarColor").on('click', function (eventOb) {
    setCarButton();
});

$("#adCarBrand").on('click', function (eventOb) {
    setCarButton();
});

$("#adCarId").on('keyup', function (eventOb) {
    setCarButton();
});

$("#adCarExtraKm").on('keyup', function (eventOb) {
    setCarButton();
});

$("#adCarStatus").on('keyup', function (eventOb) {
    setCarButton();
});

$("#adCarDamage").on('keyup', function (eventOb) {
    setCarButton();
});

$("#adCarDailyRate").on('keyup', function (eventOb) {
    setCarButton();
});

$("#adCarMonthlyRate").on('keyup', function (eventOb) {
    setCarButton();
});

$("#adCarFreeKmDay").on('keyup', function (eventOb) {
    setCarButton();
});

$("#adCarFreeKmMonthly").on('keyup', function (eventOb) {
    setCarButton();
});

$("#adCarCompleteKm").on('keyup', function (eventOb) {
    setCarButton();
});

$("#adCarBrand").on('click', function (eventOb) {
    setCarButton();
});

function setCarButton(){
    if (formValidAdminCar() && isEmty()) {
        $("#btnAdminCarSave,#btnAdminCarUpdate").attr('disabled', false);
    } else {
        $("#btnAdminCarSave,#btnAdminCarUpdate").attr('disabled', true);
    }
}


//End Admin Car Validation Section

function clearCarFields() {
    $('#adCarId').val("");
    $('#adCarBrand').val("");
    $('#adCarColor').val("");
    $('#adCarType').val("");
    $('#adCarPassengers').val("");
    $('#adCarTransmission').val("");
    $('#adCarFuel').val("");
    $('#adCarExtraKm').val("");
    $('#adCarStatus').val("");
    $('#adCarDamage').val("");
    $('#adCarDailyRate').val("");
    $('#adCarMonthlyRate').val("");
    $('#adCarFreeKmDay').val("");
    $('#adCarFreeKmMonthly').val("");
    $('#adCarCompleteKm').val("");
}

//Start Admin Car Save Section
$('#btnAdminCarSave').click(() => {

        let adminCarId = $('#adCarId').val();
        let adminCarBrand = $('#adCarBrand').val();
        let adminCarColor = $('#adCarColor').val();
        let adminCarType = $('#adCarType').val();
        let adminCarPass = $('#adCarPassengers').val();
        let adminCarTran = $('#adCarTransmission').val();
        let adminCarFuel = $('#adCarFuel').val();
        let adminCarExKm = $('#adCarExtraKm').val();
        let adminCarStatus = $('#adCarStatus').val();
        let adminCarDam = $('#adCarDamage').val();
        let adminCarDalyRate = $('#adCarDailyRate').val();
        let adminCarMonthlyRate = $('#adCarMonthlyRate').val();
        let adminCarFreeKmD = $('#adCarFreeKmDay').val();
        let adminCarFreeKmM = $('#adCarFreeKmMonthly').val();
        let adminCarCompleteKm = $('#adCarCompleteKm').val();

        $.ajax({
            url: "http://localhost:8080/BackEnd_war/car",
            method: "POST",
            dataType: 'Json',
            contentType: "application/json",
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
            success: function (res) {
                if (res.code == 200) {
                    alert("Car successfully added .");
                    loadAllAdminCars();
                    clearCarFields();
                    getLastCarId();
                }else {
                    alert(res.message);
                }
            },
            error: function (ob, textStatus, error) {
                alert(error);
            }
        });
});
//End Admin Car Save Section

//Start Get All Car
$('#btnAdminCarGetAll').click(function () {
    loadAllAdminCars();
    clearCarFields();
});
function loadAllAdminCars() {
    $('#tblCarBody').empty();
    $.ajax({
        url: 'http://localhost:8080/BackEnd_war/car',
        method: 'GET',
        async: false,
        dataType: 'json',
        success: function (res) {
            let values = res.data;
            for (i in values) {
                let adminCarId = values[i].carID;
                let adminCarStatus = values[i].status;
                let adminCarBrand = values[i].brand;
                let adminCarPass = values[i].numberOfPassengers;
                let adminCarTran = values[i].transmissionType;
                let adminCarType = values[i].type;
                let adminCarColor = values[i].colour;
                let adminCarFuel = values[i].fuelType;
                $('#tblCarBody').append(`<tr><td>${adminCarId}</td><td>${adminCarStatus}</td><td>${adminCarBrand}</td><td>${adminCarPass}</td><td>${adminCarTran}</td><td>${adminCarType}</td><td>${adminCarColor}</td><td>${adminCarFuel}</td></tr>`)
            }
            bindClickEventAdminCar();
        }
    });
}

function bindClickEventAdminCar() {
    $("#tblCarBody>tr").click(function () {
        //Get values from the selected row
        let id = $(this).children().eq(0).text();

        //load Car data
        $.ajax({
            url:"http://localhost:8080/BackEnd_war/car/"+id,
            method:"GET",
            success:function (res){
                if (res.code == 200) {
                    $('#adCarId').val(res.data.carID);
                    $('#adCarBrand').val(res.data.brand);
                    $('#adCarColor').val(res.data.colour);
                    $('#adCarType').val(res.data.type);
                    $('#adCarPassengers').val(res.data.numberOfPassengers);
                    $('#adCarTransmission').val(res.data.transmissionType);
                    $('#adCarFuel').val(res.data.fuelType);
                    $('#adCarExtraKm').val(res.data.priceForExtraKM);
                    $('#adCarStatus').val(res.data.status);
                    $('#adCarDamage').val(res.data.lossDamageWaiver);
                    $('#adCarDailyRate').val(res.data.dailyRate);
                    $('#adCarMonthlyRate').val(res.data.monthlyRate);
                    $('#adCarFreeKmDay').val(res.data.freeKmforDay);
                    $('#adCarFreeKmMonthly').val(res.data.freeKmforMonth);
                    $('#adCarCompleteKm').val(res.data.completeKm);
                }
            }
        });

    });
}

//End Get All Car

//Start Car Update Section
$('#btnAdminCarUpdate').click(function () {
    updateCar();
});
function updateCar() {

    let adminCarId = $('#adCarId').val();
    let adminCarBrand = $('#adCarBrand').val();
    let adminCarColor = $('#adCarColor').val();
    let adminCarType = $('#adCarType').val();
    let adminCarPass = $('#adCarPassengers').val();
    let adminCarTran = $('#adCarTransmission').val();
    let adminCarFuel = $('#adCarFuel').val();
    let adminCarExKm = $('#adCarExtraKm').val();
    let adminCarStatus = $('#adCarStatus').val();
    let adminCarDam = $('#adCarDamage').val();
    let adminCarDalyRate = $('#adCarDailyRate').val();
    let adminCarMonthlyRate = $('#adCarMonthlyRate').val();
    let adminCarFreeKmD = $('#adCarFreeKmDay').val();
    let adminCarFreeKmM = $('#adCarFreeKmMonthly').val();
    let adminCarCompleteKm = $('#adCarCompleteKm').val();

    $.ajax({
        url: "http://localhost:8080/BackEnd_war/car",
        method: "PUT",
        dataType: 'Json',
        contentType: "application/json",
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
        success: function (res) {
            if (res.code == 200) {
                alert("Car successfully Update .");
                loadAllAdminCars();
                clearCarFields();
                getLastCarId();
            }else {
                alert(res.message);
            }
        },
        error: function (ob, textStatus, error) {
            alert(error);
        }
    });
}
//End Car Update Section

//Start Delete Car Section
$('#btnAdminCarDelete').click(function () {
    let id = $("#adCarId").val();
    if (id != "") {
        if (confirm("Do you want to remove this car sure ?") == true) {
            $.ajax({
                url: "http://localhost:8080/BackEnd_war/car/"+id,
                method: "delete",
                async: false,
                success: function (response) {
                    if (response.data = 200) {
                        alert("Car deleted successfully .");
                        loadAllAdminCars();
                        clearCarFields();
                        getLastCarId();
                    }
                },
                error: function (response) {
                    alert(response.method)
                }
            });
        }

    }else alert("Please select a car first..!");

});
//End Delete Car Section


