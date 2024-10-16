const toFahrenheit = document.getElementById("toFahrenheit");
const toCelcius = document.getElementById("toCelcius");
const output = document.getElementById("displaym");
const input = document.getElementById("InputField");
let temp;

function convert() {
  if (toCelcius.checked) {
    temp = Number(input.value);
    temp = (temp - 32) * (5 / 9);

    output.textContent = temp.toFixed(1) + "🌡C";
  } else if (toFahrenheit.checked) {
    temp = Number(input.value);
    temp = (9 / 5) * temp + 32;
    output.textContent = temp.toFixed(1) + "🌡F";
  } else {
    output.textContent = "Select a Unit";
  }
}
