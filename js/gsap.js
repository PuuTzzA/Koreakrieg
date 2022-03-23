let color_background = getComputedStyle(document.body).getPropertyValue("--color-background");
let color_north_korea = getComputedStyle(document.body).getPropertyValue("--color-north-korea");
document.getElementById("container-16-9").style.backgroundColor = color_background;

gsap.registerPlugin(ScrollTrigger);

let waves_tl = gsap.timeline({ repeat: -1, yoyo: true });
waves_tl.to(".waves_1", { duration: 4, x: String(window.getComputedStyle(document.body).getPropertyValue("--wave-size") * -3) + "rem", ease: "sine.inOut" })
    .to(".waves_2", { duration: 4, x: String(window.getComputedStyle(document.body).getPropertyValue("--wave-size") * -12) + "rem", ease: "sine.inOut" }, "-=4");

ScrollTrigger.defaults({
    markers: false,
    snap: false,
})

//var slider = document.getElementById("myRange");
//slider.oninput = function() {
//    var new_duration = (100 - this.value) * (1.5/100) + 0.5;
//    console.log(new_duration);
//    duration_value = new_duration;
//}

let scrub_value = 1;
let duration_value = 1;

/////////////////////////////////////////////////////////////////////////////////////////////////
//Remove_elements_left: duration = 2
function Remove_elements_left(element, ease) {
    let temp = gsap.timeline();

    if (ease) {
        temp
            .to(element, {
                scaleX: 2,
                letterSpacing: "5rem",
                ease: "power2.inOut",
                duration: 1,
            })
            .to(element, {
                scaleX: 1,
                duration: 1,
                ease: "power2.inOut",
            })
            .to(element, {
                letterSpacing: "2px",
                duration: 1,
                ease: "sine.inOut"
            }, "-=1")
            .to(element, {
                x: cal_width,
                duration: 2,
                ease: "power2.inOut",
            }, "-=2");
    } else {
        temp
            .to(element, {
                scaleX: 2,
                letterSpacing: "5rem",
                duration: 1,
            })
            .to(element, {
                scaleX: 1,
                duration: 1,
            })
            .to(element, {
                letterSpacing: "2px",
                duration: 1,
                ease: "sine.inOut"
            }, "-=1")
            .to(element, {
                x: cal_width,
                duration: 2,
            }, "-=2");
    }
    return temp;
}

function Remove_elements_right(element, offset) {
    let temp = gsap.timeline();

    temp
    .to(element, {
        transformOrigin: "top left",
        scaleX: 2,
        letterSpacing: "5rem",
        duration: 2,
        ease: "sine.inOut"
    })
    .to(element, {
        x: offset,
        duration: 3,
        ease: "sine.inOut",
    }, "-=2")
    .to(element, {
        transformOrigin: "top left",
        scaleX: 1,
        letterSpacing: "auto",
        duration: 2,
        ease: "sine.inOut"
    }, "-=1")

    return temp;
}

//Get_elements_right: duration = 4
function Get_elements_right(element, offset) {
    let temp = gsap.timeline();

    temp

        .to(element, {
            transformOrigin: "top left",
            scaleX: 2,
            letterSpacing: "5rem",
            duration: 2,
            ease: "sine.inOut"
        })
        .to(element, {
            scaleX: 1,
            letterSpacing: "2px",
            duration: 2,
            ease: "sine.inOut"
        })
        .from(element, {
            x: -offset,
            duration: 4,
        }, "-=4")

    return temp;
}

// Animation Seciton 1 Teilung Koreas am 38. Breitengrades

let section1_tl = gsap.timeline({
    scrollTrigger: {
        trigger: ".section-1",
        start: "top top",
        end: duration_value * 9000,
        scrub: scrub_value,
        pin: true,
        id: "section-1",
        //onUpdate: self => console.log("progress: ", self.progress),
    }
})

