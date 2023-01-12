const mon = "mon";
const tue = "tue";
const wed = "wed";
const thu = "thu";
const fri = "fri";
const sat = "sat";

//하나하나 쓰고 출력하기 귀찮고 번거로움.
//리스트, 즉 배열을 사용해서 저장해보자.

const daysOfWeek = [mon,tue,wed,thu,fri,sat];
console.log(daysOfWeek);

console.log(daysOfWeek[0]);
//index를 이용해서 접근 할 수 있다.

daysOfWeek.push("sun");
//.push() 메소드로 배열에 값 추가하기
console.log(daysOfWeek);