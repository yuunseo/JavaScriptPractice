const h1 = document.querySelector(".hello h1");

function handleh1Click(){

    const currentColor = h1.style.color; //const는 수정 불가능
    let newColor; //let은 수정 가능

    if(currentColor === "purple"){
        newColor = "blue";
    }else{
        newColor = "purple";
    }
   h1.style.color = newColor;
}

h1.addEventListener("click",handleh1Click);
