const title = document.querySelector(".hello h1");

function handleTitleClick(){
    console.log("title was clicked!!");
    title.style.color = "purple";
}

title.addEventListener("click",handleTitleClick);
//이벤트 리스너를 만들어서 (이벤트 종류, 이벤트 행위)
//두번째 인자로는 함수가 들어가는데, 실행시키는 것이 아니다. 주의하자!!!
