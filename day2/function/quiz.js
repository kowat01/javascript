function hello(x) {
  return `hello ${x}님!`;
}
const x = prompt("이름을 입력하세요");
console.log(hello(x));

function ping(y) {
  return `${y}핑!`;
}
const y = prompt("이름을 입력하세요");
console.log(ping(y));

function luck(z) {
  return `${z}이라니 럭키비키잖아!`;
}
const z = prompt("상황을 입력하세요");
console.log(luck(z));

function num(a, b) {
  return a ** b;
}
const a = prompt("숫자를 입력하세요");
const b = prompt("숫자를 입력하세요");
console.log(num(a, b));

function year(c, d, e) {
  return `${c}년 ${d}월 ${e}일`;
}

const c = prompt("~년도를 입력하세요");
const d = prompt("~월을 입력하세요");
const e = prompt("~일을 입력하세요");
console.log(year(c, d, e));

function mbti(f, g, h, i) {
  const mbtimap = {
    e: "외향적",
    i: "내향적",
    s: "감각적",
    n: "직관적",
    t: "이성적",
    f: "감성적",
    j: "계획적",
    p: "즉흥적",
  };
  return `${mbtimap[f]}, ${mbtimap[g]}, ${mbtimap[h]}, ${mbtimap[i]}이시군요`;
}

const f = prompt("e,i중 하나를 입력하세요");
const g = prompt("s,n 중 하나을 입력하세요");
const h = prompt("t,f 중 하나을 입력하세요");
const i = prompt("j,p 중 하나을 입력하세요");
console.log(mbti(f, g, h, i));

function zodiac(year) {
  const animal = {
    0: "원숭이",
    1: "닭",
    2: "개",
    3: "돼지",
    4: "쥐",
    5: "소",
    6: "호랑이",
    7: "토끼",
    8: "용",
    9: "뱀",
    10: "말",
    11: "양",
  };
  return `${animal[year]}띠`;
}

const year = prompt("생년을 입력하세요");
console.log(zodiac(year));
