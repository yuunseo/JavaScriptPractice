//return으로 값을 빼내주지 않으면, undefined된 값이 로그로 출력될겨
function calculateKrAge(ageOfForeigner){
    return ageOfForeigner +2;
}

console.log(calculateKrAge(96));
calculateKrAge(24);
//즉, 리턴하는 것 != 출력