section1_tl
    .to("#container-16-9", {
        immediateRender: false,
        backgroundColor: color_background,
        duration: 0,
    })
    .add(Remove_elements_left(".main-title", false))
    .to(".korea-map-container-1", {
        scale: 2,
        y: "9rem",
        x: "5rem",
        transformOrigin: cal_width / 2 + "px " + cal_height / 2 + "px ",
        duration: 4,
        ease: "sine.inOut",
    }, "-=2")
    .add(Get_elements_right(".time-stamp-1945", 51500 * width_factor), "-=5")
    .from(".korea-geteilt-38bg", {
        maskPosition: -cal_width - 10,
        duration: 4,
        ease: "sine.inOut",
    }, "-=2.5")
    .add(Get_elements_right(".besatzungszonen", 28000 * width_factor), "-=4") //6.5
    .add(Remove_elements_left(".time-stamp-1945", true), "+=0.5")
    .add(Remove_elements_left(".besatzungszonen", true), ">-1.")
    .add(Get_elements_right(".time-stamp-1948", 58000 * width_factor), "-=3")
    .add(Get_elements_right(".demokratische-volksrepublik-korea", 35000 * width_factor), "-=2")
    .to(".korea-map-container-1", {
        x: "25rem",
        duration: 4,
    }, "-=4")
    .add(Get_elements_right(".republik-korea", 35000 * width_factor), "-=3")
    .to(".demokratische-volksrepublik-korea", {
        y: -cal_height,
        duration: 5,
        ease: "power1.in",
    }, "+=0.5")
    .to(".republik-korea", {
        y: -cal_height,
        duration: 5,
        ease: "power1.in",
    }, "<")
    .to(".time-stamp-1948", {
        y: -cal_height,
        duration: 5,
        ease: "power1.in",
    }, "<")
    .to(".korea-map-container-1", {
        y: -cal_height * 2.22,
        duration: 10,
        ease: "power1.in",
    }, "<")
    .to(".waves-1", {
        y: -cal_height,
        duration: 10,
        ease: "power1.in",
    }, "<")
    .to(".korea-map-container-1", {
        scale: 3,
        duration: 5,
        ease: "sine.in",
    }, "-=5")
    .fromTo("#container-16-9", {
        backgroundColor: color_background,
    },{
        immediateRender: false,
        backgroundColor: color_north_korea,
        duration: 3,
        ease: "sine.in",
    }, "-=3")
    .to(".waves-1", {
        autoAlpha: 0,
        duration: 1,
    }, "-=1")
    .to(".waves-1", {
        autoAlpha: 0,
        duration: 1,
    })


//////////////////////////////////////////////////////////////////////////////////////////
//Appear_elastic duration: 1.5,
function Appear_elastic(element) {
    let temp = gsap.timeline();

    temp.from(element, {
        autoAlpha: 0,
        scale: 0.1,
        duration: 1.5,
        ease: "back.out(1.7)",
    });

    return temp;
}

//Dissapear_elastic duration: 1.5,
function Dissapear_elastic(element) {
    let temp = gsap.timeline();

    temp.to(element, {
        autoAlpha: 0,
        scale: 0.1,
        duration: 1.5,
        ease: "back.in(1.7)",
    });

    return temp;
}

//Get_text_bottom duration: 2,
function Get_text_bottom(element) {
    let temp = gsap.timeline();

    temp
        .from(element, {
            autoAlpha: 0,
            y: cal_height,
            ease: "sine.inOut",
            duration: 2,
        });

    return temp;
}

let section2_tl = gsap.timeline({
    scrollTrigger: {
        trigger: ".section-2",
        start: "top top",
        end: "+=" + duration_value * 10000,
        scrub: scrub_value,
        pin: true,
        id: "section-2",
        //onUpdate: self => console.log("progress: ", self.progress),
    }
})

