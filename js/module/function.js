
let photoMoving = [
  { transform: 'rotate(-3deg)'},
  { transform: 'rotate(3deg)'},
  { transform: 'rotate(-3deg)'}
];
  let photoMovingTime = {
    duration: 1500,
    iterations: Infinity
  };
  //사진 흔들거리는 효과

  function shaking (eventtarget, animation, time) {
  setInterval(function(){  
  eventtarget.animate(animation, time);
  },1500);
  };
  //사진 흔들거리는 효과

function mouseOverLeave(element,eventtarget) {
  element.addEventListener('mouseover', function() {
    eventtarget.style.display = "flex";
  });
  element.addEventListener('mouseleave', function() {
    eventtarget.style.display = "none";
  });
};
//mouseover, mouseleave 했을 때 display 효과

let displayAppear = [
  {opacity: 0.7},
  {opacity: 0.8},
  {opacity: 0.9},
  {opacity: 1},
];

  let displayChangeTime = {
    duration: 500,
    iterations: 1
  };
  //화면 전환 애니메이션

  function displayChange(element, disappearTarget, appearTarget) {
    element.addEventListener('click', function() {
      disappearTarget.style.display = "none";
      appearTarget.style.display = "flex";
      appearTarget.animate(displayAppear,displayChangeTime);
      appearTarget.style.opacity = 1;
    });
  };
  //화면 전환 함수

