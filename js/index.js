(function() {
  var $downarrow = $('.js-downarrow');
  var $slide = $('.js-slide');
  var $bg = $('.js-bg');


  // trigger parallax function on window scroll
  $(window).scroll(function(e){
    parallax();
  });

  // declare parallax function
  function parallax(){
    var scrolled = $(window).scrollTop();
    $bg.css('margin-top',-(scrolled*0.5));
  }

  // bounce arrow
  $(function(){
    $('#bounce').click(function () {
      $(this).effect("bounce",{times:2},300);
    });
  });


  //set bgs to window height
  $(function(){
  	$(window).load(function(){ // On load
  		$slide.css({'height':(($(window).height()))+'px'});
  	});
  	$(window).resize(function(){ // On resize
  		$slide.css({'height':(($(window).height()))+'px'});
  	});
  });
})();