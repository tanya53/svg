$(window).on('load',function() {
  console.log("we made it here");
  $("#layer1").on("animationend",function(e){
    console.log("we found the end");
    if (e.originalEvent.animationName === "third-animation"){
    console.log("the event ended");
    $('#critter').addClass("ball-fall");}
  });
});
