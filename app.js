// Тоглогчийн ээлжийг хадгалах хувьсагч8 1
var activePlayer = 1;

// Тоглогчийн цуглуулсан оноог хадгалах хувьсагч
var scores = [0, 0];

// Тоглогчийн ээлжиндээ цуглуулж байгаа оноог хадгалах хувьсагч
var roundScore = 0;
// Шооны аль талаараа буусныг хадгалах хувьсагч хэрэгтэй. 1-6 гэсэн утгыг энэ хувьсагчид

var dice = Math.floor(Math.random() * 6) + 1;

document.querySelector("#score-0").textContent = 0;
document.querySelector("#score-1").textContent = 0;

document.querySelector("#current-0").textContent = 0;
document.querySelector("#current-1").textContent = 0;

document.querySelector(".dice").style.display = "none";

console.log("Шоо :" + dice);
