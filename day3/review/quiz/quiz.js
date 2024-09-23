//1. 어떤 숫자를 넣으면 홀수인지 짝수인지 돌려주는 함수
//2. 어떤 숫자를 넣으면 5배수이면 5의배수 아니면 5의 배수가 아님을 알려주는 함수
//3. 어떤 숫자를 넣으면 1- 일반팝콘, 2-카라멜 팝콘, 3- 치즈팝콘, 그외 그런거 없음 돌려주는 함수
//4. 어떠한 문자열을 3개 넣으면 배열로 돌려주는 함수 ex) 사탕, 떡볶이,멜론 ->[사탕,떡볶이,멜론]
const a = prompt("숫자를 입력하세요");
function oddEven(a) {
  return a % 2 == 1 ? "홀수" : "짝수";
}

const b = prompt("숫자를 입력하세요");
function isFiveTime(b) {
  return b % 5 == 0 ? "5의 배수" : "5의 배수 아님";
}
const c = prompt(
  "1- 일반팝콘, 2-카라멜 팝콘, 3- 치즈팝콘중 원하는걸 선택하세요"
);
function popcorn(c) {
  if (c == 1) {
    return "일반팝콘";
  } else if (c == 2) {
    return "카라멜 팝콘";
  } else if (c == 3) {
    return "치즈 팝콘";
  } else {
    return "없는 물품";
  }
}

function list(x, y, z) {
  return [x, y, z];
}

const x = prompt("음식을 입력해주세요");
const y = prompt("음식를 입력해주세요");
const z = prompt("음식를 입력해주세요");
console.log(list(x, y, z));

//어떠한 과일 이름을 넣으면 ~맛 아이스크림을 돌려주는 함수
function ice(i) {
  return `${i}맛 아이스크림`;
}
const i = prompt("과일 이름을 적어주세요");

function fruit(l, m, n) {
  return [l, m, n];
}

function oddEven1(x) {
  return x % 2 == 1;
}
