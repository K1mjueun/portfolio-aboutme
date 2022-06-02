
const workProBtns = document.querySelectorAll("#work-process");

const windieProcessBtn = workProBtns[0].children[0];
const windiePCBtn = workProBtns[0].children[1];
const windieMobileBtn = workProBtns[0].children[2];
const windieTabletBtn = workProBtns[0].children[3];

const windieProPage = document.getElementById('windie-process-page');
displayChange(windieProcessBtn,wpWindie,windieProPage);