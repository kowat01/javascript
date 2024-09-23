// // const double = (x) => {
// //   return x * 2;
// // };
// // const num = [1, 2, 3, 4, 5].map(double);
// // console.log(num);

// // const three = (x) => {
// //   return x % 2 == 1 ? x * 2 : x * 3;
// // };
// // const num1 = [1, 2, 3, 4, 5].map(three);
// // console.log(num1);

// // const fruit = (x) => {
// //   return x > 3 ? "watermelon" : "cherry";
// // };
// // const num2 = [1, 2, 3, 4, 5].map(fruit);
// // console.log(num2);

// //1. 문자의 길이가 7글자 이상이면 대문자화 아니면 소문자화
// //2. 알파벳 a가들어가면 대문자화 아니면 소문자화
// //3. 단어 안에 있는 알파벳 a를 '🍒'바꾸기
// const big = (x) => {
//   return x.length >= 7 ? x.toUpperCase() : x.toLowerCase();
// };
// const fruitarray = [
//   "watermelon",
//   "cherry",
//   "banana",
//   "abocado",
//   "apple",
//   "orange",
//   "pineapple",
//   "strawberry",
// ].map(big);

// console.log(fruitarray);

// const alp = (x) => {
//   return x.includes("a") ? x.toUpperCase(x) : x.toLowerCase(x);
// };
// const fruitarray1 = [
//   "watermelon",
//   "cherry",
//   "banana",
//   "abocado",
//   "apple",
//   "orange",
//   "pineapple",
//   "strawberry",
// ].map(alp);
// console.log(fruitarray1);

// const c = (x) => {
//   return x.replaceAll("a", "🍒");
// };
// const fruitarray2 = [
//   "watermelon",
//   "cherry",
//   "banana",
//   "abocado",
//   "apple",
//   "orange",
//   "pineapple",
//   "strawberry",
// ].map(c);

// console.log(fruitarray2);

const starbucks = [
  { name: "americano", price: 4500, shots: 2, ingredients: ["water", "beans"] },
  { name: "latte", price: 6000, shots: 2, ingredients: ["milk", "beans"] },
  {
    name: "java chip",
    price: 6500,
    shots: 2,
    ingredients: ["milk", "wheat", "beans"],
  },
  {
    name: "honey black tea",
    price: 5700,
    shots: 1,
    ingredients: ["milk", "wheat", "beans"],
  },
];
const fallsale = (x) => {
  return x.price * 0.9;
};

const sale = starbucks.map((x) => {
  x.price = x.price * 0.8;
  return x;
});
console.log(sale);

const starbucks1 = [
  { name: "americano", price: 4500, shots: 2, ingredients: ["water", "beans"] },
  { name: "latte", price: 6000, shots: 2, ingredients: ["milk", "beans"] },
  {
    name: "java chip",
    price: 6500,
    shots: 2,
    ingredients: ["milk", "wheat", "beans"],
  },
  {
    name: "honey black tea",
    price: 5700,
    shots: 1,
    ingredients: ["milk", "wheat", "beans"],
  },
];
const doyousale = starbucks1.map((x) => {
  x.ingredients.push("doyou");
  return x;
});

console.log(doyousale);
const starbucks2 = [
  { name: "americano", price: 4500, shots: 2, ingredients: ["water", "beans"] },
  { name: "latte", price: 6000, shots: 2, ingredients: ["milk", "beans"] },
  {
    name: "java chip",
    price: 6500,
    shots: 2,
    ingredients: ["milk", "wheat", "beans"],
  },
  {
    name: "honey black tea",
    price: 5700,
    shots: 1,
    ingredients: ["milk", "wheat", "beans"],
  },
];
const ahah = starbucks2.map((x) => {
  if (x.name == "americano") {
    x.price = x.price * 0.8;
    x.shot = x.shot + 1;
    return x;
  } else {
    return x;
  }
});
console.log(ahah);
const starbucks3 = [
  { name: "americano", price: 4500, shots: 2, ingredients: ["water", "beans"] },
  { name: "latte", price: 6000, shots: 2, ingredients: ["milk", "beans"] },
  {
    name: "java chip",
    price: 6500,
    shots: 2,
    ingredients: ["milk", "wheat", "beans"],
  },
  {
    name: "honey black tea",
    price: 5700,
    shots: 1,
    ingredients: ["milk", "wheat", "beans"],
  },
];
const inflation = starbucks3.map((x) => {
  x.price = x.price * 1.2;
  return x;
});
console.log(inflation);