section2_tl
    .fromTo(".korea-map-container-2", {
        x: "-600rem",
        y: "50rem",
        scale: 15,
        transformOrigin: cal_width / 2 + "px " + cal_height / 2 + "px ",
    }, {
        x: "-600rem",
        y: "-50rem",
        scale: 15,
        duration: 3,
        ease: "sine.inOut",
    })
    .to("#container-16-9", {
        immediateRender: false,
        backgroundColor: color_background,
        duration: 0.5,
    }, "<")
    .to(".korea-map-container-2", {
        scale: 2,
        x: "-25rem",
        y: "-3rem",
        duration: 4,
        ease: "sine.inOut",
    })
    .from(".bis-jun-29", {
        maskPosition: "0px -7rem",
        duration: 9,
        ease: "sine.inOut",
    }, "-=4")
    .from(".timeline-invasion-1950-bg", {
        y: ((cal_height > height) ? -cal_height : -height),
        duration: 2,
        ease: "sine.inOut",
    }, "-=7")
    .add(Get_text_bottom(".jun-25"), "-=6")
    .from(".korea-map-additional", {
        autoAlpha: 0,
        duration: 1,
        ease: "sine.inOut",
    }, "-=5")
    .add(Get_text_bottom(".jun-26"), "-=3")
    .add(Appear_elastic(".location-dongducheon"), "-=2")
    .add(Appear_elastic(".location-chuncheon"), "-=1.5")
    .add(Get_text_bottom(".jun-28"), "+=0.5")
    .to(".timeline-invasion-1950-content", {
        y: "-45rem",
        duration: 8,
        ease: "power1.in",
    }, "-=8")
    .add(Dissapear_elastic(".location-dongducheon"), "-=2")
    .add(Dissapear_elastic(".location-chuncheon"), "-=1.5")
    .add(Appear_elastic(".location-seoul"), "-=0.5")
    .from(".bis-jul-6", {
        maskPosition: "0px -8.5rem",
        duration: 2,
        ease: "sine.inOut",
    })
    .add(Get_text_bottom(".jul-1"), "-=2")
    .add(Appear_elastic(".location-suwon"), "-=0.5")
    .to(".timeline-invasion-1950-content", {
        y: "-80rem",
        duration: 4,
        ease: "sine.inOut",
    }, "-=4")
    .add(Get_text_bottom(".jul-21"), "+=1")
    .add(Dissapear_elastic(".location-suwon"), "-=2")
    .add(Appear_elastic(".location-daejeon"), "-=0.5")
    .from(".bis-jul-21", {
        maskPosition: "-7rem -13.5rem",
        duration: 3,
        ease: "sine.inOut",
    }, "-=3")
    .to(".timeline-invasion-1950-content", {
        y: "-125rem",
        duration: 5,
        ease: "sine.inOut",
    }, "-=4")
    .from(".korea-map-additional", {
        transformOrigin: cal_width / 2 + "px " + cal_height / 2 + "px ",
        scale: 2,
        x: "-25rem",
        y: "-3rem",
        duration: 4,
        ease: "sine.inOut",
    }, "-=0")
    .to(".korea-map-container-2", {
        scale: 1,
        x: 0,
        y: 0,
        duration: 4,
        ease: "sine.inOut",
    }, "<")
    .to(".location-seoul", {
        top: "41rem",
        left: "121rem",
        ease: "sine.inOut",
        duration: 4,
    }, "<")
    .to(".location-daejeon", {
        top: "55rem",
        left: "129.5rem",
        ease: "sine.inOut",
        duration: 4,
    }, "<")
    .from(".bis-aug-20", {
        maskPosition: "-15rem -20rem",
        duration: 4,
        ease: "sine.inOut",
    }, "-=4")
    .from(".bis-sep-15", {
        maskPosition: "-7rem -5rem",
        duration: 4,
        ease: "sine.inOut",
    }, "-=2")
    .add(Get_text_bottom(".sep-15"), "-=4")
    .to(".timeline-invasion-1950-content", {
        y: "-167rem",
        duration: 7,
        ease: "sine.in",
    }, "-=7")
    .add(Dissapear_elastic(".location-daejeon"), "-=2")
    .add(Appear_elastic(".location-busan"), "-=0.5")

function rem_to_zahl(rem) {
    let zahl = "";
    for (i = 0; i < rem.length - 3; i++) {
        zahl += String(rem[i]);
    };
    zahl = parseInt(zahl);
    return zahl;
}

section2_tl
    .fromTo(".section-UN-intervention", {
        x: cal_width + 9 * cal_height * (10 / 1080),
    },
        {
            x: rem_to_zahl(window.getComputedStyle(document.body).getPropertyValue("--distance-1")) * cal_height * (10 / 1080) + cal_width * 0.37,
            duration: 2,
            ease: "power1.in",
        }, "+=1")

    .to(".section-UN-intervention", {
        x: 0,
        duration: 2,
        ease: "power1.out",
    })
    .to(".timeline-invasion-1950-bg", {
        x: -1 * (rem_to_zahl(window.getComputedStyle(document.body).getPropertyValue("--distance-1")) * cal_height * (10 / 1080) + cal_width * 0.37) - 2,
        duration: 2,
        ease: "power1.out",
    }, "<")
    .to(".timeline-invasion-1950-content", {
        y: "-184rem",
        duration: 6,
        ease: "sine.out",
    }, "-=6")
    .to(".timeline-invasion-1950-content", {
        y: "-184rem",
        duration: 1,
        ease: "sine.out",
    })
    .to("#container-16-9", {
        immediateRender: false,
        backgroundColor: color_background,
        duration: 0,
    })

