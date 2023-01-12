const playerName = "yunseo";
const playerAge = "21";
//서로 다른 자료형이지만 관련된 것들을 한번에 저장하여 꺼내올 수 있게
//object로 저장해보자.

//리스트는 대괄호 []
//객체는 중괄호{}
const player = {
    name: "yunseo",
    age: 21,
    points: 100

};

//객체의 item들을 . 을 이용해 가져올 수 있다.
console.log(player.name);
console.log(player.age);

//추가도 가능
player.height = 165;
console.log(player);