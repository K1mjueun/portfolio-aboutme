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


