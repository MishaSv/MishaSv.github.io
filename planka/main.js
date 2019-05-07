// $(document).ready(function() {
//     $('#fullpage').fullpage({
//         navigation: true,
//         navigationPosition: 'right',
//         controlArrows: true,
//         responsiveWidth: 450
//     });
// });

function orient() {
    if( /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent) ) {
         $('#fullpage').fullpage({
            navigation: true,
            navigationPosition: 'right',
            controlArrows: true,
            responsiveWidth: 740
        });
        return false;
} else{
         $('#fullpage').fullpage({
            navigation: true,
            navigationPosition: 'right',
            controlArrows: true,
            responsiveWidth: 450
        });
          return false;
}

}


  $(function () {
            $(".filters-list li.active a").on('click', function () {
                event.preventDefault();
                $(".filters-list").toggleClass('active');

            });
        });


// $(document).ready(function() {
//     $(".filters-list li.active a").click(function() {
//         // console.log('hi');

//          $(".filters-list").toggleClass('active');

//          // return false;

//     });
// });

$(document).ready(function(){
  $("ul.select li").click(function() {
    $(this).addClass('active').siblings().removeClass('active');
    if($(this).parent().hasClass('house-type'))
      $('.js-form-calc input[name="ContactFormUs[type]"]').val($(this).find('.text-block p').html());
    else if($(this).parent().hasClass('js-author'))
      $('.js-form-calc input[name="ContactFormUs[author]"]').val($(this).html());
    });
});
$(document).ready(function(){
    $('.burger, .overlay').click(function(){
        $('.burger').toggleClass('clicked');
        $('.overlay').toggleClass('show');
        $('.mobile-header').toggleClass('show');
        $('body').toggleClass('menu-show');
    });
});
$(document).ready(function(){

var totalItems = $('.carousel .carousel-item').length;
var currentIndex = $('.carousel .carousel-item.active').index() + 1;
$('.num-slide').html(''+ "<b>"+currentIndex+"</b>"+'<span class="yellow">/</span>'+totalItems+'');

$('#carousel').carousel({
    interval: false
});

$('.carousel').on('slid.bs.carousel', function (ev) {
	 currentIndex = $('.carousel .carousel-item.active').index() + 1;
	 console.log(currentIndex);
    $('.num-slide').html(''+"<b>"+currentIndex+"</b>"+'<span class="yellow">/</span>'+totalItems+'');
});
    $('.carousel').on('slide.bs.carousel', function (ev) {
        var lazy;
        lazy = $(ev.relatedTarget).find("img[data-src]");
        lazy.attr("src", lazy.data('src'));
        lazy.removeAttr("data-src");
    })
});
$(document).ready(function(){


$('#team-carousel').carousel({
});
});

$(document).ready(function(){
	$('.js-project-container').on('mouseover',".projects-list li a",function() {
	    if(!($(this).hasClass('page-link')||$(this).hasClass('btn-animation')))
        {
            var getImage = $(this).attr("data-img");
            if($(this).is(":hover")){
                $(".project-image").addClass("active");
                $(".project-image").css("background", "url(" + getImage + ")" + " no-repeat");

            } else{
                $(".project-image").removeClass("active");
//	  	$(".project-image").css("background", "transparent");
                // $(".projects-section").css("background", "inherit");
            }
        }
	});
});

$(function() {

    $("#intro .sipka").click(function() {

        var height = $(window).height();

        $('html,body').animate({
            scrollTop: height + "px"
        }, 'slow');

        return false;
    });

});


