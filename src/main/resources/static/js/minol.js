$(function() {

   $('#fullpage').fullpage({
        sectionsColor: ['#fff',],
        anchors: ['main', 'story','product-banner','product1','product-find','convenience','video', 'extra1','extra2','extra3','footer'],
        menu: '#headerMenu',
        keyboardScrolling: true,
        animateAnchor: true,
        recordHistory: true,
        'css3': true,
        'navigation': false,
        'navigationPosition': 'right',
        loopHorizontal:false,
        controlArrows: false,
            onLeave: function(anchorLink, index, direction) {
                var pages = $('.section').length;
                var currentPage = index -1;
                // console.log(currentPage);
                
                
            },
            afterLoad: function(anchorLink, index) {
                // console.log(anchorLink, index);
                
                // 미놀에프트로키 애니메이션을 위한 스크립트
                if(index == '4') {
                    $('.minol-orange').addClass('on');
                    $('.minol-mint').addClass('on');
                    $('.minol-peach').addClass('on');
                } else {
                        $('.minol-orange').removeClass('on');
                        $('.minol-mint').removeClass('on');
                        $('.minol-peach').removeClass('on');
                }
            },
            onSlideLeave: function(anchorLink, index, slideIndex, direction, nextSlideIndex) {
                // console.log(nextSlideIndex);

                // 히스토리 페이지에서 마우스로 터치 또는 드래그 할 때, 탭 메뉴와 프로그래시브바 활성화를 위한 코드
                $('.history-tab>ul>li').removeClass('on');
                $('.history-tab>ul>li').eq(nextSlideIndex).addClass('on');
                var gagePoint = ['10%', '30%', '50%', '70%', '90%'];
                var circlePoint = ['95px', '335px', '580px', '820px', '1060px'];
                $('.tab-progressive .bar span').css('width', gagePoint[nextSlideIndex].toString());
                $('.tab-progressive span.circle').css('left', circlePoint[nextSlideIndex].toString());
            }
    });

   // 모바일 GNB 슬라이드
   $('.btn-menu-open').on('click', function() {
        $('nav').addClass('on');
    });
    $('.btn-menu-close').on('click', function() {
        $('nav').removeClass('on');
    });

    var mainSwiper = new Swiper(".main-banner", {
        spaceBetween: 0,
        centeredSlides: true,
        speed: 1000,
        keyboard: {
            enabled: true,
        },
        loop: true,
        autoplay: {
            delay: 4000,
            disableOnInteraction: false,
        },        
        pagination: {
            el: ".swiper-pagination",
            clickable: true,
            renderBullet: function (index, className) {
              return '<span class="' + className + '"><span class="progress"></span>' + (index + 1) + "</span>";
           },
        },
        navigation: false,
    });


    var mainSwiper2 = new Swiper(".main-banner-mo", {
        spaceBetween: 0,
        centeredSlides: true,
        speed: 1000,
        keyboard: {
            enabled: true,
        },
        loop: true,
        autoplay: {
            delay: 4000,
            disableOnInteraction: false,
        },        
        pagination: {
            el: ".swiper-pagination",
            clickable: true,
            renderBullet: function (index, className) {
              return '<span class="' + className + '"><span class="progress"></span>' + (index + 1) + "</span>";
           },
        },
        navigation: false,
    });

    var historySwiper = new Swiper(".history", {
        spaceBetween: 0,
        centeredSlides: true,
        speed: 1000,
        keyboard: {
            enabled: true,
        },
        loop: true,
        autoplay: false,
        pagination: false,
        navigation: false,
    });

    historySwiper.on('transitionStart', function() {
        var numIdx = historySwiper.realIndex;
        // console.log(historySwiper.realIndex);
        $('.history-tab>ul>li').removeClass('on');
        $('.history-tab>ul>li').eq(numIdx).addClass('on');

        // 클릭된 탭 활성화에 맞춰 해당 위치로 미놀 트로키 이미지와 프로그래시브바 이동
        var gagePoint = ['10%', '30%', '50%', '70%', '90%'];
            var circlePoint = ['95px', '335px', '580px', '820px', '1060px'];
            $('.tab-progressive .bar span').css('width', gagePoint[numIdx].toString());
            $('.tab-progressive span.circle').css('left', circlePoint[numIdx].toString());
    });

    // 히스토리 슬라이드 탭
    $('.history-tab>ul>li').each(function(idx) {
        $(this).on('click', function(e) {
            e.preventDefault();
            // console.log(idx);
            // 슬라이드탭 전체를 비활성화 했다가 클릭된 탭만 활성화
            $(this).parent().siblings('li').removeClass('on');
            $(this).parent().addClass('on');
            
            // 클릭된 탭의 슬라이드로 이동(idx)
            historySwiper.slideTo(idx+1, 1000, false)
        });
    });

    // 웹 메인배너 재생, 멈춤 동작
    $('.btn-playpause button').click(function() {
        $(this).toggleClass('on');
        if ($(this).hasClass('on') === true) {
            mainSwiper.autoplay.stop();
            $('.btn-playpause .hide').text('멈춤');
        } else {
            mainSwiper.autoplay.start();
            $('.btn-playpause .hide').text('재생');
        }
    });

    // 모바일 메인배너 분리 적용
    $('.btn-playpause-mo button').click(function() {
        $(this).toggleClass('on');
        if ($(this).hasClass('on') === true) {
            mainSwiper2.autoplay.stop();
            $('.btn-playpause-mo .hide').text('멈춤');
        } else {
            mainSwiper2.autoplay.start();
            $('.btn-playpause-mo .hide').text('재생');
        }
    });


    var mobileHistorySwiper = new Swiper(".history-mo", {
        spaceBetween: 0,
        centeredSlides: false,
        speed: 1000,
        keyboard: {
            enabled: true,
        },
        loop: true,
        autoplay: false,
        pagination: {
            el: ".swiper-pagination",
            clickable: true,
        },
        navigation: false,
    });


    var productSwiper = new Swiper(".product-banner", {
        spaceBetween: 0,
        slidesPerView: 3,
        centeredSlides: true,
        speed: 1000,
        keyboard: {
            enabled: true,
        },
        loop: true,
        // autoplay: false,
        autoplay: {
            delay: 2500,
            disableOnInteraction: false,
        },
        pagination: {
            el: ".product-pagination",
            clickable: true,
        },
        navigation: {
            nextEl: ".product-button-next",
            prevEl: ".product-button-prev",
        },
    });

    productSwiper.on('transitionStart', function() {
        // console.log(productSwiper.realIndex);
        productNum = productSwiper.realIndex;
        if(productNum === 0) {
            $('.product-banner-wrap').css('background', '#f2f9fd');
            $('.circle1').css('background', '#e6f5fb');
            $('.circle2').css('background', '#e1f3fb');
        } else if (productNum === 1) {
            $('.product-banner-wrap').css('background', '#fff8ee');
            $('.circle1').css('background', '#fff4e3');
            $('.circle2').css('background', '#fff2df');
        } else if (productNum === 2) {
            $('.product-banner-wrap').css('background', '#fff0f3');
            $('.circle1').css('background', '#feebef');
            $('.circle2').css('background', '#fee9ed');
        } else if (productNum === 3) {
            $('.product-banner-wrap').css('background', '#ffeeed');
            $('.circle1').css('background', '#fee5e4');
            $('.circle2').css('background', '#fde2e0');
        } else if (productNum === 4) {
            $('.product-banner-wrap').css('background', '#eaf5ff');
            $('.circle1').css('background', '#deeefe');
            $('.circle2').css('background', '#d9ecfd');
        } else if (productNum === 5) {
            $('.product-banner-wrap').css('background', '#edfbff');
            $('.circle1').css('background', '#e5f8fd');
            $('.circle2').css('background', '#e2f7fd'); 
        }
    });
    

     var productSwiper2 = new Swiper(".product-banner2", {
        spaceBetween: 0,
        slidesPerView: 1,
        centeredSlides: true,
        speed: 1000,
        keyboard: {
            enabled: true,
        },
        loop: true,
        autoplay: {
            delay: 2500,
            disableOnInteraction: false,
        },
        pagination: {
            el: ".product2-pagination",
            clickable: true,
        },
        navigation: {
            nextEl: ".product-button-next",
            prevEl: ".product-button-prev",
        },
        breakpoints: {
            320: {
                slidesPerView: 1,
                spaceBetween: 0,
              },
            640: {
              slidesPerView: 3,
              spaceBetween: 0,
            },
            768: {
              slidesPerView: 3,
              spaceBetween: 0,
            },
            1024: {
              slidesPerView: 3,
              spaceBetween: 0,
            },
        },
    });

    productSwiper2.on('transitionStart', function() {
        // console.log(productSwiper.realIndex);
        productNum = productSwiper2.realIndex;
        if(productNum === 0) {
            $('.product-banner-wrap').css('background', '#f2f9fd');
            $('.circle1').css('background', '#e6f5fb');
            $('.circle2').css('background', '#e1f3fb');
        } else if (productNum === 1) {
            $('.product-banner-wrap').css('background', '#fff8ee');
            $('.circle1').css('background', '#fff4e3');
            $('.circle2').css('background', '#fff2df');
        } else if (productNum === 2) {
            $('.product-banner-wrap').css('background', '#fff0f3');
            $('.circle1').css('background', '#feebef');
            $('.circle2').css('background', '#fee9ed');
        } else if (productNum === 3) {
            $('.product-banner-wrap').css('background', '#ffeeed');
            $('.circle1').css('background', '#fee5e4');
            $('.circle2').css('background', '#fde2e0');
        } else if (productNum === 4) {
            $('.product-banner-wrap').css('background', '#eaf5ff');
            $('.circle1').css('background', '#deeefe');
            $('.circle2').css('background', '#d9ecfd');
        } else if (productNum === 5) {
            $('.product-banner-wrap').css('background', '#edfbff');
            $('.circle1').css('background', '#e5f8fd');
            $('.circle2').css('background', '#e2f7fd'); 
        }
    });

    
    var swiper = new Swiper(".product-find-banner", {
        slidesPerView: "auto",
        spaceBetween: 0,
        centeredSlides: true,
        pagination: {
          el: ".swiper-pagination",
          clickable: true,
        },
        grabCursor: true,
        pagination: {
            el: ".swiper-pagination",
            clickable: true,
        },
      });


    // 나에게 딱 필요한 미놀 제품 찾기
    $('.product-find .type ul>li').each(function(idx) {
        $(this).on('mouseover', function() {
            $(this).children().addClass('on');
        });
        $(this).on('mouseout', function() {
            $(this).children().removeClass('on');
        });
    
        $(this).on('click', function() {
            $(this).parent().siblings().eq(idx).fadeIn(300).show();
            $(this).siblings().removeClass('on');
            $(this).children().addClass('on');
        });
    });

    $('.btn-back').on('click', function(e) {
        e.preventDefault();
        $(this).parent().parent().hide();
    });


    // 제품찾기 모바일
    $('.product-find-banner .swiper-slide a').each(function(idx) {
        $(this).on('click', function(e) {
            e.preventDefault();
            // console.log(idx);

            $('.region > div').eq(idx).fadeIn(300);
            $('.region > div').eq(idx).children().addClass('on');
            // if(idx == '0') {
            //     console.log('num : ' + idx)
            // } else if (idx == '1') {
            //     console.log('num : ' + idx)
            // } else {
            //     console.log('num : ' + idx)
            // }
        });
    });

    $('.mo-btn-back').on('click', function(e) {
        e.preventDefault();
        $(this).parent().parent().parent().fadeOut(300);
    });

    // 편의성 강조 페이지 : 트로키 말풍선 동그란 부분을 클릭하면 말풍선이 펼쳐지고, 그 안에 dl 요소가 display:block이 되면 됨.
    $('.convenience>div').each(function(idx) {
        $(this).on('click', function() {
            $(this).toggleClass('on');
                if($(this).hasClass('on') === true) {
                    // console.log('test');
                    var delayTime = setTimeout(function() {
                        $('.convenience>div').eq(idx).children('dl').css('display', 'block');
                        $('.convenience>div').eq(idx).siblings('div').removeClass('on').children('dl').css('display', 'none');
                    }, 300);
                } else {
                    clearTimeout(delayTime);
                    $('.convenience>div').eq(idx).children('dl').css('display', 'none');
                }
        });
    });

    // 편의성 강조 페이지 모바일
    $('.convenience .bg-minol-mo>div').each(function(idx) {
        $(this).on('click', function() {
            $(this).toggleClass('on');
                if($(this).hasClass('on') === true) {
                    // console.log('test');
                    var delayTime = setTimeout(function() {
                        $('.convenience .bg-minol-mo>div').eq(idx).children('dl').css('display', 'block');
                        $('.convenience .bg-minol-mo>div').eq(idx).siblings('div').removeClass('on').children('dl').css('display', 'none');
                    }, 300);
                } else {
                    clearTimeout(delayTime);
                    $('.convenience .bg-minol-mo>div').eq(idx).children('dl').css('display', 'none');
                }
        });
    });

    // 미놀 이외의 제품 - 툴바
    //미놀 노즈 점비액 영역
    $('.tooltip-area1>div').each(function(idx) {
        $(this).on('click', function() {
            $(this).toggleClass('on');
                if($(this).hasClass('on') === true) {
                    // console.log('test');
                    var delayTime = setTimeout(function() {
                        $('.tooltip-area1>div').eq(idx).children('dl').css('display', 'block');
                        $('.tooltip-area1>div').eq(idx).siblings('div').removeClass('on').children('dl').css('display', 'none');
                    }, 350);
                } else {
                    clearTimeout(delayTime);
                    $('.tooltip-area1>div').eq(idx).children('dl').css('display', 'none');
                }
        });
    });

    //이비나액 영역
    $('.tooltip-area2>div').each(function(idx) {
        $(this).on('click', function() {
            $(this).toggleClass('on');
                if($(this).hasClass('on') === true) {
                    // console.log('test');
                    var delayTime = setTimeout(function() {
                        $('.tooltip-area2>div').eq(idx).children('dl').css('display', 'block');
                        $('.tooltip-area2>div').eq(idx).siblings('div').removeClass('on').children('dl').css('display', 'none');
                    }, 350);
                } else {
                    clearTimeout(delayTime);
                    $('.tooltip-area2>div').eq(idx).children('dl').css('display', 'none');
                }
        });
    });
});

//팝업 열기

function openPopup(modalname) {
    document.get
    $("." + modalname).fadeIn(300);
    $('body').css("pointer-events","none");
}

function closePopup(modalname) {
    document.get
    $("." + modalname).fadeOut(300);
    $('body').css("pointer-events","auto");
}

function openProductsPopup(modalname) {
    document.get
    $("." + modalname).fadeIn(300);
    $('body').css("pointer-events","none");
    $('.dim-products').addClass('on');
}

function closeProductsPopup(modalname) {
    document.get
    $("." + modalname).fadeOut(300);
    $('body').css("pointer-events","auto");
    $('.dim-products').removeClass('on');
}

function openPopupDim(modalname) {
    document.get
    $("." + modalname).fadeIn(300);
    $('body').css("pointer-events","none");
    $('.dim').addClass('on');
}

function closePopupDim(modalname) {
    document.get
    $("." + modalname).fadeOut(300);
    $('body').css("pointer-events","auto");
    $('.dim').removeClass('on');
}

function popupWindow() {
    window.open("terms.html","popup", "width=400, height=500, left=0, top=0, scrollbars=no,titlebar=no,status=no,resizable=no,fullscreen=no");
}