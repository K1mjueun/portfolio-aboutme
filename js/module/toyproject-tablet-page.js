//toyproject-tablet-page
const toyprojectTbPage = document.querySelector('#toyproject-tablet-page');
displayChange(toypjWorkProBtns.children[3],wpToyproject,toyprojectTbPage);

const toypjTbbackBtn = document.querySelector("#toyproject-tablet-page > .tablet-arrow-sticker");
const toypjTbTopBtn = document.querySelector("#toyproject-tablet-page >.tablet-top-sticker");

displayChange(toypjTbbackBtn,toyprojectTbPage,wpToyproject);
// 뒤로가기
tothetop(toypjTbTopBtn);