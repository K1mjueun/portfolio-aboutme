// start page2
const startPage2 = document.querySelector('#start-2');
const myPhoto = document.querySelector("#start-2 > .my-photo");
const arrow1 = document.querySelector("#start-2 > .arrow-1");
const clickText2 = startPage2.children[4];

shaking(myPhoto,photoMoving,photoMovingTime);

myPhotoHide.addEventListener('click', function() {
startPage1.style.display = "none";
startPage2.style.display = "flex";
});

mouseOverLeave(myPhoto,arrow1);
mouseOverLeave(myPhoto,clickText2);