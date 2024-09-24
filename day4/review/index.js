//[10,20,30,40,50]을 30 이하이면 100+, 아니면 200+
//["americano","latte","vanilla","mocha","mint","tea"]
// 5글자 이하이면 대문자화, 아니면 '☕'로 바꾸기

const num = [10, 20, 30, 40, 50];

const array = (x) => {
  return x <= 30 ? x + 100 : x + 200;
};
console.log(num.map(array));

const coffee = ["americano", "latte", "vanilla", "mocha", "mint", "tea"];
const word = (x) => {
  return x.length <= 5 ? x.toUpperCase() : "☕";
};
console.log(coffee.map(word));

const add = (x, y) => {
  return x + y;
};
const sub = (x, y) => x - y;

const mul = (x, y) => {
  const a = "123";
  return x * y;
};
