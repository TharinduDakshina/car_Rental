function clearDriverFields() {
    $('#adDriverId').val("");
    $('#adDriverName').val("");
    $('#adDriverNIC').val("");
    $('#adDriverContact').val("");
    $('#adDriverEmail').val("");
    $('#adDriverUsername').val("");
    $('#adDriverPassword').val("");
    $('#adDriverConfirmPassword').val("");
}



//Start Admin Driver Validation Section
let regxAdDriverID = /^(D-)[0-9]{1,4}$/;
let regxAdDriverName = /^[A-z ]{3,20}$/;
let regxAdDriverEmail = /^[a-zA-Z0-9.! #$%&'*+/=? ^_`{|}~-]+@[a-zA-Z0-9-.]+(?:\. [a-zA-Z0-9-]+)*$/;
let regxAdDriverNic = /^([0-9]{9}[v|V]|[0-9]{12})$/;
let regxAdDriverContact = /^[0-9]{10}$/;
let regxAdDriverUsername = /^[a-zA-Z0-9]([._-](?![._-])|[a-zA-Z0-9]){3,18}[a-zA-Z0-9]$/;


$("#adDriverId,#adDriverName,#adDriverNIC,#adDriverContact,#adDriverEmail,#adDriverUsername,#adDriverPassword,#adDriverConfirmPassword").on('keydown', function (eventOb) {
    if (eventOb.key == "Tab") {
        eventOb.preventDefault();
    }
});

$("#adDriverId,#adDriverName,#adDriverNIC,#adDriverContact,#adDriverEmail,#adDriverUsername,#adDriverPassword,#adDriverConfirmPassword").on('blur', function () {
    formValidAdminDriver();
});

function formValidAdminDriver() {
    var adDriverId = $("#adDriverId").val();
    if (regxAdDriverID.test(adDriverId)){
        $("#adDriverId").css('border', '2px solid #eaecf4');
        var DriName = $("#adDriverName").val();
        if (regxAdDriverName.test(DriName)) {
            $("#adDriverName").css('border', '2px solid #eaecf4');
            var driverNic = $("#adDriverNIC").val();
            if (regxAdDriverNic.test(driverNic)) {
                $("#adDriverNIC").css('border', '2px solid #eaecf4');
                var driverContact = $("#adDriverContact").val();
                if (regxAdDriverContact.test(driverContact)) {
                    $("#adDriverContact").css('border', '2px solid #eaecf4');
                    var driverMail = $("#adDriverEmail").val();
                    if (regxAdDriverEmail.test(driverMail)) {
                        $("#adDriverEmail").css('border', '2px solid #eaecf4');
                        var driverUsername = $("#adDriverUsername").val();
                        if (regxAdDriverUsername.test(driverUsername)) {
                            $("#adDriverUsername").css('border', '2px solid #eaecf4');
                            var driverPassword = $("#adDriverPassword").val();
                            if (driverPassword!="") {
                                $("#adDriverPassword").css('border', '2px solid #eaecf4');
                                var driverConfirmPassword = $("#adDriverConfirmPassword").val();
                                if (driverConfirmPassword!=""){
                                    $("#adDriverConfirmPassword").css('border', '2px solid #eaecf4');
                                    return true;
                                }else {
                                    $("#adDriverConfirmPassword").css('border', '2px solid red');
                                    return false;
                                }
                            }else{
                                $("#adDriverPassword").css('border', '2px solid red');
                                return false;
                            }
                        }else {
                            $("#adDriverUsername").css('border', '2px solid red');
                            return false;
                        }
                    }else {
                        $("#adDriverEmail").css('border', '2px solid red');
                        return false;
                    }
                }else {
                    $("#adDriverContact").css('border', '2px solid red');
                    return false;
                }
            } else {
                $("#adDriverNIC").css('border', '2px solid red');
                return false;
            }
        } else {
            $("#adDriverName").css('border', '2px solid red');
            return false;
        }
    }else {
        $("#adDriverId").css('border', '2px solid red');
        return false;
    }

}

$("#adDriverId").on('keyup', function (eventOb) {
    setButtonAdminDriver();
    if (eventOb.key == "Enter") {
        checkIfValidAdminDriver();
    }
});

$("#adDriverName").on('keyup', function (eventOb) {
    setButtonAdminDriver();
    if (eventOb.key == "Enter") {
        checkIfValidAdminDriver();
    }
});

$("#adDriverNIC").on('keyup', function (eventOb) {
    setButtonAdminDriver();
    if (eventOb.key == "Enter") {
        checkIfValidAdminDriver();
    }
});

$("#adDriverContact").on('keyup', function (eventOb) {
    setButtonAdminDriver();
    if (eventOb.key == "Enter") {
        checkIfValidAdminDriver();
    }
});

$("#adDriverEmail").on('keyup', function (eventOb) {
    setButtonAdminDriver();
    if (eventOb.key == "Enter") {
        checkIfValidAdminDriver();
    }
});

$("#adDriverUsername").on('keyup', function (eventOb) {
    setButtonAdminDriver();
    if (eventOb.key == "Enter") {
        checkIfValidAdminDriver();
    }
});
$("#adDriverConfirmPassword").on('keyup', function (eventOb) {
    setButtonAdminDriver();
    if (eventOb.key == "Enter") {
        checkIfValidAdminDriver();
    }
});
$("#adDriverPassword").on('keyup', function (eventOb) {
    setButtonAdminDriver();
    if (eventOb.key == "Enter") {
        checkIfValidAdminDriver();
    }
});



function checkIfValidAdminDriver() {
    var driverId = $("#adDriverId").val();
    if (regxAdDriverID.test(driverId)){
        var driverName = $("#adDriverName").val();
        if (regxDriverName.test(driverName)) {
            $("#adDriverName").focus();
            var driverNIC = $("#adDriverNIC").val();
            if (regxDriverNic.test(driverNIC)) {
                $("#adDriverNIC").focus();
                var driverContact = $("#adDriverContact").val();
                if (regxDriverContact.test(driverContact)) {
                    $("#adDriverContact").focus();
                    var driverEmail = $("#adDriverEmail").val();
                    if (regxDriverEmail.test(driverEmail)) {
                        $("#adDriverUsername").focus();
                        var driverUsername = $("#adDriverUsername").val();
                        if (regxDriverUsername.test(driverUsername)) {
                            $("#adDriverPassword").focus();
                            var driverPassword = $("#adDriverPassword").val();
                            if (driverPassword!=""){
                                $("#adDriverConfirmPassword").focus();
                                var driverCmPassword = $("#adDriverConfirmPassword").val();
                                if (driverCmPassword!=""){

                                }else $("#adDriverConfirmPassword").focus();
                            }else $("#adDriverPassword").focus();
                        } else {
                            $("#adDriverUsername").focus();
                        }
                    } else {
                        $("#adDriverEmail").focus();
                    }
                } else {
                    $("#adDriverContact").focus();
                }
            }else {
                $("#adDriverNIC").focus();
            }
        }else {
            $("#adDriverName").focus();
        }
    }else $("#adDriverId").focus();
}

function setButtonAdminDriver() {
    let b = formValidAdminDriver();
    if (b) {
        $("#btnAdminDriverSave,#btnAdminDriverUpdate").attr('disabled', false);
    } else {
        $("#btnAdminDriverSave,#btnAdminDriverUpdate").attr('disabled', true);
    }
}

//End Admin Driver Validation Section





//Start Admin Driver Save Section
$('#btnAdminDriverSave').click(() => {

        let adminDriverId = $('#adDriverId').val();
        let adminDriverName = $('#adDriverName').val();
        let adminDriverNic = $('#adDriverNIC').val();
        let adminDriverContact = $('#adDriverContact').val();
        let adminDriverEmail = $('#adDriverEmail').val();
        let adminDriverUsername = $('#adDriverUsername').val();
        let adminDriverPassword = $('#adDriverConfirmPassword').val();

        $.ajax({
            url: "http://localhost:8080/BackEnd_war/driver",
            method: "POST",
            data: JSON.stringify({
                "driverID": adminDriverId,
                "name": adminDriverName,
                "contact": adminDriverContact,
                "nic": adminDriverNic,
                "email": adminDriverEmail,
                "userName": adminDriverUsername,
                "password": adminDriverPassword,
                "available": false
            }),
            dataType: 'Json',
            contentType: "application/json",
            success: function (res) {
                if (res.code == 201) {
                    alert("Driver added successfully");
                    loadAllDriver();
                    clearDriverFields();
                    loadLastDriver();
                }else {
                   alert(res.message);
                }
            },
            error: function (ob, textStatus, error) {
                alert(textStatus);
            }
        });

});

function loadLastDriver() {
    $.ajax({
        url: 'http://localhost:8080/BackEnd_war/driver?driverId=C-000',
        method: "get",
        async: false,
        success: function (response) {
            if (response.code == 200) {
                $("#adDriverId").attr("placeholder",response.data);
            }else console.log(response.message);
        }

    });
}


$('#btnAdminDriverGetAll').click(function () {
    loadAllDriver();
    clearDriverFields();
});



function bindClickEventAdminDriver() {
    $("#tblDriverBody>tr").click(function () {
        //Get values from the selected row
        let id = $(this).children().eq(0).text();

        //load Car data
        $.ajax({
            url:"http://localhost:8080/BackEnd_war/driver/"+id,
            method:"GET",
            success:function (res){
                if (res.code == 200) {
                    $('#adDriverId').val(res.data.driverID);
                    $('#adDriverName').val(res.data.name);
                    $('#adDriverNIC').val(res.data.nic);
                    $('#adDriverContact').val(res.data.contact);
                    $('#adDriverEmail').val(res.data.email);
                    $('#adDriverUsername').val(res.data.userName);
                    $('#adDriverPassword').val(res.data.password);
                    $('#adDriverConfirmPassword').val(res.data.password);
                    $('#adDriverAvailable').val(res.data.available);
                }
            }
        });

    });
}
//End Admin Driver Save Section


$('#btnAdminDriverUpdate').click(() => {

    let adminDriverId = $('#adDriverId').val();
    let adminDriverName = $('#adDriverName').val();
    let adminDriverNic = $('#adDriverNIC').val();
    let adminDriverContact = $('#adDriverContact').val();
    let adminDriverEmail = $('#adDriverEmail').val();
    let adminDriverUsername = $('#adDriverUsername').val();
    let adminDriverPassword = $('#adDriverConfirmPassword').val();

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
            "available": false
        }),
        dataType: 'Json',
        contentType: "application/json",
        success: function (res) {
            if (res.code == 200) {
                alert("Driver Update successfully");
                loadAllDriver();
                clearDriverFields();
                loadLastDriver();
            }else {
                alert(res.message);
            }
        },
        error: function (ob, textStatus, error) {
            alert(textStatus);
        }
    });

});

$('#btnAdminDriverDelete').click(() => {
    let id = $("#adDriverId").val();
    if (id != "") {
        if (confirm("Do you want to delete this Driver ?")==true) {
            $.ajax({
                url: 'http://localhost:8080/BackEnd_war/driver/' + id,
                method: "delete",
                async: false,
                success: function (response) {
                    if (response.code == 200) {
                        loadAllDriver();
                        clearDriverFields();
                        loadLastDriver();
                        console.log("deleted")
                        alert("Driver Deleted..!");
                    }else alert(response.message);
                },
                error: function (response) {
                }
            });
        }
    }
});