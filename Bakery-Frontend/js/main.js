$(document).ready(function($) {
    "use strict";


    var book_table = new Swiper(".book-cake-img-slider", {
        slidesPerView: 1,
        spaceBetween: 20,
        loop: true,
        autoplay: {
            delay: 3000,
            disableOnInteraction: false,
        },
        speed: 2000,
        effect: "coverflow",
        coverflowEffect: {
            rotate: 3,
            stretch: 2,
            depth: 100,
            modifier: 5,
            slideShadows: false,
        },
        loopAdditionSlides: true,
        navigation: {
            nextEl: ".swiper-button-next",
            prevEl: ".swiper-button-prev",
        },
        pagination: {
            el: ".swiper-pagination",
            clickable: true,
        },
    });


    jQuery(".filters").on("click", function() {
        jQuery("#menu-cake").removeClass("bydefault_show");
    });

    $(function() {
        var filterList = {
            init: function() {
                $("#menu-cake").mixItUp({
                    selectors: {
                        target: ".cake-box-wp",
                        filter: ".filter",
                    },
                    animation: {
                        effects: "fade",
                        easing: "ease-in-out",
                    },
                    load: {
                        filter: ".all, .BanhSinhNhat, .BanhMacaron, .BanhNgotPhap",
                    },
                });
            },
        };
        filterList.init();
    });

    jQuery(".menu-toggle").click(function() {
        jQuery(".main-navigation").toggleClass("toggled");
    });

    jQuery(".header-menu ul li a").click(function() {
        jQuery(".main-navigation").removeClass("toggled");
    });

    gsap.registerPlugin(ScrollTrigger);

    var elementFirst = document.querySelector('.site-header');
    ScrollTrigger.create({
        trigger: "body",
        start: "30px top",
        end: "bottom bottom",

        onEnter: () => myFunction(),
        onLeaveBack: () => myFunction(),
    });

    function myFunction() {
        elementFirst.classList.toggle('sticky_head');
    }

    var scene = $(".js-parallax-scene").get(0);
    const plus = document.querySelector(".plus"),
        num = document.querySelector(".num"),
        minus = document.querySelector(".minus");
    let count = 1;

    plus.addEventListener("click", () => {
        count++;
        num.innerText = count;
        console.log(count);
    });
    minus.addEventListener("click", () => {
        if (count > 1) {
            count--;
            num.innerText = count;
            console.log(count);
        }
    });

});


jQuery(window).on('load', function() {
    $('body').removeClass('body-fixed');

    let targets = document.querySelectorAll(".filter");
    let activeTab = 0;
    let old = 0;
    let dur = 0.4;
    let animation;

    for (let i = 0; i < targets.length; i++) {
        targets[i].index = i;
        targets[i].addEventListener("click", moveBar);
    }

    gsap.set(".filter-active", {
        x: targets[0].offsetLeft,
        width: targets[0].offsetWidth
    });

    function moveBar() {
        if (this.index != activeTab) {
            if (animation && animation.isActive()) {
                animation.progress(1);
            }
            animation = gsap.timeline({
                defaults: {
                    duration: 0.4
                }
            });
            old = activeTab;
            activeTab = this.index;
            animation.to(".filter-active", {
                x: targets[activeTab].offsetLeft,
                width: targets[activeTab].offsetWidth
            });

            animation.to(targets[old], {
                color: "#0d0d25",
                ease: "none"
            }, 0);
            animation.to(targets[activeTab], {
                color: "#fff",
                ease: "none"
            }, 0);

        }
    }
});


$(".open").click(function() {
    var container = $(this).parents(".topic");
    var answer = container.find(".answer");
    var trigger = container.find(".faq-t");

    answer.slideToggle(200);

    if (trigger.hasClass("faq-o")) {
        trigger.removeClass("faq-o");
    } else {
        trigger.addClass("faq-o");
    }

    if (container.hasClass("expanded")) {
        container.removeClass("expanded");
    } else {
        container.addClass("expanded");
    }
});
