//windie-mobile-page
const windieMbPage = document.querySelector('#windie-mobile-page');
displayChange(windieWorkProBtns.children[2],wpWindie,windieMbPage);

const windieMbbackBtn = document.querySelector("#windie-mobile-page > .mobile-arrow-sticker");
const windieMbTopBtn = document.querySelector("#windie-mobile-page >.mobile-top-sticker");

displayChange(windieMbbackBtn,windieMbPage,wpWindie);
// 뒤로가기
tothetop(windieMbTopBtn);