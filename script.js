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

window.addEventListener("DOMContentLoaded", () => {
  const tl = gsap.timeline({
    scrollTrigger: {
      trigger: "#wayOfWorking",
      start: "top top",
      end: "+=6000",
      scrub: true,
      pin: true,
      markers: true,
    },
  });

  // 1. Rotation animation
  tl.to(
    {},
    {
      duration: 23,
      ease: "none",
      onUpdate: function () {
        const tweenProgress = this.progress();
        const outerText = document.querySelector(".outerText");
        let angle;

        if (tweenProgress <= 0.1) {
          angle = (tweenProgress / 0.1) * 35;
          document.querySelector(".middle").style.transform = `rotate(0deg)`;
        } else {
          angle = 35 + ((tweenProgress - 0.1) / 0.9) * (360 - 35);
          const middleAngle = ((tweenProgress - 0.1) / 0.9) * 360;
          document.querySelector(
            ".middle"
          ).style.transform = `rotate(${middleAngle}deg)`;
        }

        document.querySelector(
          ".mid_ball"
        ).style.backgroundImage = `conic-gradient(#ffd900 0deg ${angle}deg, rgba(255, 217, 0, 0) ${angle}deg 360deg)`;
        document.querySelector(
          ".hexagon_warper"
        ).style.backgroundImage = `conic-gradient(#ffd900 0deg ${angle}deg, rgba(255, 217, 0, 0) ${angle}deg 360deg)`;
        // do the tect effect
        const outerTexts = document.querySelectorAll(".outerText");
        if (outerTexts.length > 0) {
          const count = outerTexts.length;
          const step = 1 / count;
          let currentIdx = Math.floor(tweenProgress / step);

          outerTexts.forEach((el, i) => {
            el.classList.remove("checked", "upcoming");
            el.style.color = "rgba(255, 217, 0, 0.54)";

            if (i < currentIdx) {
              el.classList.add("checked");
              el.style.color = "rgba(255, 217, 0, 0.78)";
            } else if (i === currentIdx && tweenProgress < 1) {
              el.classList.add("upcoming");
              el.style.color = "rgb(255, 217, 0)";
            }
          });
        }
      },
    }
  );

  // 2. Move static content out of view
  tl.to(
    ".static_content",
    {
      x: "-100%",
      width: "50%",
      duration: 5,
      ease: "none",
    },
    ">"
  );

  // 3. Expand dynamic component to full width
  tl.to(
    ".dyanamic_component",
    {
      width: "100%",
      flexGrow: 1,
      duration: 6,
      ease: "none",
    },
    "-=5"
  );
  tl.to(
    ".hexagon_overlay",
    {
      backgroundColor: "black",
      opacity: 0,
      duration: 10,
      ease: "none",
    },
    "-=20"
  );
  tl.to(
    ".outerText",
    {
      backgroundColor: "black",
      opacity: 0,
      duration: 5,
      ease: "none",
    },
    "-=5"
  );
  tl.to(
    ".mid_ball",
    {
      backgroundColor: "black",
      opacity: 0,
      duration: 5,
      ease: "none",
    },
    "-=5"
  );
  tl.to(
    ".hexagon_warper",
    {
      background: "black",
      duration: 5,
      ease: "none",
    },
    "-=5"
  );
  tl.to(
    ".hexagon_warper",
    {
      scale: "5",
      duration: 8,
      ease: "none",
    },
    "+=8"
  );
});
// hexagon_warper
