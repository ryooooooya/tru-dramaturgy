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
$(function(){
  $('a[href^="#"]').click(function(){
    var speed = 300;
    var href= $(this).attr("href");
    var target = $(href == "#" || href == "" ? 'html' : href);
    var position = target.offset().top;
    $("html, body").animate({scrollTop:position-68}, speed, "swing");
    return false;
  });
});


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
  var article = $(".article").length - 1;
  console.log(article);
  $('.readmore-button').click(function() {
    $(".article").slice(number, number+3).toggleClass('hide');
    number = number+3;
    if(article < number){
      $('.readmore-button').css('display','none');
    }
  });
});
