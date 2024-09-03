VANTA.BIRDS({
  el: ".birds",
  mouseControls: true,
  touchControls: true,
  gyroControls: true,
  minHeight: 200.0,
  minWidth: 200.0,
  scale: 1.0,
  scaleMobile: 1.0,
  color2: 0xff00f0,
  backgroundAlpha: 0.0,
  quantity: 2,
  alignment: 80.0,
  wingSpan: 40.0,
  sparation: 100.0,
});

setTimeout(() =>{
  document.querySelector("header").style.opacity = "100";
  document.querySelector(".buttons").style.opacity = "100";
}, 100);
