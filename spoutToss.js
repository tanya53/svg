$(window).on("load", function() {
  const bear = $("#bear");
  const t1 = new TimelineMax();
  const clouds = new TimelineMax({ repeat: -1 });
  const wave = new TimelineMax();
  const birds = new TimelineMax();
  const waves = new TimelineMax();

  var motionPath = MorphSVGPlugin.pathDataToBezier("#motionPath", {
    align: "relative"
  });
  var motionPath2 = MorphSVGPlugin.pathDataToBezier("#motionPath2", {
    align: "relative"
  });
  clouds.to(".clouds", 50, { x: 900 });
  birds
  .add("fly")
  .to(".bird",5,{x:800,y:-800,scale:.2},"fly")
  .to("#wing2",0.1,{transformOrigin:"100% 0%"},"fly")
  .to(
    "#wing1",
    0.25,
    {
      rotation: -30,
      x:-15,
      repeat: 10,
      yoyo: true,
      repeatDelay: 0.15
    },"fly")
    .to(
      "#wing2",
      0.25,
      {
        rotation:30,
        x:15,
        repeat: 10,
        yoyo: true,
        repeatDelay: 0.15
      },"fly");
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
    .to("#mouth", 3, { morphSVG: "#whaleFrown" }, "bearwalk")
    .add("bearsit")
    .to(bear, 1, { y: -360 }, "bearsit")
    .to("#mouth", 0.5, { morphSVG: "#whaleSmile" }, "bearsit")
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
    .to("#whale", 3, { x: -900 }, "spoutdown")
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
    .add("wavesplash")
    .to("#splash1,#splash2,#splash3,#splash4,#splash5,#splash6",.1,{opacity:1},"wavesplash")
    .to("#splash1,#splash2,#splash3,#splash4",2,{scale:.001,x:0,y:-150,ease:Power2.InOut},"wavesplash")
    .to("#splash5,#splash6",2,{scale:.001,x:0,y:-140,ease:Power2.InOut},"wavesplash")
    .to("#wave4",.25,{opacity:1},"wavesplash")
    .to("#wave3",.25,{opacity:1},"wavesplash+=.25")
    .to("#wave2",.25,{opacity:1},"wavesplash+=.5")
    .to("#wave1",.25,{opacity:1},"wavesplash+=.75")
    .to("#wave4",.25,{opacity:0},"wavesplash+=1.0")
    .to("#wave3",.25,{opacity:0},"wavesplash+=1.25")
    .to("#wave2",.25,{opacity:0},"wavesplash+=1.5")
    .to("#wave1",.25,{opacity:0},"wavesplash+=1.75")
    .add("movefish")
    .to("#fishtail",.1,{transformOrigin:"100% 100%"},"movefish")
    .to("#fish",3,{x:-100,y:-295},"movefish")
    .to(
      "#fishtail",
      0.25,
      { skewY: 15, repeat: 8, yoyo: true, repeatDelay: 0.15 },
      "movefish"
    )
    .to("#fishmouth",.15,{opacity:1,repeat:4,yoyo:true,repeatDelay:0.15})
    .to(bear,.25,{rotation:"-=90"})
    .add("bearswim")
    .to(bear,.5,{rotation:"+=90"},"bearswim")
    .to(
      "#arm",
      .3,
      {
        rotation: "+=360",
        repeat: 14,
      },
      "bearswim+=.25"
    )
    .to(
      "#leg2",
      0.15,
      { rotation: 45, repeat: 20, yoyo: true, repeatDelay: 0.15 },
      "bearswim+=.25"
    )
    .to(
      "#fishtail",
      0.25,
      {skewY: 20, repeat: 20, yoyo: true, repeatDelay: 0.15 },
      "bearswim+=.25"
    )
    .to("#fish",3,{x:-320},"bearswim+=.25")
    .to("#shore,.island",8,{x:-650},"bearswim+=.25")
    .to("#kickWave", 0.15, { opacity: 1 }, "bearswim+=.25")
    .from("#kickWave",8,{drawSVG: "0"},"bearswim")
    .add("bearland")
    .to("#kickWave",1,{opacity:0,ease: SlowMo.ease.config(0.3, 0.4, false)})
    .to(bear,.25,{y:-240,rotation:"-=90"},"bearland")
    .to("#leg2",0.25,{rotation:90},"bearland");
});
