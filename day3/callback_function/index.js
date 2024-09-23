//함수 : 마술상자
//f(x) = x+ 1;
//f(g(x)) : 마술상자안에 마술상자 넣음
//callback : 함수 안에 함수 넣기
const cook = (x) => {
  console.log("요리 시작!");
  x();
  console.log("요리 끝");
};
const mara = () => {
  console.log("마라탕 만들기");
  console.log("물 끓이기");
  console.log("재료 넣기");
  console.log("양념 넣기");
  console.log("마라탕 완성");
};
const taco = () => {
  console.log("타코 만들기");
  console.log("난 준비");
  console.log("고기 올리기");
  console.log("타코 완성");
};
const kimbab = () => {
  console.log("김밥 만들기");
  console.log("김 펴기");
  console.log("밥 넣기");
  console.log("재료넣기");
  console.log("말기");
  console.log("김밥 완성!");
};
cook(mara);
cook(taco);
cook(kimbab);
