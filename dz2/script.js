let number = 0;

const value = document.querySelector("#value");
const plusBtn = document.querySelector("#plus");
const minusBtn = document.querySelector("#minus");

plusBtn.onclick = () => {
  number++;
  value.textContent = number;
  value.style.color = "green";
};

minusBtn.onclick = () => {
  if (number > 0) {
    number--;
    value.textContent = number;
    value.style.color = "red";
  }
};

const box = document.querySelector("#box")
const coords = document.querySelector("#coords")


box.onmousemove = (event) => {
  const x = event.offsetX;
  const y = event.offsetY;
  coords.textContent = `X: ${x}, Y: ${y}`;
};



// for commit 