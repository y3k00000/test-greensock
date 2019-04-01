import { TweenMax, TimelineMax as Timeline } from "gsap";

TweenMax.set("#box", {
  xPercent: -50,
  yPercent: -50
});
var timeline = new Timeline();
var callbackIndex = 0;

document.addEventListener("click", ev => {
  console.log("callbackIndex=" + callbackIndex);
  const { clientX, clientY } = ev;
  timeline.to("#box", 1, {
    x: clientX,
    y: clientY,
    rotation: "+=90"
  });
  timeline.addCallback(function() {
    console.log("callback!!", (callbackIndex = callbackIndex + 1), arguments);
  });
});

document.querySelector("#box").addEventListener("click", ev => {
  TweenMax.killTweensOf(ev.target);
});