$("#driver").css("display", "none");
$("#log").css("display", "block");
$("#customer").css("display", "none");



$("#btn_Login").click(function () {
        let userName = $('#txtUserName').val();
        let password = $('#txtPassword').val();


        $.ajax({
            url:"http://localhost:8080/BackEnd_war/driver?userName="+userName+"&password="+password,
            method:"GET",
            success:function (resDriver){
                if (resDriver.code==200){
                    console.log(typeof resDriver.message);
                    console.log(resDriver.message);
                    loadDriver(resDriver.message);
                    $("#driver").css("display", "block");
                    $("#log").css("display", "none");
                    $("#customer").css("display", "none");
                    /*window.location = "http://localhost:63342/BackEnd/FruntEnd/src/common/Driver.html?_ijt=q5hqanlpii5i2eh0bu20tf7afn"*/
                    $("#txtUserName,#txtPassword").val("");
                }else if (resDriver.message=="username is invalided"){
                   $.ajax({
                      url: "http://localhost:8080/BackEnd_war/customer?userName="+userName+",password="+password,
                      method: "GET",
                      success:function (resCustomer){
                          if (resCustomer.code==200){
                              loadCustomer(resDriver.message);
                              //window.location = "http://localhost:63342/BackEnd/FruntEnd/src/common/customer.html?_ijt=7a5ok2r6umo14242cg2rfbs6j2"
                              $("#driver").css("display", "none");
                              $("#log").css("display", "none");
                              $("#customer").css("display", "block");
                              $("#txtUserName,#txtPassword").val("");
                          }else {
                            alert(resCustomer.message);
                          }
                      }
                   });
                }
            }
        });

});
