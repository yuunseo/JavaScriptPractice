const loginForm = document.querySelector("#login-form");
const loginInput = document.querySelector("#login-form input");
const link = document.querySelector("a");
const greeting = document.querySelector("#greeting");
const HIDDEN_CLASSNAME = "hidden";
const USERNAME_KEY = "username";
const savedUserName   = localStorage.getItem(USERNAME_KEY);

function onLoginSubmit(event){
    const username = loginInput.value;
    event.preventDefault(); //form의 기본동작을 막아줌 = submit(새로고침)
    loginForm.classList.add(HIDDEN_CLASSNAME);
    
    localStorage.setItem(USERNAME_KEY,username);
    paintGreetings(USERNAME_KEY);

    
}
function handleLinkClick(){
    alert("clicked!");
}
function paintGreetings(username){
    greeting.innerText = `Nice to meet you, ${username}!`;
    greeting.classList.remove(HIDDEN_CLASSNAME);
}

if(savedUserName === null){
    loginForm.classList.remove(HIDDEN_CLASSNAME);
    loginForm.addEventListener("submit",onLoginSubmit);
}else{
    paintGreetings(savedUserName);
}
