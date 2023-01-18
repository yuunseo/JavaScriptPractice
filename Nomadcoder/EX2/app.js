const h1 = document.querySelector(".hello h1");

function handleh1Click(){
    console.log("h1 was clicked!!");
    h1.style.color = "purple";
}

h1.addEventListener("click",handleh1Click);
//이벤트 리스너를 만들어서 (이벤트 종류, 이벤트 행위)
//두번째 인자로는 함수가 들어가는데, 실행시키는 것이 아니다. 주의하자!!!

function handleMouseEnter(){
    h1.innerText = "Mouse is here!!";
}

h1.addEventListener("mouseenter",handleMouseEnter);
//마우스 올리면 여깄다고 글 작성

function handleMouseLeave(){
    h1.innerText = "Mouse is Gone!!"; 
}

h1.addEventListener("mouseleave",handleMouseLeave);
//마우스 치우면 여기 없다고 글 작성

function handleWindowResize(){
    document.body.style.backgroundColor = "tomato";
}

window.addEventListener("resize",handleWindowResize);
//크기가 바뀌면, 배경 색상이 바뀜.