const $ = require('../../node_modules/jquery/dist/jquery');
require('../../node_modules/bootstrap/dist/js/bootstrap.bundle');
require('../../node_modules/swiper/swiper-bundle');

$(window).ready(function () {
    // Convert Number To Persion
    ConvertNumberToPersion();
    function ConvertNumberToPersion() {
        let persian = { 0: '۰', 1: '۱', 2: '۲', 3: '۳', 4: '۴', 5: '۵', 6: '۶', 7: '۷', 8: '۸', 9: '۹' };
        function traverse(el) {
            if (el.nodeType == 3) {
                var list = el.data.match(/[0-9]/g);
                if (list != null && list.length != 0) {
                    for (var i = 0; i < list.length; i++)
                        el.data = el.data.replace(list[i], persian[list[i]]);
                }
            }
            for (var i = 0; i < el.childNodes.length; i++) {
                traverse(el.childNodes[i]);
            }
        }
        traverse(document.body);
    }
    // dropdown content
    let listDiv = $("#content > div");
    let listA = $("#content ul li a");
    $(listA).hover(function () {
        $("#content > div").addClass("d-none");
        $("#content > div").filter("#" + $(this).attr("data-href")).removeClass("d-none")
    })

    $('.swiper').each(function (i,e){
        new Swiper(e,{
            slidesPerView : 4,
            centeredSlides: false,
            spaceBetween : 20,
            navigation: {
                nextEl: $(e).parent().parent().find('.swiper-button-next')[0],
            },
            breakpoints : {
                1900 : {
                    slidesPerView : 5,
                    spaceBetween : 20,
                },
                1600 : {
                    slidesPerView : 4.5,
                    spaceBetween : 20,
                },
                1450 : {
                    slidesPerView : 4,
                    spaceBetween : 20,
                },
                1300 : {
                    slidesPerView : 3.8,
                    spaceBetween : 20,
                },
                1200 : {
                    slidesPerView : 3.5,
                    spaceBetween : 18,
                },
                992 : {
                    slidesPerView : 3,
                    spaceBetween : 18,
                },
                850 : {
                    slidesPerView : 3.8,
                    spaceBetween : 15,
                },
                768 : {
                    slidesPerView : 3.2,
                    spaceBetween : 15,
                },
                675 : {
                    slidesPerView : 2.8,
                    spaceBetween : 15,
                },
                576 : {
                    slidesPerView : 2.4,
                    spaceBetween : 15,
                },
                430 : {
                    slidesPerView : 1.9,
                    spaceBetween : 15,
                },
                0 : {
                    slidesPerView : 1.6,
                    spaceBetween : 8,
                }
            },
        });
    })
})
