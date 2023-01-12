//프롬프트
const age = prompt("How old are you?");
console.log(age);

//프롬프트로 받은 것은 string이기 때문에 재사용시, 형변환 가능.
console.log(typeof age);
console.log(typeof parseInt(age));