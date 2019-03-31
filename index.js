import {
    TweenMax,
    TimelineMax as Timeline
} from 'gsap';

TweenMax.set("#box", {
    xPercent: -50,
    yPercent: -50
});
var timeline = new Timeline();
document.addEventListener('click', ev => {
    const {
        clientX,
        clientY
    } = ev;
    timeline.to("#box", 1, {
        x: clientX,
        y: clientY,
        rotation: "+=90"
    });
});