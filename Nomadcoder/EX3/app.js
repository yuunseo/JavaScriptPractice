const loginInput = document.querySelector("#login-form input");
const loginButton = document.querySelector("#login-form button");

function onLoginButtonClick(){
    if(loginInput.value){
        console.log("Hi~",loginInput.value); 
        console.log("You are log in!");
    }else{
        console.log("please write your name.");
    }
    
}


loginButton.addEventListener("click",onLoginButtonClick);