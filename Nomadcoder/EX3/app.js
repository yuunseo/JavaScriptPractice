const loginForm = document.querySelector("#login-form");
const loginInput = document.querySelector("#login-form input");
const link = document.querySelector("a");
const greeting = document.querySelector("#greeting");
const HIDDEN_CLASSNAME = "hidden";

function onLoginSubmit(event){
    const username = loginInput.value;
    event.preventDefault(); //form의 기본동작을 막아줌 = submit(새로고침)
    loginForm.classList.add(HIDDEN_CLASSNAME);
    greeting.innerText = "Hello~"+ username;
    greeting.innerText = `Nice to meet you, ${username}!`;

    greeting.classList.remove(HIDDEN_CLASSNAME);
    
}
function handleLinkClick(){
    alert("clicked!");
}
loginForm.addEventListener("submit",onLoginSubmit);
link.addEventListener("click",handleLinkClick);