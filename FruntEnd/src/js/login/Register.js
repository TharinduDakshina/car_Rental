function genarateId(selectType) {
    var id="000";
    if (selectType == "Driver") {
        console.log(selectType);
        $.ajax({
            url:"http://localhost:8080/BackEnd_war/driver?driverId=000",
            method:"GET",
            async:false,
            success:function (res){
                id=res.data;
                console.log(id);
                return id;
            }
        });
    }else {
        console.log(selectType);
        $.ajax({
            url:"http://localhost:8080/BackEnd_war/customer?cusId=000",
            method:"Get",
            async:false,
            success:function (res){
                id=res.data;
                console.log(id);
                return id;
            }
        });
    }
    return id;
}

function clearAll() {
    $("#txtFName,#txtLName,#txtConfirmPassword,#txtEmail,#txtPassword").val("");
}

function saveCustomer() {
    let loginFName = $('#txtFName').val();
    let loginLName = $('#txtLName').val();
    let loginEmail = $('#txtEmail').val();
    let loginPassword = $('#txtPassword').val();
    let loginConfirmPassword = $('#txtConfirmPassword').val();
    var selectType = $("#regDropDown option:selected").text();
    var genId = genarateId(selectType);
    console.log(genId);


    if (selectType=="Driver"){
        $.ajax({
            url: "http://localhost:8080/BackEnd_war/driver",
            method: "POST",
            async:false,
            data: JSON.stringify({
                "driverID": genId,
                "name": loginFName+" "+loginLName,
                "email": loginEmail,
                "userName":loginFName,
                "password":loginConfirmPassword,
                "available":true
            }),
            dataType: 'Json',
            contentType: "application/json",
            success: function (res) {
                if (res.code == 201) {
                    alert("Successfully Registration..");
                    clearAll();
                }else {
                    alert(res.message);
                }
            },
            error: function (ob, textStatus, error) {
                console.log(textStatus);
                alert(textStatus);
            }
        });
    }else {
        $.ajax({
            url: "http://localhost:8080/BackEnd_war/customer",
            method: "POST",
            async:false,
            data: JSON.stringify({
                "customerID": genId,
                "name": loginFName+" "+loginLName,
                "email": loginEmail,
                "userName":loginFName,
                "password":loginConfirmPassword
            }),
            dataType: 'Json',
            contentType: "application/json",
            success: function (res) {
                if (res.code==201) {
                    alert("Successfully Registration..");
                    clearAll();
                }else {
                    alert(res.message);
                }
            },
            error: function (ob, textStatus, error) {
                console.log(textStatus);
                alert(textStatus);
            }
        });

    }


}

//Start Admin Save Section
$('#button,#btn_Register').click(function () {
    //checkIfValid();
    saveCustomer();
});
//End Admin Save Section
/*---------------------------------------------------------------------------------------------------------------------------------------------------------*/
//Start Login Validation Section

let regxCstName = /^[A-z ]{3,20}$/;
let regxEmailAddress = /^[a-zA-Z0-9.! #$%&'*+/=? ^_`{|}~-]+@[a-zA-Z0-9-.]+(?:\. [a-zA-Z0-9-]+)*$/;

$('#txtFName,#txtLName,#txtEmail,#txtPassword,#txtConfirmPassword').on('keydown', function (eventOb) {
    if (eventOb.key == "Tab") {
        eventOb.preventDefault();
    }
});

$('#txtFName,#txtLName,#txtEmail,#txtPassword,#txtConfirmPassword').on('blur', function () {
    formValid();
});

function formValid() {
    var fName = $("#txtFName").val();
    $("#txtFName").css('border', '2px solid green');
    if (regxCstName.test(fName)) {
        var lName = $("#txtLName").val();
        if (regxCstName.test(lName)) {
            $("#txtLName").css('border', '2px solid green');
            var cusEmailAddress = $("#txtEmail").val();
            if (regxEmailAddress.test(cusEmailAddress)) {
                var password = $("#txtPassword").val();
                $("#txtEmail").css('border', '2px solid green');
                if (password!="") {
                    var confirmPassword = $("#txtConfirmPassword").val();
                    $("#txtPassword").css('border', '2px solid green');
                   if (confirmPassword!=""){
                       $("#txtConfirmPassword").css('border', '2px solid green');
                       return true;
                   }else {
                       $("#txtConfirmPassword").css('border', '2px solid red');
                       return false;
                   }
                } else {
                    $("#txtPassword").css('border', '2px solid red');
                    return false;
                }
            } else {
                $("#txtEmail").css('border', '2px solid red');
                return false;
            }
        } else {
            $("#txtLName").css('border', '2px solid red');
            return false;
        }
    } else {
        $("#txtFName").css('border', '2px solid red');
        return false;
    }
}

$("#txtFName").on('keyup', function (eventOb) {
    setButton();
    if (eventOb.key == "Enter") {
        checkIfValid();
    }
});

$("#txtLName").on('keyup', function (eventOb) {
    setButton();
    if (eventOb.key == "Enter") {
        checkIfValid();
    }
});

$("#txtEmail").on('keyup', function (eventOb) {
    setButton();
    if (eventOb.key == "Enter") {
        checkIfValid();
    }
});

$("#txtPassword").on('keyup', function (eventOb) {
    setButton();
    if (eventOb.key == "Enter") {
        checkIfValid();
    }
});

$("#txtConfirmPassword").on('keyup', function (eventOb) {
    setButton();
    if (eventOb.key == "Enter") {
        checkIfValid();
    }
});

function checkIfValid() {
    var fName = $("#txtFName").val();
    if (regxCstName.test(fName)) {
        $("#txtLName").focus();
        var lName = $("#txtLName").val();
        if (regxCstName.test(lName)) {
            $("#txtEmail").focus();
            var cusEmailAddress = $("#txtEmail").val();
            if (regxEmailAddress.test(cusEmailAddress)) {
                $("#txtPassword").focus();
                var password = $("#txtPassword").val();
                if (password!="") {
                    $("#txtConfirmPassword").focus();
                    var confirmPassword = $("#txtConfirmPassword").val();
                    if (confirmPassword!=""){
                        let res = confirm("Do you really need to add this Customer..?");
                        if (res) {
                           // saveCustomer();
                            //clearAll();
                        }
                    }
                } else {
                    $("#txtPassword").focus();
                }
            } else {
                $("#txtEmail").focus();
            }
        } else {
            $("#txtLName").focus();
        }
    } else {
        $("#txtFName").focus();
    }
}

function setButton() {
    let b = formValid();
    if (b) {
        $("#button").attr('disabled', false);
    } else {
        $("#button").attr('disabled', true);
    }
}
