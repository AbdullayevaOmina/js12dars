document.querySelector("#on").addEventListener("click", () => {
  document.querySelector(".image").setAttribute("src", "./images/on.jpg");
});
document.querySelector("#off").addEventListener("click", () => {
  document.querySelector(".image").setAttribute("src", "./images/off.jpg");
});