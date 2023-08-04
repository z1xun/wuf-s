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
    const slideEls = $(".lst-slide");
    let height = 100;

    //3초 마다 실행
    setInterval(function () {
        slide();
    }, 3000);

    //슬라이드 기능 만들기
    function slide() {
        //조건문
        // NOW가 0 일경우 1번째 슬라이드
        // NOW가 1 일경우 2번째 슬라이드
        // NOW가 2 일경우 3번째 슬라이드
        //만약 1, 2번째 슬라이드일 경우 다음 슬라이드로 이동
        //거짓:(3번째슬라이드일 경우) 다시 첫번째 슬라이드로 이동
        if (now < 3) {
            //참일 경우
            slideEls.animate({
                top: height * now * -1 + "%",
            });
            //변수 재선언
            now = now + 1;
        } else {
            //거짓 일 경우
            slideEls.animate({
                top: 0,
            });
            now = 1;
        }
    }
});
