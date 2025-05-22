console.log('joy hori');

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
  let tl1 = gsap.timeline({
    scrollTrigger: {
      trigger: "#wayOfWorking",
      start: "top top",
      end: "+=3000",
      scrub: true,
      pin: true,
      markers: true
    }
  });

  tl1.to({}, {
    duration: 1,
    ease: "none",
    onUpdate: function () {
      let progress = tl1.progress(); // 0 to 1
      let angle;
      if (progress <= 0.1) {
        angle = (progress / 0.1) * 35;
        document.querySelector(".middle").style.transform = `rotate(0deg)`;
      } else {
        angle = 35 + ((progress - 0.1) / 0.9) * (360 - 35);
        let middleAngle = ((progress - 0.1) / 0.9) * 360;
        document.querySelector(".middle").style.transform = `rotate(${middleAngle}deg)`;
      }
      document.querySelector(".mid_ball").style.backgroundImage =
        `conic-gradient(#ffd900 0deg ${angle}deg, rgba(255, 217, 0, 0) ${angle}deg 360deg)`;
      document.querySelector(".hexagon_warper").style.backgroundImage =
        `conic-gradient(#ffd900 0deg ${angle}deg, rgba(255, 217, 0, 0) ${angle}deg 360deg)`;
    }
  });
});
