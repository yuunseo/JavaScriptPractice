const h1 = document.querySelector(".hello h1");

function handleTitleClick(){
    const activeClass = "active";
    h1.classList.toggle(activeClass)
    
}
h1.addEventListener("click",handleTitleClick);