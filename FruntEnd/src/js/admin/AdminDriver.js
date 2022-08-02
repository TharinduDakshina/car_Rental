//Start Admin Driver Validation Section

//End Admin Driver Validation Section


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