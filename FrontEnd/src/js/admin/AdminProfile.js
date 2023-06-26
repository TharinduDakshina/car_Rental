/*$("#adminChangePitcher").click(function (){
    $("#filedId").click();

    var data=new FormData();
    let file=$("#filedId")[0].files[0];
    let fileName = $("#filedId")[0].files[0].name;
    data.append("myFile",file,fileName);

    $.ajax({
        url:"http://localhost:8080/BackEnd_war/api/v1/upload",
        method: 'post',
        async: true,
        contentType: false,
        processData: false,
        data: data,
        success: function (resp) {
            alert("Successfully Uploaded");
            loadTheLastUploadedImage();
        },
        error: function (err) {
            console.log(err);
        }
    });

});

function loadTheLastUploadedImage(){
    let baseUrl="http://localhost:8080/BackEnd_war/";
    $.ajax({
        url:baseUrl+"api/v1/upload",
        method: 'get',
        dataType: 'json',
        success: function (resp) {
            let url = resp[resp.length - 1];


            $("#display").css({
                "background": `url(${baseUrl + url})`,
                "background-size": "cover",
                "height": "300px"
            });

            for (let i in resp) {
                let row = `<tr><td><img src="${baseUrl + resp[i]}" width="100px"></td></tr>`;
                $("#table").append(row);
            }

        },
        error: function (err) {
            console.log(err);
        }
    });
}*/

var adminId;
{
    getAdmin();
}

//Start Admin Save Section
$('#btnAdminSave').click(() => {
    let admin_id = $('#adminID').val();
    let admin_email = $('#adminEmail').val();
    let admin_name = $('#adminName').val();
    let admin_full_name = $('#adminFullName').val()
    let admin_cpw = $('#adminConfirmPassword').val();


    console.log(admin_full_name);
    console.log(admin_name);
    console.log(admin_id);
    console.log(admin_email);
    console.log(admin_cpw);

    $.ajax({
        url: "http://localhost:8080/BackEnd_war/admin",
        method: "POST",
        data: JSON.stringify({
            "adminID": admin_id,
            "name": admin_full_name,
            "email": admin_email,
            "userName": admin_name,
            "password": admin_cpw
        }),
        dataType: 'Json',
        contentType: "application/json",
        success: function (res) {
            if (res.code == 200) {
                alert("Admin save successful .");
                clearAdProfile();
            }else alert(res.message);
        },
        error: function (ob, textStatus, error) {
            alert(error);
        }
    });


});
//End Admin Save Section

$("#adminProfileClear").click(function (){
    clearAdProfile();
});

$("#btnAdminLogout").click(function (){

    $.ajax({
        url:"http://localhost:8080/BackEnd_war/login/"+adminId,
        method:"Delete",
        success:function (res){
            if (res.code==200) console.log(res.message);
            else console.log(res.message);
        }
    });
});

//Admin Update
$("#btnAdminUpdate").click(function (){
    let admin_id = $('#adminID').val();
    let admin_email = $('#adminEmail').val();
    let admin_name = $('#adminName').val();
    let admin_full_name = $('#adminFullName').val()
    let admin_cpw = $('#adminConfirmPassword').val();


    console.log(admin_id);
    console.log(admin_full_name);
    console.log(admin_email);
    console.log(admin_name);
    console.log(admin_cpw);

    $.ajax({
        url: "http://localhost:8080/BackEnd_war/admin",
        method: "PUT",
        data: JSON.stringify({
            "adminID": admin_id,
            "name": admin_full_name,
            "email": admin_email,
            "userName": admin_name,
            "password": admin_cpw
        }),
        dataType: 'Json',
        contentType: "application/json",
        success: function (res) {
            if (res.code == 200) {
                alert("Admin Update successful .");
                clearAdProfile();
            }
        },
        error: function (ob, textStatus, error) {
            alert(error);
        }
    });

});

function loadAdmin(admin) {
    $.ajax({
        url: "http://localhost:8080/BackEnd_war/admin/"+admin,
        method: "GET",
        success:function (res){
            if (res.code==200){
                adminId=res.data.adminID;
                $('#adminID').val(res.data.adminID);
                $('#adminEmail').val(res.data.email);
                $('#adminName').val(res.data.userName);
                $('#adminFullName').val(res.data.name);
                $('#adminConfirmPassword').val(res.data.password);
                console.log("111111");
                $('#adminNameInHeader').text(res.data.name);
                console.log("2222222");
            }else console.log(res.message);
        }
    });
}

function getAdmin(){
    $.ajax({
        url:"http://localhost:8080/BackEnd_war/login",
        method:"GET",
        success:function (res){
            for (const temp of res.data){
                loadAdmin(temp.loginID);
            }
        },error:function (ob,error){
          alert(error);
        }
    });
}



