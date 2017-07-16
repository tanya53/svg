
$(window).on('load',function(){
  var egg = $('#egg'),
      dracoDot = $('#dracoDot'),

      t2 = new TimelineLite(),
      tl = new TimelineLite();
      var path = MorphSVGPlugin.pathDataToBezier("#motionPath");

  tl
    //egg pulse out in out
    .to(egg,2,{scale:5,transformOrigin:'50% 50%',ease:Power2.easeInOut})
    .to(egg,2,{scale:.5,rotation:720,ease:Power2.easeInOut})
    .to(egg,2,{scale:7,ease:Power2.easeInOut})
    //dracodot moving inside egg
    .to(dracoDot,2,{x:10,y:10,scale:.5,transformOrigin:'0 0',ease:Power2.easeInOut},0)
    .to(dracoDot,2,{x:0,y:0,scale:1.3,ease:Power2.easeInOut},2)
    .to(dracoDot,2,{x:-8,y:-8,scale:.5,ease:Power2.easeInOut},4)
    //egg disappears so draco appears
    .to(dracoDot,1,{opacity:0,ease:Power2.easeInOut},7.5)
    //parts of shell morph at end morph triangle => circle => star
    .to(["#poly1ta","#poly1tb","#poly1tc","#poly1td",
         "#poly2ta","#poly2tb","#poly2tc","#poly2td",
         "#poly3ta","#poly3tb","#poly3tc","#poly3td",
         "#poly4ta","#poly4tb","#poly4tc","#poly4td"
         ],.5,{opacity:1,ease:Power2.InOut},7)
    .to("#poly1ta",1,{morphSVG:"#polyc1a"},7) //to circles
    .to("#poly1tb",1,{morphSVG:"#polyc1b"},7)
    .to("#poly1tc",1,{morphSVG:"#polyc1c"},7)
    .to("#poly1td",1,{morphSVG:"#polyc1d"},7)
    .to("#poly2ta",1,{morphSVG:"#polyc2a"},7)
    .to("#poly2tb",1,{morphSVG:"#polyc2b"},7)
    .to("#poly2tc",1,{morphSVG:"#polyc2c"},7)
    .to("#poly2td",1,{morphSVG:"#polyc2d"},7)
    .to("#poly3ta",1,{morphSVG:"#polyc3a"},7)
    .to("#poly3tb",1,{morphSVG:"#polyc3b"},7)
    .to("#poly3tc",1,{morphSVG:"#polyc3c"},7)
    .to("#poly3td",1,{morphSVG:"#polyc3d"},7)
    .to("#poly4ta",1,{morphSVG:"#polyc4a"},7)
    .to("#poly4tb",1,{morphSVG:"#polyc4b"},7)
    .to("#poly4tc",1,{morphSVG:"#polyc4c"},7)
    .to("#poly4td",1,{morphSVG:"#polyc4d"},7)

    .to("#poly1ta",1,{morphSVG:"#polyf1a"},8)  //to flowers
    .to("#poly1tb",1,{morphSVG:"#polyf1b"},8)
    .to("#poly1tc",1,{morphSVG:"#polyf1c"},8)
    .to("#poly1td",1,{morphSVG:"#polyf1d"},8)

    .to("#poly2ta",1,{morphSVG:"#polyf2a"},8)
    .to("#poly2tb",1,{morphSVG:"#polyf2b"},8)
    .to("#poly2tc",1,{morphSVG:"#polyf2c"},8)
    .to("#poly2td",1,{morphSVG:"#polyf2d"},8)

    .to("#poly3ta",1,{morphSVG:"#polyf3a"},8)
    .to("#poly3tb",1,{morphSVG:"#polyf3b"},8)
    .to("#poly3tc",1,{morphSVG:"#polyf3c"},8)
    .to("#poly3td",1,{morphSVG:"#polyf3d"},8)

    .to("#poly4ta",1,{morphSVG:"#polyf4a"},8)
    .to("#poly4tb",1,{morphSVG:"#polyf4b"},8)
    .to("#poly4tc",1,{morphSVG:"#polyf4c"},8)
    .to("#poly4td",1,{morphSVG:"#polyf4d"},8)

    //shell turns opacity back and shells disappear
    .to(["#poly1ta","#poly1tb","#poly1tc","#poly1td",
         "#poly2ta","#poly2tb","#poly2tc","#poly2td",
         "#poly3ta","#poly3tb","#poly3tc","#poly3td",
         "#poly4ta","#poly4tb","#poly4tc","#poly4td"],.5,{opacity:0.5,ease:Power2.InOut},8)
    .to("#poly1ta",3,{scale:0.001,x:50,y:50,ease:Power2.InOut},8.5)
    .to("#poly1tb",3,{scale:0.001,x:0,y:0,ease:Power2.InOut},8.5)
    .to("#poly1tc",3,{scale:0.001,x:50,y:10,ease:Power2.InOut},8.5)
    .to("#poly1td",3,{scale:0.001,x:10,y:60,ease:Power2.InOut},8.5)
    .to("#poly2ta",3,{scale:0.001,x:50,y:50,ease:Power2.InOut},8.5)
    .to("#poly2tb",3,{scale:0.001,x:0,y:0,ease:Power2.InOut},8.5)
    .to("#poly2tc",3,{scale:0.001,x:50,y:10,ease:Power2.InOut},8.5)
    .to("#poly2td",3,{scale:0.001,x:10,y:60,ease:Power2.InOut},8.5)
    .to("#poly3ta",3,{scale:0.001,x:50,y:50,ease:Power2.InOut},8.5)
    .to("#poly3tb",3,{scale:0.001,x:0,y:0,ease:Power2.InOut},8.5)
    .to("#poly3tc",3,{scale:0.001,x:50,y:10,ease:Power2.InOut},8.5)
    .to("#poly3td",3,{scale:0.001,x:10,y:60,ease:Power2.InOut},8.5)
    .to("#poly4ta",3,{scale:0.001,x:50,y:50,ease:Power2.InOut},8.5)
    .to("#poly4tb",3,{scale:0.001,x:0,y:0,ease:Power2.InOut},8.5)
    .to("#poly4tc",3,{scale:0.001,x:50,y:10,ease:Power2.InOut},8.5)
    .to("#poly4td",3,{scale:0.001,x:10,y:60,ease:Power2.InOut},8.5)
    .to("#draco",5,{scale:3,opacity:1},8)
    //.to("#draco",10,{scale:3,opacity:1,x:580,y:300},8)
    .to("#draco",10,{bezier:{values:path, type:"cubic"}},8)
    .to("#wing2",.5,{transformOrigin:'80% 80%'},7.5)
    .to("#wing",.5,{transformOrigin:'100% 50%'},7.5)
    .to("#wing",.25,{skewY:"85deg",repeat:12,yoyo:true,repeatDelay:0.25},8)
    .to("#wing2",.25,{skewX:"-85deg",repeat:12,yoyo:true,repeatDelay:0.25},8)
    .to("#flame",.25,{opacity:1,repeat:12,yoyo:true,repeatDelay:0.25},8)
    ;

    t2
    .to(".star",.35,{opacity:1,repeat:40,yoyo:true,repeatDelay:0.25},.5)
    .to(".star1",.25,{opacity:1,repeat:40,yoyo:true,repeatDelay:.35},.5)
    .to(".star2",.5,{opacity:1,repeat:40,yoyo:true,repearDelay:.15},.5)
    ;

});
