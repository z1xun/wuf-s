// const headerEl = document.querySelector("#header");

// //페이지에 스크롤 이벤트 추가
// window.addEventListener(
//     "scroll",
//     _.throttle(function () {
//         console.log(window.scrollY);

//         if (window.scrollY > 200) {
//             //페이지 스크롤 위치가 200px보다 크면
//             gsap.to(headerEl, 0.6, {
//                 opacity: 0,
//                 display: "none",
//             });
//         } else {
//             //페이지 스크롤 위치가 200px보다 작으면
//             gsap.to(headerEl, 0.6, {
//                 opacity: 1,
//                 display: "block",
//             });
//         }
//     }, 300)
// );
$(window).scroll(function () {
    var scroll = $(window).scrollTop();
    console.log(scroll);
    if (scroll >= 900) {
        //console.log('a');
        $("#header").addClass("active");
    } else {
        //console.log('a');
        $("#header").removeClass("active");
    }
});

!(function ($) {
    "use strict";

    var $slider = $(".scroll-slider"),
        $slides = $(".scroll-slide"),
        $sliderWrapper = $(".scroll-wrapper"),
        $firstSlide = $slides.first();

    var settings = {},
        resizing = false,
        scrollController = null,
        scrollTween = null,
        scrollTimeline = null,
        progress = 0,
        scrollScene = null;

    function scrollSlider(options) {
        // Default
        settings = $.extend(
            {
                slider: ".scroll-slider",
                sliderWrapper: ".scroll-wrapper",
                slides: ".scroll-slide",
                slideWidth: null,
                slideHeight: null,
            },
            options
        );

        // Set dimensions
        setDimensions();

        // On resize
        $(window).on("resize", function () {
            clearTimeout(resizing);
            resizing = setTimeout(function () {
                setDimensions();
            }, 250);
        });
    }

    function setDimensions() {
        settings.slideWidth = $firstSlide.width();
        settings.slideHeight = $firstSlide.height();

        console.log(settings.slideWidth);
        console.log(settings.slideHeight);

        // Calculate slider width and height
        settings.sliderWidth = Math.ceil(settings.slideWidth * $slides.length);
        settings.sliderHeight = $firstSlide.outerHeight(true);

        // Set slider width and height
        $sliderWrapper.width(settings.sliderWidth);
        //$sliderWrapper.height(settings.sliderHeight);

        // Set scene
        setScene();

        //resizing = false;
    }

    function setScene() {
        var xDist = -$slides.width() * ($slides.length - 1),
            tlParams = { x: xDist, ease: Power2.easeInOut };

        if (scrollScene != null && scrollTimeline != null) {
            progress = 0;
            scrollScene.progress(progress);

            scrollTimeline = new TimelineMax();
            scrollTimeline.to($sliderWrapper, 2, tlParams);

            scrollScene.setTween(scrollTimeline);

            scrollScene.refresh();
        } else {
            // Init ScrollMagic controller
            scrollController = new ScrollMagic.Controller();

            //Create Tween
            scrollTimeline = new TimelineMax();
            scrollTimeline.to($sliderWrapper, 2, tlParams);
            scrollTimeline.progress(progress);

            // Create scene to pin and link animation
            scrollScene = new ScrollMagic.Scene({
                triggerElement: settings.slider,
                triggerHook: "onLeave",
                duration: settings.sliderWidth,
            })
                .setPin(settings.slider)
                .setTween(scrollTimeline)
                .addTo(scrollController)
                .on("start", function (event) {
                    scrollTimeline.time(0);
                });
        }
    }

    $(document).ready(function () {
        scrollSlider();
    });
})(jQuery);
