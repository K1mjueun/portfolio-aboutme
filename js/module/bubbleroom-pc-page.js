//bubbleroom-pc-page
const bubbleroomPCPage = document.querySelector('#bubbleroom-pc-page');
displayChange(bubbleroomWorkProBtns.children[1],wpBubbleroom,bubbleroomPCPage);

const bubblePCbackBtn = document.querySelector("#bubbleroom-pc-page >.pc-arrow-sticker");
const bubblePCTopBtn = document.querySelector("#bubbleroom-pc-page >.pc-top-sticker");
console.log(bubblePCbackBtn);
console.log(bubblePCTopBtn);

displayChange(bubblePCbackBtn,bubbleroomPCPage,wpBubbleroom);
// 뒤로가기
tothetop(bubblePCTopBtn);
