$(window).on('load',function(){
  setTimeout(function(){
      // use .addClass() and .removeClass() to swap the loading class for loaded on #stage.
    $('#stage').removeClass('loading').addClass('loaded');
  }, 5000);
});
