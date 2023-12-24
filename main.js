const body = document.querySelector("body");
const btn_color = document.querySelector(".btn_color");
const color_name = document.getElementById("color");

btn_color.addEventListener("click", changeColor);

function changeColor() {
  console.log("click");
  let red = Math.floor(Math.random() * 255);
  let blue = Math.floor(Math.random() * 255);
  let green = Math.floor(Math.random() * 255);
  let color = `rgb(${red}, ${blue}, ${green})`;
  body.style.backgroundColor = color;
  color_name.innerHTML = color;
}

// rgb(255, 255, 255);