$(function() {
    $('.js-diz-content').click(function (e) {
        console.log($('#content-menu').length);
        e.preventDefault();
        $('#content-menu').show();
        var position = $('.js-diz-content').position();
        console.log("left: " + position.left + ", top: " + position.top );
        $('#content-menu').css('left','5rem').css('top',position.top+'px');

    })
    $('.js-form-calc a').click(function(e) {
        e.preventDefault();
        $('.js-form-calc').submit();
    });
    $('.js-form-calc, .js-form-recall').on('beforeSubmit', function(e) {
        var data=$(this).serialize();
        console.log(data);
        var that=this;
        $.ajax({
            url: "/site/saveform",
            type: "POST",
            dataType : "json",
            cache: false,
            //contentType: false,
            //processData: false,
            data: data, //указываем что отправляем
            success: function(data){
                if(data.success == 'Y'){
                    $('.modal').modal('hide');
                    $('#modal_thx').modal();
                    $(that).closest('form').find("input[type=text], textarea").val("");
                }else{
                }
            }
        });
    }).on('submit',function(e){
        e.preventDefault();
    });
    $('.js-form-price').on('beforeSubmit', function(e) {
        var data=$(this).serialize();
        console.log(data);
        var that=this;
        $.ajax({
            url: "/site/send-price",
            type: "POST",
            dataType : "json",
            cache: false,
            //contentType: false,
            //processData: false,
            data: data, //указываем что отправляем
            success: function(data){
                if(data.success == 'Y'){
                    $('.modal').modal('hide');
                    $('#modal_thx_price').modal();
                    $(that).closest('form').find("input[type=text], textarea").val("");
                }else{
                }
            }
        });
    }).on('submit',function(e){
        e.preventDefault();
    });



    // var ts;
    // $('#intro').bind('touchstart', function (e){
    //    ts = e.originalEvent.touches[0].clientY;
    // });

    // $('#intro').bind('touchmove', function (e){
    //    var te = e.originalEvent.changedTouches[0].clientY;
    //    if(ts > te+25){
    //       // slide_down();
    //       alert('slide_down();');
    //    }else if(ts < te-25){
    //       // slide_up();
    //       alert('slide_up();');
    //    }
    // });


// var ts;
//     $('#intro').on('mousedown', function(e) {
//         var startingMarginLeft = $("#introover").css("marginLeft").replace(/[^-\d\.]/g, '');
//         var startingIntromoverRight = $("#intro-mover").css("right").replace(/[^-\d\.]/g, '');
//         var startingX = e.pageX;
//         var width = $(window).width();

//          ts = e.originalEvent.touches[0].clientY;

//         $(document).on('mousemove',function(e) {
//             movedIntro(e, startingMarginLeft, startingX, startingIntromoverRight, width);
//         });



//         // $(document).on('touchmove',function(e) {
//         //     var te = e.originalEvent.changedTouches[0].clientY;

//         //    if(ts > te+35){
//         //         console.log('slide_down();');
//         //         // $('#intro').unbind();
//         //           $(document).off('touchmove');
//         //    }else if(ts < te-35){
//         //         console.log('slide_up();');
//         //         // $('#intro').unbind();
//         //         $(document).off('touchmove');
//         //    } else{
//         //     // console.log("centered")
//         //     movedIntro(e, startingMarginLeft, startingX, startingIntromoverRight, width);
//         //    }
//         // });
        



//          $(document).one('mouseup', function() {
//              $(document).unbind();
//          });

//          return false;
//     });


    $('#intro').mousedown(function(e) {

        var startingMarginLeft = $("#introover").css("marginLeft").replace(/[^-\d\.]/g, '');
        var startingIntromoverRight = $("#intro-mover").css("right").replace(/[^-\d\.]/g, '');
        var startingX = e.pageX;
        var width = $(window).width();

        $(document).mousemove(function(e) {
            movedIntro(e, startingMarginLeft, startingX, startingIntromoverRight, width);
        });

         $(document).one('mouseup', function() {
             $(document).unbind();
         });

         return false;
    });



    function movedIntro(e, startingMarginLeft, startingX, startingIntromoverRight, width) {
        var newMarginLeft = parseInt(startingMarginLeft) + parseInt(e.pageX) - parseInt(startingX);

        var newRight = parseInt(startingIntromoverRight) + (( parseInt(e.pageX) - parseInt(startingX) ) * -1);

        if (newMarginLeft <= 0 && newMarginLeft >= -(width * 0.95)) {
            $("#introover").css("marginLeft", newMarginLeft);
            $(".introover-bg").css("left", newMarginLeft * -1);
            $("#intro-mover").css("right", newRight);
        }
     }

     var currAngle = 0.2;
     function calculateBorderLine() {

         var width = $("#introover").css("width").replace(/[^-\d\.]/g, '');

         var b = width * 0.2;
         var a = $(window).height();

         var tana = a / b;

         var alfa = toDegrees(Math.atan(tana));
         var beta = parseFloat(90 - alfa).toFixed(2) * -1;

        $("#intro-mover").css({
            right: width * 0.35,
            transform: "skewX(" + beta + "deg)"
         });
    }

    function toDegrees (angle) {
        return angle * (180 / Math.PI);
    }

        initIntroOver();

    function initIntroOver() {

        calculateBorderLine();
        var newMarginLeft = -($(window).width() * 0.15);

        var img = $('<img>').attr("src", $("#introover").data("src"));
        img.css("display", "none");
        $("body").append(img);

        img.on("load", function() {

            setTimeout(function() {

               $("#introover").animate({
                    marginLeft: newMarginLeft
                }, 2000);
                $(".introover-bg").animate({
                    left: newMarginLeft * -1
                }, 2000, function() {
                    $("#intro-mover").fadeIn();
                    var frame = "<iframe width='100%' height='100%' src='https://roundme.com/embed/xuAW0fFgDCwYmfnbk2MZ' frameborder='0' autorotation webkitallowfullscreen mozallowfullscreen allowfullscreen></iframe>";

                    $(".framegoesinside").append(frame);

                });

            }, 1250);

        });

    }

    function initIntroOverForMobile() {
        var frame = "<iframe width='100%' height='100%' src='https://roundme.com/embed/xuAW0fFgDCwYmfnbk2MZ' frameborder='0' webkitallowfullscreen mozallowfullscreen allowfullscreen></iframe>";
        $(".framegoesinside").append(frame);
    }

    $(window).on("resize", function() {

        calculateBorderLine();
        $("#intro-mover").hide();
        var newMarginLeft = -($(window).width() * 0.15);

        $("#introover").stop().animate({
            marginLeft: newMarginLeft
        }, 900);
        $(".introover-bg").stop().animate({
            left: newMarginLeft * -1
        }, 900, function() {
            $("#intro-mover").fadeIn();
        });
    });

});





