$(window).on("load", function() {
  var egg = $("#egg"),
    dracoDot = $("#dracoDot"),
    t1 = new TimelineMax();
  t3 = new TimelineMax();
  var path = MorphSVGPlugin.pathDataToBezier("#motionPath");
  t3 //dracodot moving inside egg
    .to(dracoDot, 2, {
      x: 10,
      y: 10,
      scale: 0.5,
      transformOrigin: "0 0",
      ease: Power2.easeInOut
    })
    .to(dracoDot, 2, { x: 0, y: 0, scale: 1.3, ease: Power2.easeInOut })
    .to(dracoDot, 2, { x: -8, y: -8, scale: 0.5, ease: Power2.easeInOut })
    //egg disappears so draco appears
    .to(dracoDot, 3, { opacity: 0, ease: Power2.easeInOut });

  t1
    //egg pulse out in out
    .add("stars")
    .to(
      egg,
      2,
      {
        scale: 5,
        transformOrigin: "50% 50%",
        ease: Back.easeOut
      },
      "stars"
    )
    .to(egg, 2, { scale: 0.5, rotation: 720, ease: Power2.easeInOut })
    .to(egg, 2, { scale: 7, ease: Elastic.easeOut })
    //egg disappears so draco appears
    .to(dracoDot, 1, { opacity: 0, ease: Power2.easeInOut })
    //parts of shell morph at end morph triangle => circle => star
    .to(
      [
        "#poly1ta",
        "#poly1tb",
        "#poly1tc",
        "#poly1td",
        "#poly2ta",
        "#poly2tb",
        "#poly2tc",
        "#poly2td",
        "#poly3ta",
        "#poly3tb",
        "#poly3tc",
        "#poly3td",
        "#poly4ta",
        "#poly4tb",
        "#poly4tc",
        "#poly4td"
      ],
      0.5,
      { opacity: 1, ease: Bounce.easeIn }
    )
    .add("transform1")
    .to("#poly1ta", 0.5, { morphSVG: "#polyc1a" }, "transform1") //to circles
    .to("#poly1tb", 0.5, { morphSVG: "#polyc1b" }, "transform1")
    .to("#poly1tc", 0.5, { morphSVG: "#polyc1c" }, "transform1")
    .to("#poly1td", 0.5, { morphSVG: "#polyc1d" }, "transform1")
    .to("#poly2ta", 0.5, { morphSVG: "#polyc2a" }, "transform1")
    .to("#poly2tb", 0.5, { morphSVG: "#polyc2b" }, "transform1")
    .to("#poly2tc", 0.5, { morphSVG: "#polyc2c" }, "transform1")
    .to("#poly2td", 0.5, { morphSVG: "#polyc2d" }, "transform1")
    .to("#poly3ta", 0.5, { morphSVG: "#polyc3a" }, "transform1")
    .to("#poly3tb", 0.5, { morphSVG: "#polyc3b" }, "transform1")
    .to("#poly3tc", 0.5, { morphSVG: "#polyc3c" }, "transform1")
    .to("#poly3td", 0.5, { morphSVG: "#polyc3d" }, "transform1")
    .to("#poly4ta", 0.5, { morphSVG: "#polyc4a" }, "transform1")
    .to("#poly4tb", 0.5, { morphSVG: "#polyc4b" }, "transform1")
    .to("#poly4tc", 0.5, { morphSVG: "#polyc4c" }, "transform1")
    .to("#poly4td", 0.5, { morphSVG: "#polyc4d" }, "transform1")
    .add("trans2")
    .to("#poly1ta", 0.5, { morphSVG: "#polyf1a" }, "trans2") //to flowers
    .to("#poly1tb", 0.5, { morphSVG: "#polyf1b" }, "trans2")
    .to("#poly1tc", 0.5, { morphSVG: "#polyf1c" }, "trans2")
    .to("#poly1td", 0.5, { morphSVG: "#polyf1d" }, "trans2")
    .to("#poly2ta", 0.5, { morphSVG: "#polyf2a" }, "trans2")
    .to("#poly2tb", 0.5, { morphSVG: "#polyf2b" }, "trans2")
    .to("#poly2tc", 0.5, { morphSVG: "#polyf2c" }, "trans2")
    .to("#poly2td", 0.5, { morphSVG: "#polyf2d" }, "trans2")
    .to("#poly3ta", 0.5, { morphSVG: "#polyf3a" }, "trans2")
    .to("#poly3tb", 0.5, { morphSVG: "#polyf3b" }, "trans2")
    .to("#poly3tc", 0.5, { morphSVG: "#polyf3c" }, "trans2")
    .to("#poly3td", 0.5, { morphSVG: "#polyf3d" }, "trans2")
    .to("#poly4ta", 0.5, { morphSVG: "#polyf4a" }, "trans2")
    .to("#poly4tb", 0.5, { morphSVG: "#polyf4b" }, "trans2")
    .to("#poly4tc", 0.5, { morphSVG: "#polyf4c" }, "trans2")
    .to("#poly4td", 0.5, { morphSVG: "#polyf4d" }, "trans2")
    //shell turns opacity back and shells disappear
    .to(
      [
        "#poly1ta",
        "#poly1tb",
        "#poly1tc",
        "#poly1td",
        "#poly2ta",
        "#poly2tb",
        "#poly2tc",
        "#poly2td",
        "#poly3ta",
        "#poly3tb",
        "#poly3tc",
        "#poly3td",
        "#poly4ta",
        "#poly4tb",
        "#poly4tc",
        "#poly4td"
      ],
      0.5,
      { opacity: 0.5, ease: Power2.InOut }
    )
    .add("tran3")
    .to(
      "#poly1ta",
      2,
      { rotation: 720, scale: 0.001, x: 50, y: 50, ease: Power2.InOut },
      "tran3"
    )
    .to(
      "#poly1tb",
      2,
      { rotation: 720, scale: 0.001, x: 0, y: 0, ease: Power2.InOut },
      "tran3"
    )
    .to(
      "#poly1tc",
      2,
      { rotation: 720, scale: 0.001, x: 50, y: 10, ease: Power2.InOut },
      "tran3"
    )
    .to(
      "#poly1td",
      2,
      { rotation: 720, scale: 0.001, x: 10, y: 60, ease: Power2.InOut },
      "tran3"
    )
    .to(
      "#poly2ta",
      2,
      { rotation: 720, scale: 0.001, x: 50, y: 50, ease: Power2.InOut },
      "tran3"
    )
    .to(
      "#poly2tb",
      2,
      { rotation: 720, scale: 0.001, x: 0, y: 0, ease: Power2.InOut },
      "tran3"
    )
    .to(
      "#poly2tc",
      2,
      { rotation: 720, scale: 0.001, x: 50, y: 10, ease: Power2.InOut },
      "tran3"
    )
    .to(
      "#poly2td",
      2,
      { rotation: 720, scale: 0.001, x: 10, y: 60, ease: Power2.InOut },
      "tran3"
    )
    .to(
      "#poly3ta",
      2,
      { rotation: 720, scale: 0.001, x: 50, y: 50, ease: Power2.InOut },
      "tran3"
    )
    .to(
      "#poly3tb",
      2,
      { rotation: 720, scale: 0.001, x: 0, y: 0, ease: Power2.InOut },
      "tran3"
    )
    .to(
      "#poly3tc",
      2,
      { rotation: 720, scale: 0.001, x: 50, y: 10, ease: Power2.InOut },
      "tran3"
    )
    .to(
      "#poly3td",
      2,
      { rotation: 720, scale: 0.001, x: 10, y: 60, ease: Power2.InOut },
      "tran3"
    )
    .to(
      "#poly4ta",
      2,
      { rotation: 720, scale: 0.001, x: 50, y: 50, ease: Power2.InOut },
      "tran3"
    )
    .to(
      "#poly4tb",
      2,
      { rotation: 720, scale: 0.001, x: 0, y: 0, ease: Power2.InOut },
      "tran3"
    )
    .to(
      "#poly4tc",
      2,
      { rotation: 720, scale: 0.001, x: 50, y: 10, ease: Power2.InOut },
      "tran3"
    )
    .to(
      "#poly4td",
      2,
      { rotation: 720, scale: 0.001, x: 10, y: 60, ease: Power2.InOut },
      "tran3"
    )
    .to("#draco", 4, { scale: 3, opacity: 1 }, "trans3-=1.75")
    //.to("#draco",10,{scale:3,opacity:1,x:580,y:300},8)
    .to(
      "#draco",
      10,
      { bezier: { values: path, type: "cubic" } },
      "trans3-=1.75"
    )
    .to("#wing2", 0.5, { transformOrigin: "80% 80%" }, "trans3-=1.75")
    .to("#wing", 0.5, { transformOrigin: "100% 50%" }, "trans3-=1.75")
    .to(
      "#wing",
      0.25,
      {
        skewY: "85deg",
        repeat: 1,
        yoyo: true,
        repeatDelay: 0.25
      },
      "trans3-=1.75"
    )
    .to(
      "#wing2",
      0.25,
      {
        skewX: "-85deg",
        repeat: 1,
        yoyo: true,
        repeatDelay: 0.25
      },
      "trans3-=1.75"
    )
    .to(
      "#wing",
      0.25,
      {
        skewY: "85deg",
        repeat: 10,
        yoyo: true,
        repeatDelay: 0.25
      },
      "trans3+=.5"
    )
    .to(
      "#wing2",
      0.25,
      {
        skewX: "-85deg",
        repeat: 10,
        yoyo: true,
        repeatDelay: 0.25
      },
      "trans3+=.5"
    )
    .to(
      "#flame",
      0.25,
      { opacity: 1, repeat: 12, yoyo: true, repeatDelay: 0.25 },
      "trans3-=1.75"
    )
    .to(
      ".star",
      0.35,
      { opacity: 1, repeat: 40, yoyo: true, repeatDelay: 0.25 },
      "stars"
    )
    .to(
      ".star1",
      0.25,
      { opacity: 1, repeat: 40, yoyo: true, repeatDelay: 0.35 },
      "stars"
    )
    .to(
      ".star2",
      0.5,
      { opacity: 1, repeat: 40, yoyo: true, repearDelay: 0.15 },
      "stars"
    );
  var masterTimeline = new TimelineMax({
    onComplete: function() {
      masterTimeline.restart();
    }
  });

  masterTimeline.add(t1, t3);
});
