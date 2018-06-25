$(document).ready(function() {

  $('body').removeClass('no-js');

  $('a.blog-button').click(function() {
    if ($('.panel-cover').hasClass('panel-cover--collapsed')) return;
    currentWidth = $('.panel-cover').width();
    if (currentWidth < 960) {
      $('.panel-cover').addClass('panel-cover--collapsed');
      $('.content-wrapper').addClass('animated slideInRight');
    } else {
      $('.panel-cover').css('max-width',currentWidth);
      $('.panel-cover').animate({'max-width': '465px', 'width': '26%'}, 400, swing = 'swing', function() {} );
    }
  });

  if (window.location.hash && window.location.hash == "#blog") {
    $('.panel-cover').addClass('panel-cover--collapsed');
  }

  if (window.location.pathname.substring(0, 5) == "/tag/") {
    $('.panel-cover').addClass('panel-cover--collapsed');
  }
  
  if (window.location.pathname.substring(0, 6) == "/page/") {
    $('.panel-cover').addClass('panel-cover--collapsed');
  }

  var $navigationWrapper = $('.navigation-wrapper');
  var _animationEnd = 'webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend';
  
  $('.btn-mobile-menu__icon').click(function() {
    if ($navigationWrapper.css('display') == "block") {
      $navigationWrapper.one(_animationEnd, function() {
        $navigationWrapper.toggleClass('visible animated bounceOutUp');
      });
      $navigationWrapper.toggleClass('animated bounceInDown animated bounceOutUp');

    } else {
      $navigationWrapper.toggleClass('visible animated bounceInDown');
    }
    $('.btn-mobile-menu__icon').toggleClass('fa fa-list fa fa-angle-up animated fadeIn');
  });

  $('.navigation-wrapper .blog-button').click(function() {
    if ($navigationWrapper.css('display') == "block") {
      $navigationWrapper.one(_animationEnd, function() {
        $navigationWrapper.toggleClass('visible animated bounceOutUp');
      });

      $navigationWrapper.toggleClass('animated bounceInDown animated bounceOutUp');
    }
    $('.btn-mobile-menu__icon').toggleClass('fa fa-list fa fa-angle-up animated fadeIn');
  });

  $("article.post-container--single a[href^=http]").attr("target", "_blank");
  $("article.post-container--single a[href^=mailto]").attr("target", "_blank");
  
  
  
  $(function(){
		
		$('.img-click').click(function(){
            document.getElementById("img-content").src=$(this).attr("data");
			$('.img-background').fadeIn(200);
			$('.img-border').fadeIn(400);
            
		});
		$('.img-background').click(function(){
			$('.img-background').fadeOut(200);
			$('.img-border').fadeOut(200);
		});
        
	});
});