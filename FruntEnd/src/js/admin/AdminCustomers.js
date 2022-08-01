//Start Admin Customer Validation Section

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
        $.ajax({
            method: "delete",
            url: 'http://localhost:8080/GMA_Backend_war_exploded/v2/customer/?id=' + id,
            async: true,
            success: function (response) {
                loadAllCustomer();
                getLastCustomerId();
                clearCustomerFields();
                console.log("deleted")
            },
            error: function (response) {
            }
        });
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