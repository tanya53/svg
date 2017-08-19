$(window).on("load", function() {
  const bear = $("#bear");
  const t1 = new TimelineMax();
  const clouds = new TimelineMax({ repeat: -1 });
  const wave = new TimelineMax();
  var motionPath = MorphSVGPlugin.pathDataToBezier("#motionPath", {
    align: "relative"
  }); //{offsetX:-500,offsetY:-600}
  var motionPath2 = MorphSVGPlugin.pathDataToBezier("#motionPath2", {
    align: "relative"
  });
  clouds.to(".clouds", 20, { x: 400 });
  wave.to("#wave", 0.25, { y: -10, repeat: 20, yoyo: true, repeatDelay: 0.25 });
  t1
    .to("#dock", 0.15, { transformOrigin: "100%,50%" })
    .add("bearwalk")
    .to("#dock", 3, { scaleX: 0 }, "bearwalk")
    .to(
      bear,
      3,
      {
        bezier: { values: motionPath, type: "cubic" }
      },
      "bearwalk"
    )
    .to(
      "#arm",
      0.25,
      {
        rotation: 45,
        repeat: 5,
        yoyo: true,
        repeatDelay: 0.15
      },
      "bearwalk"
    )
    .to(
      "#leg1",
      0.25,
      { rotation: 45, repeat: 5, yoyo: true, repeatDelay: 0.15 },
      "bearwalk"
    )
    .to(
      "#leg2",
      0.25,
      { rotation: -45, repeat: 5, yoyo: true, repeatDelay: 0.15 },
      "bearwalk"
    )
    .to("#pupil", 3, { x: -150, y: 38 }, "bearwalk-=1")
    .to("#mouth", 0.5, { rotationY: 45 }, "bearwalk")
    .add("bearsit")
    .to(bear, 1, { y: -360 }, "bearsit")
    .to("#leg1", 0.25, { opacity: 0 }, "bearsit")
    .to("#leg2", 1, { x: 15, rotation: 90 }, "bearsit")
    .add("spoutnow")
    .to("#spoutTop", 0.25, { opacity: 0.9 }, "spoutnow")
    .to("#sp1,#sp2,#sp3", 0.25, { opacity: 0.75 }, "spoutnow")
    .to("#spoutTop", 2, { y: -650, x: -200, scale: 2 }, "spoutnow")
    .from("#sp1", 2, { drawSVG: "0%" }, "spoutnow")
    .from("#sp2", 2, { drawSVG: "0%" }, "spoutnow")
    .from("#sp3", 2, { drawSVG: "0%" }, "spoutnow")
    .to(bear, 2, { x: -700, y: -700 }, "spoutnow")
    .add("spoutdown")
    .to("#pupil", 0.25, { x: -155, y: 55 }, "spoutdown")
    .from("#sp1", 0.5, { drawSVG: "100%" }, "spoutdown")
    .from("#sp2", 0.5, { drawSVG: "100%" }, "spoutdown")
    .from("#sp3", 0.5, { drawSVG: "100%" }, "spoutdown")
    .to("#spoutTop", 0.5, { opacity: 0 }, "spoutdown")
    .to(
      "#drop1,#drop2,#drop3,#drop4,#drop5,#drop6,#drop7,#drop8",
      0.15,
      { opacity: 1 },
      "spoutdown"
    )
    .to(
      "#drop1",
      2,
      { scale: 0.001, x: 0, y: 400, ease: Power2.InOut },
      "spoutdown"
    )
    .to(
      "#drop2",
      2,
      { scale: 0.001, x: 200, y: 600, ease: Power2.InOut },
      "spoutdown"
    )
    .to(
      "#drop3",
      2,
      { scale: 0.001, x: 100, y: 500, ease: Power2.InOut },
      "spoutdown"
    )
    .to(
      "#drop4",
      2,
      { scale: 0.001, x: -100, y: 400, ease: Power2.InOut },
      "spoutdown"
    )
    .to(
      "#drop5",
      2,
      { scale: 0.001, x: -200, y: 500, ease: Power2.InOut },
      "spoutdown"
    )
    .to(
      "#drop6",
      2,
      { scale: 0.001, x: 150, y: 600, ease: Power2.InOut },
      "spoutdown"
    )
    .to(
      "#drop7",
      2,
      { scale: 0.001, x: 50, y: 400, ease: Power2.InOut },
      "spoutdown"
    )
    .to(
      "#drop8",
      2,
      { scale: 0.001, x: -50, y: 600, ease: Power2.InOut },
      "spoutdown"
    )
    .to(
      "#tail",
      0.25,
      { skewY: 15, repeat: 3, yoyo: true, repeatDelay: 0.15 },
      "spoutdown"
    )
    .to("#whale", 2, { x: -500 }, "spoutdown")
    .to(
      bear,
      3,
      {
        bezier: { values: motionPath2, type: "cubic" }
      },
      "spoutdown"
    )
    .to(
      bear,
      0.25,
      {
        transformOrigin: "50% 50%"
      },
      "spoutdown"
    )
    .to(
      bear,
      2,
      {
        rotation: 1530
      },
      "spoutdown"
    )
    .to("#arm", 2, { rotation: 1440 }, "spoutdown")
    .add("flop")
    .to("#leg1,#leg2", 0.05, { rotation: 0, ease: Power0.easeIn }, "flop-=2")
    .to(bear, 2, {
      y: -225,
      ease: RoughEase.ease.config(
        {
          template: Power4.easeNone,
          strength: 25,
          points: 8,
          taper: "out",
          randomize: false,
          clamp: false
        },
        "flop-=.25"
      )
    });
});
