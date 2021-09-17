$(document).ready(function () {

    setTimeout(function(){
        $('.loading').css({'visibility':'hidden', 'opacity':0});
        $('.wrapper').removeClass('cover')
    },3000);

    var Timer = null;
    var IsClose = false;
    var navH;
    // 監聽網頁，滾動至350 顯示 sticky_nav
    $(window).scroll(function () {
        // Alvin 08-26 改用 throttle 參考網址 https://medium.com/@steven234/throttle%E8%B7%9F-debounce%E6%9C%89%E4%BB%80%E9%BA%BC%E5%8D%80%E5%88%A5-e0b1979b1b4f

        if (IsClose) {
            return;
        }
        IsClose = true;
        Timer = setTimeout(function () {
            let scrollTop = $(this).scrollTop();
            navH = $('.navbar').outerHeight();
            // 0830 Alvin
            if (scrollTop > navH) {
                $('.navbar-collapse').removeClass('show');
                $('.navbar-toggler').removeClass('open');
                $('.sticky_nav').addClass('show');
                $('.sticky_btn').addClass('show');
                IsClose = false;
            } else {
                $('.sticky_nav').removeClass('show');
                $('.sticky_btn').removeClass('show');
                $('.sticky_nav').removeClass('open');
                $('.sticky_btn').removeClass('open');
                IsClose = false;
            }
        }, 0);
    });

    // 漢堡
    $('.navbar-toggler').on('click', function () {
        // 漢堡切換 icon 和底色
        $('.navbar-toggler').toggleClass('open');
    });

    // 0830 Alvin
    $('.sticky_btn').on('click', function () {
        // 漢堡切換 icon 和底色
        $('.sticky_btn').toggleClass('open');
        $('.sticky_nav').toggleClass('open');
    });

    //文章縮放
    $('.flip').on('click', function () {
        $(this).parent().toggleClass('unfold');
    });

    // banner
    $('.banner_slider').slick({
        lazyLoad: 'ondemand',
        arrows: false,
        dots: true,
    });

    // 公益成果
    $('.works_slide').slick({
        lazyLoad: 'ondemand',
        centerMode: true,
        centerPadding: '350px',
        slidesToShow: 1,
        variableWidth: false,
        arrows: true,
        dots: true,
        responsive: [
            {
                breakpoint: 1550,
                settings: {
                    arrows: true,
                    centerMode: true,
                    centerPadding: '200px',
                    slidesToShow: 1,
                },
            },
            {
                breakpoint: 992,
                settings: {
                    arrows: false,
                    centerMode: true,
                    centerPadding: '0px',
                    slidesToShow: 1,
                },
            },
        ],
    });

    // 平台三大特色
    $('.platform_slider').slick({
        lazyLoad: 'ondemand',
        centerMode: true,
        centerPadding: '25%',
        slidesToShow: 1,
        variableWidth: false,
        arrows: true,
        dots: true,
        // autoplay: true,
        //autoplaySpeed: 3000,
        responsive: [
            {
                breakpoint: 576,
                settings: {
                    arrows: false,
                    centerMode: true,
                    centerPadding: '15%',
                    slidesToShow: 1,
                },
            },
            {
                breakpoint: 427,
                settings: {
                    arrows: false,
                    centerMode: true,
                    centerPadding: '10%',
                    slidesToShow: 1,
                },
            },
            {
                breakpoint: 360,
                settings: {
                    arrows: false,
                    centerMode: true,
                    centerPadding: '8%',
                    slidesToShow: 1,
                },
            },
        ],
    });
});

function debounce(func, delay = 250) {
    let timer = null;

    return () => {
        let context = this;
        let args = arguments;

        clearTimeout(timer);
        timer = setTimeout(() => {
            func.apply(context, args);
        }, delay);
    };
}

// navbar點擊滾動效果
$(function () {
    $('a[href*="#"]:not([href="#"])').click(function () {
        if (
            location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') &&
            location.hostname == this.hostname &&
            this.hash.slice(1) != 'top'
        ) {
            var target = $(this.hash);
            target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
            if (target.length) {
                $('html, body').animate(
                    {
                        scrollTop: target.offset().top,
                    },
                    1000
                );
                return false;
            }
        }
    });
});

// todo scroll magic
$(function () {
    // init controller
    var controller = new ScrollMagic.Controller();

    // create a scene
    var scene = new ScrollMagic.Scene({
        triggerElement: '.about_conent',
    })
    .setClassToggle('.about_conent', 'active')
    .addTo(controller); // assign the scene to the controller

    var scene2 = new ScrollMagic.Scene({
        triggerElement: '.intro_content',
    })
    .setClassToggle('.intro_content', 'active')
    .addTo(controller);

    var scene3 = new ScrollMagic.Scene({
        triggerElement: '.feature_content',
    })
    .setClassToggle('.feature_content', 'active')
    .addTo(controller);

    var scene4 = new ScrollMagic.Scene({
        triggerElement: '.feature_content_2',
    })
    .setClassToggle('.feature_content_2', 'active')
    .addTo(controller);

    var scene5 = new ScrollMagic.Scene({
        triggerElement: '.footer_castle',
    })
    .setClassToggle('.footer_castle', 'active')
    .addTo(controller);
    
        
    var scene6 = new ScrollMagic.Scene({
        triggerElement: '#main_end_animate',
    })
    .setClassToggle('#main_end_animate', 'active')
    .addTo(controller);

    

    scene2.offset(-200); 
    scene3.offset(-200); 
    scene4.offset(-200); 
    scene5.offset(-200); 
    scene6.offset(-400);



    var contentAbout = new ScrollMagic.Scene({
        triggerElement: '#about',
    })
    .setClassToggle('#about .container', 'active')
    .addTo(controller);


    var contentVideo = new ScrollMagic.Scene({
        triggerElement: '#video',
    })
    .setClassToggle('#video .container', 'active')
    .addTo(controller);

    var contentDad = new ScrollMagic.Scene({
        triggerElement: '#dad',
    })
    .setClassToggle('#dad .container', 'active')
    .addTo(controller);

    
    var contentWorks = new ScrollMagic.Scene({
        triggerElement: '#works',
    })
    .setClassToggle('#works .works_slide', 'active')
    .addTo(controller);

    var contentPlatform = new ScrollMagic.Scene({
        triggerElement: '#platform',
    })
    .setClassToggle('#platform .container', 'active')
    .addTo(controller);

    var contentPlatform2 = new ScrollMagic.Scene({
        triggerElement: '#platform',
    })
    .setClassToggle('#platform .platform_slider', 'active')
    .addTo(controller);



    var contentRecommend = new ScrollMagic.Scene({
        triggerElement: '#recommend',
    })
    .setClassToggle('#recommend .container', 'active')
    .addTo(controller);

    




    controller.addScene([scene, scene2, scene3, scene4, scene5,scene6,contentAbout,contentVideo,contentDad,contentWorks,contentPlatform,contentPlatform2,contentRecommend]);
});
