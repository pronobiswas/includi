// window.addEventListener("DOMContentLoaded", () => {

//   let tl1 = gsap.timeline({
//     scrollTrigger: {
//       trigger: "#wayOfWorking",
//       start: "top top",
//       end: "+=3000",
//       scrub: true,
//       pin: true,
//       markers: true
//     }
//   });

//   tl1.to(".middle", {
//     rotate: 360,
//     duration: 3,
//     ease: "none"
//   });

//   tl1.to({}, {
//     duration: 3,
//     ease: "none",
//     onUpdate: function () {
//       let progress = tl1.progress();
//       let angle = progress * 360;
//       document.querySelector(".mid_ball").style.backgroundImage =
//         `conic-gradient(#ffd900 0deg ${angle}deg, rgba(255, 217, 0, 0) ${angle}deg 360deg)`;
//         document.querySelector(".hexagon_warper").style.backgroundImage =
//         `conic-gradient(#ffd900 0deg ${angle}deg, rgba(255, 217, 0, 0) ${angle}deg 360deg)`;
//     }
//   },0);

// });

// JavaScript with GSAP animation
console.log(document.querySelector(".hexagon_warper"));

let smoother;

window.addEventListener("DOMContentLoaded", () => {
  const isMobile = window.innerWidth <= 992;

  // Initialize ScrollSmoother only on desktop
  if (!isMobile) {
    smoother = ScrollSmoother.create({
      smooth: 1,
      effects: true,
      normalizeScroll: true,
    });
  }

  // Set initial transparent conic gradient
  document.querySelector(".hexagon_warper").style.backgroundImage =
    `conic-gradient(rgba(255, 217, 0, 0) 0deg 360deg)`;
  document.querySelector(".mid_ball").style.backgroundImage =
    `conic-gradient(rgba(255, 217, 0, 0) 0deg 360deg)`;

  const tl = gsap.timeline({
    scrollTrigger: {
      trigger: "#wayOfWorking",
      start: "top top",
      end: "+=5000",
      scrub: true,
      pin: true,
      markers: true,
      scroller: smoother ? smoother.wrapper() : window,
    },
  });

  tl.to({}, {
    duration: 20,
    ease: "none",
    onUpdate: function () {
      const tweenProgress = this.progress();
      let angle;

      if (tweenProgress <= 0.1) {
        angle = (tweenProgress / 0.1) * 35;
        document.querySelector(".middle").style.transform = `rotate(0deg)`;
      } else {
        angle = 35 + ((tweenProgress - 0.1) / 0.9) * (360 - 35);
        const middleAngle = ((tweenProgress - 0.1) / 0.9) * 360;
        document.querySelector(".middle").style.transform = `rotate(${middleAngle}deg)`;
      }

      document.querySelector(".mid_ball").style.backgroundImage =
        `conic-gradient(#ffd900 0deg ${angle}deg, rgba(255, 217, 0, 0) ${angle}deg 360deg)`;
      document.querySelector(".hexagon_warper").style.backgroundImage =
        `conic-gradient(#ffd900 0deg ${angle}deg, rgba(255, 217, 0, 0) ${angle}deg 360deg)`;

      const outerTexts = document.querySelectorAll(".outerText");
      if (outerTexts.length > 0) {
        const count = outerTexts.length;
        const step = 1 / count;
        let currentIdx = Math.floor(tweenProgress / step);

        outerTexts.forEach((el, i) => {
          el.classList.remove("checked", "upcoming");
          el.style.color = "rgba(255, 217, 0, 0.13)";
          el.style.transition = "all 0.2s linear";

          if (i < currentIdx) {
            el.classList.add("checked");
            el.style.color = "rgba(255, 217, 0, 0.56)";
          } else if (i === currentIdx && tweenProgress < 1) {
            el.classList.add("upcoming");
            el.style.color = "rgb(255, 217, 0)";
          }
        });
      }
    }
  });

  if (isMobile) {
    tl.to(".static_content", {
      y: "-100%",
      height: "50%",
      duration: 5,
      ease: "none",
    }, ">");

    tl.to(".innerTex", {
      opacity: 1,
      lineHeight: "1.2",
      fontSize: "30px",
      duration: 3,
      ease: "none",
    }, "-=3");
  } else {
    tl.to(".static_content", {
      x: "-100%",
      width: "100%",
      duration: 5,
      ease: "none",
    }, ">");

    tl.to(".innerTex", {
      opacity: 1,
      lineHeight: "1",
      fontSize: "56px",
      duration: 3,
      ease: "none",
      clearProps: "transform" 
    }, "-=3");
  }

  tl.to(".dyanamic_component", {
    width: "100%",
    flexGrow: 1,
    duration: 6,
    ease: "none",
  }, "-=5");

  tl.to(".hexagon_overlay", {
    backgroundColor: "black",
    opacity: 0,
    duration: 8,
    ease: "none",
  }, "-=8");

  tl.to(".outerText", {
    opacity: 0,
    duration: 5,
    ease: "none",
  }, "-=5");

  tl.to(".mid_ball", {
    backgroundColor: "black",
    opacity: 0,
    duration: 5,
    ease: "none",
  }, "-=5");

  tl.to(".hexagon_warper", {
    background: "black",
    duration: 3,
    ease: "none",
  }, "-=3");

  tl.to(".hexagon_warper", {
    scale: 4,
    duration: 2,
    ease: "none",
  }, "+=2");


  // === SplitText effect for #section_one ===
  // Make sure SplitText is loaded before this runs!
  if (typeof SplitText !== "undefined") {
    const h1 = document.querySelector("#section_one h1");
    const p = document.querySelector("#section_one .textAnimate1");

    if (h1) {
      const splitH1 = new SplitText(h1, { type: "chars" });
      gsap.from(splitH1.chars, {
        opacity: 0,
        y: -40,
        stagger: {
          amount:0.8,
          from:"center"
        },
        duration: 0.6,
        ease: "power2.out",
        delay: 0.2,
        repeat:-1,
        yoyo: true,
        repeatDelay:0.5,
      });
    }

    if (p) {
      const splitP = new SplitText(p, { type: "words,chars" });
      gsap.from(splitP.chars, {
        opacity: 0,
        y: () => gsap.utils.random(-40, 40), 
        stagger: {
          amount:0.6,
          from:"random"
        },
        duration: 0.4,
        ease: "power2.out",
        delay: 0.8,
        repeat:-1,
        repeatDelay: 0.5,
      });
    }
  } else {
    console.warn("GSAP SplitText plugin not loaded.");
  }

  ScrollTrigger.refresh();
});

// Only refresh ScrollTrigger on window resize to update measurements
window.addEventListener("resize", () => {
  ScrollTrigger.refresh();
});


// hexagon_warper
