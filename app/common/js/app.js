// /* fade */
// $(function(){
//   $('.fade1').delay(1000).queue(function(next) {
//     $(this).removeClass('fade1');
//     next();
//   });
//   $('.fade2').delay(1300).queue(function(next) {
//     $(this).removeClass('fade2');
//     next();
//   });
// });

/* spmenu */
$(function() {
  $('.m-navbtn-sm').click(function() {
    $(this).toggleClass('active');

    if ($(this).hasClass('active')) {
      $('.m-navcont-sm').addClass('active');
    }
    else {
      $('.m-navcont-sm').removeClass('active');
    }
  });
});


/* scroll */
// $(function(){
//   $('a[href^="#"]').click(function(){
//     var speed = 300;
//     var href= $(this).attr("href");
//     var target = $(href == "#" || href == "" ? 'html' : href);
//     var position = target.offset().top;
//     $("html, body").animate({scrollTop:position-68}, speed, "swing");
//     return false;
//   });
// });


/* accordion */
$(function() {
  $('.accordion-content').hide();
  $('.accordion-close').hide();
  $('.accordion-button').on('click', function () {
    $(this).toggleClass('open');
    $(this).next().slideToggle(200);
    $(this).next().next().slideToggle(200);
  });
  $('.accordion-close').on('click', function () {
    $(this).slideToggle(200);
    $(this).prev().slideToggle(200);
    $(this).prev().prev().toggleClass('open');
  });
});

// read more
$(function(){
  var number = 0;
  var article = $(".js-article").length - 1;
  $('.readmore-button').click(function() {
    $(".js-article").slice(number, number+3).toggleClass('hide');
    number = number+3;
    if(article < number){
      $('.readmore-button').css('display','none');
    }
  });
});

// bg
//付与したいクラスの配列
$(function(){
  var arr = ["bg01", "bg02", "bg03", "bg04"];
  var a = arr.length;
  //シャッフルアルゴリズム
  while (a) {
    var j = Math.floor(Math.random() * a);
    var t = arr[--a];
    arr[a] = arr[j];
    arr[j] = t;
  }
  $("#article").addClass(arr[0]);
});

// アンカー
$(window).on('load',function(){
	$(function() {
    let url = location.href;
    if(url.indexOf("?id=") != -1){
      let id = url.split("?id=");
      let $target = $('#' + id[id.length - 1]);
      if($target.length){
        let position = $target.offset().top;
        $("html, body").animate({scrollTop:position}, 1);
      }
    }
	});
})
