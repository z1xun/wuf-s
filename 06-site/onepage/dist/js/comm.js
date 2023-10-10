$(window).scroll(function () {
    var scroll = $(window).scrollTop();
    // console.log(scroll);
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

const pTag1 = document.querySelector(".first-parallel");
const pTag2 = document.querySelector(".second-parallel");
const pTag3 = document.querySelector(".third-parallel");
const pTag4 = document.querySelector(".forth-parallel");

const textArr1 = " surf all day! party all night!".split(" ");
const textArr2 = " surf all day! party all night!".split(" ");
const textArr3 = " surf all day! party all night!".split(" ");
const textArr4 = " surf all day! party all night!".split(" ");

let count1 = 0;
let count2 = 0;
let count3 = 0;
let count4 = 0;

initTexts(pTag1, textArr1);
initTexts(pTag2, textArr2);
initTexts(pTag3, textArr3);
initTexts(pTag4, textArr4);

function initTexts(element, textArray) {
    textArray.push(...textArray);
    for (let i = 0; i < textArray.length; i++) {
        element.innerText += `${textArray[i]}\u00A0\u00A0\u00A0\u00A0`;
    }
}

function marqueeText(count, element, direction) {
    if (count > element.scrollWidth / 2) {
        element.style.transform = `translate3d(0, 0, 0)`;
        count = 0;
    }
    element.style.transform = `translate3d(${direction * count}px, 0, 0)`;

    return count;
}

function animate() {
    count1++;
    count2++;
    count3++;
    count4++;

    count1 = marqueeText(count1, pTag1, -1);
    count2 = marqueeText(count2, pTag2, 1);
    count3 = marqueeText(count3, pTag3, -1);
    count4 = marqueeText(count4, pTag4, 1);

    window.requestAnimationFrame(animate);
}

function scrollHandler() {
    count1 += 15;
    count2 += 15;
    count3 += 15;
    count4 += 15;
}
window.addEventListener("scroll", scrollHandler);
animate();