document.getElementsByClassName("waves-left-un")[0].style.height = cal_height + "px";
// 1 rem = cal_height * (10 / 1080)

/////////////////////////////////////////////////////////////////////////////////////////////////////////
//Section-3

let section3_tl = gsap.timeline({
    scrollTrigger: {
        trigger: ".section-3",
        start: "top top",
        end: "+=" + duration_value * 25000,
        scrub: scrub_value,
        pin: true,
        id: "section-2",
        //onUpdate: self => console.log("progress: ", self.progress),
    }
})


section3_tl
    .add(Dissapear_elastic(".location-busan-2"))
    .from(".timeline-rest-bg", {
        y: -cal_height,
        duration: 1.5,
    }, "-=1.5")
    .from(".bis-sep-20", {
        maskPosition: "0rem 30rem",
        duration: 4,
    })
    .add(Appear_elastic(".location-incheon"), "-=3")
    .add(Get_text_bottom(".sep-28"), "-=3")
    .from(".bis-sep-24", {
        maskPosition: "0rem 40rem",
        duration: 4,
    }, "-=0.5")
    .from(".bis-okt-1", {
        maskPosition: "0rem 50rem",
        duration: 5,
    }, "-=2")
    .to(".timeline-rest-content", {
        y: "-20rem",
        duration: 4,
        ease: "sine.in",
    }, "-=8")
    .to(".timeline-rest-content", {
        y: "-85rem",
        duration: 3,
        ease: "sine.inOut",
    }, "-=4")
    .add(Get_text_bottom(".sep-29"), "<")
    .to(".timeline-rest-content", {
        y: "-140rem",
        duration: 2,
        ease: "sine.inOut",
    }, "-=1")
    .add(Get_text_bottom(".sep-30"), "<")
    .from(".bis-okt-7", {
        maskPosition: "0rem 50rem",
        duration: 5,
    }, "-=4")
    .from(".bis-okt-19", {
        maskPosition: "0rem 40rem",
        duration: 5,
    }, "-=2")
    .to(".timeline-rest-content", {
        y: "-190rem",
        duration: 3,
        ease: "sine.inOut",
    }, "-=4")
    .add(Get_text_bottom(".okt-19"), "-=3")
    .add(Dissapear_elastic(".location-incheon"), "-=4")
    .add(Dissapear_elastic(".location-seoul-2"), "-=3")
    .add(Appear_elastic(".location-pjöngjang"), "-=2")
    .from(".bis-okt-25", {
        maskPosition: "0rem 70rem",
        duration: 5,
    }, "-=3")
    .from(".bis-okt-31", {
        maskPosition: "0rem 30rem",
        duration: 5,
    }, "-=2")
    .from(".map-3-b", {
        autoAlpha: 0,
        duration: 0,
    }, "-=2")
    .from(".map-3-b-start", {
        maskPosition: "-70rem 0rem",
        duration: 5,
    }, "-=2")
    .set(".map-3-a", {
        autoAlpha: 0,
    })
    .add(Dissapear_elastic(".location-pjöngjang"), "-=5")
    .to(".timeline-rest-content", {
        y: "-225rem",
        duration: 6,
        ease: "power1.inOut"
    }, "-=9")
    .from(".bis-nov-4", {
        maskPosition: "0rem -30rem",
        duration: 5,
    }, "-=3")
    .to(".timeline-rest-content", {
        y: "-240rem",
        duration: 2,
        ease: "sine.inOut",
    }, "-=5")
    .add(Get_text_bottom(".okt-25"), "-=5")
    .from(".bis-nov-24", {
        maskPosition: "0rem 30rem",
        duration: 4,
    }, "-=3")
    .from(".bis-nov-28", {
        maskPosition: "0rem 30rem",
        duration: 4,
    }, "-=2.5")
    .to(".timeline-rest-content", {
        y: "-300rem",
        duration: 3,
        ease: "sine.inOut",
    }, "-=5.5")
    .add(Get_text_bottom(".nov-24"), "-=4.5")
    .from(".map-3-c", {
        autoAlpha: 0,
        duration: 0,
    }, "-=1")
    .from(".map-3-c-start", {
        maskPosition: "-70rem 0rem",
        duration: 5,
    }, "-=1")
    .set(".map-3-b", {
        autoAlpha: 0,
    })
    .from(".bis-dez-1", {
        maskPosition: "0rem -40rem",
        duration: 4,
    }, "-=2")
    .to(".timeline-rest-content", {
        y: "-340rem",
        duration: 6,
    }, "-=8.5")
    .to(".timeline-rest-content", {
        y: "-390rem",
        duration: 2,
        ease: "sine.inOut",
    }, "-=3")
    .add(Get_text_bottom(".nov-25"), "-=3")
    .from(".bis-dez-5", {
        maskPosition: "0rem -45rem",
        duration: 4,
    }, "-=1")
    .from(".bis-dez-24", {
        maskPosition: "0rem -60rem",
        duration: 4,
    }, "-=2.5")
    .to(".timeline-rest-content", {
        y: "-450rem",
        duration: 5.5,
        ease: "sine.inOut",
    }, "-=5.5")
    .add(Get_text_bottom(".dez-23"), "-=3")
    .add(Appear_elastic(".location-pjöngjang-2"), "-=3")
    .from(".bis-jan-4", {
        autoAlpha: 0,
        duration: 0,
    })
    .from(".bis-jan-4", {
        maskPosition: "0rem -25rem",
        duration: 7,
    })
    .to(".timeline-rest-content", {
        y: "-520rem",
        duration: 4,
        ease: "sine.inOut",
    }, "-=7")
    .add(Get_text_bottom(".jan-1"), "-=7")
    .from(".bis-jan-12", {
        autoAlpha: 0,
        duration: 0,
    }, "-=3")
    .from(".bis-jan-12", {
        maskPosition: "0rem -10rem",
        duration: 4,
    }, "-=3")
    .to(".timeline-rest-content", {
        y: "-550rem",
        duration: 2,
        ease: "sine.inOut",
    }, "-=4")
    .add(Get_text_bottom(".jan-4"), "-=6")
    .add(Dissapear_elastic(".location-pjöngjang-2"), "-=8")
    .add(Appear_elastic(".location-seoul-3"), "-=5")
    .from(".map-3-d", {
        autoAlpha: 0,
        duration: 0,
    }, "-=2")
    .from(".map-3-d-start", {
        maskPosition: "-70rem 0rem",
        duration: 5,
    }, "-=2")
    .set(".map-3-c", {
        autoAlpha: 0,
    })
    .from(".bis-feb-19", {
        autoAlpha: 0,
        duration: 0,
    }, "-=2")
    .from(".bis-feb-19", {
        maskPosition: "0rem 10rem",
        duration: 4,
    }, "-=2")
    .to(".timeline-rest-content", {
        y: "-600rem",
        duration: 4,
        ease: "sine.inOut",
    }, "-=7")
    .add(Get_text_bottom(".feb"), "-=5")
    .from(".bis-mrz-14", {
        autoAlpha: 0,
        duration: 0,
    }, "-=2.2")
    .from(".bis-mrz-14", {
        maskPosition: "0rem 15rem",
        duration: 4,
    }, "-=2.2")
    .to(".timeline-rest-content", {
        y: "-670rem",
        duration: 4,
        ease: "sine.inOut",
    }, "-=5")
    .add(Get_text_bottom(".mrz-14"), "-=4")
    .to(".timeline-rest-content", {
        y: "-720rem",
        duration: 3,
        ease: "sine.inOut",
    }, "-=1")
    .add(Get_text_bottom(".apr-11"), "-=2")
    .to(".timeline-rest-content", {
        y: "-770rem",
        duration: 3,
        ease: "sine.inOut"
    }, "-=0")
    .add(Get_text_bottom(".apr"), "-=3")
    .to(".timeline-rest-content", {
        y: "-810rem",
        duration: 3,
        ease: "sine.inOut"
    }, "-=0")
    .add(Get_text_bottom(".mai-15"), "-=3")
    .to(".timeline-rest-content", {
        y: "-850rem",
        duration: 3,
        ease: "sine.inOut"
    }, "-=0")
    .add(Get_text_bottom(".jun-14"), "-=3")
    .from(".bis-jun-14", {
        autoAlpha: 0,
        duration: 0,
    }, "-=3")
    .from(".bis-jun-14", {
        maskPosition: "0rem 15rem",
        duration: 4,
    }, "-=3")
    .from(".section-dmz",{
        autoAlpha: 0,
        duration: 0,
    })
    .from(".dmz-sk", {
        y: cal_height,
        duration: 4,
        ease: "sine.in",
    })
    .from(".dmz-nk", {
        y: -cal_height,
        duration: 4,
        ease: "sine.in",
    }, "-=4")
    .from(".dmz-bg", {
        autoAlpha: 0,
        duration: 4,
        ease: "sine.in",
    }, "-=4")
    .to(".timeline-rest-content", {
        y: "-900rem",
        duration: 4,
        ease: "sine.inOut"
    }, "-=5")
    .add(Get_elements_right(".jul-10", 35000 * width_factor))
    .add(Appear_elastic(".location-kaesong"), "-=1.5")
    .add(Get_elements_right(".okt", -2000 * width_factor))
    .add(Appear_elastic(".location-panmunjom"), "-=1.5")
    .add(Remove_elements_left(".jul-10", true), "+=1")
    .add(Get_elements_right(".verhandlungen-1", 40000 * width_factor), "-=3")
    .add(Remove_elements_right(".okt", -12000 * width_factor), "+=1")
    .add(Get_elements_right(".verhandlungen-2", -3000 * width_factor), "-=4")
    .add(Remove_elements_left(".verhandlungen-1", true), "+=1")
    .add(Get_elements_right(".verhandlungen-3", 45000 * width_factor), "-=3")
    .add(Remove_elements_right(".verhandlungen-2", -12000), "+=1")
    .add(Get_elements_right(".verhandlungen-4", -3000), "-=4")
    .from(".dmz",{
        maskPosition: -cal_width,
        duration: 5,
    }, "-=3")
    .add(Dissapear_elastic(".location-kaesong"), "-=5")
    .add(Dissapear_elastic(".location-panmunjom"),"-=4")
    .to(".dmz-sk", {
        y: cal_height,
        scale: 2,
        duration: 4,
        ease: "sine.in",
    })
    .to(".dmz", {
        y: cal_height,
        scale: 2,
        duration: 4,
        ease: "sine.in",
    }, "-=4")
    .to(".dmz", {
        autoAlpha: 0,
        duration: 2,
    }, "-=4")
    .to(".dmz-nk", {
        y: -cal_height*1.2,
        scale: 2,
        duration: 4,
        ease: "sine.in",
    }, "-=4")
    .to(".verhandlungen-3", {
        y: -cal_height*2,
        x: "-100rem",
        duration: 4,
        ease: "sine.in",
    }, "-=4")
    .to(".verhandlungen-4", {
        y: cal_height*2,
        x: "100rem",
        duration: 4,
        ease: "sine.in",
    }, "-=4")
    .to(".dmz",{
        autoAlpha: 0,
        duration: 1,
    })
    .to("#container-16-9", {
        immediateRender: false,
        backgroundColor: color_background,
        duration: 0,
    })

