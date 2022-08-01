var adminId;
{
    getAdmin();
}

let admin_id = $('#adminID').val();
let admin_email = $('#adminEmail').val();
let admin_name = $('#adminName').val();
let admin_full_name = $('#adminFullName').val()
let admin_cpw = $('#adminConfirmPassword').val();

//Start Admin Save Section
$('#btnAdminSave').click(() => {
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
                alert("Admin Update successful .");
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
               // $('#adminNameInHeader').value(res.data.name);
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


//Admin Update
$("#btnAdminUpdate").click(function (){
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
                alert("Admin save successful .");
                clearAdProfile();
            }
        },
        error: function (ob, textStatus, error) {
            alert(error);
        }
    });

});


//Start Admin Validation Section

//End Admin Validation Section


