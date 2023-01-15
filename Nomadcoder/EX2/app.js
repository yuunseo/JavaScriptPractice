const title = document.querySelector(".hello h1");

function handleTitleClick(){
    console.log("title was clicked!!");
    title.style.color = "purple";
}

title.addEventListener("click",handleTitleClick);
//이벤트 리스너를 만들어서 (이벤트 종류, 이벤트 행위)
//두번째 인자로는 함수가 들어가는데, 실행시키는 것이 아니다. 주의하자!!!

function handleMouseEnter(){
    title.innerText = "Mouse is here!!";
}

title.addEventListener("mouseenter",handleMouseEnter);
//마우스 올리면 여깄다고 글 작성

function handleMouseLeave(){
    title.innerText = "Mouse is Gone!!";
}

title.addEventListener("mouseleave",handleMouseLeave);
//마우스 치우면 여기 없다고 글 작성