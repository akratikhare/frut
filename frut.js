var tl = gsap.timeline()


tl.from("#nav h1" ,{
    delay:0.6,
    y:-50,
    opacity: 0 ,
    stagger: 0.2,
})
.from("#box>#box1",{
    y:40,
    delay:0.4,
    scale:1.0,
    opacity:0 ,
   
})
.from("#box1>h1",{
    y:40,
    delay:0.4,
    scale:1.0,
    opacity:0 ,
    
})
.from("#box1>p",{
    y:40,
    delay:0.4,
    scale:1.0,
    opacity:0 ,
   
})
.from("#box1>img",{
    y:40,
    delay:0.4,
    opacity:0 ,
   rotate:45
   
})
.from("#page2>h2",{
    y:-70,
    delay:0.5,
    scale:1.0,
    opacity:0 ,
    stagger: 0.2,
})
.from("#page2>p",{
    y:-70,
    delay:0.5,
    scale:1.0,
    opacity:0 ,
    stagger: 0.2,
})
.from("#bx>.ele",{
    y:40,
    delay:0.5,
    opacity:0 ,
    scale:1.0,
    stagger: 0.2,

})
.from(".ele>img",{
    y:40,
    delay:0.5,
    opacity:0 ,
    scale:1.0,
    stagger: 0.2,
})
