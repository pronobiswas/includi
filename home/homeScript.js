
window.addEventListener("DOMContentLoaded", () => {
    let tl = gsap.timeline();
    tl.fromTo('.textWarpper',
        { y: 50, opacity: 0 },
        { y: 0, opacity: 1, duration: 0.5, ease: "power2.out" }
    );
    // text1---y
    tl.fromTo('.text1',
        { y: -10, opacity: 0 },
        { y: 0, opacity: 1, duration: 0.5, ease: "power2.out" }
    )
    .to('.text1',
        { y: 10, opacity: 0, duration: 0.5, ease: "power2.in" },
    );
    // text7---x
    tl.fromTo('.text7',
        { x: -20, opacity: 0 },
        { x: 0, opacity: 1, duration: 0.5, ease: "power2.out" },
        "-=1"
    )
    .to('.text7',
        { x: 20, opacity: 0, duration: 0.5, ease: "power2.in" },
    );
    // text2---y
    tl.fromTo('.text2',
        { y: -10, opacity: 0 },
        { y: 0, opacity: 1, duration: 0.5, ease: "power2.out" }
    )
    .to('.text2',
        { y: 20, opacity: 0, duration: 0.5, ease: "power2.in" }
    );
    // text8---x
    tl.fromTo('.text8',
        { x: -20, opacity: 0 },
        { x: 0, opacity: 1, duration: 0.5, ease: "power2.out" },
        "-=1"
    )
    .to('.text8',
        { x: 20, opacity: 0, duration: 0.5, ease: "power2.in" }
    );
    // text3---y
    tl.fromTo('.text3',
        { y: -10, opacity: 0 },
        { y: 0, opacity: 1, duration: 0.5, ease: "power2.out" }
    )
    .to('.text3',
        { y: 10, opacity: 0, duration: 0.5, ease: "power2.in" }
    );
    // text9---x
    tl.fromTo('.text9',
        { x: -20, opacity: 0 },
        { x: 0, opacity: 1, duration: 0.5, ease: "power2.out" },
        "-=1"
    )
    .to('.text9',
        { x: 20, opacity: 0, duration: 0.5, ease: "power2.in" }
    );
    // text4---y
    tl.fromTo('.text4',
        { y: -10, opacity: 0 },
        { y: 0, opacity: 1, duration: 0.5, ease: "power2.out" }
    )
    .to('.text4',
        { y: 10, opacity: 0, duration: 0.5, ease: "power2.in" }
    );
    // text10---x
    tl.fromTo('.text10',
        { x: -20, opacity: 0 },
        { x: 0, opacity: 1, duration: 0.5, ease: "power2.out" },
        "-=1"
    )
    .to('.text10',
        { x: 20, opacity: 0, duration: 0.5, ease: "power2.in" }
    );
    // text5---y
    tl.fromTo('.text5',
        { y: -10, opacity: 0 },
        { y: 0, opacity: 1, duration: 0.5, ease: "power2.out" }
    )
    .to('.text5',
        { y: 20, opacity: 0, duration: 0.5, ease: "power2.in" }
    );
    // text11---x 
    tl.fromTo('.text11',
        { x: -20, opacity: 0 },
        { x: 0, opacity: 1, duration: 0.5, ease: "power2.out" },
        "-=1"
    )
    .to('.text11',
        { x: 20, opacity: 0, duration: 0.5, ease: "power2.in" }
    )
    .to('.starting',
        {opacity: 0, duration: 0.5, ease: "power2.in" },">"
    )
});
