(function ($) {


    $(document).ready(function () {



 /*------------------------Smooth Scrolling--------------------------------------- */
    $('a[href*=#]:not([href=#])').click(function() {
      if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'') && location.hostname == this.hostname) {
        var target = $(this.hash);
        target = target.length ? target : $('[name=' + this.hash.slice(1) +']');
        if (target.length) {
          $('html,body').animate({
            scrollTop: target.offset().top - 80
          }, 1000);
          return false;
        }
      }
    });


 /*------------------------Scroll Listener--------------------------------------- */
var sections = [];               
var $navbar = $('.nav-list li'); 
var $navbara = $('a', $navbar);  

$navbara.each(function(){
    
    sections.push($($(this).attr('href')));
});


$(window).scroll(function(e){ 
    var scrollTop = $(this).scrollTop() + ($(window).height() / 2); 
    for(var i in sections){
      var section = sections[i];
      if (scrollTop > section.offset().top) {
        scrolled_id = section.attr('id');
      }
    }
    $navbara.removeClass('active');
    $('a[href="#' + scrolled_id + '"]').addClass('active');
});



/*----------------------------Navbar Disapear on scroll Down----------------------------------*/
var nav = $('nav'),
    navTopPosition = nav.offset().top,
    lastscroll = nav.offset().top;
 
$(window).on('scroll', function(){
    if($(window).scrollTop() >navTopPosition){
    nav.addClass('scrolling');
    }
    else{
        nav.removeClass('scrolling');
    }
    if($(window).scrollTop() > navTopPosition && $(window).scrollTop()<lastscroll ) {
        nav.addClass('fixed');
          lastscroll =$(window).scrollTop();
    } else {
       nav.removeClass('fixed');
       lastscroll =$(window).scrollTop();
    }
});

/*----------------------------Wow reveal Animation----------------------------------*/






  

  }); /*Document Ready*/

})(jQuery);