(function ($) {

    var touchStartX = null;

    $('.carousel').each(function () {
        var $carousel = $(this);
        $(this).on('touchstart', function (event) {
            var e = event.originalEvent;
            if (e.touches.length == 1) {
                var touch = e.touches[0];
                touchStartX = touch.pageX;
            }
        }).on('touchmove', function (event) {
            var e = event.originalEvent;
            if (touchStartX != null) {
                var touchCurrentX = e.changedTouches[0].pageX;
                if ((touchCurrentX - touchStartX) > 60) {
                    touchStartX = null;
                    $carousel.carousel('prev');
                } else if ((touchStartX - touchCurrentX) > 60) {
                    touchStartX = null;
                    $carousel.carousel('next');
                }
            }
        }).on('touchend', function () {
            touchStartX = null;
        });
    });
    var tag10=['p','h1','h2','h3','h4','h5','ul','ol','iframe'];
    $('.blog-content>div>.row>*').each(function () {
        //console.log(this);
        var element=this;
        $.each(tag10,function (k,v) {
            if($(element).is(v))
            {
                //console.log(element);
                //console.log($(element).find('img').length);
                if($(element).is('iframe'))
                {
                    $(element).wrap("<div class='col-lg-12'><div class='videoWrapper'></div></div>" );
                }
                else if($(element).hasClass('small')||$(element).find('img').length>0)
                {
                    $(element).wrap("<div class='col-lg-12'></div>" );
                }
                else if($(element).find('img').length==0)
                    $(element).wrap("<div class='col-lg-10'></div>" );
            }
        })

    })
    $('.blog-content>div>.row>blockquote').each(function () {
        $(this).contents().unwrap().wrap('<div class="quote"><div class="col-lg-12 "><div class="row justify-content-center"><div class="col-lg-10"></div></div></div></div>');
    });



})(jQuery);


            
         

