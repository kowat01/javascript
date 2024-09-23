const makeCoffee = (x) => {
  console.log("커피 준비");
  x();
  console.log("커피완료");
};

const americano = () => {
  console.log("아메리카노");
};

const latte = () => {
  console.log("라떼");
};
const vanilla = () => {
  console.log("바닐라");
};

makeCoffee(americano);
makeCoffee(latte);
makeCoffee(vanilla);

makeCoffee(() => {
  console.log("원두갈기");
  console.log("샷 내리기");
  console.log("얼음을 컵에 넣기");
  console.log("망고를 컵에 추가");
  console.log("커피 넣기");
});
