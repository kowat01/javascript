const pizza = "cheese pizza";

const hascheese = pizza.includes("cheese");
const haspine = pizza.includes("pineapples");
const hasC = pizza.includes("c");
const hasEE = pizza.includes("ee");

const indexH = pizza.indexOf("h");
const indexB = pizza.indexOf("b");

pizza.replace("z", "k");
pizza.replaceALL("z", "k");

pizza.startsWith("pizza");
pizza.endsWith("pizza");

pizza.toUpperCase(); //대문자화
//나누기
pizza.slice(0, 4);
//나누기(배열화)
pizza.split("i");
pizza.split(" ");
//반복하기
pizza.repeat(3);