////////////////////////////////////////////////////////////////////////////////////////////////////////
//Section 4 casualties

document.getElementsByClassName("section-4")[0].style.height = cal_height + "px";

function animate_show(object, timeline) {
    document.getElementsByClassName(object)[0].style.width = cal_width + "px";

    for (var index = 1; index < 226; index++) {
        if (index != 1) {
            if (index == 155) {
                timeline.from("." + "img-" + index, {
                    autoAlpha: 0,
                }, "+=15")
            } else {
                timeline.from("." + "img-" + index, {
                    autoAlpha: 0,
                }, "+=1")
            }
        }
    }
}

let section4_tl = gsap.timeline({
    scrollTrigger: {
        trigger: ".section-4",
        start: "top top",
        end: "+=" + duration_value * 8000,
        scrub: scrub_value,
        pin: true,
        id: "casualties",
        //onUpdate: self => console.log(self.progress),
    }
});

let infos = gsap.utils.toArray(".infos");
infos.forEach((element, index) => {
    let temp = gsap.timeline();
    temp
        .from(element, {
            autoAlpha: 0,
            duration: 30,
        })
        .to(element, {
            autoAlpha: 0,
            duration: 30,
        }, "+=30")
    section4_tl.add(temp);
})

section4_tl
    .from(".casualties-img", {
        autoAlpha: 0,
        duration: 30,
    })
animate_show("casualties-img", section4_tl);
section4_tl
    .to(".section-4", {
        autoAlpha: 0,
        duration: 30,
    }, "+=15")
    .to(".section-4", {
        autoAlpha: 0,
        duration: 10,
    })
    .to("#container-16-9", {
        immediateRender: false,
        backgroundColor: color_background,
        duration: 0,
    })
