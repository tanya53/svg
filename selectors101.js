$(window).on('load',function(){
  function onStart(){
    console.log("we started the h2 animation");
  }
  function onUpdate(){
    h2.text(i++
    )
  }
  function onComplete(){
    console.log("animation complete");
  }
 var header = $('h1'),
     intro = $('.intro'),
     firstItem = $("li:first-child"),
     secondItem = $('li:nth-child(2)'),
     lastItem = $('li:nth-child(3)'),
     dot = $('.dot'),
     loader = $('#loader'),
     tlLoader = new TimelineMax({repeat:3,onComplete:loadContent}),
     buttons = $('button');
     h2 = $('h2');
     i=0;
     tl = new TimelineMax({paused:true});

     tlLoader
      .staggerFromTo(dot,0.3,
      {y:0,autoAlpha:0},
      {y:20,autoAlpha:1,ease:Back.easeInOut},
      0.05)
      .fromTo(loader,0.3,
      {autoAlpha:1,scale:1.3},
      {autoAlpha:0,scale:1, ease:Power0.easeNone},
      0.9)

      function loadContent(){
        var tlLoaderOut = new TimelineMax({onComplete:contentIn});
        tlLoaderOut
        .set(dot,{backgroundColor:"blue"})
        .to(loader,0.3,{autoAlpha:1,scale:1.3,ease:Power0.easeNone})
        .staggerFromTo(dot,0.3,
        {y:0,autoAlpha:0},
        {y:20,autoAlpha:1,ease:Back.easeInOut},
        0.05,0)
        .to(loader,0.3,{y:-300,autoAlpha:0,ease:Back.easeIn},'+=0.3')
      }
      function contentIn(){
        tl.play();
      }
     //animation with labels, labeled ones start at the sametime can add time to the label "intor+=3"

     tl
      .staggerFrom(buttons,0.2,{cycle:{
                 x:[50,-50],
                 scale:[2,0.5]}
              ,ease:Power1.easeOut},0.1)
      .from(intro,3,{autoAlpha:0,x:200,width:100,ease:Bounce.easeOut})
        .add('header')
        .from(header,3,{autoAlpha:0,opacity:0,y:50,ease:Power1.easeIn})
        .fromTo(firstItem,3,{autoAlpha:0,color:"green",x:100},{x:10,color:"blue",ease:Power3.easeOut})
        .set(lastItem,{x:300,y:200})
        .from(secondItem,3,{autoAlpha:0,color:"purple"})
        .from(h2,3,{autoAlpha:0,delay:1,onStart:onStart,onUpdate:onUpdate,onComplete:onComplete},'intro')

        //also have .staggerFromTo and .staggerTo
        //.staggerFrom(buttons,0.2,{x:200,ease:Power1.easeOut},0.1);


    console.log("the timeline is puased");
    $('.btnPlay').on('click',function(){
      console.log("clicked play");
      tl.play()});
    $('.btnPause').on('click',function(){
        tl.pause()});
    $('.btnResume').on('click',function(){
      tl.resume();
    });
    $('.btnReverse').on('click',function(){
      tl.reverse();
    });
    $('.btnSpeedUp').on('click',function(){
      tl.timeScale(8); //8 times as fase, scale factor
    });
    $('.btnSlowDown').on('click',function(){
      tl.timeScale(-8);
    });
    $('.btnSeek').on('click',function(){

      tl.seek(1); //go on second in, absolute position, can be a label
    });
    $('.btnProgress').on('click',function(){
      tl.progress(0.5); // 50% in
    });
    $('.btnRestart').on('click',function(){
      tl.restart();
    });


     //animation with timeline
     //all start .15 beforethe previous one ends, prevents gaps, smoother flow
     //tl.from(intro,1,{autoAlpha:0,x:200,width:100,ease:Bounce.easeOut},'-=.15')
      //  .to(header,1,{opacity:0,y:50,ease:Power1.easeIn},'-=.15')
        //below starts 5 seconds into timeline, hardcoded value will override the order of the
        //timeline if necessary
        //.fromTo(firstItem,2,{color:"green",x:100},{x:10,color:"blue",ease:Power3.easeOut},'+=5')
        //will start 1 sec after the above one ends
        //.set(lastItem,{x:300,y:200},'+=1')
        //.from(h2,1,{autoAlpha:0,delay:1,onStart:onStart,onUpdate:onUpdate,onComplete:onComplete},'-=.15');

 //annimation without timeline
 //TweenLite.from(intro,1,{x:200,width:100,ease:Bounce.easeOut,delay:.2});
 //TweenLite.to(header,1,{opacity:0,y:50,ease:Power1.easeIn,delay:.4}); //slow to fast
 //TweenLite.fromTo(firstItem,2,{color:"green",x:100},{x:10,color:"blue",ease:Power3.easeOut,delay:.6});
 //TweenLite.to(secondItem,1,{color:"red",scale:.5,ease:RoughEase.easeIn,delay:.8});
 //TweenLite.set(lastItem,{x:300,y:200,delay:1});
 //TweenLite.from(h2,1,{autoAlpha:0,delay:1,onStart:onStart,onUpdate:onUpdate,onComplete:onComplete,delay:1.2}); //sets visibility to 0 then goes to 1
});
