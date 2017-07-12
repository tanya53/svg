$(window).on('load',function(){
TweenMax.to(".div1",2,{scaleY:0.75,scaleX:1.25, y:100,opacity:0.75,ease: Bounce.easeOut,y:-75});
TweenMax.staggerTo(".div2",2,{backgroundColor:"orange",rotation:90,scaleY:0.75,scaleX:1.25,y:100,opacity:0.75,ease:SineOut,y:-75},.1);
});
