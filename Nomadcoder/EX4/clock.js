const clock = document.querySelector("h2#clock");

function sayHello(){
    console.log("hello");
}
setInterval(sayHello,5000); //5초 간격으로 함수를 실행해라.