//Clear Text Fields
function clearAdProfile() {
    $("#adminID").val("");
    $("#adminEmail").val("");
    $("#adminName").val("");
    $("#adminFullName").val("");
    $("#adminConfirmPassword").val("");
}


//Start Admin Validation Section

let regxAdminID = /^(A-)[0-9]{1,3}$/;
let regxAdminName = /^[A-z ]{3,20}$/;
let regxAdminEmailAddress = /^[a-zA-Z0-9.! #$%&'*+/=? ^_`{|}~-]+@[a-zA-Z0-9-.]+(?:\. [a-zA-Z0-9-]+)*$/;

$('#adminID,#adminEmail,#adminName,#adminFullName,#adminConfirmPassword').on('keydown', function (eventOb) {
    if (eventOb.key == "Tab") {
        eventOb.preventDefault();
    }
});


$('#adminID,#adminEmail,#adminName,#adminFullName,#adminConfirmPassword').on('blur', function () {
    formValidAdminProfile();
});

function formValidAdminProfile() {
    var adminProfileID = $("#adminID").val();
    if (regxAdminID.test(adminProfileID)) {
        $("#adminID").css('border', '2px solid green');
        var adminEmail = $("#adminEmail").val();
        if (regxAdminEmailAddress.test(adminEmail)) {
            $("#adminEmail").css('border', '2px solid green');
            var adminName = $("#adminFullName").val();
            if (regxAdminName.test(adminName)) {
                var adminUsername = $("#adminName").val();
                $("#adminFullName").css('border', '2px solid green');
                if (regxAdminName.test(adminUsername)) {
                    var confirmPassword = $("#adminConfirmPassword").val();
                    $("#adminName").css('border', '2px solid green');
                    if (confirmPassword!=""){
                        $("#adminConfirmPassword").css('border', '2px solid green');
                        return true;
                    }else {
                        $("#adminConfirmPassword").css('border', '2px solid red');
                        return false;
                    }
                } else {
                    $("#adminName").css('border', '2px solid red');
                    return false;
                }
            } else {
                $("#adminFullName").css('border', '2px solid red');
                return false;
            }
        } else {
            $("#adminEmail").css('border', '2px solid red');
            return false;
        }
    } else {
        $("#adminID").css('border', '2px solid red');
        return false;
    }
}

$("#adminID").on('keyup', function (eventOb) {
    setButtonAdminProfile();
    if (eventOb.key == "Enter") {
        checkIfValidAdminProfile();
    }
});

$("#adminEmail").on('keyup', function (eventOb) {
    setButtonAdminProfile();
    if (eventOb.key == "Enter") {
        checkIfValidAdminProfile();
    }
});

$("#adminName").on('keyup', function (eventOb) {
    setButtonAdminProfile();
    if (eventOb.key == "Enter") {
        checkIfValidAdminProfile();
    }
});

$("#adminFullName").on('keyup', function (eventOb) {
    setButtonAdminProfile();
    if (eventOb.key == "Enter") {
        checkIfValidAdminProfile();
    }
});

$("#adminConfirmPassword").on('keyup', function (eventOb) {
    setButtonAdminProfile();
    if (eventOb.key == "Enter") {
        checkIfValidAdminProfile();
    }
});

function checkIfValidAdminProfile() {
    var adminProfileID = $("#adminID").val();
    if (regxAdminID.test(adminProfileID)) {
        $("#adminEmail").focus();
        var adminProfileEmail = $("#adminEmail").val();
        if (regxAdminEmailAddress.test(adminProfileEmail)) {
            $("#adminFullName").focus();
            var adminName = $("#adminFullName").val();
            if (regxAdminName.test(adminName)) {
                $("#adminName").focus();
                var adminUserName = $("#adminName").val();
                if (regxAdminName.test(adminUserName)) {
                    $("#adminConfirmPassword").focus();
                    var adminPassword = $("#adminConfirmPassword").val();
                    if (adminPassword!=""){
                        let res = confirm("Do you really need to add this Customer..?");
                        if (res) {
                            // saveCustomer();
                            //clearAll();
                        }
                    }else {
                        $("#adminConfirmPassword").focus();
                    }
                } else {
                    $("#adminName").focus();
                }
            } else {
                $("#adminFullName").focus();
            }
        } else {
            $("#adminEmail").focus();
        }
    } else {
        $("#adminID").focus();
    }
}

function setButtonAdminProfile() {
    let b = formValidAdminProfile();
    if (b) {
        $("#btnAdminSave,#btnAdminUpdate").attr('disabled', false);
    } else {
        $("#btnAdminSave,#btnAdminUpdate").attr('disabled', true);
    }
}
//End Admin Validation Section


