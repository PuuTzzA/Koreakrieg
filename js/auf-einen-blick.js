gsap.registerPlugin(ScrollTrigger);

let waves_tl = gsap.timeline({ repeat: -1, yoyo: true });
waves_tl
    .to(".waves_1", { duration: 4, x: String(window.getComputedStyle(document.body).getPropertyValue("--wave-size") * -3) + "rem", ease: "sine.inOut" })
    .to(".waves_2", { duration: 4, x: String(window.getComputedStyle(document.body).getPropertyValue("--wave-size") * -12) + "rem", ease: "sine.inOut" }, "-=4");
