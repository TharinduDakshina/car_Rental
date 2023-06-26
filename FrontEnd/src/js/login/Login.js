$("#log").css("display", "block");
$("#driver").css("display", "none");
$("#customer").css("display", "none");


$("#btn_Login").click(function () {
        let userName = $('#txtUserName').val();
        let password = $('#txtPassword').val();

            $.ajax({
                url:"http://localhost:8080/BackEnd_war/driver?userName="+userName+"&password="+password,
                method:"GET",
                success:function (resDriver){
                    if (resDriver.code==200){
                        if (resDriver.data!=null){
                            if (resDriver.data.password==password){
                                //load driver profile
                                loadDriver(resDriver.data.driverID);
                                $("#driver").css("display", "block");
                                $("#log").css("display", "none");
                                $("#customer").css("display", "none");

                                //clear login form
                                $("#txtUserName,#txtPassword").val("");
                            }else {
                                alert("Dear Driver Your password is not correct . Please try again..!");
                            }
                        }else {
                            $.ajax({
                                url: "http://localhost:8080/BackEnd_war/customer?userName="+userName+"&password="+password,
                                method: "GET",
                                success:function (resCustomer){
                                    if (resCustomer.code==200){
                                        if (resCustomer.data!=null){
                                            if (resCustomer.data.password==password){
                                                //load customer profile
                                                loadCustomer(resCustomer.data.customerID);
                                                $("#driver").css("display", "none");
                                                $("#log").css("display", "none");
                                                $("#customer").css("display", "block");

                                                //clear login form
                                                $("#txtUserName,#txtPassword").val("");
                                            }else {
                                                alert("Dear Customer Your password is not correct . Please try again..!");
                                            }

                                        }else {
                                            $.ajax({
                                                url:"http://localhost:8080/BackEnd_war/admin?userName="+userName,
                                                method:"GET",
                                                success:function (resAdmin){
                                                    if (resAdmin.code==200){
                                                        if (resAdmin.data!=null){
                                                            if (resAdmin.data.password == password) {
                                                                //adminId=resAdmin.data.adminID;
                                                                //adminUserName=resAdmin.data.userName;
                                                                //load admin
                                                                $.ajax({
                                                                    url:"http://localhost:8080/BackEnd_war/login",
                                                                    method:"POST",
                                                                    data: JSON.stringify({
                                                                        "loginID":resAdmin.data.adminID,
                                                                        "userName":resAdmin.data.userName,
                                                                        "password":resAdmin.data.password
                                                                    }),
                                                                    dataType: 'Json',
                                                                    contentType: "application/json",
                                                                    success:function (res){
                                                                        if (res.code==200){
                                                                            console.log(res.message);
                                                                        }else alert(res.message);
                                                                    }
                                                                });
                                                                window.location = "http://localhost:63342/BackEnd/FruntEnd/src/common/admin.html?_ijt=90mbd3au146q9m67jhk1eoag43";
                                                            }else alert("Password is not correct..! Please try again.");
                                                        }else alert("Username is not correct . Please try again..!");
                                                    }else {
                                                        alert(resAdmin.message);
                                                    }
                                                },
                                                error:function (ob,txtStatus,error){

                                                }
                                            });

                                        }

                                    }else {
                                        alert(resCustomer.message);
                                    }
                                }
                            });
                        }
                    }else alert(resDriver.message);
                },error:function (ob,textStatus,error){
                    console.log("1 -->"+ob);
                    console.log("2 -->"+textStatus);
                    console.log("3 -->"+error);
                }
            });




});
