const body = document.getElementById("gradient");
const color1 = document.querySelector(".color1");
const color2 = document.querySelector(".color2");
const css = document.querySelector("h3");
const randomBtn = document.querySelector(".random-btn");

const setGradient = function () {
  console.log(color1.value);
  const gradient =
    (body.style.background = `linear-gradient(to right, ${color1.value}, ${color2.value})`);

  css.textContent = gradient;

  // set button color to the generated color
  randomBtn.style.background = gradient;
};

// generate random number between 0 and 255
const randomNumber = () => {
  return Math.floor(Math.random() * 255) + 1;
};

// Generate radm numbers for RBG vlaues of both color inputs
const generateNumber = function () {
  r1 = randomNumber();
  g1 = randomNumber();
  b1 = randomNumber();
  r2 = randomNumber();
  g2 = randomNumber();
  b2 = randomNumber();

  // compute generated color linear gradient
  const generatedGradient =
    (body.style.background = `linear-gradient(to right, rgb(${r1},${g1},${b1}),rgb(${r2},${g2},${b2}) )`);
  css.textContent = generatedGradient;
  // set button color to the generated color
  randomBtn.style.background = generatedGradient;
  color1.value = `rgb(${r1},${g1},${b1})`;
  color2.value = `rgb(${r1},${g1},${b1})`;
};

// Event Listeners
color1.addEventListener("input", setGradient);
color2.addEventListener("input", setGradient);
randomBtn.addEventListener("click", generateNumber);

//set gradiennt upon first page load
window.onload = setGradient();
