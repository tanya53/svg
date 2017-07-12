
$(window).on('load',function(){
  var egg = $('#egg'),
      dracoDot = $('#dracoDot'),
      poly1 = $('#poly1'),
      poly2 = $('#poly2'),
      poly3 = $('#poly3'),
      poly4 = $('#poly4'),
      tl = new TimelineLite();
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
    .to([poly1,poly2,poly3,poly4],.5,{opacity:1,ease:Power2.InOut},7)
    .to(poly1,1,{morphSVG:"#polyt1"},7)
    .to(poly2,1,{morphSVG:"#polyt2"},7)
    .to(poly3,1,{morphSVG:"#polyt3"},7)
    .to(poly4,1,{morphSVG:"#polyt4"},7)
    .to(poly1,1,{morphSVG:"#polyt1a"},8)
    .to(poly2,1,{morphSVG:"#polyt2a"},8)
    .to(poly3,1,{morphSVG:"#polyt3a"},8)
    .to(poly4,1,{morphSVG:"#polyt4a"},8)

    //shell turns opacity back and shells disappear
    .to([poly1,poly2,poly3,poly4],.5,{opacity:0.5,ease:Power2.InOut},8)
    .to(poly1,3,{scale:0.001,rotation:720,x:50,y:50,ease:Power2.easeInOut},8.5)
    .to(poly2,3,{scale:0.001,rotation:720,x:0,y:0,ease:Power2.easeInOut},8.5)
    .to(poly3,3,{scale:0.001,rotation:720,x:125,y:75,ease:Power2.easeInOut},8.5)
    .to(poly4,3,{scale:0.001,rotation:720,ease:Power2.easeInOut},8.5)
    //.to("#draco",.5,{scale:1.5,opacity:1},7.5)
    .to("#draco",10,{scale:1.5,opacity:1,x:300,y:-500},8)
    .to("#wing",10,{rotationZ:360},8)
    //.to("#draco", 5, {bezier:{type:"cubic", values:[{x:0, y:0}, {x:50, y:50}, {x:50, y:-50}, {x:100, y:80}], autoRotate:["x","y","rotation",45,false]}, ease:Power1.easeInOut},8)

    ;

});
