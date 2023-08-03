$(function () {
    $(".lst-bbs li:first-child").on("click", function () {
        $("#modal").addClass("active");
    });

    $("#modal button").on("click", function () {
        $("#modal").removeClass("active");
    });
    $(".tab-item").removeClass("on");
    $(".tab-item:first-child").addClass("on");
    $(".tab-item .tit").on("click", function () {
        $(".tab-item").removeClass("on");
        $(this).parent().addClass("on");
    });
});
