//toyproject-pc-page
const toyprojectPCPage = document.querySelector('#toyproject-pc-page');
displayChange(toypjWorkProBtns.children[1],wpToyproject,toyprojectPCPage);

const toypjPCbackBtn = document.querySelector("#toyproject-pc-page >.pc-arrow-sticker");
const toypjPCTopBtn = document.querySelector("#toyproject-pc-page >.pc-top-sticker");

displayChange(toypjPCbackBtn,toyprojectPCPage,wpToyproject);
// 뒤로가기
tothetop(toypjPCTopBtn);
