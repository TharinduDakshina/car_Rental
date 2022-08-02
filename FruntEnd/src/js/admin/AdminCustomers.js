//Start Admin Customer Validation Section
let regxAdCsID = /^(C-)[0-9]{1,3}$/;
let regxAdCstName = /^[A-z ]{3,20}$/;
let regxAdCsEmail = /^[a-zA-Z0-9.! #$%&'*+/=? ^_`{|}~-]+@[a-zA-Z0-9-.]+(?:\. [a-zA-Z0-9-]+)*$/;
let regxAdCstAddress = /^[A-z 0-9]{3,50}$/;
let regxAdCstNic = /^([0-9]{9}[v|V]|[0-9]{12})$/;
let regxAdDrivingLicense = /^[A-z 0-9]{3,15}$/;
let regxAdContact = /^[0-9]{10}$/;
let regxAdCsUsername = /^[a-zA-Z0-9]([._-](?![._-])|[a-zA-Z0-9]){3,18}[a-zA-Z0-9]$/;

$("#adCustId,#adCustName,#adCustAddress,#adCustEmail,#adCustNic,#adCustDl,#adCustContact,#adCsUsername,#adCsPassword,#adCsConfirmPassword").on('keydown', function (eventOb) {
    if (eventOb.key == "Tab") {
        eventOb.preventDefault();
    }
});


$("#adCustId,#adCustName,#adCustAddress,#adCustEmail,#adCustNic,#adCustDl,#adCustContact,#adCsUsername,#adCsPassword,#adCsConfirmPassword").on('blur', function () {
    formValidAdminCustomer();
});

function formValidAdminCustomer() {
    var adCsId = $("#adCustId").val();
    if (regxAdCsID.test(adCsId)) {
        $("#adCustId").css('border', '2px solid #eaecf4');
        var adCsName = $("#adCustName").val();
        if (regxAdCstName.test(adCsName)) {
            $("#adCustName").css('border', '2px solid #eaecf4');
            var adCsAddress = $("#adCustAddress").val();
            if (regxAdCstAddress.test(adCsAddress)) {
                $("#adCustAddress").css('border', '2px solid #eaecf4');
                var adCsEmail = $("#adCustEmail").val();
                if (regxAdCsEmail.test(adCsEmail)) {
                    $("#adCustEmail").css('border', '2px solid #eaecf4');
                    var adCsNIC = $("#adCustNic").val();
                    if (regxAdCstNic.test(adCsNIC)) {
                        $("#adCustNic").css('border', '2px solid #eaecf4');
                        var adCsDL = $("#adCustDl").val();
                        if (regxAdDrivingLicense.test(adCsDL)) {
                            $("#adCustDl").css('border', '2px solid #eaecf4');
                            var adCSContact= $("#adCustContact").val();
                            if (regxAdContact.test(adCSContact)) {
                                $("#adCustContact").css('border', '2px solid #eaecf4');
                                var adCsUserName = $("#adCsUsername").val();
                                if (regxAdCsUsername.test(adCsUserName)){
                                    $("#adCsUsername").css('border', '2px solid #eaecf4');
                                    var adCsPassword = $("#adCsPassword").val();
                                    if (adCsPassword!=""){
                                        var adCsConfirmPassword=$("#adCsConfirmPassword").val();
                                        $("#adCsPassword").css('border', '2px solid #eaecf4');
                                        if (adCsConfirmPassword=!""){
                                            $("#adCsConfirmPassword").css('border', '2px solid #eaecf4');
                                            return true;
                                        }else {
                                            $("#adCsConfirmPassword").css('border', '2px solid red');
                                            return false;
                                        }
                                    }else {
                                        $("#adCsPassword").css('border', '2px solid red');
                                        return false;
                                    }

                                }else{
                                    $("#adCsUsername").css('border', '2px solid red');
                                    return false;
                                }
                            }else {
                                $("#adCustContact").css('border', '2px solid red');
                                return false;
                            }
                        }else {
                            $("#adCustDl").css('border', '2px solid red');
                            return false;
                        }
                    }else {
                        $("#adCustNic").css('border', '2px solid red');
                        return false;
                    }
                } else {
                    $("#adCustEmail").css('border', '2px solid red');
                    return false;
                }
            } else {
                $("#adCustAddress").css('border', '2px solid red');
                return false;
            }

        } else {
            $("#adCustName").css('border', '2px solid red');
            return false;
        }
    } else {
        $("#adCustId").css('border', '2px solid red');
        return false;
    }
}

$("#adCustId").on('keyup', function (eventOb) {
    setButtonAdminCustomer();
    if (eventOb.key == "Enter") {
        checkIfValidAdminCustomer();
    }
});
$("#adCustName").on('keyup', function (eventOb) {
    setButtonAdminCustomer();
    if (eventOb.key == "Enter") {
        checkIfValidAdminCustomer();
    }
});
$("#adCustAddress").on('keyup', function (eventOb) {
    setButtonAdminCustomer();
    if (eventOb.key == "Enter") {
        checkIfValidAdminCustomer();
    }
});
$("#adCustEmail").on('keyup', function (eventOb) {
    setButtonAdminCustomer();
    if (eventOb.key == "Enter") {
        checkIfValidAdminCustomer();
    }
});
$("#adCustNic").on('keyup', function (eventOb) {
    setButtonAdminCustomer();
    if (eventOb.key == "Enter") {
        checkIfValidAdminCustomer();
    }
});
$("#adCustDl").on('keyup', function (eventOb) {
    setButtonAdminCustomer();
    if (eventOb.key == "Enter") {
        checkIfValidAdminCustomer();
    }
});
$("#adCustContact").on('keyup', function (eventOb) {
    setButtonAdminCustomer();
    if (eventOb.key == "Enter") {
        checkIfValidAdminCustomer();
    }
});
$("#adCsUsername").on('keyup', function (eventOb) {
    setButtonAdminCustomer();
    if (eventOb.key == "Enter") {
        checkIfValidAdminCustomer();
    }
});
$("#adCsPassword").on('keyup', function (eventOb) {
    setButtonAdminCustomer();
    if (eventOb.key == "Enter") {
        checkIfValidAdminCustomer();
    }
});
$("#adCsConfirmPassword").on('keyup', function (eventOb) {
    setButtonAdminCustomer();
    if (eventOb.key == "Enter") {
        checkIfValidAdminCustomer();
    }
});

function checkIfValidAdminCustomer() {
    var cstId = $("#adCustId").val();
    if (regxAdCsID.test(cstId)) {
        $("#adCustName").focus();
        var adCsName = $("#adCustName").val();
        if (regxAdCstName.test(adCsName)) {
            $("#adCustAddress").focus();
            var adCsAddress = $("#adCustAddress").val();
            if (regxAdCstAddress.test(adCsAddress)) {
                $("#adCustEmail").focus();
                var adCsEmail = $("#adCustEmail").val();
                if (regxAdCsEmail.test(adCsEmail)) {
                    $("#adCustNic").focus();
                    var adCsNIC = $("#adCustNic").val();
                    if (regxAdCstNic.test(adCsNIC)){
                        $("#adCustDl").focus();
                        var adCsDl = $("#adCustDl").val();
                        if (regxAdDrivingLicense.test(adCsDl)){
                            $("#adCustContact").focus();
                            var adCsContact = $("#adCustContact").val();
                            if (regxAdContact.test(adCsContact)){
                                $("#adCsUsername").focus();
                                var adCsUsername = $("#adCsUsername").val();
                                if (regxAdCsUsername.test(adCsUsername)){
                                    $("#adCsPassword").focus();
                                    var adCsPassword = $("#adCsPassword").val();
                                    if (adCsPassword!=""){
                                        $("#adCsConfirmPassword").focus();
                                        var adCsConfirmPassword = $("#adCsConfirmPassword").val();
                                        if (adCsConfirmPassword!=""){

                                        }else $("#adCsConfirmPassword").focus();
                                    }else $("#adCsPassword").focus();
                                }else $("#adCsUsername").focus();
                            }else $("#adCustContact").focus();
                        }else $("#adCustDl").focus();
                    }else $("#adCustNic").focus();
                } else {
                    $("#adCustEmail").focus();
                }
            } else {
                $("#adCustAddress").focus();
            }
        } else {
            $("#adCustName").focus();
        }
    } else {
        $("#adCustId").focus();
    }
}

function setButtonAdminCustomer() {
    let b = formValidAdminCustomer();
    if (b) {
        $("#btnAdminCustomerSave,#btnAdminCustomerUpdate").attr('disabled', false);
    } else {
        $("#btnAdminCustomerSave,#btnAdminCustomerUpdate").attr('disabled', true);
    }
}
//End Admin Customer Validation Section

function clearCustomerFields() {
    $('#adCustId').val("");
    $('#adCustName').val("");
    $('#adCustAddress').val("");
    $('#adCustEmail').val("");
    $('#adCustNic').val("");
    $('#adCustDl').val("");
    $('#adCustContact').val("");
    $('#adCsUsername').val("");
    $('#adCsPassword').val("");
    $('#adCsConfirmPassword').val("");
}

//Start Admin Save Section
$('#btnAdminCustomerSave').click(function () {

        let cstId = $('#adCustId').val();
        let cstName = $('#adCustName').val();
        let cstAdd = $('#adCustAddress').val();
        let cstEmail = $('#adCustEmail').val();
        let cstNic = $('#adCustNic').val();
        let cstDl = $('#adCustDl').val();
        let cstContact = $('#adCustContact').val();
        let cstUsername = $('#adCsUsername').val();
        let cstPassword = $('#adCsConfirmPassword').val();

        $.ajax({
            url: "http://localhost:8080/BackEnd_war/customer",
            method: "POST",
            dataType: 'Json',
            async: true,
            contentType: "application/json",
            data: JSON.stringify({
                "customerID": cstId,
                "name": cstName,
                "contact": cstContact,
                "address": cstAdd,
                "email": cstEmail,
                "nicNo": cstNic,
                "drivingLicenceNo": cstDl,
                "userName": cstUsername,
                "password": cstPassword
            }),
            success: function (res) {
                if (res.code==201){
                    alert("Customer added successfully .");
                    loadAllCustomer();
                    clearCustomerFields();
                }else alert(res.message);
            },
            error: function (ob, textStatus, error) {
                alert(error);
            }
        });

});
//End Admin Save Section

//Start Get Admin Customer Section
function loadAllCustomer() {
    $('#tblCustomerBody').empty();
    $.ajax({
        url: 'http://localhost:8080/BackEnd_war/customer',
        method: 'GET',
        async: false,
        dataType: 'json',
        success: function (res) {
            let values = res.data;
            for (i in values) {
                let cID = values[i].customerID;
                let cNIC = values[i].nicNo;
                let cNAME = values[i].name;
                let cAddress = values[i].address;
                let cEmail = values[i].email;
                let cDLIC = values[i].drivingLicenceNo;
                let cContact = values[i].contact;

                $('#tblCustomerBody').append(`<tr><td>${cID}</td><td>${cNIC}</td><td>${cNAME}</td><td>${cAddress}</td><td>${cEmail}</td><td>${cDLIC}</td><td>${cContact}</td></tr>`)
            }
            bindClickEventAdminCustomer();
        }
    });
}

function bindClickEventAdminCustomer() {
    $("#tblCustomerBody>tr").click(function () {
        //Get values from the selected row
        let id = $(this).children().eq(0).text();
        let nic = $(this).children().eq(1).text();
        let name = $(this).children().eq(2).text();
        let address = $(this).children().eq(3).text();
        let email = $(this).children().eq(4).text();
        let dl = $(this).children().eq(5).text();
        let contact = $(this).children().eq(6).text();

        //Set values to the text-fields
        $('#adCustId').val(id);
        $('#adCustName').val(name);
        $('#adCustAddress').val(address);
        $('#adCustEmail').val(email);
        $('#adCustNic').val(nic);
        $('#adCustDl').val(dl);
        $('#adCustContact').val(contact);

    });
}

$('#btnAdminCustomerGetAll').click(function () {
    loadAllCustomer();
    clearCustomerFields();
});
//End Get Admin Customer Section

//Start Admin Customer Update
$('#btnAdminCustomerUpdate').click(() => {
    updateCustomer();
});
function updateCustomer() {

    let cstId = $('#adCustId').val();
    let cstName = $('#adCustName').val();
    let cstAdd = $('#adCustAddress').val();
    let cstEmail = $('#adCustEmail').val();
    let cstNic = $('#adCustNic').val();
    let cstDl = $('#adCustDl').val();
    let cstContact = $('#adCustContact').val();
    let cstUsername = $('#adCsUsername').val();
    let cstPassword = $('#adCsConfirmPassword').val();

        $.ajax({
            url: "http://localhost:8080/BackEnd_war/customer",
            method: "put",
            contentType: "application/json",
            async: false,
            data: JSON.stringify(
                {
                    "customerID": cstId,
                    "name": cstName,
                    "contact": cstContact,
                    "address": cstAdd,
                    "email": cstEmail,
                    "nicNo": cstNic,
                    "drivingLicenceNo": cstDl,
                    "userName": cstUsername,
                    "password": cstPassword
                }
            ),
            success: function (res) {
                if (res.code == 200) {
                    alert("Customer successfully updated");
                    loadAllCustomer();
                    clearCustomerFields();
                    getLastCustomerId();
                }else alert(res.message);
            }
        });

}
//End Admin Customer Update

//Start Delete Customer Section
$('#btnAdminCustomerDelete').click(function () {
    let id = $("#adCustId").val();
    if (id != "") {
        if (confirm("Do you want to delete this customer ?")==true) {
            $.ajax({
                url: 'http://localhost:8080/BackEnd_war/customer/' + id,
                method: "delete",
                async: false,
                success: function (response) {
                    if (response.code == 200) {
                        loadAllCustomer();
                        clearCustomerFields();
                        getLastCustomerId();
                        console.log("deleted")
                        alert("Customer Deleted..!");
                    }else alert(response.message);
                },
                error: function (response) {
                }
            });
        }
    }

});
//End Delete Customer Section

//Start Search Customer Section
function searchCustomer() {
    $("#tblCustomerBody").empty();
    let id = $("#adCustId").val();
    if (id != "") {
        $.ajax({
            method: "get",
            url: 'http://localhost:8080/GMA_Backend_war_exploded/v2/customer/' + id,
            async: true,
            dataType: 'json',
            success: function (response) {
                var data = response.data;

                $('#adCustId').val(data.customerId);
                $('#adCustName').val(data.customerName);
                $('#adCustAddress').val( data.customerAddress);
                $('#adCustEmail').val(data.customerEmail);
                $('#adCustNic').val(data.customerNIC);
                $('#adCustDl').val(data.customerDrivingLIC);
                $('#adCustContact').val(data.customerContact);
                loadAllCustomer();
            }
        });
    } else {
    }
}
//End Search Customer Section

function getCustomerDLIC() {
    $.ajax({
        method: "get",
        url: 'http://localhost:8080/GMA_Backend_war_exploded/v2/customer/custDLIC',
        async: false,
        success: function (response) {
            var data = response.data;
            console.log("data" + data);
            $('#adCustDl').val(data)
            console.log($('#adCustDl').val());
        }

    });
}