document.addEventListener("DOMContentLoaded", () => {
  gsap.registerPlugin(SplitText, TextPlugin);

  // Target all textboxes
  const firstText = document.querySelector(".firstText");
  const split1 = new SplitText(firstText, { type: "lines,words,chars" });
  const { lines, words, chars } = split1;
  const textboxes = document.querySelectorAll(".textbox");

  let tl1 = gsap.timeline({ repeat: -1, repeatDelay: 1 });

  tl1.fromTo(
    firstText,
    {
      opacity: 0,
      y: 50,
    },
    {
      opacity: 1,
      y: 0,
      duration: 1,
      ease: "power2.out",
    }
  );
  tl1.to(
    words,
    {
      backgroundColor: "red",
      color: "#fff",
      duration: 0.8,
      stagger: 0.05,
      ease: "power1.inOut",
    },
    "+=0.3"
  );
  tl1.to(
    lines,
    {
      x: 60,
      opacity: 0,
      duration: 0.8,
      ease: "power2.in",
      stagger: 0.1,
    },
    "+=0.5"
  );

  textboxes.forEach((box, index) => {
    const split = new SplitText(box, { type: "lines,words,chars" });
    const { lines, words, chars } = split;

    const tl = gsap.timeline({ repeat: -1, repeatDelay: 1 });

    tl.fromTo(
      chars,
      {
        color: "red",
        opacity: 0.5,
        y: 30,
      },
      {
        opacity: 1,
        y: 0,
        duration: 1,
        ease: "power2.out",
        stagger: 0.03,
        color: "green",
      }
    )
      .to(
        chars,
        {
          opacity: 0,
          y: -30,
          duration: 1,
          ease: "power2.in",
          stagger: 0.03,
        },
        "+=0.1"
      )
      //   .fromTo(
      //     words,
      //     {
      //       background: "linear-gradient(to right, #00c6ff, #0072ff)",
      //       color: "#fff",
      //       padding: "0 5px",
      //       borderRadius: "5px",
      //       y: 50,
      //       opacity: 0,
      //     },
      //     {
      //       y: 0,
      //       opacity: 1,
      //       duration: 1,
      //       ease: "elastic.out(1, 0.5)",
      //       stagger: 0.5,
      //     },
      //     "+=0.5"
      //   )

      //   Animate lines (move upward with fade)
      .fromTo(
        lines,
        {
          opacity: 0.7,
          y: 50,
        },
        {
          opacity: 1,
          y: 0,
          duration: 1,
          ease: "power2.out",
          stagger: 0.2,
        },
        "+=1"
      );
  });
});
