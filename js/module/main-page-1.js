// main page 1
const mainPage1 = document.querySelector("#main-page-1");

displayChange(myPhoto,startPage2,mainPage1);

const blind = document.querySelector(".blind");
const shadow1 = document.querySelector(".shadow-1");
const shadow2 = document.querySelector(".shadow-2");
const shadow3 = document.querySelector(".shadow-3");

const windieMemo = document.querySelector(".windie-memo");
const bubbleroomMemo = document.querySelector(".bubbleroom-memo");
const toypjMemo = document.querySelector(".toyproject-memo");

const bling = document.querySelector('.my-photo-mini > section:nth-child(2)');

let windieMemoWidth = 350;
let windieMemoHeight = 400;

let bubbleroomMemoWidth = 400;
let bubbleroomMemoHeight = 410;

let toypjMemoWidth = 300;
let toypjMemoHeight = 450;

mouseoverBigger(windieMemo, windieMemoWidth, windieMemoHeight);
mouseoverBigger(bubbleroomMemo, bubbleroomMemoWidth, bubbleroomMemoHeight);mouseoverBigger(toypjMemo,toypjMemoWidth, toypjMemoHeight);

mouseleaveSmaller(windieMemo, windieMemoWidth, windieMemoHeight);
mouseleaveSmaller(bubbleroomMemo, bubbleroomMemoWidth, bubbleroomMemoHeight);mouseleaveSmaller(toypjMemo,toypjMemoWidth, toypjMemoHeight);


let blingBingle = [
  {transform : 'rotate(0deg)'},
  {transform : 'rotate(360deg)'}
];

  let blingBingleTime = {
    duration:1500,
    iterations:1
  };

if(mainPage1.style.display = 'flex') {
  bling.style.display = "flex";
  if(bling.style.display = "flex") {
    setTimeout(function() {
      bling.animate(blingBingle,blingBingleTime);
    },1500);
  };
};
