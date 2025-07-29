var crsr = document.querySelector("#cursor")
var blur = document.querySelector("#cursor-blur")

document.addEventListener("mousemove",function(dets){
    crsr.style.left = dets.x + 20 + "px"
    crsr.style.top = dets.y + "px"
    blur.style.left = dets.x - 100 + "px"
    blur.style.top = dets.y - 100 + "px"
})

var h4all = document.querySelectorAll("#nav h4")
h4all.forEach(function(elem){
    elem.addEventListener("mouseenter",function(){
        crsr.style.scale = 3
        crsr.style.border = "2px solid #ffff"
        crsr.style.backgroundColor = "transparent"
    })
})

var h4all = document.querySelectorAll("#nav h4")
h4all.forEach(function(elem){
    elem.addEventListener("mouseleave",function(){
        crsr.style.scale = 1
        crsr.style.border = "0px solid #95C11E"
        crsr.style.backgroundColor = "#95C11E"
    })
})

gsap.to("#nav", {
    backgroundColor : "#808080",
    duratrion: 0.9,
    height: "60px",
    opesity: 0.2,
    scrollTrigger: {
        trigger: "#nav",
        scroller:"body",
        // markers: true,
        start: "top -10%",
        end: "top -11%",
        scrub: 1,
    }
})    

gsap.to("#main", {
    backgroundColor : "#000",
    scrollTrigger: {
        trigger: "#main",
        scroller: "body",
        // markers: true,
        start: "top -50%",
        end: " end -80vh",
        scrub: 2,
    }
})

gsap.from("#about-us img, #about-us-in",{
    y:50,
    opacity: 0,
    duration: 1,
    // stagger: 0.2,
    scrollTrigger: {
        trigger: "#about-us",
        scroller: "body",
        // markers: true,
        start: "top 70%",
        end: "top 65%",
        scrub: 1,
    }
})

gsap.from("#card1, #card2, #card3",{
    scale:0.8,
    y: 50,
    opacity: 0,
    duration: 0.5,
    stagger: 0.2,
    scrollTrigger: {
        trigger: "#cards-container",
        scroller: "body",
        // markers: false,
        start: "top 70%",
        end: "top 65%",
        scrub: 1,
    }
})

gsap.from("#colon1",{
    y: -70,
    x: -70,
    scrollTrigger: {
        trigger: "#colon1",
        scroller: "body",
        // markers: true,
        start: "top 55%",
        end: "top 45%",
        scrub: 1,
    }
})

gsap.from("#colon2",{
    y: 70,
    x: 70,
    scrollTrigger: {
        trigger: "#colon1",
        scroller: "body",
        // markers: true,
        start: "top 55%",
        end: "top 45%",
        scrub: 1,
    }
})

gsap.from("#page4 h1",{
    y: 50,
    scrollTrigger: {
        trigger: "#page4 h1",
        scroller: "body",
        // markers: true,
        start: "top 75%",
        end: "top 70%",
        scrub: 3,
    }
})
