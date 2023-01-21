const images=[
    "00.png",
    "01.png",
    "02.png",
    "03.png"
];

const chosenImages = images[Math.floor(Math.random()*images.length)];
const bgImage = document.createElement("img");
bgImage.src = `../img/${chosenImages}`; //추가할 태그 만들기
//이제 body에 추가해주기
document.body.appendChild(bgImage);
