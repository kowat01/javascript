//조건문!(조건에 맞으면 코드 실행함)
//if else 문
const num = Number(prompt("숫자입력"));

if(num > 0){
    console.log("입력한 값은 양수임");}
else if (num ==0) {
    console.log("0이다");
}
else {
    console.log("입력한 값은 음수임");
} ;

console.log("프로그램 끝");


//수학시험 점수 프로그램

const math = Number(prompt("수학 점수 입력"));
//90점 a, 80점 b, 70점c,60점 d,그외는 수강철회

if(math >= 90){
    console.log("A");}
else if (math >= 80) {
    console.log("B");
}
else if (math >= 70) {
    console.log("C");
}
else if (math >= 60) {
    console.log("D");
}
else {
    console.log("수강철회");
} ;
//숫자를 입력해서, 양의 홀수, 양의 짝수, 0, 음의 홀수, 음의 짝수 알려주기

const number = Number(prompt("숫자 입력"));

const isPositive = number > 0;
const isNegative = number < 0;
const isOdd = number % 2 == 1;
const isEven = number % 2 == 0;
if(isPositive && isOdd) {
    console.log("양의 홀수");
}
else if(isPositive && isEven){
    console.log("양의 짝수");
}
else if(isNegative && isOdd){
    console.log("음의 짝수");
}
else if (isNegative && isEven){
    console.log("음의 홀수")
} else {console.log("0");};
