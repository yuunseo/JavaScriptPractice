const h1 = document.querySelector(".hello h1");

function handleh1Click(){
    
    if(h1.style.color === "purple"){
        h1.style.color = "blue";
    }else{
        h1.style.color = "purple";
    }

}

h1.addEventListener("click",handleh1Click);
