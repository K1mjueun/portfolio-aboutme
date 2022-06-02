// windie-process-page
const workProBtns = document.querySelectorAll("#work-process");

const windieProcessBtn = workProBtns[0].children[0];
const windiePCBtn = workProBtns[0].children[1];
const windieMobileBtn = workProBtns[0].children[2];
const windieTabletBtn = workProBtns[0].children[3];

const windieProPage = document.getElementById('windie-process-page');
displayChange(windieProcessBtn,wpWindie,windieProPage);
const ProbackBtn = document.querySelectorAll(".process-arrow-sticker");
displayChange(ProbackBtn[0],windieProPage,wpWindie);
// 뒤로가기

const topBtn = document.querySelectorAll(".top-sticker");
tothetop(topBtn[0]);

console.log(ProbackBtn);
console.log(ProbackBtn[0]);
console.log(ProbackBtn[1]);
console.log(ProbackBtn[2]);
console.log(topBtn);

// 쿼리셀렉터로 한번에 잡아서 제어하려고 했더니 아주 꼬여서 다시해야된다. 그냥 따로따로 하자!!