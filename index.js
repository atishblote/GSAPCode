// cursor
gsap.set('.follower',{xPercent:-50,yPercent:-50});
gsap.set('.cursor',{xPercent:-50,yPercent:-50});

var follow = document.querySelector('.follower');
var cur = document.querySelector('.cursor');

window.addEventListener('mousemove',e => {
    gsap.to(cur,0.2,{x:e.clientX,y:e.clientY});
    gsap.to(follow,0.9,{x:e.clientX,y:e.clientY});
});


gsap.from(".down_button", {
  duration:2.5,
  ease: "elastic.out(1,0.3)",
  repeat: -1,
  y:-10,
  yoyo:true
});

let tl = gsap.timeline()

tl.from('.img2,.img3,.img4,.img5',{
  scale:1.1,
  opacity: 0,
  stagger: 0.2,
  x:200,
  duration: 0.8
})

tl.from("h1",{
  y:-200,
  opacity: 0,
  stagger: 0
})

tl.from(".img1",{
  opacity: 0,
  scale: 5
})
tl.to(".img1",{
  x:120,
  ease: "expoScale(0.5,7,none)",
  duration:1.5,
  scale: 1.2
})

// scroll trigger

gsap.to(".box1",{
  y: 800,
  rotate: 360,
  scale:28,
  duration: 30,
  scrollTrigger:{
    trigger: ".box1",
    scrub: 3,
    markers: true ,
    start: "top top"
  }
})

gsap.to(".box2",{
  x: 1300,
  rotate: 360,
  duration: 10,
  ease: "expoScale(0.5,7,none)",
  scrollTrigger:{
    trigger: ".box2",
    markers: true,
    scrub: 2,
    start: "top 70%"
  }
})

gsap.to(".box3",{
  y: 800,
  rotate: 360,
  scale:1.2,
  duration: 7,
  scrollTrigger:{
    trigger: ".box3",
    markers: true  ,
    scrub: 2,
    start: "top 40%"
  }
})

// gsap.to(".box3",{
//   y:400,
//   x:400,
//   rotate: 360,
//   duration:2,
//   ease: "expoScale(0.5,7,none)",
//   scrollTrigger:{
//     trigger: ".box3",
//     markers: true,
//     scrub: 2,
//     start: "top 0%"
//   }
// })


gsap.to(".scroll_card",{
  transform: "translateX(-70%)",
  scrollTrigger:{
    trigger:".scroll_card",
    scroller:"body",
    start:"top 0%",
    scrub:2,
    pin:true
  }
})
