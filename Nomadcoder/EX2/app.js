const h1 = document.querySelector(".hello h1");

function handleTitleClick(){
    const activeClass = "active";
    if(h1.classList.contains(activeClass)){
        h1.classList.remove(activeClass);
    }else{
        h1.classList.add(activeClass);
    }
    
}
h1.addEventListener("click",handleTitleClick);