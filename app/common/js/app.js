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
  $('#panel > dd').hide();
  $('#panel > dt').click(function(e){
    $('+dd', this).slideToggle(200);
  })
});
