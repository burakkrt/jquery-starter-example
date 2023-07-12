$(function () {
    $("#lastRemove").hide();
    $("#addItems").hide();
})


$(function () {
    $("#xiaomi").click(function () {

        $(".btn").map(function () {
            $(this).removeClass(".active")
        })
        $(this).toggleClass("active");

        $(".list-item").map(function () {
            if (this.textContent === "Xiaomi") {
                $(this).css("background-color", "red").css("color", "white")
            }
        })

        $(this).addClass("block")

        $("#lastRemove").show();
    })
})

$(function () {
    $("#lastRemove").click(function () {
        $("#addItems").show();
        $("#list").children(":last").remove();
    })
})

$(function () {
    let count = 1;
    $("#addItems").click(function () {

        $("#list").append(`<li class=\"list-item\">Item - ${count}</li>`);
        count++;
    })
})