// ===== Scroll to Top ====
$(window).scroll(function() {
    if ($(this).scrollTop() >= 900) {    // If page is scrolled more than 50px
        $('#top').fadeIn("fast");       // Fade in the arrow
    } else {
        $('#top').fadeOut("fast");      // Else fade out the arrow
    }
});
$('#top').click(function() {            // When arrow is clicked
    $('body,html').animate({
        scrollTop : 0                   // Scroll to top of body
    }, 500);
});
Share = {
    vkontakte: function(purl, ptitle, pimg, text) {
        url  = 'http://vkontakte.ru/share.php?';
        url += 'url='          + encodeURIComponent(purl);
        url += '&title='       + encodeURIComponent(ptitle);
        url += '&description=' + encodeURIComponent(text);
        url += '&image='       + encodeURIComponent(pimg);
        url += '&noparse=true';
        Share.popup(url);
    },
    odnoklassniki: function(purl, text) {
        url  = 'http://www.odnoklassniki.ru/dk?st.cmd=addShare&st.s=1';
        url += '&st.comments=' + encodeURIComponent(text);
        url += '&st._surl='    + encodeURIComponent(purl);
        Share.popup(url);
    },
    facebook: function(purl, ptitle, pimg, text) {
        url  = 'http://www.facebook.com/sharer.php?s=100';
        url += '&p[title]='     + encodeURIComponent(ptitle);
        url += '&p[summary]='   + encodeURIComponent(text);
        url += '&p[url]='       + encodeURIComponent(purl);
        url += '&p[images][0]=' + encodeURIComponent(pimg);
        Share.popup(url);
    },
    twitter: function(purl, ptitle) {
        url  = 'http://twitter.com/share?';
        url += 'text='      + encodeURIComponent(ptitle);
        url += '&url='      + encodeURIComponent(purl);
        url += '&counturl=' + encodeURIComponent(purl);
        Share.popup(url);
    },
    mailru: function(purl, ptitle, pimg, text) {
        url  = 'http://connect.mail.ru/share?';
        url += 'url='          + encodeURIComponent(purl);
        url += '&title='       + encodeURIComponent(ptitle);
        url += '&description=' + encodeURIComponent(text);
        url += '&imageurl='    + encodeURIComponent(pimg);
        Share.popup(url)
    },
    popup: function(url) {
        window.open(url,'','toolbar=0,status=0,width=626,height=436');
    }
};
$(document).ready(function($) {
    new WOW().init();

      var Body = $('body');
      Body.addClass('preloader-site');
});
$(window).on( 'load' ,function() {
       $('.wrap-loader').fadeOut();
      $('body').removeClass('preloader-site');
});


/* Call orientation function on page load */
$(function(){
    orient();
});

/* Call orientation function on orientation change */
$(window).bind( 'orientationchange', function(e){
    orient();
});




var swiper = new Swiper('.swiper-team', {
                loop: true,
                pagination: {
                    el: '.swiper-pagination',
                    type: 'fraction',
                },
                navigation: {
                    nextEl: '.swiper-button-next',
                    prevEl: '.swiper-button-prev',
                },
            });



var swiper = new Swiper('.swiper-img', {
                loop: true,
                autoHeight: true,
                pagination: {
                    el: '.swiper-pagination',
                    type: 'fraction',
                },
                navigation: {
                    nextEl: '.swiper-button-next',
                    prevEl: '.swiper-button-prev',
                },
            });

            //  lightbox.option({
            //   'resizeDuration': 200,
            //   'wrapAround': true,
            //   'showImageNumberLabel': false,
            //   // 'disableScrolling': true,
            // })
             var gallery = document.getElementById('swiper-lightbox');
             var viewer = new Viewer(gallery, {
              movable: false,
              rotatable: false,
              scalable: false,
              title: 0,
              zoomable: false,
              toolbar: {
                prev: true,
                next: true,
              }
            });