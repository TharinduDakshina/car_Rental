var loginDriverId;
function loadDriver(driverId) {
    loginDriverId=driverId;
    $.ajax({
        url:"http://localhost:8080/BackEnd_war/driver/"+driverId,
        method: "GET",
        success:function (res){
            if (res.code==200){
                $("#driverID").val(res.data.driverID);
                $("#driverName").val(res.data.name);
                $("#driverNic").val(res.data.nic);
                $("#driverEmail").val(res.data.email);
                $("#driverCont").val(res.data.contact);
                $("#driverPw").val(res.data.password);
                $("#driverUsername").val(res.data.userName);
            }
        }
    });
}


//Start Driver Validation Section
let regxDriverName = /^[A-z ]{3,20}$/;
let regxDriverEmail = /^[a-zA-Z0-9.! #$%&'*+/=? ^_`{|}~-]+@[a-zA-Z0-9-.]+(?:\. [a-zA-Z0-9-]+)*$/;
let regxDriverNic = /^([0-9]{9}[v|V]|[0-9]{12})$/;
let regxDriverContact = /^[0-9]{10}$/;
let regxDriverUsername = /^[a-zA-Z0-9]([._-](?![._-])|[a-zA-Z0-9]){3,18}[a-zA-Z0-9]$/;


$("#driverID,#driverName,#driverNic,#driverEmail,#driverCont,#driverPw,#driverUsername").on('keydown', function (eventOb) {
    if (eventOb.key == "Tab") {
        eventOb.preventDefault();
    }
});

$("#driverID,#driverName,#driverNic,#driverEmail,#driverCont,#driverPw,#driverUsername").on('blur', function () {
    formValidDriver();
});

function formValidDriver() {
    var fDriName = $("#driverName").val();
    if (regxDriverName.test(fDriName)) {
        $("#driverName").css('border', '2px solid #eaecf4');
        var driverNic = $("#driverNic").val();
        if (regxDriverNic.test(driverNic)) {
            $("#driverNic").css('border', '2px solid #eaecf4');
            var driverContact = $("#driverCont").val();
            if (regxDriverContact.test(driverContact)) {
                $("#driverCont").css('border', '2px solid #eaecf4');
                var driverUsername = $("#driverUsername").val();
                if (regxDriverUsername.test(driverUsername)) {
                    $("#driverUsername").css('border', '2px solid #eaecf4');
                    var driverPassword = $("#driverPw").val();
                    if (driverPassword!="") {
                        $("#driverPw").css('border', '2px solid #eaecf4');
                        var driverMail = $("#driverEmail").val();
                        if (regxDriverEmail.test(driverMail)) {
                            $("#driverEmail").css('border', '2px solid #eaecf4');
                            return true;
                        }else{
                            $("#driverEmail").css('border', '2px solid red');
                            return false;
                        }
                    }else {
                        $("#driverPw").css('border', '2px solid red');
                        return false;
                    }
                }else {
                    $("#driverUsername").css('border', '2px solid red');
                    return false;
                }
            }else {
                $("#driverCont").css('border', '2px solid red');
                return false;
            }
        } else {
            $("#driverNic").css('border', '2px solid red');
            return false;
        }
    } else {
        $("#driverName").css('border', '2px solid red');
        return false;
    }
}

$("#driverName").on('keyup', function (eventOb) {
    setButtonDriver();
    if (eventOb.key == "Enter") {
        checkIfValidDriver();
    }
});

$("#driverNic").on('keyup', function (eventOb) {
    setButtonDriver();
    if (eventOb.key == "Enter") {
        checkIfValidDriver();
    }
});

$("#driverEmail").on('keyup', function (eventOb) {
    setButtonDriver();
    if (eventOb.key == "Enter") {
        checkIfValidDriver();
    }
});

$("#driverCont").on('keyup', function (eventOb) {
    setButtonDriver();
    if (eventOb.key == "Enter") {
        checkIfValidDriver();
    }
});

$("#driverPw").on('keyup', function (eventOb) {
    setButtonDriver();
    if (eventOb.key == "Enter") {
        checkIfValidDriver();
    }
});

$("#driverUsername").on('keyup', function (eventOb) {
    setButtonDriver();
    if (eventOb.key == "Enter") {
        checkIfValidDriver();
    }
});



function checkIfValidDriver() {
    var driverName = $("#driverName").val();
    if (regxDriverName.test(driverName)) {
        $("#driverNic").focus();
        var driverNIC = $("#driverNic").val();
        if (regxDriverNic.test(driverNIC)) {
            $("#driverCont").focus();
            var driverContact = $("#driverCont").val();
            if (regxDriverContact.test(driverContact)) {
                $("#driverUsername").focus();
                var driverUsername = $("#driverUsername").val();
                if (regxDriverUsername.test(driverUsername)) {
                    $("#driverPw").focus();
                    var driverPassword = $("#driverPw").val();
                    if (driverPassword != "") {
                        let res = confirm("Do you really need to add this Driver..?");
                        if (res) {
                            // saveCustomer();
                            //clearAll();
                        }
                    } else {
                        $("#driverPw").focus();
                    }
                } else {
                    $("#driverUsername").focus();
                }
            } else {
                $("#driverCont").focus();
            }
        }else {
            $("#driverNic").focus();
        }
    }else {
        $("#driverName").focus();
    }
}

function setButtonDriver() {
    let b = formValidDriver();
    if (b) {
        $("#btnDriverUpdate").attr('disabled', false);
    } else {
        $("#btnDriverUpdate").attr('disabled', true);
    }
}
//End Driver Validation Section

//Start Driver Save Section


$('#btnDriverUpdate').click(() => {

    var driverProfileId = $("#driverID").val();
    var driverProfileName = $("#driverName").val();
    var driverProfileNic = $("#driverNic").val();
    var driverProfileEmail = $("#driverEmail").val();
    var driverProfilePassword = $("#driverPw").val();
    var driverProfileContact = $("#driverCont").val();
    var driverProfileUsername = $("#driverUsername").val();

    console.log(driverProfileId);
    console.log(driverProfileName);
    console.log(driverProfileNic);
    console.log(driverProfileEmail);
    console.log(driverProfilePassword);
    console.log(driverProfileContact);
    console.log(driverProfileUsername);
        $.ajax({
            url: "http://localhost:8080/BackEnd_war/driver",
            method: "PUT",
            data: JSON.stringify({
                "driverID": driverProfileId,
                "name": driverProfileName,
                "contact": driverProfileContact,
                "nic": driverProfileNic,
                "email": driverProfileEmail,
                "userName": driverProfileUsername,
                "password":driverProfilePassword
            }),
            dataType: 'Json',
            contentType: "application/json",
            success: function (res) {
                if (res.code == 200) {
                    alert(res.message);
                }else {
                    alert(res.message);
                }
            },
            error: function (ob, textStatus, error) {
            }
        });
});
//End Driver Save Section

$('#btnDriverProfile').click(function () {
    loadDriver(loginDriverId);
    $('#driverProfile').css({
        'display': 'block'
    });
    $('#driverSchedule').css({
        'display': 'none'
    });
});
$('#btnDriverSchedule').click(function () {
    $('#driverProfile').css({
        'display': 'none'
    });
    $('#driverSchedule').css({
        'display': 'block'
    });
});