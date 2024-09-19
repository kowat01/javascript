const a = Number(prompt("정사각형 한변의 길이는?"));
console.log(`정사각형의 넓이는 ${a*a}이고 둘레는${a*4}이다`)

const b = Number(prompt("정삼각형 밑변의 길이는?"));
const c = Number(prompt("정삼각형 높이의 길이는?"));
console.log(`정삼각형의 넓이는 ${b*c/2}이다`)

const d = Number(prompt("원의 반지름의 길이는?"));
console.log(`원의 넓이는 ${d*d*3.14}이고 둘레는${2*3.14*d}이다`)

const e = Number(prompt("출생년도는(ex)2000)?"));
console.log(`나이는 ${2024-e}이다`);

const f = Number(prompt("n만원을 엔화로 환전하면?"));
console.log(`현재환율은 ${f*0.11}만엔이다`);