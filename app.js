function page1(){

gsap.to(".one #fanta",{
    y:700,
    x:-350,
scale:0.7,
duration:1,delay:1,
scrollTrigger:{
    trigger:"#fanta",
    scroller:"body",
    // markers:true,
    start:"60% 50%",
    end:"50% -40%",
    scrub:2

}
})
gsap.to(".one #leaf",{
    y:680,
    x:-150,
scale:0.5,
duration:1,delay:1,
scrollTrigger:{
    trigger:"#fanta",
    scroller:"body",
    // markers:true,
    start:"60% 50%",
    end:"50% -40%",
    scrub:2

}
})
gsap.to(".one #orange1",{
    y:900,
    x:-190,
scale:1,
duration:1,delay:1,
scrollTrigger:{
    trigger:"#fanta",
    scroller:"body",
    // markers:true,
    start:"60% 50%",
    end:"50% -40%",
    scrub:2

}
})
gsap.to(".one #leaf2",{
    y:400,rotate:240,
    x:10,
scale:1,
duration:1,delay:1,
scrollTrigger:{
    trigger:"#fanta",
    scroller:"body",
    // markers:true,
    start:"60% 50%",
    end:"50% -40%",
    scrub:2

}
})
gsap.to(".one #leaf3",{
    y:870,rotate:380,
    x:-400,
scale:1,
duration:1,delay:1,
scrollTrigger:{
    trigger:"#fanta",
    scroller:"body",
    // markers:true,
    start:"60% 50%",
    end:"50% -40%",
    scrub:2

}
})
gsap.to(".one #orange3",{
    y:605,
    x:290,
scale:0.8,
duration:1,delay:1,
scrollTrigger:{
    trigger:"#fanta",
    scroller:"body",
    // markers:true,
    start:"60% 50%",
    end:"50% -40%",
    scrub:2

}
})

}
// page1()
function page4(){
gsap.to(".page4 h1",{
    
    x:-2900,
duration:2,
scrollTrigger:{
    trigger:".page4",
    scroller:"body",
    // markers:true,
    start:"60% 70%",
    end:"50% -40%",
    scrub:2,
    pin:true

}
})
}
function tm() {
    

var tl=gsap.timeline()
tl.from(".box1 .sprite1",{
    x:-500,opacity:0,

    scrollTrigger:{
        trigger:".box1",
        scroller:"body",
        // markers:true,
        start:"top 80%",
        end:"top 20%",
        scrub:2
    
    }
})
tl.from(".box1 #fan",{
    y:400,opacity:0,

    scrollTrigger:{
        trigger:".box1",
        scroller:"body",
        // markers:true,
        start:"top 80%",
        end:"top 20%",
        scrub:2
    
    }
})
tl.from(".box1 .coca",{
    x:300,opacity:0,

    scrollTrigger:{
        trigger:".box1",
        scroller:"body",
        // markers:true,
        start:"top 80%",
        end:"top 20%",
        scrub:2
    
    }
})
}
page1()
page4()
tm()
