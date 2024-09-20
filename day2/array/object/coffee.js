
const ediya = [{
    korName :"(L)달달커피",
    engName :"(L)Mixed coffee",
    exp : "살 찌는 커피",
    kcal : 277,
    protein : 2,
    na : 39,
    sugar: 20,
    fat:9,
    caffein : 236,
    allergy:["우유"]


},{
    korName :"팥인절미 1인빙수",
    engName :"red bean Injeolmi",
    exp : "팥빙수",
    kcal : 569,
    protein : 11,
    na : 218,
    sugar: 53,
    fat:6,
    caffein : 0,
    allergy:["우유","대두"]
}];





//div 태그 만듬
const tag = document.createElement("div");
//div 태그에 오른쪽 내용을 넣겠다
tag.innerHTML = `
    <h4 style="font=size:30px">${ediya[0].korName}</h4>
    <P style="color:grey">${ediya[0].exp}</P>
    <span>${ediya[0].kcal > 250 ? "살찜":"살안찜"} kcal</span>



`;

//body 태그에 div 태그를 넣겠다
document.body.appendChild(tag);