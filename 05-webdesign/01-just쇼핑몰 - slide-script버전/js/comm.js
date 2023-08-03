$(function () {
    //모달
    const modalWrap = $("#modal");
    const modalBtn = modalWrap.find("button");
    const listbbsEl = $(".lst-bbs li:first-child");

    listbbsEl.on("click", function () {
        modalWrap.addClass("active");
    });

    modalBtn.on("click", function () {
        modalWrap.removeClass("active");
    });
    //탭
    const tabEl = $(".tab-item");
    const tabTit = tabEl.find(".tit");

    tabEl.removeClass("on");
    tabEl.first().addClass("on");
    tabTit.on("click", function () {
        tabEl.removeClass("on");
        $(this).parent().addClass("on");
    });
    //슬라이드
    let now = 1;

    setInterval(function () {
        slide();
    }, 3000);

    function slide() {
        $(".lst-slide").animate({
            top: 100 * now * -1 + "%",
        });
    }
});
