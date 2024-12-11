const btn0 = document.querySelector("#btn0");
const btn1 = document.querySelector("#btn1");
const btn2 = document.querySelector("#btn2");
const btn3 = document.querySelector("#btn3");
const btn4 = document.querySelector("#btn4");
const btn5 = document.querySelector("#btn5");
const audio1 = document.querySelector("#siren");
const vdo1 = document.querySelector(".vdo1");

btn0.addEventListener("click", btn00);
btn1.addEventListener("click", btn01);
btn2.addEventListener("click", btn02);
btn3.addEventListener("click", btn03);
btn4.addEventListener("click", btn04);
btn5.addEventListener("click", btn05);

function btn00() {
  btn0.style.display = "none";
  btn1.style.display = "flex";
  //   You can thank Frankie for telling me that browsers don't allow autoplay in my assignment 1 feedback
  audio1.play();
  vdo1.style.display = "none";
}

function btn01() {
  btn1.style.display = "none";
  btn2.style.display = "flex";
}

function btn02() {
  btn2.style.display = "none";
  btn3.style.display = "flex";
}

function btn03() {
  btn3.style.display = "none";
  btn4.style.display = "flex";
}

function btn04() {
  btn4.style.display = "none";
  btn5.style.display = "flex";
}

function btn05() {
  btn5.style.display = "none";
  btn1.style.display = "flex";
}
