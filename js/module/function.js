
let photoMoving = [
  { transform: 'rotate(-3deg)'},
  { transform: 'rotate(3deg)'},
  { transform: 'rotate(-3deg)'}
];
  let photoMovingTime = {
    duration: 1500,
    iterations: Infinity
  };

  function shaking (eventtarget, animation, time) {
  setInterval(function(){  
  eventtarget.animate(animation, time);
  },1500);
  };

function mouseOverLeave(element,eventtarget) {
  element.addEventListener('mouseover', function() {
    eventtarget.style.display = "flex";
  });
  element.addEventListener('mouseleave', function() {
    eventtarget.style.display = "none";
  });
};
