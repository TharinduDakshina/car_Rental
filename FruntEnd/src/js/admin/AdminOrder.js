$('#btnOrdersRefresh').click(function () {
    loadAllOrders();
});

function loadAllOrders() {
    $('#tblOrderBody').empty();
    $.ajax({
        url: 'http://localhost:8080/BackEnd_war/booking',
        method: 'GET',
        async: false,
        dataType: 'json',
        success: function (res) {
            let values = res.data;
            for (i in values) {
                let id = values[i].bookingID;
                let date = values[i].date;
                let pickdate = values[i].pickupDate;
                let returndate = values[i].returnDate;
                let status = values[i].status;
                let customer = values[i].customer.customerID;
                let car = values[i].car.carID;
                let driver = values[i].driver.driverID;


                $('#tblOrderBody').append(`
                    <tr><td>${id}</td>
                    <td>${car}</td>
                    <td>${customer}</td>
                    <td>${driver}</td>
                    <td>${date}</td>
                    <td>${pickdate}</td>
                    <td>${returndate}</td>
                    <td>${status}</td>
                    <td><button style="background-color: greenyellow;border-radius: 2px" class='editRow'>Accept</button></td>
                    </tr>`)
            }
        }
    });

}