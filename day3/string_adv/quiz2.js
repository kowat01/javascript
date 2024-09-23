//유저에게 비밀번호 설정을 물어보고
//비밀번호가 it,IT를 포함하면 비밀번호 설정완료! 아니면 비밀번호 설정오류

const pw = prompt("비밀번호를 설정해주세요");
const PWD = pw.includes("it");
const PWD1 = pw.includes("IT");
PWD || PWD1 ? alert("비밀번호 설정완료") : alert(`비밀번호 설정오류`);
