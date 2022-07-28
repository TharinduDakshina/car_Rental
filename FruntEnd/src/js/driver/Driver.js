function loadDriver(driverId) {
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