// Write your JavaScript code.
$(document).ready(function () {
    timerJob();
    radiobtn = document.getElementById("Alla");
    radiobtn.checked = true;
});

$(".uppercase").keyup(function () {
    var text = $(this).val();
    $(this).val(text.toUpperCase());
});

function clearErrors() {
    $(".validation-summary-errors").empty();
};

function timerJob() {
    const tenSeconds = 10000;
    const oneSecond = 1000;
    $.ajax({
        url: "http://localhost:54411/api/car",
        type: "GET",
        dataType: "json",
        success: function (cars) {
            if (cars.length === 0) {
                window.setTimeout(timerJob, oneSecond);
                console.log("Inga bilar hittade!");
                return;
            }

            const selectedItem = Math.floor(Math.random() * cars.length);
            let selectedCar = cars[selectedItem];
            if (selectedCar.disabled === true) {
                window.setTimeout(timerJob, oneSecond);
                console.log(selectedCar.regNr + " är blockerad för uppdatering av Online/Offline!");
                return;
            }
            selectedCar.online = !selectedCar.online;
            $.ajax({
                url: 'http://localhost:54411/api/car/' + selectedCar.id,
                contentType: "application/json",
                type: "PUT",
                data: JSON.stringify(selectedCar),
                dataType: "json"
            });

            const selector = `#${selectedCar.id} td:eq(2)`;
            const selector2 = `#${selectedCar.id + "_2"} td:eq(3)`;
            const selector3 = `#${selectedCar.id + "_3"}`;
            if (selectedCar.online === true) {
                $(selector).text("Online");
                $(selector).removeClass("alert-danger");
                $(selector2).text("Online");
                $(selector2).removeClass("alert-danger");
                $(selector3).text("Online");
                $(selector3).removeClass("alert-danger");
                console.log(selectedCar.regNr + " är Online!");
            }
            else {
                $(selector).text("Offline");
                $(selector).addClass("alert-danger");
                $(selector2).text("Offline");
                $(selector2).addClass("alert-danger");
                $(selector3).text("Offline");
                $(selector3).addClass("alert-danger");
                console.log(selectedCar.regNr + " är Offline!");
            }
        }
    });
    var table = document.getElementById("cars");
    let selection = 0;
    let radiobtn = document.getElementById("Alla");
    if (radiobtn.checked === false) {
        radiobtn = document.getElementById("Online");
        if (radiobtn.checked === true) {
            selection = 1
        }
        else
        {
            selection = 2
        }
    }
    if (selection === 1) {   //Show Online only
        for (var i = 0, row; row = table.rows[i]; i++) {
            $(selector).text("Offline");
            $(selector).addClass("alert-danger");

        }
    }
    window.setTimeout(timerJob, tenSeconds);
}
