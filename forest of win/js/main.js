'use strict';
/* snsのimg表記 */
const imgs = document.querySelectorAll('.sns img')
for(let i=0;i<imgs.length;i++){
    imgs[i].addEventListener('mouseenter',function(){
        imgs[i].src = imgs[i].src.replace('Before','After')
    })
}
for(let i=0;i<imgs.length;i++){
    imgs[i].addEventListener('mouseleave',function(){
        imgs[i].src = imgs[i].src.replace('After','Before')
    })
}


$(function(){

$("#headerIn").vegas({/*  背景画像 by vegas*/
    delay: 7000,
    timer: false,
    shuffle: true,
    firstTransition: 'fade',
    firstTransitionDuration: 5000,
    transition: 'fade',
    transitionDuration: 2000,
    slides: [
    { src: 'images/header03.jpg' },
    { src: 'images/headerBg1.jpg' },
    { src: 'images/header04.jpg' }
]
});
/*ヘッダーセンターのスクロール＞h２*/
/* var position = $("#menu").offset().top;
$(".scroll").click(function(){
    $("html,body").animate({
        scrollTop : position
    }, 1500,"easeInOutQuint");
    return false;
}); */

$(window).scroll(function () {/* MENU画像をフェードイン */
    var scrollTop = $(this).scrollTop(); 
    var scrollBottom = scrollTop + $(this).height(); 
    $(".breads .animation").each(function (i) {
        if (scrollBottom > $(this).offset().top) {
            var target = this;
            setTimeout(function () {
                $(target).addClass("fadein");
            }, 300 * i);
        }
    });
});
$(window).scroll(function () {/* pをフェードイン */
    var scrollTop = $(this).scrollTop(); 
    var scrollBottom = scrollTop + $(this).height(); 
    $(".caption .animation").each(function (i) {
        if (scrollBottom > $(this).offset().top) {
            var target = this;
            setTimeout(function () {
                $(target).addClass("fadein");
            }, 300 * i);
        }
    });
});
/* ーーーーーーーーーーーーーーーーーーーー
ーーーーーーーーーfooterのねこbtn */
function PageTopAnime() {
    var scroll = $(window).scrollTop(); //スクロール値を取得
    if (scroll >= 200){//200pxスクロールしたら
        $('#page-top').removeClass('DownMove');		// DownMoveというクラス名を除去して
        $('#page-top').addClass('UpMove');			// UpMoveというクラス名を追加して出現
    }else{//それ以外は
        if($('#page-top').hasClass('UpMove')){//UpMoveというクラス名が既に付与されていたら
            $('#page-top').removeClass('UpMove');	//  UpMoveというクラス名を除去し
            $('#page-top').addClass('DownMove');	// DownMoveというクラス名を追加して非表示
        }
    }
    var wH = window.innerHeight;
    var footerPos =  $('footer').offset().top;
    if(scroll+wH >= (footerPos+10)) {
        var pos = (scroll+wH) - footerPos+10
        $('#page-top').css('bottom',pos);
    }else{
        if($('#page-top').hasClass('UpMove')){
            $('#page-top').css('bottom','10px');
        }
    }
}
$(window).scroll(function () {
PageTopAnime();
});
$(window).on('load', function () {
PageTopAnime();
});
// #page-topをクリックした際の設定,もし速度変えるならこれ使って
/* $('#page-top').click(function () {
    $('body,html').animate({
        scrollTop: 0
    }, 1500,"easeInOutQuint");
    return false;
});
 */

/* --snsがふわっと表示-- */
var btn = $('.sns');
$(window).on('load scroll', function(){
    if($(this).scrollTop() > 650) {
    btn.addClass('up');
    }else{
    btn.removeClass('up');
    }
});

/* ======================================-
===========================レスポンシブ */
$('.forMobile p').on('click',function(){
	$(this).next().slideToggle();
});


})