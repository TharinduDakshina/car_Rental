$("#btn_Login").click(function () {
        let userName = $('#txtUserName').val();
        let password = $('#txtPassword').val();


        $.ajax({
            url:"http://localhost:8080/BackEnd_war/driver?userName="+userName+",password="+password,
            method:"GET",
            success:function (resDriver){
                if (resDriver.code==200){
                    window.location = "http://localhost:63342/BackEnd/FruntEnd/src/common/Driver.html?_ijt=q5hqanlpii5i2eh0bu20tf7afn"
                    $("#txtUserName,#txtPassword").val("");
                }else if (resDriver.message=="username is invalided"){
                   $.ajax({
                      url: "http://localhost:8080/BackEnd_war/customer?userName="+userName+",password="+password,
                      method: "GET",
                      success:function (resCustomer){
                          if (resCustomer.code==200){
                              window.location = "http://localhost:63342/BackEnd/FruntEnd/src/common/customer.html?_ijt=7a5ok2r6umo14242cg2rfbs6j2"
                              $("#txtUserName,#txtPassword").val("");
                          }else {
                            alert(resCustomer.message);
                          }
                      }
                   });
                }
            }
        });





        /*if (userName != "") {
            if (password !== "") {
                if (userName == "admin" && password == "1023") {
                    window.location = "http://localhost:63342/Car_Rental_System/Frunt_End/src/common/admin.html?_ijt=r11ennsnj4rl89npemcdek0kkg&_ij_reload=RELOAD_ON_SAVE";
                } else {
                    if (userName == "driver" && password == "1023") {
                        window.location = "http://localhost:63342/Car_Rental_System/Frunt_End/src/common/Driver.html?_ijt=a0qssnc9kq5tcj6mf3n7fa2nh7&_ij_reload=RELOAD_ON_SAVE";
                    } else {
                        if (userName == "customer" && password == "1023") {
                            window.location = "http://localhost:63342/Car_Rental_System/Frunt_End/src/common/customer.html?_ijt=a0qssnc9kq5tcj6mf3n7fa2nh7&_ij_reload=RELOAD_ON_SAVE";

                        } else {
                            alert("Invalid User Name and Password");
                        }
                    }
                }
            } else {
                alert("place Enter Password");
            }
        } else {
            alert("place Enter User Name");
        }*/

});
