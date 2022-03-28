gsap.registerPlugin(ScrollTrigger);

let waves_tl = gsap.timeline({ repeat: -1, yoyo: true });
waves_tl
    .to(".waves_1", { duration: 4, x: String(window.getComputedStyle(document.body).getPropertyValue("--wave-size") * -3) + "rem", ease: "sine.inOut" })
    .to(".waves_2", { duration: 4, x: String(window.getComputedStyle(document.body).getPropertyValue("--wave-size") * -12) + "rem", ease: "sine.inOut" }, "-=4");

let maps = gsap.utils.toArray(".full-screen");

ScrollTrigger.defaults({
    markers: false,
    scrub: 0.5,
})

let end_val = "+=80rem";

function myFunction(x) {
    if (x.matches) { // If media query matches
        console.log("small device");

    } else {
        console.log("big device");

        /////////////////////////////////////////////////////////
        //Map2
        gsap.to(".map2", {
            immediateRender: false,
            scrollTrigger: {
                trigger: ".jun-25",
                start: "top center",
                end: end_val,
            },
            autoAlpha: 1,
        });
        gsap.to(".map1", {
            immediateRender: false,
            scrollTrigger: {
                trigger: ".jun-25",
                start: "top center",
                end: end_val,
            },
            autoAlpha: 0,
        })

        /////////////////////////////////////////////////////////
        //Map3
        gsap.to(".map3", {
            immediateRender: false,
            scrollTrigger: {
                trigger: ".sep-28",
                start: "top center",
                end: end_val,
            },
            autoAlpha: 1,
        })
        gsap.to(".map2", {  
            immediateRender: false,
            scrollTrigger: {
                trigger: ".sep-28",
                start: "top center",
                end: end_val,
            },
            autoAlpha: 0,
        })


        /////////////////////////////////////////////////////////
        //Map4

        gsap.to(".map4", {  
            immediateRender: false,
            scrollTrigger: {
                trigger: ".okt-25",
                start: "top center",
                end: end_val,
            },
            autoAlpha: 1,
        })
        gsap.to(".map3", {  
            immediateRender: false,
            scrollTrigger: {
                trigger: ".okt-25",
                start: "top center",
                end: end_val,
            },
            autoAlpha: 0,
        })

        /////////////////////////////////////////////////////////
        //Map5
        gsap.to(".map5", {  
            immediateRender: false,
            scrollTrigger: {
                trigger: ".nov-25",
                start: "top center",
                end: end_val,
            },
            autoAlpha: 1,
        })
        gsap.to(".map4", {  
            immediateRender: false,
            scrollTrigger: {
                trigger: ".nov-25",
                start: "top center",
                end: end_val,
            },
            autoAlpha: 0,
        })

        /////////////////////////////////////////////////////////
        //Map6

        gsap.to(".map6", {  
            immediateRender: false,
            scrollTrigger: {
                trigger: ".feb",
                start: "top center",
                end: end_val,
            },
            autoAlpha: 1,
        })
        gsap.to(".map5", {  
            immediateRender: false,
            scrollTrigger: {
                trigger: ".feb",
                start: "top center",
                end: end_val,
            },
            autoAlpha: 0,
        })
    }
}

var x = window.matchMedia("(max-width: 700px)")
myFunction(x) // Call listener function at run time
x.addListener(myFunction) // Attach listener function on state changes

