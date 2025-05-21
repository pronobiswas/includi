console.log('joy hori');

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
  
  tl1.to(".middle", {
    rotate: 360,
    duration: 3,
    ease: "none"
  });
   
  tl1.to({}, {
    duration: 3,
    ease: "none",
    onUpdate: function () {
      let progress = tl1.progress(); // 0 to 1
      let angle = progress * 360;
      document.querySelector(".mid_ball").style.backgroundImage = 
        `conic-gradient(#ffd900 0deg ${angle}deg, rgba(255, 217, 0, 0) ${angle}deg 360deg)`;
    }
  },0);
  





});
