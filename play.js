$(window).on("load", function() {
  var logo = $("#logo");
  var logo2 = $("#logo2");
  var logo3 = $("#logo3");
  TweenLite.to(logo, 2, { left: 300, ease: Bounce.easeOut });
  TweenLite.to(logo, 2, { left: 600, delay: 1 });
  TweenLite.to(logo, 2, {
    left: 0,
    border: "3px solid red",
    delay: 5
  });
  TweenLite.from(logo, 2, { scale: ".5", left: 300, delay: 7 });

  TweenMax.to(logo2, 0.5, {
    left: "+=100px",
    repeat: 5,
    repeatDelay: 2,
    yoyo: true
  });

  printme = function(outstr) {
    console.log(outstr);
  };
  var red = $("#red");
  var yellow = $("#yellow");
  var blue = $("#blue");
  TweenLite.to([red, yellow, blue], 1, {
    scale: 0.2,
    opacity: 0.3,
    onUpdate: console.log("updating"),
    onComplete: printme("Im complete")
  });

  var tween = TweenLite.to(logo3, 1, { left: "632px" });
  $("button").on("click", function() {
    tween.restart();
  });
  TweenMax.staggerTo(
    [$("#red2"), $("#yellow2"), $("#blue2")],
    1,
    { scale: 0.2, opacity: 0.3 },
    0.25
  );

  var t1 = new TimelineLite();
  t1
    .to($("#red3"), 2, { rotation: 180 })
    .to($("#red3"), 2, { skewX: "180deg" })
    .to($("#red3"), 2, { skewY: "180deg" });
});
