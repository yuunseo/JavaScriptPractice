const loginInput = document.querySelector("#login-form input");
const loginButton = document.querySelector("#login-form button");

function onLoginButtonClick(){
    console.log("You are log in!");
}
loginButton.addEventListener("click",onLoginButtonClick);