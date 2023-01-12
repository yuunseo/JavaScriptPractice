function sayHello(nameOfPerson){
    console.log("Hello!",nameOfPerson);
}

sayHello("yunseo");
sayHello("yundong");
sayHello("yunnam");
sayHello("yunbook");

//함수를 정의하고 사용하는 방법과
//함수의 매개변수(인자)를 전달하는 방법
//괄호에 값을 넣어 함수에 전달하여 실행하자.

const player ={
    name: "yunseo",
    sayBye: function(name){
        console.log("Bye!",name);
    }
};
//객체 내에도 함수를 정의할 수 있다.
//괄호의 사용 방식은 동일하다.

console.log(player.name);
player.sayBye(player.name);