gsap.registerPlugin(ScrollTrigger);

const mousing = () => {
  let surface = document.querySelector(".page-1");
  let circle = document.querySelector(".circle");

  surface.addEventListener("mousemove", (dets) => {
    gsap.to(circle, {
      x: dets.clientX,
      y: dets.clientY,
      opacity: 1,
      scale: 1,
    });
  });

  surface.addEventListener("mouseleave", () => {
    gsap.to(circle, {
      scale: 0,
      opacity: 0,
    });
  });
};
mousing();

document.querySelector(".menu").addEventListener("click", () => {
  document.querySelector(".hemburgerMenu").style.left = "30vw";

  gsap.from(".page-1 ul li", {
    x: 300,
    opacity: 0,
    duration: 0.5,
    stagger : 0.4 ,
    delay : 0.3 
  });
});

document
  .querySelector(".hemburgerMenu .close")
  .addEventListener("click", () => {
    document.querySelector(".hemburgerMenu").style.left = "100vw";
  });

gsap.from(".header h3", {
  y: 300,
  stagger: 0.2,
  opacity: 0,
  delay: 1,
  duration: 0.5,
  ease: "power2.out",
  scrollTrigger: {
    trigger: ".page-2",
    scroller: "body",
    start: "top 80%",
    end: "top 30%",
    scrub: 2,
  },
});

gsap.from(".page2-content", {
  y: 1000,
  stagger: 0.2,
  opacity: 0,
  delay: 1,
  duration: 0.5,
  ease: "power2.out",
  scrollTrigger: {
    trigger: ".page-2",
    scroller: "body",
    start: "top 80%",
    end: "top 30%",
    scrub: 2,
  },
});

gsap.from(".page-3 h3", {
  x: 120,
  stagger: 0.2,
  duration: 0.5,
  opacity: 0,
  ease: "power2.out",
  scrollTrigger: {
    trigger: ".page-3",
    scroller: "body",
    start: "top 40%",
    end: "top 40%",
    scrub: 2,
  },
});

gsap.from(".page-5 div", {
  y: 300,
  stagger: 0.2,
  opacity: 0,
  duration: 0.5,
  ease: "power2.out",
  scrollTrigger: {
    trigger: ".page-5",
    scroller: "body",
    start: "top 80%",
    end: "top 30%",
    scrub: 2,
  },
});

gsap.from(".page-5 span", {
  y: 1000,
  stagger: 0.2,
  opacity: 0,
  delay: 1,
  duration: 0.5,
  yoyo: true,
  ease: "power2.out",
  scrollTrigger: {
    trigger: ".page-5",
    scroller: "body",
    start: "top 80%",
    end: "top 30%",
    scrub: 2,
  },
});

let containers = document.querySelectorAll(".auto-images video");

containers.forEach((container) => {
  let video = container;

  container.addEventListener("mouseenter", () => {
    video.style.display = "block";
    video.currentTime = 0;
    video.play();
  });

  container.addEventListener("mouseleave", () => {
    video.pause();
    video.style.position = "relative";
  });
});

const container = document.querySelector(".page-6");
const cursor = document.querySelector(".cursor");

container.addEventListener("mousemove", (e) => {
  gsap.to(cursor, {
    x: e.clientX,
    y: e.clientY,
    scale: 1,
    opacity: 1,
  });
});

container.addEventListener("mouseleave", (e) => {
  gsap.to(cursor, {
    scale: 0,
    opacity: 0,
  });
});

gsap.from(".page-7 div", {
  y: 500,
  stagger: 0.2,
  opacity: 0,
  delay: 1,
  duration: 0.5,
  ease: "power2.out",
  scrollTrigger: {
    trigger: ".page-7",
    scroller: "body",
    start: "top 80%",
    end: "top 30%",
    scrub: 2,
  },
});

gsap.from(".page-7 span", {
  y: 700,
  stagger: 0.2,
  opacity: 0,
  delay: 1,
  ease: "power2.out",
  duration: 0.5,
  yoyo: true,
  scrollTrigger: {
    trigger: ".page-7",
    scroller: "body",
    start: "top 80%",
    end: "top 30%",
    scrub: 2,
  },
});

var swiper = new Swiper(".mySwiper", {
  slidesPerView: 1,
  spaceBetween: 30,
  loop: true,
  autoplay: {
    delay: 2500,
    disableOnInteraction: true,
  },
});

const timeLine = gsap.timeline();

timeLine.from(".loader h2", {
  x: 40,
  stagger: 0.4,
  opacity: 0,
  duration: 1,
  delay: 1,
});

timeLine.to(".loader", {
  opacity: 0,
  duration: 0.5,
  display: "none",
});

timeLine.from("nav div", {
  x: 100,
  duration: 1,
  opacity: 0,
  stagger: 0.5,
});

timeLine.from(".page1-content p", {
  y: 40,
  stagger: 0.2,
  duration: 1,
  opacity: 0,
});

timeLine.from(".page-1 video", {
  opacity: 0,
  duration: 1,
});

Shery.imageEffect(".back", {
  style: 5,
  config: {
    a: { value: 2, range: [0, 30] },
    b: { value: 0.75, range: [-1, 1] },
    zindex: { value: -9996999, range: [-9999999, 9999999] },
    aspect: { value: 2.1284916201117317 },
    ignoreShapeAspect: { value: true },
    shapePosition: { value: { x: 0, y: 0 } },
    shapeScale: { value: { x: 0.5, y: 0.5 } },
    shapeEdgeSoftness: { value: 0, range: [0, 0.5] },
    shapeRadius: { value: 0, range: [0, 2] },
    currentScroll: { value: 0 },
    scrollLerp: { value: 0.07 },
    gooey: { value: true },
    infiniteGooey: { value: true },
    growSize: { value: 2.39, range: [1, 15] },
    durationOut: { value: 0.81, range: [0.1, 5] },
    durationIn: { value: 0.7, range: [0.1, 5] },
    displaceAmount: { value: 0.5 },
    masker: { value: false },
    maskVal: { value: 1, range: [1, 5] },
    scrollType: { value: 0 },
    geoVertex: { range: [1, 64], value: 1 },
    noEffectGooey: { value: true },
    onMouse: { value: 0 },
    noise_speed: { value: 0.2, range: [0, 10] },
    metaball: { value: 0.15, range: [0, 2], _gsap: { id: 3 } },
    discard_threshold: { value: 0.34, range: [0, 1] },
    antialias_threshold: { value: 0.01, range: [0, 0.1] },
    noise_height: { value: 0.27, range: [0, 2] },
    noise_scale: { value: 14.5, range: [0, 100] },
  },
  gooey: true,
});
