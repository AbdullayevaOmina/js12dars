let form = document.querySelector("form");
let ul = document.querySelector("ul");
form.addEventListener("submit", (e) => {
  e.preventDefault();
  let input = e.target[0];
  let text = input.value;
  if (!text) {
    return;
  }
  ul.innerHTML += "<li>" + text + "</li>";
  e.target.reset();
});
