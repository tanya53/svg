// Attach a animationend event listener to #tuna
// $(animatedThing).on("animationlistener", function());
  // Don't forget your prefix!

  // Give #tuna a .sit class
$(window).on('load',function() {
  $("#tuna").on("animationend",function(e){
    if (e.originalEvent.animationName === "walk-cycle"){
    $(this).addClass("sit");}
  });
  /*$("#tuna").on("animationend",function(){
    $(this).addClass("sit");
  }); this way is better */
});
