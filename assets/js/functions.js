(function($) {
    'use strict';
    jQuery(document).ready(function() {


        // interface-slider swiper slider init
        var interfaceSliderContainer = new Swiper('.interface-slider-container', {
            slidesPerView: 5,
            loop: true,
            initialSlide: 4,
            keyboardControl: true,
            mousewheelControl: true,
            preventClicks: true,
            preventClicksPropagation: true,
            centeredSlides: true,
            pagination: {
                el: '.swiper-pagination',
                clickable: true,
            },
            breakpoints: {
                990: {
                    slidesPerView: 3
                },
                450: {
                    slidesPerView: 1,
                    spaceBetween: 50,
                }
            }
        });


        // testimonial swiper slider init
        var axsistestimonialContainer = new Swiper('.axsis-testimonial-container', {
            spaceBetween: 30,
            slidesPerView: 2,
            loop: true,
            // autoplay: {
            //     delay: 5500,
            //     disableOnInteraction: false
            // },
            pagination: {
                el: '.swiper-pagination',
                clickable: true,
            },
            breakpoints: {
                768: {
                    slidesPerView: 1,
                    spaceBetween: 30
                }
            }
        });



        // to top js
        $(window).on("scroll", function() {
            var scroll = $(window).scrollTop();

            if (scroll >= 500) {
                $(".to-top").addClass("fixed-totop");
            } else {
                $(".to-top").removeClass("fixed-totop");
            }
        });


        // fixed menu
        $(window).on("scroll", function() {
            var scroll = $(window).scrollTop();

            if (scroll >= 100) {
                $(".axsis-main-menu-area").addClass("fixed-menu animate slideInDown");
            } else {
                $(".axsis-main-menu-area").removeClass("fixed-menu  animate slideInDown");
            }
        });

        //search option
        $('.search-option').on("click", function() {
            $('body').addClass('search-open');
        })

        $('.close-search').on("click", function() {
            $('body').removeClass('search-open');
        })



        //mobile menu
        $('.menu-bar').on("click", function() {
            $('.axsis-main-menu-area').addClass('mobile-menu-open');
        })

        $('.close-button').on("click", function() {
            $('.axsis-main-menu-area').removeClass('mobile-menu-open');
        })


        // lightcase init
        $('a[data-rel^=lightcase]').lightcase();


        $(window).load(function() {
            $("#loading").delay(2000).fadeOut(500);
            // $("#loading-center").click(function() {
            // $("#loading").fadeOut(500);
            // })
        })


        $('.hover-effect-parent').on('mouseover', '.hover-effect-child', function() {
            $('.hover-effect-child.active').removeClass('active');
            $(this).addClass('active');
        });

        $('.hover-effect-parent1').on('mouseover', '.hover-effect-child1', function() {
            $('.hover-effect-child1.active').removeClass('active');
            $(this).addClass('active');
        });

        $('.hover-effect-parent2').on('mouseover', '.hover-effect-child2', function() {
            $('.hover-effect-child2.active').removeClass('active');
            $(this).addClass('active');
        });

        $('.hover-effect-parent3').on('mouseover', '.hover-effect-child3', function() {
            $('.hover-effect-child3.active').removeClass('active');
            $(this).addClass('active');
        });

        $('.hover-effect-parent4').on('mouseover', '.hover-effect-child4', function() {
            $('.hover-effect-child4.active').removeClass('active');
            $(this).addClass('active');
        });

        $('.hover-effect-parent5').on('mouseover', '.hover-effect-child5', function() {
            $('.hover-effect-child5.active').removeClass('active');
            $(this).addClass('active');
        });



        // $(".dropdown>li>a").click(function(){
        //   $(".dropdown").toggleClass("open-menu");
        // });

        $(".dropdown").click(function() {
            $(".submenu").slideToggle("slow");
        });



    });
})(jQuery);



jQuery(document).ready(function() {

    // wow animation init
    wow = new WOW({
        boxClass: 'wow', // default
        animateClass: 'animated', // default
        offset: 0, // default
        mobile: false, // default
        live: true // default
    })
    wow.init();

});