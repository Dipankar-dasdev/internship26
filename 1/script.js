const randomColor = function () {
  const hex = "0123456789ABCDEF";
  let color = "#";
  for (let i = 0; i < 6; i++) {
    color += hex[Math.floor(Math.random() * 16)];
  }
  return color;
};

let intervalId;
const startChangingColor = function () {
  if (!intervalId) {
    intervalId = setInterval(() => {
      document.body.style.backgroundColor = randomColor();
    }, 1000);
  }
};
const stopChangingColor = () => {
  clearInterval(intervalId);
  intervalId = null;
  document.body.style.backgroundColor = "#121212";
};

document
  .querySelector("#StartChangingBg")
  .addEventListener("click", startChangingColor);

document
  .querySelector("#StopResetBg")
  .addEventListener("click", stopChangingColor);

const addButton = document.querySelector("#AddToList");
const hobbiesList = document.querySelector(".hobbies");

addButton.addEventListener("click", () => {
  const newListItem = document.createElement("li");
  newListItem.textContent = "newHobby";
  hobbiesList.appendChild(newListItem);
});
