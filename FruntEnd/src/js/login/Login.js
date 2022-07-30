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
                                        alert("Username is not correct . Please try again..!");
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
