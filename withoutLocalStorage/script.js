const input = document.querySelector("input"),
h2 = document.querySelector("h2");

input.addEventListener("keyup", display);

function display() {
    h2.innerHTML = input.value;
}