const loginInput = document.querySelector("#login-form input");
const loginButton = document.querySelector("#login-form button");

function onLoginButtonClick(){
    console.dir(loginInput); //loginInput에 어떤 메소드가 있는지 확인
    console.log(loginInput.value); //loginInput의 내용을 출력해줌
    console.log("You are log in!");
}


loginButton.addEventListener("click",onLoginButtonClick);