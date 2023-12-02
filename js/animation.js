gsap.from("#header-svg", {
    y: 200,
    duration: 1,
})
gsap.from("#scroll-down", {
    y: 20,
    duration: 0.5,
    delay: 1,
    repeat: -1,
    yoyo: true
})
gsap.from(".logo, nav ul", {
    scale: 0,
    duration: 1,
    stagger: 0.5
})

gsap.from(".banner h4", {
    x: -600,
    duration: 1
})
gsap.from(".banner h1", {
    x: 600,
    duration: 1
})

// scroll effect
gsap.from(".work-title h1", {
    y: "100%",
    opacity: 0,
    scale: 1,
    duration: 1,
    delay: 0.3,
    scrollTrigger: {
        trigger: ".work-title h1",
        scroller: "body",
        start: "0% 80%",
        end: "0% 80%",
        // markers: true,
        scrub: 1
    }
})

gsap.to(".text-animation", {
    transform: "translateX(-70%)",
    fontWeight: "bold",
    backgroundColor: "#52A496",
    color: "red",
    scrollTrigger: {
        trigger: ".text-animation",
        scrooller: "body",
        // markers: true,
        start: "top 20%",
        end: "0% -100%",
        scrub: 3,
        pin: true
    }
})