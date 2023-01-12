const title = document.querySelector(".hello h1");
console.log(title);
//hello라는 class내의 h1태그인 젤 첫 element를 가져와라
//.을 쓴 이유는 CSS selector기 때문!
//class명은 앞에 .으로 class라는 것을 명시해야하고
//가져오고픈 태그명도 써줘야해!

const element = document.querySelectorAll(".hello h1");
console.log(element);
//모든 element들을 가져오고 싶으면 All로!
