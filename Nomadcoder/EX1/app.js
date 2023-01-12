//NaN인지 아닌지 확인해보자.
const age = parseInt(prompt("How old are you?"));
console.log(isNaN(age)); //정수를 입력하면 fasle, 다른건 true

//if 조건문
if(isNaN(age)){
    //괄호 안이 true일때, 동작
    console.log("Not Number");
}
else{
    //괄호 안이 false일때, 동작
    console.log("Number");
}